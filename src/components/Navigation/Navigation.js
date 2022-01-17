import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { map } from "lodash";
import "./Navigation.scss";

export function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const links = [
    { url: "/", title: "Inicio" },
    { url: "/services", title: "Servicios" },
    { url: "/projects", title: "Proyectos" },
    { url: "/contact", title: "Contacto" },
  ];

  return (
    <section className="navigation">
      <div className="navigation__container">
        <div className="navigation__container-logo">
          <NavLink to="../">
            <img className="h-8 w-8 mr-2" src={Logo} alt="Workflow" />
            <span>LOGO</span>
          </NavLink>
        </div>
        <div className="navigation__container-items">
          <div>
            {map(links, (link, index) => (
              <NavLink to={link.url} key={index}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="navigation__container-toggle">
          <div onClick={handleToggle}>
            {navbarOpen ? <FaTimes /> : <FaAlignJustify />}
          </div>
        </div>
      </div>
      <div
        className={`navigation__navbar ${
          navbarOpen ? "slide-in" : "slide-out"
        }`}
      >
        <div>
          {map(links, (link, index) => (
            <NavLink to={link.url} key={index} onClick={() => closeMenu()}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
