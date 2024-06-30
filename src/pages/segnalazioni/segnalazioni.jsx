import React, { useState, useEffect } from "react";
import "./segnalazioni.css";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";

const Segnalazioni = () => {
  const [searchValue, setsearchValue] = useState("");
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

  useEffect(() => {}, []);

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
  return (
    <>
      <main>
        <SearchBar onInput={setsearchValue} />
        <InfoBar
          testoInfo="Informazioni segnalazioni"
          nomeGreen="Aperte"
          valoreGreen="12"
          nomeGrey="Chiuse"
          valoreGrey="12"
        />
        <CardSegnalazione Segnalazioni={reports} />
      </main>
    </>
  );
};

export default Segnalazioni;
