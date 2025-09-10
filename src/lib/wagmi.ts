import { createConfig, http } from 'wagmi'
import { sepolia, mainnet } from 'wagmi/chains'
import { injected, metaMask, walletConnect, coinbaseWallet } from 'wagmi/connectors'

// Get projectId from https://cloud.walletconnect.com
export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'your-project-id'

// Create wagmi config
export const config = createConfig({
  chains: [sepolia, mainnet],
  connectors: [
    // Generic injected connector for all browser wallets
    injected(),
    // Specific wallet connectors
    metaMask(),
    coinbaseWallet({
      appName: 'Secure Soul ID',
      appLogoUrl: 'https://secure-soul-id.vercel.app/icon.svg',
    }),
    walletConnect({ 
      projectId,
      metadata: {
        name: 'Secure Soul ID',
        description: 'FHE-Powered Digital Identity Platform',
        url: 'https://secure-soul-id.vercel.app',
        icons: ['https://secure-soul-id.vercel.app/icon.svg']
      }
    }),
  ],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
