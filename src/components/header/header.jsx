import React from "react";
import { Link, Outlet } from "react-router-dom";
import logoPula from "../../assets/logo.png";
import userPula from "../../assets/Profilo-icon.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <div className="logo__container">
              <img src={logoPula} alt="" />
            </div>
            <Link to="/segnalazioni">
              <li>Segnalazioni</li>
            </Link>
            {/* <Link to="/"><li>Zona</li></Link> */}
            <Link to="/">
              <li>Parcheggi</li>
            </Link>
          </ul>
          <div className="logo__container">
            <img src={userPula} alt="" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
