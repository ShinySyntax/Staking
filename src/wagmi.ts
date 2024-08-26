
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, bsc, fantomTestnet, mainnet, optimism, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'cbfd1b2f71bec866605fad424ed18a75',
  chains: [mainnet, polygon, optimism, arbitrum, base, fantomTestnet, bsc],
});
