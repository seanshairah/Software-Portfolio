"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "sm-theme";

/**
 * Minimal, dependency-free theme provider. The initial class is applied by an
 * inline script in <head> (see ThemeScript) to avoid a flash of the wrong theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Dark is the primary experience; we only fall back to a stored choice the
    // visitor made explicitly, otherwise default to dark for the best contrast.
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    setThemeState(stored ?? "dark");
  }, []);

  const apply = useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next);
      apply(next);
    },
    [apply],
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/** Inline, render-blocking script that sets the theme class before paint. */
export function ThemeScript() {
  const code = `(function(){try{var k='${STORAGE_KEY}';var s=localStorage.getItem(k);var t=s||'dark';if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
