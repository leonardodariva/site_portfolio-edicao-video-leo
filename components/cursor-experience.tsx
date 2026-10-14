"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function CursorExperience() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let cursorFrame = 0;

    const moveCursor = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-visible");
    };

    const updateCursorState = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const overProject = Boolean(target.closest(".project-image-link"));
      const overControl = Boolean(target.closest("a, button, [role='button']"));
      cursor.classList.toggle("is-explore", overProject);
      cursor.classList.toggle("is-big", !overProject && overControl);
    };

    const hideCursor = (event: MouseEvent) => {
      if (!event.relatedTarget) cursor.classList.remove("is-visible");
    };

    const pressCursor = () => cursor.classList.add("is-pressed");
    const releaseCursor = () => cursor.classList.remove("is-pressed");

    const followCursor = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      cursorFrame = window.requestAnimationFrame(followCursor);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", updateCursorState, { passive: true });
    window.addEventListener("mouseout", hideCursor, { passive: true });
    window.addEventListener("mousedown", pressCursor, { passive: true });
    window.addEventListener("mouseup", releaseCursor, { passive: true });
    followCursor();

    return () => {
      window.cancelAnimationFrame(cursorFrame);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updateCursorState);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mousedown", pressCursor);
      window.removeEventListener("mouseup", releaseCursor);
    };
  }, [pathname]);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span>Explorar</span>
    </div>
  );
}
