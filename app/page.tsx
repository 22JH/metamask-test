"use client";

import sdk2 from "@web3-onboard/metamask";
import Onboard from "@web3-onboard/core";

//@ts-ignore
import MetaMaskSDK from "@metamask/sdk";
import Link from "next/link";

export default function Home() {
  const metamaskSDKWallet = sdk2({
    options: {
      extensionOnly: false,
      dappMetadata: {
        name: "Example Web3-Onboard Dapp",
      },
    },
  });

  const test = async () => {
    const ethereum = sdk.getProvider();

    if (!ethereum) return;
    await sdk.init();
    await ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x2019",
          chainName: "Klaytn Mainnet",
          blockExplorerUrls: ["https://klaytnscope.com"],
          nativeCurrency: { symbol: "KLAY", decimals: 18 },
          rpcUrls: ["https://public-en-cypress.klaytn.net"],
        },
      ],
    });
    const [accounts, chainId] = (await Promise.all([
      ethereum.request({
        method: "eth_requestAccounts",
      }),
      ethereum.request({
        method: "eth_chainId",
      }),
    ])) as [string[], string];

    if (!accounts) throw "There's no account";
    // 지갑 목록을 가져옴, 현재 선택한 지갑이 0번째 인덱스
    const walletAddress = accounts[0];

    const signature = (await ethereum.request({
      method: "personal_sign",
      params: ["hello test", walletAddress],
    })) as string;

    console.log(signature, chainId);
  };

  const sdk = new MetaMaskSDK({
    dappMetadata: {
      name: "test",
      url: "https://22JH.github.io/metamask-test",
    },
  });

  const test2 = async () => {
    const ethereumSepolia = {
      id: 11155111,
      token: "ETH",
      label: "Sepolia",
      rpcUrl: "https://rpc.sepolia.org/",
    };
    const onboard = Onboard({
      wallets: [metamaskSDKWallet],
      chains: [ethereumSepolia],
    });

    const connectedWallets = await onboard.connectWallet();
  };
  return (
    <>
      <button onClick={test}>test</button>
      <button onClick={test2}>test2</button>
      <Link href="test2">testLink</Link>
    </>
  );
}
