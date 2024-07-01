import React, { useState } from "react";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";
import CardTicket from "../../components/card-status-ticket/cardTicket";

const Parcheggi = () => {
  const [searchValue, setsearchValue] = useState("");
  const [arrayTickets, arrayTickets_set] = useState(
    [
    {
        "targa": "AB123CD",
        "stato": "attivo",
    },
    {
        "targa": "EF456GH",
        "stato": "scaduto",
    },
    {
        "targa": "IJ789KL",
        "stato": "attivo",
    },
    {
        "targa": "MN012OP",
        "stato": "scaduto"
    }
]);
  return (
    <>
      <main>
        <aside>
          <Filter />
        </aside>
        <section>
          <SearchBar onInput={setsearchValue} />
          <InfoBar
            testoInfo="Informazioni segnalazioni"
            nomeGreen="Aperte"
            valoreGreen="12"
            nomeRed="Scadute"
            valoreRed="10"
            nomeGrey="Chiuse"
            valoreGrey="12"
          />
          <CardTicket statusTickets={arrayTickets}/>
        </section>
      </main>
    </>
  );
};

export default Parcheggi;
