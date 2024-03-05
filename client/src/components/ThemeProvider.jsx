import React from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-sky-100 text-gray-700 dark:text-gray-100 dark:bg-gradient-to-r from-indigo-500 to-black min-h-screen">
        {children}
      </div>
    </div>
  );
}
