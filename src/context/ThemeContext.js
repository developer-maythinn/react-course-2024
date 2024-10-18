import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    console.log("toggleTheme");
  };
  return (
    <>
      <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
