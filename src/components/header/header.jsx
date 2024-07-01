import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoPula from "../../assets/logo.png";
import userPula from "../../assets/Profilo-icon.png";
import "./header.css";

const linkStyle = ({ isActive }) => {
  return isActive ? "nav-link nav-link-active" : "nav-link";
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <div className="logo__container">
              <img src={logoPula} alt="Logo" />
            </div>
            <NavLink to="/segnalazioni" style={{ linkStyle }}>
              <li>Segnalazioni</li>
            </NavLink>
            <NavLink to="/parcheggi" style={{ linkStyle }}>
              <li>Parcheggi</li>
            </NavLink>
          </ul>
          <div className="logo__container__pula" onClick={handleToggle}>
            <img src={userPula} alt="User Icon" />
            {isOpen && (
              <div className="dropdown-menu__header">
                <button className="dropdown-item__header" onClick={() => alert('Esci')}>
                  Esci
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
