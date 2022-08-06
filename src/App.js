import "./App.css";
import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [colorTheme, setColorTheme] = useState("theme-one");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-number");

    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-number", theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <h3>calc</h3>
      <div className="theme-options">
        <span
          id="theme-one"
          onClick={() => handleClick("theme-one")}
          className={`${colorTheme === "theme-one" ? "active" : ""}`}
        >
          1
        </span>
        <span
          id="theme-two"
          onClick={() => handleClick("theme-two")}
          className={`${colorTheme === "theme-two" ? "active" : ""}`}
        >
          2
        </span>
        <span
          id="theme-three"
          onClick={() => handleClick("theme-three")}
          className={`${colorTheme === "theme-three" ? "active" : ""}`}
        >
          3
        </span>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
