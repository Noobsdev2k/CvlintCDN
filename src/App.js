import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import "boxicons";
import scrollreveal from "scrollreveal";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skill from "./components/Skill/skill";
import Services from "./components/Services/services";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import Testimonial from "./components/Testimonials/testimonial";
import Footer from "./components/Footer/footer";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "top",
        distance: "60px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        .home,
        .about,
        .skill,
        .testimontial,
        .work,
        .contact,
        footer
    `,
        {
          interval: 500,
        }
      );
      sr.reveal(`.home_data`);
      sr.reveal(`.home_handle`, { delay: 500 });
      sr.reveal(
        `.home_social,
      .home_scroll`,
        { delay: 700, origin: "bottom" }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="App">
      <Header changeTheme={changeTheme} currentTheme={theme} />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Services />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
