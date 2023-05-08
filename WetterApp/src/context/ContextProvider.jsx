import React, { useCallback, useEffect, useState} from "react";
import Spinner from "../components/Spiner";

export const ContextWetter = React.createContext();

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
    const [wetterData, setWetterData] = useState("");
    const [wetterDataTag, setWetterDataTag] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [sprache, setSprache] = useState("de");
    const [ort, setOrt] = useState("Berlin");
    console.log(wetterDataTag);
console.log();
    // const [aktuellesWetter, setAktuellesWetter] = useState('')
    // const [tagSchau, setTagSchau] = useState('')
    // const [stundenWetter, setStundenWetter] = useState('')

    // const Apikey='35359f393fc9175c0503c48ce272fbad'
const urlDay=`https://api.openweathermap.org/data/2.5/forecast?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ort}&lang=${sprache}&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric`;

    console.log(wetterData);
    const fetchData = useCallback(
        async function fetchWetter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWetterData(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error,'Ort ist nicht bekannt');
            }
            try {
                const response = await fetch(urlDay);
                const dataTag = await response.json();
                setWetterDataTag(dataTag);
                setIsLoading(false);
            } catch (error) {
                console.error(error,'Ort ist nicht bekannt');
            }
        },
        [url]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ContextWetter.Provider
            value={{ wetterData, isLoading, setOrt, ort, setSprache, sprache }}
        >
            {children}
        </ContextWetter.Provider>
    );
}

export default ContextProvider;
