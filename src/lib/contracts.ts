// Contract configuration
export const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || '';

// Contract ABI - This would be generated from the compiled contract
export const CONTRACT_ABI = [
  // Events
  "event BadgeMinted(uint256 indexed badgeId, address indexed holder, string badgeType)",
  "event BadgeVerified(uint256 indexed badgeId, address indexed verifier, bool isVerified)",
  "event ReputationUpdated(address indexed user, uint32 newScore)",
  "event VerificationRequested(uint256 indexed requestId, uint256 indexed badgeId, address indexed requester)",
  
  // Functions
  "function mintSoulBadge(address holder, string memory badgeType, string memory metadataHash, bytes calldata reputationScore, bytes calldata verificationLevel, bytes calldata inputProof, uint256 expiresAt) external returns (uint256)",
  "function requestVerification(uint256 badgeId, string memory verificationData) external returns (uint256)",
  "function verifyBadge(uint256 requestId, uint256 badgeId, bytes calldata isVerified) external",
  "function updateReputation(address user, bytes calldata newScore) external",
  "function getBadgeInfo(uint256 badgeId) external view returns (string memory, string memory, uint8, uint8, bool, bool, address, address, uint256, uint256)",
  "function getUserReputation(address user) external view returns (uint8, uint8, uint8, bool, uint256)",
  "function getUserBadges(address user) external view returns (uint256[] memory)",
  "function getVerificationRequestInfo(uint256 requestId) external view returns (uint8, bool, string memory, address, uint256)",
  "function isBadgeValid(uint256 badgeId) external view returns (bool)",
  "function getBadgeCount() external view returns (uint256)",
  "function getRequestCount() external view returns (uint256)",
  "function addBadgeType(string memory badgeType) external",
  "function revokeBadge(uint256 badgeId) external",
  "function setVerifier(address _verifier) external"
] as const;

// Badge types
export const BADGE_TYPES = [
  'Identity',
  'Professional', 
  'Social',
  'Educational',
  'Financial'
] as const;

export type BadgeType = typeof BADGE_TYPES[number];

// Contract interaction helpers
export const CONTRACT_CONFIG = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: CONTRACT_ABI,
};
