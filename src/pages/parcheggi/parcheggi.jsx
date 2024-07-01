import React, { useState } from "react";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";
import CardTicket from "../../components/card-status-ticket/cardTicket";

const Parcheggi = () => {
  const [searchValue, setsearchValue] = useState("");
  const [arrayTickets, arrayTickets_set] = useState([]);
  const [stato, stato_set] = useState();
  const [dataInizio, dataInizio_set] = useState();
  const [dataFine, dataFine_set] = useState();

  const queryMod = () =>{
    
  }

  return (
    <>
      <main>
        <aside>
          <Filter 
            stato={stato_set}
            dataInizio={dataInizio_set}
            dataFine={dataFine_set}/>
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
            valoreGrey="14"
          />
          <CardTicket statusTickets={arrayTickets}/>
        </section>
      </main>
    </>
  );
};

export default Parcheggi;
