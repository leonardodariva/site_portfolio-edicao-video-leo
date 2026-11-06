"use client";

import { useEffect } from "react";

function attachWaveField(surface: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.className = "wave-field";
  canvas.setAttribute("aria-hidden", "true");
  surface.prepend(canvas);
  surface.classList.add("has-wave-field");

  const context = canvas.getContext("2d");
  if (!context) return () => canvas.remove();

  const isDottedSurface = surface.matches(".v3-hero, .proof-trail-stage, .site-footer");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const dotSpacing = 16;
  let width = 1;
  let height = 1;
  let mouseX = -9999;
  let mouseY = -9999;
  let easedX = -9999;
  let easedY = -9999;
  let inside = false;
  let frame = 0;
  let elapsed = 0;

  const sizeCanvas = () => {
    const rect = surface.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const locatePointer = (event: PointerEvent) => {
    const rect = surface.getBoundingClientRect();
    const clientX = event.clientX;
    const clientY = event.clientY;
    inside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    if (!inside) return;
    mouseX = clientX - rect.left;
    mouseY = clientY - rect.top;
    if (easedX < -1000) {
      easedX = mouseX;
      easedY = mouseY;
    }
  };

  const leaveSurface = () => {
    inside = false;
    mouseX = -9999;
    mouseY = -9999;
  };

  const drawWaveDots = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    context.fillStyle = isLight ? "rgba(39,39,37,.24)" : "rgba(151,166,255,.2)";
    const pointerActive = inside && easedX > -1000 && easedY > -1000;

    for (let y = 1; y < height; y += dotSpacing) {
      for (let x = 1; x < width; x += dotSpacing) {
        const phase = x * 0.034 + y * 0.018 - elapsed * 2.2;
        let offsetX = Math.cos(phase) * 1.8;
        let offsetY = Math.sin(phase) * 3.2 + Math.sin(y * 0.026 + elapsed * 1.35) * 1.4;
        let influence = 0;

        if (pointerActive) {
          const deltaX = x - easedX;
          const deltaY = y - easedY;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < 140) {
            influence = 1 - distance / 140;
            const force = influence * influence * 25;
            if (distance > 0.001) {
              offsetX += (deltaX / distance) * force;
              offsetY += (deltaY / distance) * force;
            }
          }
        }

        context.globalAlpha = .58 + influence * .42;
        context.beginPath();
        context.arc(x + offsetX, y + offsetY, 1 + influence * .72, 0, Math.PI * 2);
        context.fill();
      }
    }

    context.globalAlpha = 1;
  };

  const drawField = (timestamp: number) => {
    elapsed = timestamp / 1000;
    easedX += (mouseX - easedX) * 0.16;
    easedY += (mouseY - easedY) * 0.16;
    context.clearRect(0, 0, width, height);
    if (isDottedSurface) drawWaveDots();

    frame = window.requestAnimationFrame(drawField);
  };

  sizeCanvas();
  const resizeObserver = new ResizeObserver(sizeCanvas);
  resizeObserver.observe(surface);
  surface.addEventListener("pointermove", locatePointer, { passive: true });
  surface.addEventListener("pointerleave", leaveSurface, { passive: true });
  frame = window.requestAnimationFrame(drawField);

  return () => {
    window.cancelAnimationFrame(frame);
    surface.removeEventListener("pointermove", locatePointer);
    surface.removeEventListener("pointerleave", leaveSurface);
    resizeObserver.disconnect();
    surface.classList.remove("has-wave-field");
    canvas.remove();
  };
}

export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));

    const siteHeader = document.querySelector<HTMLElement>(".site-header");
    const updateHeader = () => siteHeader?.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector<HTMLElement>(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const handleSamePageAnchor = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target : null;
      const anchor = element?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor || anchor.hash !== window.location.hash) return;
      const target = document.querySelector<HTMLElement>(anchor.hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const hashTimer = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);
    document.addEventListener("click", handleSamePageAnchor);

    const waveSurfaces = Array.from(document.querySelectorAll<HTMLElement>(".v3-hero, .proof-trail-stage, .site-footer"));
    const waveCleanups = waveSurfaces.map(attachWaveField);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
      window.clearTimeout(hashTimer);
      window.removeEventListener("hashchange", scrollToHash);
      document.removeEventListener("click", handleSamePageAnchor);
      waveCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
