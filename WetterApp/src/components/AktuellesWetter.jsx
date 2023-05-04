import React, { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";

const AktuellesWetter = () => {
    const { wetterData } = useContext(ContextWetter);
    // console.log(wetterData);

    return (
        <div>
            <p>Ort: {wetterData.name}</p>
           {/* <p>Temperature: {wetterData.sys.country}</p> */}
            
        </div>
    );
};

export default AktuellesWetter;
