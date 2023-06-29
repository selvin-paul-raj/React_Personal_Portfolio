import React, { useEffect, useState } from "react";

const Effect = () => {
    // eslint-disable-next-line
  const [menuIconClass, setMenuIconClass] = useState("");
  // eslint-disable-next-line
  const [navbarActive, setNavbarActive] = useState(false);
  // eslint-disable-next-line
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      sections.forEach((sec) => {
        const top = window.pageYOffset;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          document
            .querySelector(`header nav a[href*=${id}]`)
            .classList.add("active");
          setActiveSection(id);
        }
      });

      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.pageYOffset > 100);

      setMenuIconClass("");
      setNavbarActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // eslint-disable-next-line
  const handleMenuClick = () => {
    setMenuIconClass((prevClass) => (prevClass === "bx-x" ? "" : "bx-x"));
    setNavbarActive((prevActive) => !prevActive);
  };

  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }, []);

  return <div></div>;
};

export default Effect;
