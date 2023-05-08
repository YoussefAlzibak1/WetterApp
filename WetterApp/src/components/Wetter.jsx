 import { useContext } from 'react';
 import { ContextWetter } from '../context/ContextProvider';
const Wetter = () => {
     const { wetterData } = useContext(ContextWetter);
    return (
        <div>
          {wetterData && (<p>Ort: {wetterData.wind.speed},</p>)}
            
            {wetterData && (<p>Temp: {wetterData.main.humidity}</p>)}
            
            {wetterData && (<p>{wetterData.main.temp_max}</p>)}
            {wetterData && (<p>{wetterData.main.temp_min}</p>)}
        </div>
    );
}

export default Wetter;
