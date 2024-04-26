"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const powersOfTwo = (): void => {
    setCount(count ** 2);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hi, this is my Portfolio. It is not done yet, check back in the future!
      <div>{count}</div>
      <button className="bg-slate-300 p-4 text-3xl" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="bg-slate-300 p-4 text-3xl" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="bg-slate-300 p-4 text-3xl" onClick={powersOfTwo}>
        Powers Of Two
      </button>
    </main>
  );
}
