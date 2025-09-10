// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SecureSoulID is SepoliaConfig {
    using FHE for *;
    
    struct SoulBadge {
        euint32 badgeId;
        euint32 reputationScore;
        euint32 verificationLevel;
        ebool isActive;
        ebool isTransferable;
        string badgeType;
        string metadataHash;
        address issuer;
        address holder;
        uint256 issuedAt;
        uint256 expiresAt;
    }
    
    struct VerificationRequest {
        euint32 requestId;
        euint32 badgeId;
        ebool isVerified;
        string verificationData;
        address verifier;
        uint256 timestamp;
    }
    
    struct ReputationData {
        euint32 totalScore;
        euint32 badgeCount;
        euint32 verificationCount;
        ebool isTrusted;
        uint256 lastUpdated;
    }
    
    mapping(uint256 => SoulBadge) public soulBadges;
    mapping(uint256 => VerificationRequest) public verificationRequests;
    mapping(address => ReputationData) public userReputation;
    mapping(address => uint256[]) public userBadges;
    mapping(string => bool) public badgeTypes;
    
    uint256 public badgeCounter;
    uint256 public requestCounter;
    
    address public owner;
    address public verifier;
    
    event BadgeMinted(uint256 indexed badgeId, address indexed holder, string badgeType);
    event BadgeVerified(uint256 indexed badgeId, address indexed verifier, bool isVerified);
    event ReputationUpdated(address indexed user, uint32 newScore);
    event VerificationRequested(uint256 indexed requestId, uint256 indexed badgeId, address indexed requester);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
        
        // Initialize supported badge types
        badgeTypes["Identity"] = true;
        badgeTypes["Professional"] = true;
        badgeTypes["Social"] = true;
        badgeTypes["Educational"] = true;
        badgeTypes["Financial"] = true;
    }
    
    function mintSoulBadge(
        address holder,
        string memory badgeType,
        string memory metadataHash,
        externalEuint32 reputationScore,
        externalEuint32 verificationLevel,
        bytes calldata inputProof,
        uint256 expiresAt
    ) public returns (uint256) {
        require(badgeTypes[badgeType], "Unsupported badge type");
        require(holder != address(0), "Invalid holder address");
        require(expiresAt > block.timestamp, "Invalid expiration time");
        
        uint256 badgeId = badgeCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalReputationScore = FHE.fromExternal(reputationScore, inputProof);
        euint32 internalVerificationLevel = FHE.fromExternal(verificationLevel, inputProof);
        
        soulBadges[badgeId] = SoulBadge({
            badgeId: FHE.asEuint32(0), // Will be set properly later
            reputationScore: internalReputationScore,
            verificationLevel: internalVerificationLevel,
            isActive: FHE.asEbool(true),
            isTransferable: FHE.asEbool(false), // Soulbound - non-transferable
            badgeType: badgeType,
            metadataHash: metadataHash,
            issuer: msg.sender,
            holder: holder,
            issuedAt: block.timestamp,
            expiresAt: expiresAt
        });
        
        userBadges[holder].push(badgeId);
        
        // Update user reputation
        _updateReputation(holder, internalReputationScore);
        
        emit BadgeMinted(badgeId, holder, badgeType);
        return badgeId;
    }
    
    function requestVerification(
        uint256 badgeId,
        string memory verificationData
    ) public returns (uint256) {
        require(soulBadges[badgeId].holder == msg.sender, "Only badge holder can request verification");
        require(soulBadges[badgeId].issuer != address(0), "Badge does not exist");
        
        uint256 requestId = requestCounter++;
        
        verificationRequests[requestId] = VerificationRequest({
            requestId: FHE.asEuint32(0), // Will be set properly later
            badgeId: FHE.asEuint32(0), // Will be set properly later
            isVerified: FHE.asEbool(false),
            verificationData: verificationData,
            verifier: address(0),
            timestamp: block.timestamp
        });
        
        emit VerificationRequested(requestId, badgeId, msg.sender);
        return requestId;
    }
    
    function verifyBadge(
        uint256 requestId,
        uint256 badgeId,
        ebool isVerified
    ) public {
        require(msg.sender == verifier, "Only verifier can verify badges");
        require(verificationRequests[requestId].timestamp > 0, "Request does not exist");
        require(soulBadges[badgeId].issuer != address(0), "Badge does not exist");
        
        verificationRequests[requestId].isVerified = isVerified;
        verificationRequests[requestId].verifier = msg.sender;
        
        // Update badge verification level if verified
        if (FHE.decrypt(isVerified)) {
            soulBadges[badgeId].verificationLevel = FHE.add(soulBadges[badgeId].verificationLevel, FHE.asEuint32(1));
        }
        
        emit BadgeVerified(badgeId, msg.sender, FHE.decrypt(isVerified));
    }
    
    function updateReputation(
        address user,
        euint32 newScore
    ) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        _updateReputation(user, newScore);
        emit ReputationUpdated(user, 0); // FHE.decrypt(newScore) - will be decrypted off-chain
    }
    
    function _updateReputation(address user, euint32 score) internal {
        ReputationData storage reputation = userReputation[user];
        
        reputation.totalScore = FHE.add(reputation.totalScore, score);
        reputation.badgeCount = FHE.add(reputation.badgeCount, FHE.asEuint32(1));
        reputation.lastUpdated = block.timestamp;
        
        // Set trusted status based on score threshold
        reputation.isTrusted = FHE.gt(reputation.totalScore, FHE.asEuint32(100));
    }
    
    function getBadgeInfo(uint256 badgeId) public view returns (
        string memory badgeType,
        string memory metadataHash,
        uint8 reputationScore,
        uint8 verificationLevel,
        bool isActive,
        bool isTransferable,
        address issuer,
        address holder,
        uint256 issuedAt,
        uint256 expiresAt
    ) {
        SoulBadge storage badge = soulBadges[badgeId];
        return (
            badge.badgeType,
            badge.metadataHash,
            0, // FHE.decrypt(badge.reputationScore) - will be decrypted off-chain
            0, // FHE.decrypt(badge.verificationLevel) - will be decrypted off-chain
            FHE.decrypt(badge.isActive),
            FHE.decrypt(badge.isTransferable),
            badge.issuer,
            badge.holder,
            badge.issuedAt,
            badge.expiresAt
        );
    }
    
    function getUserReputation(address user) public view returns (
        uint8 totalScore,
        uint8 badgeCount,
        uint8 verificationCount,
        bool isTrusted,
        uint256 lastUpdated
    ) {
        ReputationData storage reputation = userReputation[user];
        return (
            0, // FHE.decrypt(reputation.totalScore) - will be decrypted off-chain
            0, // FHE.decrypt(reputation.badgeCount) - will be decrypted off-chain
            0, // FHE.decrypt(reputation.verificationCount) - will be decrypted off-chain
            FHE.decrypt(reputation.isTrusted),
            reputation.lastUpdated
        );
    }
    
    function getUserBadges(address user) public view returns (uint256[] memory) {
        return userBadges[user];
    }
    
    function getVerificationRequestInfo(uint256 requestId) public view returns (
        uint8 badgeId,
        bool isVerified,
        string memory verificationData,
        address verifier,
        uint256 timestamp
    ) {
        VerificationRequest storage request = verificationRequests[requestId];
        return (
            0, // FHE.decrypt(request.badgeId) - will be decrypted off-chain
            FHE.decrypt(request.isVerified),
            request.verificationData,
            request.verifier,
            request.timestamp
        );
    }
    
    function addBadgeType(string memory badgeType) public {
        require(msg.sender == owner, "Only owner can add badge types");
        badgeTypes[badgeType] = true;
    }
    
    function revokeBadge(uint256 badgeId) public {
        require(
            msg.sender == soulBadges[badgeId].issuer || msg.sender == owner,
            "Only issuer or owner can revoke badge"
        );
        require(soulBadges[badgeId].issuer != address(0), "Badge does not exist");
        
        soulBadges[badgeId].isActive = FHE.asEbool(false);
    }
    
    function setVerifier(address _verifier) public {
        require(msg.sender == owner, "Only owner can set verifier");
        verifier = _verifier;
    }
    
    function isBadgeValid(uint256 badgeId) public view returns (bool) {
        SoulBadge storage badge = soulBadges[badgeId];
        return FHE.decrypt(badge.isActive) && block.timestamp <= badge.expiresAt;
    }
    
    function getBadgeCount() public view returns (uint256) {
        return badgeCounter;
    }
    
    function getRequestCount() public view returns (uint256) {
        return requestCounter;
    }
}
