import { createContext, useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Divider from "./components/divider/Divider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Toggler from "./components/toggler/Toggler";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div id="app" className="App" dark-theme={theme}>
        <Header />
        <Divider />
        <Main />
        <Divider />
        <Footer />
        <Divider />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
