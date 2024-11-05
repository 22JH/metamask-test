"use client";

import Link from "next/link";
import { useState } from "react";


declare global {
  interface Window {
    klaytn?: any;
    Caver?: any;
    caver?: any;
    gfProvider?: any;
  }
}

function safeStringify(obj: any) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  }, 2);
}


export default function test2() {
  const [account, setAccount] = useState<string | null>(null)
  const [klaytnInfo, setKlaytnInfo] = useState<string>("");
  const [caverInfo, setCaverInfo] = useState<string>("");

  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    setKlaytnInfo(safeStringify(window.klaytn)); 
    setCaverInfo(safeStringify(window.gfProvider)); 
    alert(`
      window.caver: ${safeStringify(window.Caver)}
      `)
  }
  const sign = async () => {
    try {
      const provider = window.caver.currentProvider
      alert(JSON.stringify(window.caver, null, 3))
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
