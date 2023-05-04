import React, { useEffect, useState } from "react";

export const ContextWetter = React.createContext();

function ContextProvider({ children }) {
    const [wetterData, setWetterData] = useState("");

    // const [aktuellerOrt, setAktuellerOrt] = useState('')
    // const [aktuellesWetter, setAktuellesWetter] = useState('')
    // const [tagSchau, setTagSchau] = useState('')
    // const [stundenWetter, setStundenWetter] = useState('')

    // const Apikey='35359f393fc9175c0503c48ce272fbad'

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=Berlin&lang=de&appid=33a793b29df1394a38e1a1b8c9bc0eda&units=metric";

    console.log(wetterData);
    useEffect(() => {
        async function fetchWetter() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWetterData(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchWetter();
    }, []);

    return (
        <ContextWetter.Provider value={{ wetterData }}>
            {children}
        </ContextWetter.Provider>
    );
}

export default ContextProvider;
