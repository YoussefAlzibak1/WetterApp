import React, { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";

export const ContextIcon = React.createContext();

export default function IconWetter({ children }) {
  const { wetterData } = useContext(ContextWetter);

  let iconSrc = null;
  let iconAlt = null;

  switch (wetterData.weather[0].icon) {
    case "01d":
      iconSrc = "icon-01d.png";
      iconAlt = "Sunny";
      break;
    case "02d":
      iconSrc = "icon-02d.png";
      iconAlt = "Partly cloudy";
      break;
    case "03d":
      iconSrc = "icon-03.png";
      iconAlt = "Cloudy";
      break;
    case "04d":
      iconSrc = "icon-04.png";
      iconAlt = "Broken clouds";
      break;
    case "09d":
      iconSrc = "icon-09.png";
      iconAlt = "Shower rain";
      break;
    case "10d":
      iconSrc = "icon-10d.png";
      iconAlt = "Rain";
      break;
    case "10n":
      iconSrc = "icon-10n.png";
      iconAlt = "Rain night";
      break;
    case "11d":
      iconSrc = "icon-11.png";
      iconAlt = "Thunderstorm";
      break;
    case "13d":
      iconSrc = "icon-13.png";
      iconAlt = "Snow";
      break;
    case "50d":
      iconSrc = "icon-50.png";
      iconAlt = "Mist";
      break;
    default:
      break;
  }

  return (
    <ContextIcon.Provider value={{}}>
      {iconSrc && <img src={iconSrc} alt={iconAlt} />}
      {children}
    </ContextIcon.Provider>
  );
}