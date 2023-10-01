import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const DarkModeButtonContainer = styled.button({
  display: "flex",
  width: 32,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--background-color)",
  color: "var(--font-color)",
  border: "2px solid var(--font-color)",
  borderRadius: 16,
  boxSizing: "border-box",
  cursor: "pointer",
  transition:
    "color .2s ease, background-color .2s ease, border-color .2s ease",
  "&:hover": {
    backgroundColor: "var(--font-color)",
    color: "var(--background-color)",
  },
});

const DarkModeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (typeof window !== "undefined") {
      setTheme(currentTheme);
    }
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const handleClick = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    console.log(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, [theme]);

  return (
    <DarkModeButtonContainer onClick={handleClick}>
      {theme === "dark" ? <RiSunFill size={20} /> : <RiMoonFill size={20} />}
    </DarkModeButtonContainer>
  );
};

export default DarkModeButton;
