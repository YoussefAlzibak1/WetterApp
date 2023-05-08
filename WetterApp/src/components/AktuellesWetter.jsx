import { useContext, useEffect, useState } from "react";
import { ContextWetter } from "../context/ContextProvider";

const AktuellesWetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    // console.log(wetterData);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);
    const sunsetDate = new Date(sonnenUnterGang * 1000);
    const [icon, setIcon] = useState(null);
    useEffect(() => {
        if (wetterData) {
            switch (wetterData.weather[0].icon) {
                case "01d":
                    setIcon("http://openweathermap.org/img/wn/01d@2x.png");
                    break;
                case "02d":
                    setIcon("http://openweathermap.org/img/wn/02d@2x.png");
                    break;
                case "03d":
                    setIcon("http://openweathermap.org/img/wn/03d@2x.png");
                    break;
                case "04d":
                    setIcon("http://openweathermap.org/img/wn/04d@2x.png");
                    break;
                case "09d":
                    setIcon("http://openweathermap.org/img/wn/09d@2x.png");
                    break;
                case "10d":
                    setIcon("http://openweathermap.org/img/wn/10d@2x.png");
                    break;
                case "11d":
                    setIcon("http://openweathermap.org/img/wn/11d@2x.png");
                    break;
                case "13d":
                    setIcon("http://openweathermap.org/img/wn/13d@2x.png");
                    break;
                case "50d":
                    setIcon("http://openweathermap.org/img/wn/50d@2x.png");
                    break;
                default:
                    setIcon(null);
            }
        }
    }, [wetterData]);

    console.log(icon);
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
    console.log(sunriseDate.getDay());
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
        <div className="wetterdisplay display">
            {wetterData && wetterData.cod !== "404" ? (
                <>
                    <p>
                        {weekdayDe}{" "}
                        {sunriseDate.toLocaleDateString("de-DE").slice(0, 3)}
                    </p>
                    <p className="gebiet">
                        {sprache === "de"
                            ? "Ort:"
                            : sprache === "ar"
                            ? "موقع:"
                            : "Location:"}{" "}
                        {wetterData.name}
                    </p>

                    <p className="temperatur">
                        {" "}
                        <img
                            src={`${icon}`}
                            alt=""
                            style={{ width: "100px", zIndex: 9999 }}
                        />{" "}
                        {wetterData.main.temp}
                    </p>
                    <p className="wetter">
                        {" "}
                        {wetterData.weather[0].description}
                    </p>
                    <p>
                        {sprache === "de"
                            ? "Sonnenaufgang:"
                            : sprache === "ar"
                            ? "شروق الشمس:"
                            : "Sunrise:"}{" "}
                        {sunriseDate.toLocaleTimeString()}
                    </p>
                    <p>
                        {sprache === "de"
                            ? "Sonnenunteruntergang:"
                            : sprache === "ar"
                            ? "غروب الشمس:"
                            : "Sunset:"}{" "}
                        {sunsetDate.toLocaleTimeString()}
                    </p>
                </>
            ) : (
                <h2>
                    {" "}
                    {sprache === "de"
                        ? "Ort ist falsch"
                        : sprache === "ar"
                        ? "موقع خاطئ"
                        : " Location is wrong"}{" "}
                </h2>
            )}
        </div>
    );
};

export default AktuellesWetter;
