import React, { useState } from "react";
import "./cardTicket.css";

const CardTicket = ({ statusTickets }) => {
  const [dropdownVisible, setDropdownVisible] = useState({});

  const toggleDropdown = (index) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  /* return (
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
  ); */
  return (
    <div className="container__cardTicket">
      {statusTickets.map(({ targa, stato }, index) => (
        <div key={index} className="ticket">
          <div className="targa">
            <span>Targa</span>
            {targa}
          </div>
          <div className="contianer__status">
            <div className={`${stato === "attivo" ? "green" : "red"} status`}>
              {stato}
            </div>
            <div className="svg__ticket" onClick={() => toggleDropdown(index)}>
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
          {dropdownVisible[index] && (
            <div className="dropdown">
              {/* Dropdown content goes here */}
              {/* <div className="dropdown-item">Option 1</div>
              <div className="dropdown-item">Option 2</div>
              <div className="dropdown-item">Option 3</div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardTicket;
