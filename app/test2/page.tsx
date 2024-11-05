"use client";

import Link from "next/link";


declare global {
  interface Window {
    klaytn?: any;
  }
}

export default function test2() {
  const connect = async () => {
    const a = await window.klaytn.enable()
    alert(a)
  }
  const sign = async () => {
    const res = await window.klaytn.request({
      method: 'klay_sign',
      params: ['0xcFF413Ccb66205deec3c80473552cFF00fC8f7a4', 'message'],
    });
    alert(res)
  };
  return <><button onClick={connect}>connect</button><p onClick={sign}>sign</p></>;
}
