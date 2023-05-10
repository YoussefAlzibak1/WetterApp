import {
    faWind,
    faUmbrella,
    faTemperatureArrowUp,
    faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";

const Wetter = () => {
    const { wetterData } = useContext(ContextWetter);
    return (
        <div className="wetterdisplay2">
            {wetterData && wetterData.cod !== "404" ? (
                <>
                    <p>
                        <FontAwesomeIcon icon={faWind} />{" "}
                        {wetterData.wind.speed} km/h
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faUmbrella} />{" "}
                        {wetterData.main.humidity} %
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTemperatureArrowUp} />{" "}
                        {wetterData.main.temp_max.toFixed(0)} °C
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTemperatureArrowDown} />{" "}
                        {wetterData.main.temp_min.toFixed(0)} °C
                    </p>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default Wetter;
