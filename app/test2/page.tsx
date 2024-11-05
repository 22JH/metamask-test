"use client";

import Link from "next/link";


declare global {
  interface Window {
    klaytn?: any;
  }
}

export default function test2() {
  const sign = async () => {
    const res =await (window as Window).klaytn?.request({
      method: "klay_sign",
      params: ['0xcFF413Ccb66205deec3c80473552cFF00fC8f7a4', 'message'],
    });
    alert(res)
  };
  return <p onClick={sign}>sign</p>;
}
