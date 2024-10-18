import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Nav() {
  const themeValues = useContext(ThemeContext); // access context
  const { isLightTheme, light, dark } = themeValues;
  const theme = isLightTheme ? light : dark;

  return (
    <nav className="navStyle" style={{ background: theme.ui }}>
      <ul>
        <li>
          <Link to="/mini-projects" style={{ color: theme.syntax }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/hooks" style={{ color: theme.syntax }}>
            Hooks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
