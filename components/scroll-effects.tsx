"use client";

import { useEffect } from "react";

type TrailPoint = { x: number; y: number };

function attachSmokeField(surface: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.className = "smoke-field";
  canvas.setAttribute("aria-hidden", "true");
  surface.prepend(canvas);
  surface.classList.add("has-smoke-field");

  const context = canvas.getContext("2d");
  if (!context) return () => canvas.remove();

  const isDottedSurface = surface.matches(".v3-hero, .proof-trail-stage, .site-footer");
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const dotSpacing = 16;
  const dotRepelRadius = 140;
  const dotRepelDistance = 25;
  const trail: TrailPoint[] = [];
  const trailLength = 30;
  let width = 1;
  let height = 1;
  let mouseX = -9999;
  let mouseY = -9999;
  let easedX = -9999;
  let easedY = -9999;
  let clientX = -9999;
  let clientY = -9999;
  let inside = false;
  let frame = 0;

  const sizeCanvas = () => {
    const rect = surface.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const locatePointer = (event: PointerEvent) => {
    clientX = event.clientX;
    clientY = event.clientY;
    const rect = surface.getBoundingClientRect();
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

  const relocateOnScroll = () => {
    if (!inside || clientX < -1000) return;
    const rect = surface.getBoundingClientRect();
    mouseX = clientX - rect.left;
    mouseY = clientY - rect.top;
  };

  const drawInteractiveDots = () => {
    const isLight = document.documentElement.dataset.theme === "light";
    context.fillStyle = isLight ? "rgba(39,39,37,.14)" : "rgba(151,166,255,.2)";
    const pointerActive = inside && easedX > -1000 && easedY > -1000;

    for (let y = 1; y < height; y += dotSpacing) {
      for (let x = 1; x < width; x += dotSpacing) {
        let offsetX = 0;
        let offsetY = 0;
        let influence = 0;

        if (pointerActive) {
          const deltaX = x - easedX;
          const deltaY = y - easedY;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < dotRepelRadius) {
            influence = 1 - distance / dotRepelRadius;
            const force = influence * influence * dotRepelDistance;
            if (distance > 0.001) {
              offsetX = (deltaX / distance) * force;
              offsetY = (deltaY / distance) * force;
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

  const drawSmoke = () => {
    easedX += (mouseX - easedX) * 0.16;
    easedY += (mouseY - easedY) * 0.16;
    if (inside) trail.push({ x: easedX, y: easedY });
    while (trail.length > trailLength) trail.shift();
    if (!inside && trail.length) trail.shift();

    context.clearRect(0, 0, width, height);
    if (isDottedSurface) drawInteractiveDots();

    trail.forEach((point, index) => {
      const strength = (index + 1) / trail.length;
      const radius = 18 + strength * 52;
      const alpha = 0.008 * strength * strength;
      const gradient = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
      gradient.addColorStop(0, `rgba(55,123,255,${(alpha * 3).toFixed(4)})`);
      gradient.addColorStop(0.46, `rgba(55,123,255,${(alpha * 1.2).toFixed(4)})`);
      gradient.addColorStop(1, "rgba(55,123,255,0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(point.x, point.y, radius, 0, Math.PI * 2);
      context.fill();
    });

    frame = window.requestAnimationFrame(drawSmoke);
  };

  sizeCanvas();
  const resizeObserver = new ResizeObserver(sizeCanvas);
  resizeObserver.observe(surface);
  surface.addEventListener("pointermove", locatePointer, { passive: true });
  surface.addEventListener("pointerleave", leaveSurface, { passive: true });
  window.addEventListener("scroll", relocateOnScroll, { passive: true });
  drawSmoke();

  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", relocateOnScroll);
    surface.removeEventListener("pointermove", locatePointer);
    surface.removeEventListener("pointerleave", leaveSurface);
    resizeObserver.disconnect();
    surface.classList.remove("has-smoke-field");
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

    const lightSurfaces = Array.from(document.querySelectorAll<HTMLElement>(".v3-hero, .proof-trail-stage, .site-footer"));
    const lightSurface = (event: PointerEvent) => {
      const surface = event.currentTarget as HTMLElement;
      const rect = surface.getBoundingClientRect();
      surface.style.setProperty("--smoke-x", `${event.clientX - rect.left}px`);
      surface.style.setProperty("--smoke-y", `${event.clientY - rect.top}px`);
    };

    lightSurfaces.forEach((surface) => surface.addEventListener("pointermove", lightSurface, { passive: true }));
    const smokeCleanups = lightSurfaces.map(attachSmokeField);

    return () => {
      observer.disconnect();
      lightSurfaces.forEach((surface) => surface.removeEventListener("pointermove", lightSurface));
      smokeCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
