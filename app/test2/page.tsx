"use client";

import Link from "next/link";
import { useState } from "react";


declare global {
  interface Window {
    klaytn?: any;
    Caver?: any;
    caver?: any;
  }
}

export default function test2() {
  const [account, setAccount] = useState<string | null>(null)
  const [klaytnInfo, setKlaytnInfo] = useState<string>("");
  const [caverInfo, setCaverInfo] = useState<string>("");

  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    setKlaytnInfo(JSON.stringify(window.klaytn, null, 2)); 
    setCaverInfo(JSON.stringify(window.Caver, null, 2)); 
    alert(`
      window.caver: ${window.caver}
      `)
  }
  const sign = async () => {
    try {
      const res = await window.klaytn.request({
        method: 'klay_sign',
        params: [account, 'message'],
      });
      alert(res)
    } catch (err) {
      alert(err)
    }
  };
  return <><button onClick={connect}>connect</button><button onClick={sign}>sign</button>
        <pre>{klaytnInfo}</pre>
        <pre>{caverInfo}</pre>
        {typeof window !== "undefined" && Object.entries(window).map(([key, value]) => <p key={key}>{key}</p>)}
  <button onClick={() => alert(window?.klaytn?.request)}>klaytn.requset</button></>;
}
