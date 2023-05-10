import { useContext, useEffect, useState } from "react";
import { ContextWetter } from "../context/ContextProvider";
import {iconWetter} from '../actions/globalVariable'//icon Funktion
import {
    faLocationDot,
    faSortUp,
    faSun,
    faSortDown,
} from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AktuellesWetter = () => {
    const { sprache, wetterData, wochenTageAr, wochenTageDe, wochenTageEn,isError } =
        useContext(ContextWetter);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);// rechnung von miele secunden
    const sunsetDate = new Date(sonnenUnterGang * 1000);// rechnung von miele secunden
    //bearbeitung die Tage in verschedene Sprachen
    const weekdayDe =
        sprache === "de"
            ? wochenTageDe[sunriseDate.getDay()]
            : sprache === "en"
            ? wochenTageEn[sunriseDate.getDay()]
            : wochenTageAr[sunriseDate.getDay()];
    // Sonnen Zeiten 
    function sonneZeiten() {
        setSonnenAufGang(wetterData.sys.sunrise);
        setSonnenUnterGang(wetterData.sys.sunset);
    }
    useEffect(() => {
        sonneZeiten();
    }, [sonnenAufGang]);


    return (
        <div className="display">
            
            {/* isError**  wenn keine data noch für handen sind  */}
            {!isError ? (
                <>
                    <div className="wetterdisplay">
                        <p>
                            {/* tag und datum  */}
                            {weekdayDe}{" "}
                            {sunriseDate
                                .toLocaleDateString("de-DE")
                                .slice(0, 5)}
                        </p>
                        <p className="gebiet">
                            <FontAwesomeIcon icon={faLocationDot} />{" "}
                            {wetterData.name}
                        </p>
                        <p className="temperatur">
                            {" "}
                            {wetterData.main.temp.toFixed()}
                            <span> °C</span>
                        </p>
                        <span>
                            {" "}
                            <img
                                className="img_tags_schau"
                                src={`${iconWetter(wetterData?.weather[0].icon)}`}
                                // iconWetter ist ein Function der den link von Icon ändert
                            />
                        </span>
                        <p className="wetter">
                            {" "}
                            {wetterData.weather[0].description}
                        </p>
                    </div>
                    <div className="sonne">
                        {sunriseDate.toLocaleTimeString()}{" "}
                        <FontAwesomeIcon icon={faSortUp} className="fa-2xs" />{" "}
                        <FontAwesomeIcon icon={faSun} />{" "}
                        <FontAwesomeIcon icon={faSortDown} className="fa-2xs" />{" "}
                        {sunsetDate.toLocaleTimeString()}
                    </div>
                </>
            ) : (
               ''
            )}
        </div>
    );
};
export default AktuellesWetter;
