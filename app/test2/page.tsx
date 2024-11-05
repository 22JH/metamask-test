"use client";

import Link from "next/link";
import { useState } from "react";


declare global {
  interface Window {
    klaytn?: any;
  }
}

export default function test2() {
  const [account, setAccount] = useState<string | null>(null)
  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    alert(typeof window !== "undefined" ? Object.entries(window?.klaytn).map(([key, value]) => <p key={key}>{Object.entries(value as any).map(([key, value]) => <p key={key}>{key}</p>)}</p>) : "")
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
  {typeof window !== "undefined" && Object.entries(window).map(([key, value]) => <p key={key}>{key}</p>)}
  <button onClick={() => alert(window?.klaytn?.request)}>klaytn.requset</button></>;
}
