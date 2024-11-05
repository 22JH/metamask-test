"use client";

import Link from "next/link";

export default function test2() {
  return <Link href="/">{typeof window !== "undefined" && Object.entries(window).map(([key, value]) => <div key={key}>{key}</div>)}</Link>;
}
