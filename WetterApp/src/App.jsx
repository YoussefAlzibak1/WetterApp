import './App.css'
import AktuellerOrt from './components/AktuellerOrt'
import AktuellesWetter from './components/AktuellesWetter'
import FuenfTagesVorschau from './components/FuenfTagesVorschau'
import Header from './components/Header'
import StundenWetter from './components/StundenWetter'
import Footer from './components/Footer'
import ContextProvider from './context/ContextProvider'

function App() {
  

  return (
    <>
      < Header/>
      < ContextProvider>
      < AktuellerOrt />
      < AktuellesWetter />
      < StundenWetter />
      < FuenfTagesVorschau />
      </ContextProvider>
      < Footer />

    </>
  )
}

export default App
