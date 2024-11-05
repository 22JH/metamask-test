import { http, createConfig, createStorage, noopStorage } from 'wagmi';
import { kaia, kairos } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { fallback } from 'viem';


export const wagmiConfig = createConfig({
  chains: process.env.NODE_ENV === 'development' ? [kairos] : [kaia],
  connectors: [
    injected({ target: 'metaMask', shimDisconnect: true }),
  ],
  transports: {
    [kaia.id]: fallback([
      http('https://public-en.node.kaia.io'),
      http('https://kaia-mainnet.rpc.grove.city/v1/803ceedf'),
      http('https://klaytn.drpc.org'),
      http('https://go.getblock.io/d7094dbd80ab474ba7042603fe912332'),
      http('https://1rpc.io/klay'),
    ]),
    [kairos.id]: fallback([
      http('https://kairos-browser.line-apps.com'),
      http('https://kaia-kairos.blockpi.network/v1/rpc/public	'),
      http('https://rpc.ankr.com/klaytn_testnet'),
    ]),
  },
  ssr: true,
  syncConnectedChain: true,
});