import React from "react";
import './filter.css';

const Filter = ({}) => {
  return (
    <div className="filter">
      <span>Filtri</span>
      <div className="status">
        <span>Stato</span>
        <div className="status-button__container">
        <button>
          <span>Aperte</span>
        </button>
        <button>
          <span>Chiuse</span>
        </button>
        </div>
      </div>
      <div className="multa">
        <span>Multa</span>
        <div className="multa-button__container">
          <div className="multa__min">
            <div className="svg__euro">
              <span>€</span>
            </div>
            <input type="text" name="multaMin" id="multaMin" />
          </div>
          <div className="multa__max">
            <div className="svg__euro">
              <span>€</span>
            </div>
            <input type="text" name="multaMax" id="multaMax" />
          </div>
        </div>
      </div>
      <div className="data-ora">
        <span>Data e ora</span>
        <div className="data-ora__input">
          <input type="date" name="" id="" />
          <span>-</span>
          <input type="date" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Filter;