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
    setCaverInfo(CircularJSON.stringify(window.ethereum)); 
    
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
        <pre>{klaytnInfo}</pre>
        <pre>{caverInfo}</pre>
  <button onClick={() => alert(window?.klaytn?.request)}>klaytn.requset</button></>;
}
