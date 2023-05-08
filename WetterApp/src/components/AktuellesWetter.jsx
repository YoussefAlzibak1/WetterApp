import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { ContextWetter } from "../context/ContextProvider";

const AktuellesWetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    // console.log(wetterData);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);
    const sunsetDate = new Date(sonnenUnterGang * 1000);

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

    const weekdayDe =
        sprache === "de"
            ? wochenTageDe[sunriseDate.getDay()]
            : sprache === "en"
            ? wochenTageEn[sunriseDate.getDay()]
            : wochenTageAr[sunriseDate.getDay()];

    useEffect(() => {
        function sonneZeiten() {
            setSonnenAufGang(wetterData.sys.sunrise);
            setSonnenUnterGang(wetterData.sys.sunset);
        }
        sonneZeiten();
    }, [sonnenAufGang]);

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
                        <FontAwesomeIcon icon={faLocationDot} />
                        {" "}
                            {wetterData.name}</p>
                        <p className="temperatur">
                            {" "}
                            {wetterData.main.temp.toFixed(0)}
                            <span> °C</span>
                        </p>
                        <p className="wetter">
                            {" "}
                            {wetterData.weather[0].description}
                        </p>
                    </div>
                    <div className="sonne">
                        {sunriseDate.toLocaleTimeString()}{" "}
                        <FontAwesomeIcon icon={faArrowUp} />{" "}
                        {/* {sprache === "de"
                            ? "Sonnenaufgang:"
                            : sprache === "ar"
                            ? "شروق الشمس:"
                            : "Sunrise:"}{" "} */}
                        <FontAwesomeIcon icon={faSun} />{" "}
                        <FontAwesomeIcon icon={faArrowDown} />{" "}
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
