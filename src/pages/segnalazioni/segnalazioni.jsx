import React, { useState, useEffect } from "react";
import "./segnalazioni.css";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";

const Segnalazioni = () => {
  const [searchValue, setsearchValue] = useState("");
  const [reports, setReports] = useState([
    {
      id: 2548635,
      status: "APERTO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      sanction: "IN CORSO...",
      amount: null,
    },
    {
      id: 3548495,
      status: "CHIUSO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      sanction: "€150",
      amount: 150,
    },
  ]);

  useEffect(() => {}, []);

  return (
    <>
      
      <main>
        <SearchBar onInput={setsearchValue} />
        <InfoBar
          testoInfo="Informazioni segnalazioni"
          nomeGreen="Aperte"
          valoreGreen="12"
          nomeGrey="Chiuse"
          valoreGrey="12"
        />
        <CardSegnalazione Segnalazioni={reports} />
      </main>
      <aside>
        <Filter />
      </aside>
    </>
  );
};

export default Segnalazioni;
