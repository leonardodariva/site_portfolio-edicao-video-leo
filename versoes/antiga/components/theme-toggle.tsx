"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DEFAULT_THEME = "dark" as const;

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(DEFAULT_THEME);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const nextTheme = saved === "light" ? "light" : DEFAULT_THEME;
    if (saved !== nextTheme) window.localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.requestAnimationFrame(() => {
      root.dataset.theme = next;
      window.localStorage.setItem("theme", next);
      setTheme(next);
    });
    window.setTimeout(() => root.classList.remove("theme-transition"), 620);
  }

  const ThemeIcon = theme === "dark" ? FiSun : FiMoon;

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar entre tema claro e escuro"
      aria-pressed={theme === "light"}
      title="Alternar tema"
    >
      <span aria-hidden="true"><ThemeIcon size={17} strokeWidth={1.8} /></span>
    </button>
  );
}
