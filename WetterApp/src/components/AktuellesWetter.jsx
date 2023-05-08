import { useContext ,useEffect,useState} from "react";
import { ContextWetter } from "../context/ContextProvider";





const AktuellesWetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    // console.log(wetterData);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);
    const sunsetDate = new Date(sonnenUnterGang * 1000);


    useEffect(()=>{ 
        function naaae() {
       
  
            setSonnenAufGang(wetterData.sys.sunrise)
            setSonnenUnterGang(wetterData.sys.sunset)
        
        }
        naaae() 
},[sonnenAufGang])
 
    
  console.log(sunriseDate);
    return (
        <div>
            {wetterData ? (
                <>
                    <p>{sunriseDate.toString().slice(0,10)}</p>
                    <p>
                    {sprache === 'de' ? 'Ort:' : sprache === 'ar' ? 'موقع:' : 'Location:'}  {wetterData.name}
                    </p>
                    <p> {sprache === 'ar' ? 'درجة حرارة:' :  'Temp::'} {wetterData.main.temp}</p>
                    <p> {sprache === 'de' ? 'Beschreibung:' : ':'} {wetterData.weather[0].description}</p>
                    <p>Sonnenaufgang: {sunriseDate.toLocaleTimeString() }</p>


                    <p>Sonnenunterntergang: {sunsetDate.toLocaleTimeString() }</p>
                </>
            ) : (
                <h2> Ort ist Falsche </h2>
            )}
        </div>
    );
};

export default AktuellesWetter;
