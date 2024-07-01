import React, { useState, useEffect } from "react";
import "./segnalazioni.css";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";
import { createClient } from "@supabase/supabase-js";

const Segnalazioni = () => {
  const [searchValue, setsearchValue] = useState("");
  const [reports, setReports] = useState([
    {
      id: 2548635,
      status: "APERTO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      amount: null,
    },
    {
      id: 3548495,
      status: "CHIUSO",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vel quis tempus convallis pulvinar quis montes. Nunc integer lorem lacus nullam sit aliquam faucibus. Imperdiet cursus blandit enim vesti...",
      agent: 2548635,
      amount: 150,
    },
  ]);

  const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {searchAllData()}, [searchValue]);

  const searchAllData = async () => {
    console.log("first")
    let { data, error } = await supabase
      .from("segnalazione_vigilanza")
      .select("*");
    if(data.length > 0){
      setReports(data);
    }
    console.log(data);
    console.log(error);
  };

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
            nomeGrey="Chiuse"
            valoreGrey="12"
          />
          <CardSegnalazione Segnalazioni={reports} />
        </section>
      </main>
    </>
  );
};

export default Segnalazioni;
