import React from 'react';
import LightButton from "../../assets/light.jpeg";
import DarkButton from "../../assets/dark.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={toggleTheme}
        className={`w-10 cursor-pointer drop-shadow-md transition-opacity duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={toggleTheme}
        className={`w-10 cursor-pointer drop-shadow-md transition-opacity duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
