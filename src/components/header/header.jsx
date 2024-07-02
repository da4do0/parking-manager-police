import React, { useState } from "react";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import logoPula from "../../assets/logo.png";
import userPula from "../../assets/Profilo-icon.png";
import "./header.css";
import {useLoginCk} from '../../hooks/login.hook';

const linkStyle = ({ isActive }) => {
  return isActive ? "nav-link nav-link-active" : "nav-link";
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {updateMatricola} = useLoginCk();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const logout = ()=>{
    navigate('/login');
  }

  const logOut = ()=>{
    updateMatricola('');
    navigate('/login');
  }

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
                <button className="dropdown-item__header" onClick={logOut}>
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
