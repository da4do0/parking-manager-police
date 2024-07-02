import React, { useState, useEffect } from "react";
import "./segnalazioni.css";
import SearchBar from "../../components/seach-bar/searchBar";
import InfoBar from "../../components/info-bar/infoBar";
import CardSegnalazione from "../../components/card-segnalazione/cardSegnalazione";
import Filter from "../../components/filter/filter";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import {useLoginCk} from '../../hooks/login.hook';

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
const supabase = createClient(supabaseUrl, supabaseKey);

const Segnalazioni = () => {
  const [searchValue, setsearchValue] = useState("");
  const [reports, setReports] = useState([]);
  const [multaMin, multaMin_set] = useState();
  const [multaMax, multaMax_set] = useState();
  const [stato, stato_set] = useState();
  const [dataInizio, dataInizio_set] = useState();
  const [dataFine, dataFine_set] = useState();
  const navigate = useNavigate();
  const {matricola} = useLoginCk();

  useEffect(() => {
    if(matricola===''){
      navigate('/login');
    }
    searchAllData();
  }, []);

  const searchAllData = async () => {
    let { data, error } = await supabase
      .from("segnalazione_vigilanza")
      .select("*");
    if (data.length > 0) {
      setReports(data);
    }
  };

  return (
    <>
      <main>
        <aside>
          <Filter
            stato={stato_set}
            multaMin={multaMin_set}
            multaMax={multaMax_set}
            dataInizio={dataInizio_set}
            dataFine={dataFine_set}
          />
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
