import { useContext, useEffect, useState } from "react";
import { ContextWetter } from "../context/ContextProvider";
import {
    faLocationDot,
    faSortUp,
    faSun,
    faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AktuellesWetter = () => {
    const { sprache, wetterData, wochenTageAr, wochenTageDe, wochenTageEn, icon } =
        useContext(ContextWetter);

    // console.log(wetterData);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);
    const sunsetDate = new Date(sonnenUnterGang * 1000);
    const [iconTag] = useState(
        `http://openweathermap.org/img/wn/${wetterData?.weather[0].icon}@2x.png`
    );

    console.log("ooooooooooooo",iconTag);

    function sonneZeiten() {
        setSonnenAufGang(wetterData.sys.sunrise);
        setSonnenUnterGang(wetterData.sys.sunset);
    }

    // console.log("_________", wetterData);

    useEffect(() => {
        sonneZeiten();
    }, [sonnenAufGang]);

    const weekdayDe =
        sprache === "de"
            ? wochenTageDe[sunriseDate.getDay()]
            : sprache === "en"
            ? wochenTageEn[sunriseDate.getDay()]
            : wochenTageAr[sunriseDate.getDay()];

    return (
        <div className="display">
            {wetterData && wetterData.cod !== "404" ? (
                <>
                    <div className="wetterdisplay">
                        <p>
                            {weekdayDe}{" "}
                            {sunriseDate
                                .toLocaleDateString("de-DE")
                                .slice(0, 3)}
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
                                src={`${icon}`}
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
                <h2>
                    {" "}
                    {sprache === "de"
                        ? "Ort ist nicht bekannt"
                        : sprache === "ar"
                        ? "موقع خاطئ"
                        : "wrong location"}{" "}
                </h2>
            )}
        </div>
    );
};
export default AktuellesWetter;
