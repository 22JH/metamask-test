"use client";

import MetaMaskSDK from "@metamask/sdk";

export default function Home() {
  const test = async () => {
    console.log("1");
    const ethereum = sdk.getProvider();
    if (!ethereum) return;
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
  return <button onClick={test}>test</button>;
}
