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
  const [klaytnInfo, setKlaytnInfo] = useState<string>("");

  const connect = async () => {
    const a = await window.klaytn.enable()
    setAccount(a[0])
    setKlaytnInfo(JSON.stringify(window.klaytn, null, 2)); // Klaytn 객체 정보를 문자열로 변환
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
        <pre>{klaytnInfo}</pre> {/* Klaytn 객체 정보를 화면에 출력 */}

  <button onClick={() => alert(window?.klaytn?.request)}>klaytn.requset</button></>;
}
