import React from "react";
import "./cardSegnalazione.css";

const CardSegnalazione = ({ Segnalazioni }) => {
  return (
    <div className="container__segnalazioni">
      {Segnalazioni.map(
        ({ id, status, description, agent, sanction }) => 
          <div className="segnalazione">
            <div className="segnalazione__header">
              <div className="segnalazione__id">
                <span>ID</span>
                {id || "000000"}
              </div>
              <div className="segnalazione__stato">
                <span>{status || "aperto"}</span>
              </div>
            </div>

            <div className="segnalazione__descrizione">
              <span>
                {description ||
                  "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"}
              </span>
            </div>

            <div className="segnalazione__footer">
              <div className="segnalazione__agente">
                <span>AGENTE</span>
                {agent || "003002"}
              </div>
              <div className="segnalazione__sanzione">
                <span>SANZIONE</span>
                {sanction || "IN CORSO..."}
              </div>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default CardSegnalazione;
