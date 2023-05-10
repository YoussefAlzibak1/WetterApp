import React, { useCallback, useEffect, useState } from "react";
import Spinner from "../components/Spiner";
import {
    wochenTageAr,
    wochenTageDe,
    wochenTageEn,
} from "./../actions/globalVariable";

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

    console.log(wetterDataTag);
    const fetchData = useCallback(
        async function fetchWetter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.cod !== "404") {
                    setWetterData(data);
                    // console.log(wetterData);
                    setIsLoading(false);
                } else {
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
            console.log("-----", wetterData);
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
                isError,
                icon
            }}
        >
            {children}
        </ContextWetter.Provider>
    );
}

export default ContextProvider;
