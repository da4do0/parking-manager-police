import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { createClient } from "@supabase/supabase-js";
import { useLoginCk } from "../../hooks/login.hook";

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [matricola, matricola_set] = useState("");
  const [pass, pass_set] = useState("");
  const { updateMatricola } = useLoginCk();
  const navigate = useNavigate();

  const checkUser = async () => {
    let { data, error } = await supabase
      .from("forze_ordine")
      .select("id")
      .eq("matricola", matricola)
      .eq("password", pass);
    console.log(data);
    console.error(error);
    if (data.length > 0) {
      updateMatricola(matricola);
      navigate("/segnalazioni");
    }
  };

  /* return (
    <div className="login-container">
      <div className="container__logo">
        <img src={logo} alt="login logo" className="login-logo" />
      </div>
      <div className="login-inputs">
        <input
          type="text"
          placeholder="matricola"
          onInput={(e) => matricola_set(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onInput={(e) => pass_set(e.target.value)}
        />
      </div>
      <a href="#" className="forgot-password">
        password dimenticata?
      </a>
      <button className="login-button" onClick={checkUser}>
        Accedi
      </button>
    </div>
  ); */

  return (
    <div className="login-container">
      <div className="container__logo">
        <img src={logo} alt="login logo" className="login-logo" />
      </div>
      <div className="login-inputs">
        <div className="input-container">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_235_3067)">
              <path opacity="0.4" d="M11.7858 4.25C11.7858 4.99168 11.5344 5.7167 11.0635 6.33339C10.5926 6.95007 9.92326 7.43072 9.14014 7.71455C8.35703 7.99838 7.49532 8.07264 6.66397 7.92794C5.83262 7.78325 5.06898 7.4261 4.46961 6.90165C3.87025 6.3772 3.46207 5.70902 3.29671 4.98159C3.13134 4.25416 3.21621 3.50016 3.54059 2.81494C3.86496 2.12971 4.41427 1.54404 5.11906 1.13199C5.82384 0.719934 6.65244 0.5 7.50007 0.5C8.63671 0.5 9.7268 0.895088 10.5305 1.59835C11.3343 2.30161 11.7858 3.25544 11.7858 4.25Z" fill="#444444" />
              <path d="M10.5 8.9375H9.94085C9.17552 9.24628 8.34277 9.40618 7.5 9.40618C6.65723 9.40618 5.82448 9.24628 5.05915 8.9375H4.5C3.30661 8.93773 2.16217 9.35265 1.31831 10.091C0.474458 10.8294 0.000266293 11.8308 0 12.875L0 14.0938C0 14.4667 0.169323 14.8244 0.470721 15.0881C0.772119 15.3518 1.1809 15.5 1.60714 15.5H13.3929C13.8191 15.5 14.2279 15.3518 14.5293 15.0881C14.8307 14.8244 15 14.4667 15 14.0938V12.875C14.9997 11.8308 14.5255 10.8294 13.6817 10.091C12.8378 9.35265 11.6934 8.93773 10.5 8.9375Z" fill="#444444" />
            </g>
            <defs>
              <clipPath id="clip0_235_3067">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <input type="text" placeholder="matricola" onInput={(e) => matricola_set(e.target.value)} />
        </div>
        <div className="input-container">
          <svg width="15" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_235_3074)">
              <path d="M15 5.65628C15 8.50399 12.6915 10.8125 9.84375 10.8125C9.51504 10.8125 9.19365 10.7814 8.88202 10.7226L8.17854 11.514C8.11258 11.5882 8.03164 11.6476 7.94106 11.6883C7.85048 11.729 7.75231 11.75 7.65302 11.75H6.5625V12.9219C6.5625 13.3102 6.2477 13.625 5.85938 13.625H4.6875V14.7969C4.6875 15.1852 4.3727 15.5 3.98438 15.5H0.703125C0.314795 15.5 0 15.1852 0 14.7969V12.51C0 12.3235 0.0740918 12.1447 0.205928 12.0128L4.94622 7.2725C4.77855 6.76408 4.6875 6.22083 4.6875 5.65625C4.6875 2.80854 6.99601 0.500029 9.84372 0.5C12.6998 0.499971 15 2.80013 15 5.65628ZM9.84375 4.25C9.84375 5.02666 10.4733 5.65625 11.25 5.65625C12.0267 5.65625 12.6562 5.02666 12.6562 4.25C12.6562 3.47334 12.0267 2.84375 11.25 2.84375C10.4733 2.84375 9.84375 3.47334 9.84375 4.25Z" fill="#444444" />
            </g>
            <defs>
              <clipPath id="clip0_235_3074">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <input type="password" placeholder="password" onInput={(e) => pass_set(e.target.value)} />
        </div>
      </div>
      <a href="#" className="forgot-password">password dimenticata?</a>
      <button className="login-button" onClick={checkUser}>Accedi</button>
    </div>
  );
};

export default Login;
