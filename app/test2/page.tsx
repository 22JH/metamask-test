"use client";

import Link from "next/link";
import { useState } from "react";
//@ts-ignore
import CircularJSON from 'circular-json';


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

  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    setKlaytnInfo(CircularJSON.stringify(window.klaytn)); 
    setCaverInfo(CircularJSON.stringify(window.gfProvider)); 
    alert(`
      window.caver: ${CircularJSON.stringify(window.caver)}
      `)
  }
  const sign = async () => {
    try {
      const provider = window.caver.currentProvider
      alert(CircularJSON.stringify(window.caver.klay, null, 3))
      const res = await provider.request({
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
