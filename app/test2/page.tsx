"use client";

import { useEffect, useState } from "react";
//@ts-ignore
import CircularJSON from 'circular-json';
import { createWalletClient, custom } from 'viem';
import NoticeCarousel from "./carousel";

declare global {
  interface Window {
    klaytn?: any;
    Caver?: any;
    caver?: any;
    gfProvider?: any;
    ethereum?: any;
  }
}

export default function test2() {
  const [account, setAccount] = useState<string | null>(null)
  const [klaytnInfo, setKlaytnInfo] = useState<string>("")
  
  const [walletClient, setWalletClient] = useState<any>(null)

  const connect = async () => {
    alert(window && window.klaytn.isMobile)
    const a = window && await window.klaytn.enable()
    setAccount(a[0])
  }

  const wagmiSign = async () => {
    if (!account) return
    const a = await walletClient
    const res = await walletClient.signMessage({
      account: account as `0x${string}`,
      message: 'message',
    })
    
    alert(res)
  }
  const sign = async () => {
    try {
      const res = await window.klaytn.request({
        method: 'klay_sign',
        params: [account, 'message'],
      })
      return res
    } catch (err) {
      alert(err)
    }
  };

  const signAndDoSomething = async (signature: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (signature) {
          resolve(`Success with signature: ${signature}`);
        } else {
          reject('Failed: No signature provided');
        }
      }, 1000); // 1초 후에 완료
    });
  };

  return (<>
    <NoticeCarousel />
    <p className="font-bold">test</p>
  </>);
}
