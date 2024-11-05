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
  return <><button onClick={connect}>connect</button><p onClick={sign}>sign</p></>;
}
