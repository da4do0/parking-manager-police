import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import './segnalazioni.css';
import Header from "../header/header";

const Segnalazioni = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([
    {
      id: 2548635,
      status: 'APERTO',
      description: 'Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...',
      agent: 2548635,
      sanction: 'IN CORSO...',
      amount: null,
    },
    {
      id: 3548495,
      status: 'CHIUSO',
      description: 'Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...',
      agent: 2548635,
      sanction: '€150',
      amount: 150,
    },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredReports = reports.filter(report =>
    report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <aside className="filtri">
        <h2>Filtri</h2>
        <div className="filter-options">
            <label>Stato</label>
          <div className='toggleAperte'>
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
      </aside>
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
            {filteredReports.map(report => (
            <div key={report.id} className="report-card">
                <div className="report-id">ID {report.id}</div>
                <div className={`report-status ${report.status.toLowerCase()}`}>{report.status}</div>
                <div className="report-description">{report.description}</div>
                <div className="report-agent">AGENTE {report.agent}</div>
                <div className="report-sanction">
                SANZIONE {report.sanction || `${report.amount}€`}
                </div>
            </div>
            ))}
        </div>
      </div>
      <div className="asideDestro">
      </div>
    </div>
  );
};

export default Segnalazioni;

