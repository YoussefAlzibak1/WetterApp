
import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";
const FuenfTagesVorschau = () => {
    const { sprache} = useContext(ContextWetter);
    

    return (
        <div>
            <p>Fünf Tages Wetter:</p>
        </div>
    );
}

export default FuenfTagesVorschau;
