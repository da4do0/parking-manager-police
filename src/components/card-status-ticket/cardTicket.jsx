import React, { useState } from "react";
import "./cardTicket.css";

const CardTicket = () => {
  const statusTickets = [
    {
      targa: "AS 123 AB",
      stato: "scaduto",
      inizioSosta: "10:23",
      fineSosta: "11:23",
    },
    {
      targa: "BC 234 CD",
      stato: "attivo",
      inizioSosta: "09:00",
      fineSosta: "10:00",
    },
    {
      targa: "DE 345 EF",
      stato: "scaduto",
      inizioSosta: "08:30",
      fineSosta: "09:30",
    },
    {
      targa: "FG 456 GH",
      stato: "attivo",
      inizioSosta: "11:15",
      fineSosta: "12:15",
    },
    {
      targa: "HI 567 IJ",
      stato: "scaduto",
      inizioSosta: "12:00",
      fineSosta: "13:00",
    },
    {
      targa: "JK 678 KL",
      stato: "attivo",
      inizioSosta: "13:45",
      fineSosta: "14:45",
    },
    {
      targa: "LM 789 MN",
      stato: "scaduto",
      inizioSosta: "14:30",
      fineSosta: "15:30",
    },
    {
      targa: "NO 890 OP",
      stato: "attivo",
      inizioSosta: "15:00",
      fineSosta: "16:00",
    },
    {
      targa: "PQ 901 QR",
      stato: "scaduto",
      inizioSosta: "16:20",
      fineSosta: "17:20",
    },
    {
      targa: "RS 012 ST",
      stato: "attivo",
      inizioSosta: "17:10",
      fineSosta: "18:10",
    },
    {
      targa: "TU 123 UV",
      stato: "scaduto",
      inizioSosta: "18:00",
      fineSosta: "19:00",
    },
    {
      targa: "VW 234 WX",
      stato: "attivo",
      inizioSosta: "19:30",
      fineSosta: "20:30",
    },
    {
      targa: "XY 345 YZ",
      stato: "scaduto",
      inizioSosta: "20:15",
      fineSosta: "21:15",
    },
    {
      targa: "ZA 456 AB",
      stato: "attivo",
      inizioSosta: "21:00",
      fineSosta: "22:00",
    },
    {
      targa: "BC 567 CD",
      stato: "scaduto",
      inizioSosta: "22:30",
      fineSosta: "23:30",
    },
    {
      targa: "DE 678 EF",
      stato: "attivo",
      inizioSosta: "23:00",
      fineSosta: "00:00",
    },
    {
      targa: "FG 789 GH",
      stato: "scaduto",
      inizioSosta: "00:15",
      fineSosta: "01:15",
    },
    {
      targa: "HI 890 IJ",
      stato: "attivo",
      inizioSosta: "01:45",
      fineSosta: "02:45",
    },
    {
      targa: "JK 901 KL",
      stato: "scaduto",
      inizioSosta: "02:00",
      fineSosta: "03:00",
    },
    {
      targa: "LM 012 MN",
      stato: "attivo",
      inizioSosta: "03:30",
      fineSosta: "04:30",
    },
    {
      targa: "NO 123 OP",
      stato: "scaduto",
      inizioSosta: "04:15",
      fineSosta: "05:15",
    },
    {
      targa: "PQ 234 QR",
      stato: "attivo",
      inizioSosta: "05:00",
      fineSosta: "06:00",
    },
  ];
  const [dropdownVisible, setDropdownVisible] = useState({});

  const toggleDropdown = (index) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container__cardTicket">
      {statusTickets.map(({ targa, stato, inizioSosta, fineSosta }, index) => (
        <div key={index} className="ticket">
          <div className="ticket-header">
            <div className="targa">
              <span>Targa</span>
              {targa}
            </div>
            <div className="contianer__status">
              <div className={`${stato === "attivo" ? "green" : "red"} status`}>
                {stato.toUpperCase()}
              </div>
              <div
                className="svg__ticket"
                onClick={() => toggleDropdown(index)}
              >
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
          <div className={`dropdown ${dropdownVisible[index] ? "show" : ""}`}>
            <div className="dropdown-item__container">
              <div className="dropdown-item">
                <div className="sosta__text">
                  <span>Inizio sosta</span>
                  <div className="sosta__svg">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 10.625H8.125V6.875H6.875V10.625ZM7.5 5.625C7.67708 5.625 7.82552 5.5651 7.94531 5.44531C8.0651 5.32552 8.125 5.17708 8.125 5C8.125 4.82292 8.0651 4.67448 7.94531 4.55469C7.82552 4.43489 7.67708 4.375 7.5 4.375C7.32292 4.375 7.17448 4.43489 7.05469 4.55469C6.93489 4.67448 6.875 4.82292 6.875 5C6.875 5.17708 6.93489 5.32552 7.05469 5.44531C7.17448 5.5651 7.32292 5.625 7.5 5.625ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75ZM7.5 12.5C8.89583 12.5 10.0781 12.0156 11.0469 11.0469C12.0156 10.0781 12.5 8.89583 12.5 7.5C12.5 6.10417 12.0156 4.92187 11.0469 3.95312C10.0781 2.98437 8.89583 2.5 7.5 2.5C6.10417 2.5 4.92187 2.98437 3.95312 3.95312C2.98437 4.92187 2.5 6.10417 2.5 7.5C2.5 8.89583 2.98437 10.0781 3.95312 11.0469C4.92187 12.0156 6.10417 12.5 7.5 12.5Z"
                        fill="#909090"
                      />
                    </svg>
                  </div>
                </div>
                <span>{inizioSosta}</span>
              </div>
              <div className="dropdown-item">
                <div className="sosta__text">
                  <span>Fine sosta</span>
                  <div className="sosta__svg">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 10.625H8.125V6.875H6.875V10.625ZM7.5 5.625C7.67708 5.625 7.82552 5.5651 7.94531 5.44531C8.0651 5.32552 8.125 5.17708 8.125 5C8.125 4.82292 8.0651 4.67448 7.94531 4.55469C7.82552 4.43489 7.67708 4.375 7.5 4.375C7.32292 4.375 7.17448 4.43489 7.05469 4.55469C6.93489 4.67448 6.875 4.82292 6.875 5C6.875 5.17708 6.93489 5.32552 7.05469 5.44531C7.17448 5.5651 7.32292 5.625 7.5 5.625ZM7.5 13.75C6.63542 13.75 5.82292 13.5859 5.0625 13.2578C4.30208 12.9297 3.64062 12.4844 3.07812 11.9219C2.51562 11.3594 2.07031 10.6979 1.74219 9.9375C1.41406 9.17708 1.25 8.36458 1.25 7.5C1.25 6.63542 1.41406 5.82292 1.74219 5.0625C2.07031 4.30208 2.51562 3.64062 3.07812 3.07812C3.64062 2.51562 4.30208 2.07031 5.0625 1.74219C5.82292 1.41406 6.63542 1.25 7.5 1.25C8.36458 1.25 9.17708 1.41406 9.9375 1.74219C10.6979 2.07031 11.3594 2.51562 11.9219 3.07812C12.4844 3.64062 12.9297 4.30208 13.2578 5.0625C13.5859 5.82292 13.75 6.63542 13.75 7.5C13.75 8.36458 13.5859 9.17708 13.2578 9.9375C12.9297 10.6979 12.4844 11.3594 11.9219 11.9219C11.3594 12.4844 10.6979 12.9297 9.9375 13.2578C9.17708 13.5859 8.36458 13.75 7.5 13.75ZM7.5 12.5C8.89583 12.5 10.0781 12.0156 11.0469 11.0469C12.0156 10.0781 12.5 8.89583 12.5 7.5C12.5 6.10417 12.0156 4.92187 11.0469 3.95312C10.0781 2.98437 8.89583 2.5 7.5 2.5C6.10417 2.5 4.92187 2.98437 3.95312 3.95312C2.98437 4.92187 2.5 6.10417 2.5 7.5C2.5 8.89583 2.98437 10.0781 3.95312 11.0469C4.92187 12.0156 6.10417 12.5 7.5 12.5Z"
                        fill="#909090"
                      />
                    </svg>
                  </div>
                </div>
                <span>{fineSosta}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTicket;
