import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";
const Wetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    return (
        <div className="wetterdisplay2 display">
            {wetterData && wetterData.cod !== "404" ? (
                <>
                    <p>
                        {sprache === "de"
                            ? "Windgeschwindigkeit:"
                            : sprache === "ar"
                            ? "سرعة الرياح:"
                            : "Wind Speed:"}
                        {wetterData.wind.speed},
                    </p>
                    <p>
                        {" "}
                        {sprache === "de"
                            ? "Luftfreuchtigkeit:"
                            : sprache === "ar"
                            ? "رطوبة الجو:"
                            : "Air Humidity :"}{" "}
                        {wetterData.main.humidity}
                    </p>
                    <p>
                        {" "}
                        {sprache === "de"
                            ? "Höchste Temperatur:"
                            : sprache === "ar"
                            ? "أقصى درجة حرارة:"
                            : "Max Temperature:"}{" "}
                        {wetterData.main.temp_max}
                    </p>
                    <p>
                        {" "}
                        {sprache === "de"
                            ? "Niedrigste Temperatur:"
                            : sprache === "ar"
                            ? "أقل درجة حرارة:"
                            : "Min Temperature:"}
                        {wetterData.main.temp_min}
                    </p>
                </>
            ) : (
             ''
            )}
        </div>
    );
};

export default Wetter;
