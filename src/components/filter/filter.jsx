import React from "react";
import "./filter.css";

const Filter = ({statovalue, multaMin, multaMax, stato, dataInizio, dataFine , searchDataStatus}) => {
  
  return (
    <div className="filter">
      <span>Filtri</span>
      {stato ? (
        <div className="status">
          <span>Stato</span>
          <div className="status-button__container">
            <button className={`${statovalue==="aperto" ? "active-btn":""}`} onClick={()=>stato("aperto")}>
              <span>Aperte</span>
            </button>
            <button className={`${statovalue==="chiuso" ? "active-btn":""}`} onClick={()=>stato("chiuso")}>
              <span>Chiuse</span>
            </button>
            <button  onClick={()=>stato(null)}>
              <span>Reset</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {(multaMax && multaMin) ? (
        <div className="multa">
          <span>Multa</span>
          <div className="multa-button__container">
            <div className="multa__min">
              <div className="svg__euro">
                <span>€</span>
              </div>
              <input type="number" name="multaMin" id="multaMin" onInput={(e)=>multaMin(e.target.value)}/>
            </div>
            <div className="multa__max">
              <div className="svg__euro">
                <span>€</span>
              </div>
              <input type="number" name="multaMax" id="multaMax" onInput={(e)=>multaMax(e.target.value)}/>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {(dataFine && dataInizio) ? (
        <div className="data-ora">
          <span>Data e ora</span>
          <div className="data-ora__input">
            <input type="date" name="" id="" />
            <span>-</span>
            <input type="date" name="" id="" />
          </div>
        </div>
      ) : (
        ""
      )}
      <button onClick={searchDataStatus}>Applica</button>
    </div>
  );
};

export default Filter;
