# Secure Soul ID - Deployment Guide

## Overview

Secure Soul ID is a fully homomorphic encryption (FHE) powered digital identity and reputation system built on blockchain technology. This guide covers the deployment process for both the smart contract and the frontend application.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- MetaMask or compatible Web3 wallet
- WalletConnect Project ID
- Alchemy or Infura API key (for Ethereum RPC)

## Smart Contract Deployment

### 1. Environment Setup

Create a `.env` file in the root directory:

```env
# Wallet Connect Project ID
VITE_WALLETCONNECT_PROJECT_ID=your_wallet_connect_project_id

# Contract Address (will be set after deployment)
VITE_CONTRACT_ADDRESS=

# Hardhat Configuration
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=your_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key

# FHE Configuration
VITE_FHE_NETWORK_URL=https://api.zama.ai/fhevm
VITE_FHE_CHAIN_ID=0x4268
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile Contract

```bash
npm run compile
```

### 4. Deploy to Sepolia Testnet

```bash
npm run deploy:sepolia
```

### 5. Verify Contract (Optional)

```bash
npm run verify
```

## Frontend Deployment

### 1. Update Environment Variables

After deploying the contract, update the `VITE_CONTRACT_ADDRESS` in your `.env` file with the deployed contract address.

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

#### Option B: GitHub Integration

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `VITE_WALLETCONNECT_PROJECT_ID`
   - `VITE_CONTRACT_ADDRESS`
4. Deploy automatically on push to main branch

## Environment Variables for Vercel

Set these environment variables in your Vercel dashboard:

- `VITE_WALLETCONNECT_PROJECT_ID`: Your WalletConnect project ID
- `VITE_CONTRACT_ADDRESS`: Deployed smart contract address

## Smart Contract Features

### Core Functions

- **mintSoulBadge**: Mint encrypted, soulbound NFT badges
- **requestVerification**: Request verification for badges
- **verifyBadge**: Verify badges (verifier only)
- **updateReputation**: Update user reputation scores
- **getBadgeInfo**: Retrieve badge information
- **getUserReputation**: Get user reputation data

### FHE Integration

The contract uses Zama's FHE Oracle for:
- Encrypted badge storage
- Privacy-preserving verification
- Reputation management
- Zero-knowledge proofs

## Supported Networks

- **Sepolia Testnet**: For development and testing
- **Ethereum Mainnet**: For production deployment

## Badge Types

The system supports the following badge types:
- Identity
- Professional
- Social
- Educational
- Financial

## Security Features

- **FHE Encryption**: All sensitive data encrypted using fully homomorphic encryption
- **Soulbound NFTs**: Non-transferable badges
- **Access Control**: Role-based permissions
- **Verification System**: Multi-level verification process

## Troubleshooting

### Common Issues

1. **Contract Deployment Fails**
   - Check RPC URL and private key
   - Ensure sufficient Sepolia ETH for gas fees
   - Verify network configuration

2. **Frontend Build Errors**
   - Check environment variables
   - Ensure all dependencies are installed
   - Verify contract address is correct

3. **Wallet Connection Issues**
   - Check WalletConnect project ID
   - Ensure MetaMask is installed and unlocked
   - Verify network configuration

### Support

For technical support or questions:
- Check the GitHub repository issues
- Review the smart contract documentation
- Contact the development team

## License

This project is licensed under the MIT License - see the LICENSE file for details.
