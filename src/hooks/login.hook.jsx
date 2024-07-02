import React, { useState, createContext, useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const LoginContext = createContext();

export const LoginChecker = ({ children }) => {
  const [matricola, setMatricola] = useState('');

  const supabaseUrl = "https://yuyyujadubndgfpxauug.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const updateMatricola = (matricolaNuova) => {
    setMatricola(matricolaNuova);
  };

  return (
    <LoginContext.Provider value={{ matricola, updateMatricola, setMatricola }}>
      {children}
    </LoginContext.Provider>
  );
};

/* export const useLoginChecker = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginChecker must be used within a LoginChecker");
  }
  return context.matricola;
};

export const useUpdateMatricola = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useUpdateMatricola must be used within a LoginChecker");
  }
  return context.updateMatricola;
}; */

export const useLoginCk = () => useContext(LoginContext);