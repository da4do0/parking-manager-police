import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./segnalazioni.css";
import Header from "../header/header";

const Segnalazioni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reports, setReports] = useState([
    {
      id: 2548635,
      status: "APERTO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      sanction: "IN CORSO...",
      amount: null,
    },
    {
      id: 3548495,
      status: "CHIUSO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      sanction: "€150",
      amount: 150,
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  {
    /* <div className="container">
    <div className="filtri">
      <h2>Filtri</h2>
      <div className="filter-options">
        <label>Stato</label>
        <div className="toggleAperte">
          <button>Aperte</button>
          <button>Chiuse</button>
        </div>
        <label>Multa</label>
        <input type="text" value="123€" readOnly />
        <input type="text" placeholder="...€" />
        <label>Data e ora</label>
        <input type="date" />
        <input type="date" />
      </div>
    </div>
    <div>
      <div className="filtroCerca">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="parking-info">
          <p>Informazioni parcheggio:</p>
          <div>Totali: 50</div>
          <div>Occupati: 23</div>
          <div>Liberi: 27</div>
          <p>Informazioni pagamenti:</p>
          <div>Attivi: 12</div>
          <div>Scaduto: 10</div>
          <div>Altri: 12</div>
        </div>
      </div>
      <div className="report-list">
          
      </div>
    </div>
    <div className="asideDestro"></div>
  </div> */
  }
  const filteredReports = reports.filter((report) =>
    report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main>
        <div className="container__search">
          <input type="text" placeHolder="Cerca" />
          <div className="search__svg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_114_30"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_114_30)">
                <path
                  d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Segnalazioni;
