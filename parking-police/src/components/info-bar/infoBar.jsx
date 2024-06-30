import React from "react";
import "./infoBar.css";

const InfoBar = ({
  testoInfo,
  nomeGreen,
  valoreGreen,
  nomeRed,
  valoreRed,
  nomeGrey,
  valoreGrey,
}) => {
  return (
    <div className="container__status">
      <div className="status__name">
        <span>{testoInfo}</span>
      </div>
      <div className="container__values">
        <div
          className={`${
            nomeGreen === undefined || valoreGreen === undefined
              ? "none"
              : "values__green"
          }`}
        >
          <span>{`${nomeGreen} ${valoreGreen}`}</span>
        </div>
        <div
          className={`${
            nomeRed === undefined || valoreRed === undefined
              ? "none"
              : "values__red"
          }`}
        >
          <span>{`${nomeRed} ${valoreRed}`}</span>
        </div>
        <div
          className={`${
            nomeGrey === undefined || valoreGrey === undefined
              ? "none"
              : "values__grey"
          }`}
        >
          <span>{`${nomeGrey} ${valoreGrey}`}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
