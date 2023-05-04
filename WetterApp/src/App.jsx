import './App.css'
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
      < AktuellesWetter />
      < StundenWetter />
      < FuenfTagesVorschau />
      </ContextProvider>
      < Footer />

    </>
  )
}

export default App
