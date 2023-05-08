import { useContext ,useEffect,useState} from "react";
import { ContextWetter } from "../context/ContextProvider";





const AktuellesWetter = () => {
    const { sprache, wetterData } = useContext(ContextWetter);
    // console.log(wetterData);
    const [sonnenAufGang, setSonnenAufGang] = useState(0);
    const [sonnenUnterGang, setSonnenUnterGang] = useState(0);
    const sunriseDate = new Date(sonnenAufGang * 1000);
    const sunsetDate = new Date(sonnenUnterGang * 1000);

console.log(wetterData.cod,'77777777')
    useEffect(()=>{ 
        function sonneZeiten() {
       
  
            setSonnenAufGang(wetterData.sys.sunrise)
            setSonnenUnterGang(wetterData.sys.sunset)
        
        }
        sonneZeiten() 
},[sonnenAufGang])
 
    

    return (
        <div>
            {wetterData && wetterData.cod !== '404' ? (
                <>
                    <p>{sunriseDate.toString().slice(0,10)}</p>
                    <p>
                    {sprache === 'de' ? 'Ort:' : sprache === 'ar' ? 'موقع:' : 'Location:'}  { wetterData.name}
                    </p>
                    <p>  {wetterData.main.temp}</p>
                    <p>  {wetterData.weather[0].description}</p>
                    <p>{sprache === 'de' ? 'Sonnenaufgang:' : sprache === 'ar'?'شروق الشمس:' :'Sunrise:'} {sunriseDate.toLocaleTimeString() }</p>
                    <p>{sprache === 'de' ? 'Sonnenunteruntergang:' : sprache === 'ar'?'غروب الشمس:' :'Sunset:'} {sunsetDate.toLocaleTimeString() }</p>
                </>
            ) : (
                <h2> {sprache === 'de' ? 'Ort ist Falsche' : sprache === 'ar'? 'موقع خاطئ' :' Location is wrong'} </h2>
            )}
        </div>
    );
};

export default AktuellesWetter;
