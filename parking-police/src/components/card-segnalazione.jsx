import React from "react";

const CardSegnalazione = ({}) => {
  return (
    <div className="segnalazione">
      <div className="segnalazione__header">
        <div className="segnalazione__id">
          <span>ID</span>
          {idSegnalazione}
        </div>
        <div className="segnalazione__stato">{stato}</div>
      </div>

      <div className="segnalazione__descrizione">
        <span>
          {descrizione ||
            "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"}
        </span>
      </div>
      <div className="segnalazione__footer">
        <div className="segnalazione__agente">
            <span>AGENTE</span>
            {idAgente}
        </div>
        <div className="segnalazione__sanzione">
            <span>SANZIONE</span>
            {sanzione}
        </div>
      </div>
    </div>
  );
};

export default CardSegnalazione;
