"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [activeNavChild, setActiveNavChild] = useState(null);

  return (
    <ThemeContext.Provider
      value={{
        sidebarExpanded,
        setSidebarExpanded,
        activeNav,
        setActiveNav,
        activeNavChild,
        setActiveNavChild,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const myContext = () => useContext(ThemeContext);
