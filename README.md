# Secure Soul ID - FHE-Powered Digital Identity Platform

A fully homomorphic encryption (FHE) powered digital identity and reputation system built on blockchain technology. This platform enables users to manage encrypted, soulbound NFT badges that represent their verified credentials and reputation without compromising privacy.

## Features

- **FHE Encryption**: All sensitive data is encrypted using fully homomorphic encryption
- **Soulbound NFTs**: Non-transferable digital badges that represent verified credentials
- **Privacy-First**: Zero-knowledge verification of credentials without revealing underlying data
- **Wallet Integration**: Seamless connection with popular Web3 wallets
- **Reputation System**: Encrypted reputation scoring and verification
- **Multi-Chain Support**: Built for Ethereum and compatible networks

## Technologies

This project is built with:

- **Frontend**: React, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Blockchain**: Wagmi, RainbowKit
- **Encryption**: Zama FHE Oracle
- **Smart Contracts**: Solidity with FHE integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/avamitchell90/secure-soul-id.git

# Navigate to the project directory
cd secure-soul-id

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
VITE_ALCHEMY_API_KEY=your_alchemy_key
VITE_CONTRACT_ADDRESS=your_contract_address
```

## Smart Contract

The platform uses a Solidity smart contract with FHE integration for:
- Encrypted badge storage
- Privacy-preserving verification
- Reputation management
- Soulbound NFT minting

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security

This project implements state-of-the-art cryptographic techniques to ensure user privacy and data security. All sensitive operations are performed using fully homomorphic encryption.

