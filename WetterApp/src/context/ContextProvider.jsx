import { createContext, useEffect, useState } from "react"



export const contextWetter=React.createContext()

function ContextProvider({children}) {
const [wetterData,setWetterData]=useState([])
    const [aktuellerOrt, setAktuellerOrt] = useState('')
    const [aktuellesWetter, setAktuellesWetter] = useState('')
    const [tagSchau, setTagSchau] = useState('')
    const [stundenWetter, setStundenWetter] = useState('')
    useEffect(() => {
        
        async function fetchWetter() {
            const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${Apikey}`)
const wettData= await  response.json()
setWetterData(wettData)
}



fetchWetter()
},[])



  return (
      <contextWetter.Provider value={}>
          
    </contextWetter.Provider>
  )
}

export default ContextProvider