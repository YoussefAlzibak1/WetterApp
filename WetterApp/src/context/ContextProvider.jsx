import React, { useCallback, useEffect, useState } from "react";
import Spinner from "../components/Spiner";
import { iconWetter } from './../actions/globalVariable'
import {
    wochenTageAr,
    wochenTageDe,
    wochenTageEn,
} from "./../actions/TagesData";
export const ContextWetter = React.createContext();
// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
    const [isError, setError] = useState(false);
    const [wetterData, setWetterData] = useState(null);
    const [wetterDataTag, setWetterDataTag] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [sprache, setSprache] = useState("de");
    const [ort, setOrt] = useState("Berlin");
    const urlDay = `https://api.openweathermap.org/data/2.5/forecast?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`;

   
    const fetchData = useCallback(
        async function fetchWetter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                //Wenn die Daten nicht geladen werden können,
                // wird ein Objekt zurückgegeben, das den Code 404 enthält
                if (data.cod !== "404") {
                    setWetterData(data);
                    setIsLoading(false);
                } else {
                    // Error-Funktion zum Überspringen des nächsten Fetch
                    throw new Error();
                }
                const response2 = await fetch(urlDay);
                const dataTag = await response2.json();
                setWetterDataTag(dataTag);
                setIsLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                console.error(error, "Ort ist nicht bekannt");
            }
        },
        [url, urlDay]
    );
// Update der Ergebnisse alle 30 Minuten und bei Änderung des Links.
    useEffect(() => {
        const updateFunction = () => {
            fetchData()
        }
        fetchData()
       // Callback, Zeit wird in Millisekunden berechnet
       // setInterval - JavaScript-Funktion 
       //zum periodischen Ausführen von asynchronen
       // Funktionen zu bestimmten Zeiten
        const interval = setInterval(updateFunction, 30 * 60 * 1000);
        //Zurücksetzen der Interval-Funktion
        return () => clearInterval(interval);
    }, [fetchData]);


//Loding Spinner
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ContextWetter.Provider
            value={{
                setOrt,
                setSprache,
                iconWetter,
                wochenTageAr,
                wochenTageDe,
                wochenTageEn,
                wetterDataTag,
                wetterData,
                isLoading,
                ort,
                sprache,
                isError,
            }}
        >
            {children}
        </ContextWetter.Provider>
    );
}

export default ContextProvider;
