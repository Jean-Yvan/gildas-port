import { useEffect, useState } from "react";



export default function useDarkMode() {
  let initialTheme = 'light';

  if (typeof window !== 'undefined') {
    initialTheme = localStorage.getItem('theme') || 'light';
  }

  const [theme, setTheme] = useState(initialTheme);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);

      localStorage.setItem('theme', theme);
    }
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
}
