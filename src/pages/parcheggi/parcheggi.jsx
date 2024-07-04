import React, { useState, useEffect } from "react";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";
import CardTicket from "../../components/card-status-ticket/cardTicket";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useLoginCk } from "../../hooks/login.hook";

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
const supabase = createClient(supabaseUrl, supabaseKey);


const Parcheggi = () => {
  const [searchValue, setsearchValue] = useState("");
  const [arrayTickets, arrayTickets_set] = useState([]);
  const [stato, stato_set] = useState();
  const [dataInizio, dataInizio_set] = useState();
  const [dataFine, dataFine_set] = useState();
  const navigate = useNavigate();
  const { matricola } = useLoginCk();

  const queryMod = async () => {
    if (stato == null) {
      let { data, error } = await supabase
        .from("segnalazione_vigilanza")
        .select("*");
        arrayTickets_set(data);
    }else{
      if(stato==="aperto"){
        let { data, error } = await supabase
          .from("segnalazione_vigilanza")
          .select("*")
          .eq("stato", "ATTIVO");
        arrayTickets_set(data);
      }else{
        let { data, error } = await supabase
          .from("segnalazione_vigilanza")
          .select("*")
          .eq("stato", "scaduto");
        arrayTickets_set(data);
      }
    }
  };

  return (
    <>
      <main>
        <aside>
          <Filter
          statovalue={stato}
            stato={stato_set}
            dataInizio={dataInizio_set}
            dataFine={dataFine_set}
            searchDataStatus={queryMod}
          />
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
          <CardTicket statusTickets={arrayTickets} />
        </section>
      </main>
    </>
  );
};

export default Parcheggi;
