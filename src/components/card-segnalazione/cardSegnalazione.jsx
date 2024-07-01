import React from "react";
import { FixedSizeList as List } from 'react-window';
import "./cardSegnalazione.css";

const CardSegnalazione = ({ Segnalazioni }) => {
  return (
    <div className="container__segnalazioni">
      
      {Segnalazioni.map(
        ({ id, stato, descrizione, id_agente
          , amount, id_area_parcheggio}) => 
          <div className="segnalazione">
            <div className="segnalazione__header">
              <div className="segnalazione__id">
                <span>ID</span>
                {id}
              </div>
              <div className="segnalazione__stato">
                {stato}
              </div>
            </div>


            <div className="segnalazione__descrizione">
              <span>
                {descrizione}
              </span>
            </div>

            <div className="segnalazione__footer">
              <div className="segnalazione__agente">
                <span>AGENTE</span>
                {id_agente}
              </div>
              <div className="segnalazione__zona">
                <span>ID ZONA</span>
                {id_area_parcheggio}
              </div>
              <div className="segnalazione__sanzione">
                <span>SANZIONE</span>
                €{amount}
              </div>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default CardSegnalazione;
