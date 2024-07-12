"use client";

import MetaMaskSDK from "@metamask/sdk";

export default function Home() {
  const test = () => {
    console.log("1");
    const ethereum = sdk.getProvider();
    const accounts = ethereum?.request({ method: "eth_requestAccounts" });
    console.log(accounts);
  };

  const sdk = new MetaMaskSDK({
    dappMetadata: {
      name: "test",
      url: "https://22JH.github.io/metamask-test",
    },
  });
  return <button onClick={test}>test</button>;
}
