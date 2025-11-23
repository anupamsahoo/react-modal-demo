"use client";

import * as React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    // Load stored theme
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      // Auto from system
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-[999] grid place-items-center h-10 w-10 rounded-full border border-slate-300 bg-white text-slate-800 shadow-md hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/* ---------- Icons ---------- */

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.2 4.2l1.4 1.4" />
      <path d="M18.4 18.4l1.4 1.4" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.2 19.8l1.4-1.4" />
      <path d="M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 0111.2 3 7 7 0 0012 19a9 9 0 009-6.2z" />
    </svg>
  );
}
