import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";

const Wetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    return (

        <div className="wetterdisplay2 display">
            {wetterData && wetterData.cod !== "404" ? (
                <>
                    <p>
                    <FontAwesomeIcon icon={faWind} />
                        {/* {sprache === "de"
                            ? "Windgeschwindigkeit: "
                            : sprache === "ar"
                            ? "سرعة الرياح:"
                            : "Wind Speed:"} */}
                        {" "}{wetterData.wind.speed} km/h
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faUmbrella} />
                        {" "}{wetterData.main.humidity} %
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faTemperatureArrowUp} />
                        {" "}
                        {wetterData.main.temp_max} °C
                    </p>
                    <p>
                    <FontAwesomeIcon icon={faTemperatureArrowDown} />
                        {" "}
                        
                        {wetterData.main.temp_min} °C
                    </p>
                </>
            ) : (
             ''
            )}

        </div>
    );
};

export default Wetter;
