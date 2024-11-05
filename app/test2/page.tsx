"use client";

import Link from "next/link";
import { useState } from "react";
//@ts-ignore
import CircularJSON from 'circular-json';
import { createWalletClient, custom } from 'viem';

declare global {
  interface Window {
    klaytn?: any;
    Caver?: any;
    caver?: any;
    gfProvider?: any;
  }
}

export default function test2() {
  const [account, setAccount] = useState<string | null>(null)
  const [klaytnInfo, setKlaytnInfo] = useState<string>("");
  const [caverInfo, setCaverInfo] = useState<string>("");

  const walletClient = createWalletClient({
    transport: custom(window.ethereum!),
  })

  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    setKlaytnInfo(CircularJSON.stringify(window.klaytn)); 
    setCaverInfo(CircularJSON.stringify(window.ethereum)); 
  }

  const wagmiSign = async () => {
    if (!account) return
    const res = await walletClient.signMessage({
      account: account as `0x${string}`,
      message: 'message',
    })
    alert(res)
  }
  const sign = async () => {
    try {
      const provider = window.ethereum
      const res = await provider?.request({
        method: 'klay_sign',
        params: [account, 'message'],
      });
      alert(res)
    } catch (err) {
      alert(err)
    }
  };
  return <><button onClick={connect}>connect</button><button onClick={sign}>sign</button>
        <button onClick={wagmiSign}>wagmiSign</button>
  <button onClick={() => alert(window?.klaytn?.request)}>klaytn.requset</button></>;
}
