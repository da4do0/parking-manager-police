import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.css";

const Header = ()=>{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/segnalazioni"><li>Segnalazioni</li></Link>
                        <Link to="/"><li>Zona</li></Link>
                        <Link to="/"><li>Parcheggi</li></Link>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}

export default Header;