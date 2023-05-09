import React, { useCallback, useEffect, useState } from "react";
import Spinner from "../components/Spiner";

export const ContextWetter = React.createContext();

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
    const [wetterData, setWetterData] = useState(null);
    const [wetterDataTag, setWetterDataTag] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [sprache, setSprache] = useState("de");
    const [ort, setOrt] = useState("Berlin");
  
    const wochenTageDe = [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
    ];
    const wochenTageAr = [
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
    ];
    const wochenTageEn = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const urlDay = `https://api.openweathermap.org/data/2.5/forecast?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`;

    console.log(wetterDataTag);
    const fetchData = useCallback(
        async function fetchWetter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWetterData(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error, "Ort ist nicht bekannt");
            }
            try {
                const response = await fetch(urlDay);
                const dataTag = await response.json();
                setWetterDataTag(dataTag);
                setIsLoading(false);
            } catch (error) {
                console.error(error, "Ort ist nicht bekannt");
            }
        },
        [url, urlDay]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ContextWetter.Provider
            value={{
                wochenTageAr,
                wochenTageDe,
                wochenTageEn,
                wetterDataTag,
                wetterData,
                isLoading,
                setOrt,
                ort,
                setSprache,
                sprache,
              
            }}
        >
            {children}
        </ContextWetter.Provider>
    );
}

export default ContextProvider;
