import { Dispatch, useEffect, useState } from 'react';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme as ThemeMode : ThemeMode.Light
  );
  const previousTheme = theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(previousTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return [previousTheme, setTheme] as [ThemeMode, Dispatch<ThemeMode>];
}

export default useDarkMode;
