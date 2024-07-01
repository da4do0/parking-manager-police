import React from "react";
import "./cardTicket.css";

const CardTicket = ({ statusTickets }) => {
  return (
    <div className="container__cardTicket">
      {statusTickets.map(({ targa, stato }) => (
        <div className="ticket">
          <div className="targa">
            <span>Targa</span>
            {targa}
          </div>
          <div className="contianer__status">
            <div className={`${stato == "attivo" ? "green" : "red"} status`}>
              {stato}
            </div>
            <div className="svg__ticket">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.5L6 7.5L0 1.5L1.4 0.0999999L6 4.7L10.6 0.0999999L12 1.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTicket;
