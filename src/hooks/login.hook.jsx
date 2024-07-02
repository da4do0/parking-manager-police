import React, { useState, createContext, useContext} from "react";
import { createClient } from "@supabase/supabase-js";

const LoginContext = createContext();

const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
const supabase = createClient(supabaseUrl, supabaseKey);

export const LoginChecker = ({ children }) => {
  const [matricola, setMatricola] = useState('');


  const updateMatricola = (matricolaNuova) => {
    setMatricola(matricolaNuova);
  };

  return (
    <LoginContext.Provider value={{ matricola, updateMatricola, setMatricola }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLoginCk = () => useContext(LoginContext);