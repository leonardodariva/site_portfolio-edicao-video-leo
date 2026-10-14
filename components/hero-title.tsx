"use client";

import { useEffect, useRef } from "react";

const lines = ["Front-end developer", "criando produtos digitais", "feitos para evoluir."];
const mobileLines = ["Front-end developer", "criando produtos", "digitais feitos", "para evoluir."];

export function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const hero = title?.closest<HTMLElement>(".v3-hero");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!title || !hero || reducedMotion.matches || !finePointer.matches) return;

    const letters = Array.from(title.querySelectorAll<HTMLElement>(".hero-letter"));
    let frame = 0;

    const paint = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        letters.forEach((letter) => {
          const box = letter.getBoundingClientRect();
          const distance = Math.hypot(event.clientX - (box.left + box.width / 2), event.clientY - (box.top + box.height / 2));
          const power = Math.max(0, 1 - distance / 165);
          letter.style.setProperty("--split", power.toFixed(3));
        });
      });
    };

    const reset = () => letters.forEach((letter) => letter.style.removeProperty("--split"));
    hero.addEventListener("pointermove", paint, { passive: true });
    hero.addEventListener("pointerleave", reset);
    return () => {
      window.cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", paint);
      hero.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <h1 ref={titleRef} aria-label={lines.join(" ")}>
      {lines.map((line, lineIndex) => (
        <span className="hero-title-line hero-title-desktop" key={line} aria-hidden="true">
          {Array.from(line).map((letter, index) => (
            <span className="hero-letter" key={`${lineIndex}-${index}`}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </span>
      ))}
      {mobileLines.map((line, lineIndex) => (
        <span className="hero-title-line hero-title-mobile" key={`mobile-${line}`} aria-hidden="true">
          {Array.from(line).map((letter, index) => (
            <span className="hero-letter" key={`mobile-${lineIndex}-${index}`}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
