import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const Typetext = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(
      ".home-img, .services-container, .portfolio-box, .contact form",
      { origin: "bottom" }
    );
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", {
      origin: "right",
    });

    const typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "Full Stack Developer",
        "Android App Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <div></div>;
};

export default Typetext;
