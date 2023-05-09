import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";
const FuenfTagesVorschau = () => {
    const { wetterDataTag, sprache, wochenTageAr, wochenTageDe, wochenTageEn } =
        useContext(ContextWetter);

    const iconFuenfTage = (icen) => {
        return `http://openweathermap.org/img/wn/${icen}@2x.png`;
    };

    const filteredWetterData = wetterDataTag?.list
        .slice(0, 42)
        .filter((_, index) => index % 9 === 0);
    // console.log(filteredWetterData);
    const getDayOfWeek = (dateString) => {
        const daysOfWeek =
            sprache === "en"
                ? [...wochenTageEn]
                : sprache === "de"
                ? [...wochenTageDe]
                : [...wochenTageAr];
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    };
    if (!wetterDataTag || wetterDataTag.cod === "404") {
        return null
    }
    return (
        <div className="fuenftageslink display">
            <div className="wetterdata-countener">
                {filteredWetterData?.map((wetterData, index) => (
                    <div key={index} className="wetterdata">
                        <div className="wetterdata-item">
                            <p>{getDayOfWeek(wetterData.dt_txt)}</p>
                        </div>
                        <img
                            className="img_fuenf_tage"
                            src={`${iconFuenfTage(wetterData.weather[0].icon)}`}
                            alt=""
                        />
                        <div className="wetterdata-item">
                            <p>{wetterData.main.temp.toFixed()} °C</p>
                        </div>
                        <div className="wetterdata-item">
                            <p>{wetterData.weather[0].description}</p>
                        </div>
                        <div className="wetterdata-item">
                            <p>{wetterData.wind.speed} km/h</p>
                        </div>
                    </div>
                ))}
            </div>

            <p>
                {/* {sprache === "de"
                    ? "Fünf Tages Wettervorschau"
                    : sprache === "ar"
                    ? "توقعات الطقس لمدة خمسة أيام"
                    : "Five day weather forecast"} */}
            </p>
        </div>
    );
};

export default FuenfTagesVorschau;
