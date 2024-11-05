import type { Metadata } from "next";
import WagmiProvider from "./WagmiProvider";
import { headers } from "next/headers";
import { wagmiConfig } from "./wagmiConfig";
import { cookieToInitialState } from 'wagmi';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = headers();
  const wagmiInitialState = cookieToInitialState(
    wagmiConfig,
    header.get('cookie'),
  );
  return (
    <html lang="en">
      <WagmiProvider initialState={wagmiInitialState}>
        <body>{children}</body>
      </WagmiProvider>
    </html>
  );
}
