import { Dispatch, useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );
  const previousTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(previousTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return [previousTheme, setTheme] as [string, Dispatch<string>];
}

export default useDarkMode;
