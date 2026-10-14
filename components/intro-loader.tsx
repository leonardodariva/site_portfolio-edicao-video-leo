"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setFinished(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-loader${finished ? " is-finished" : ""}`} aria-hidden="true">
      <div className="loader-mark"><Image className="loader-brand-mark" src="/brand/leonardo-dariva.svg" alt="" width={44} height={44} priority /></div>
      <p>Construindo a experiência</p>
      <div className="loader-track"><span /></div>
    </div>
  );
}
