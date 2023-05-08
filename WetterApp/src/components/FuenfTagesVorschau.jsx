
import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";
const FuenfTagesVorschau = () => {
    const { sprache} = useContext(ContextWetter);
    

    return (
        <div>
            <p>  {sprache === "de"
                            ? "Fünf Tages Wettervorschau"
                            : sprache === "ar"
                            ? "توقعات الطقس لمدة خمسة أيام"
                            : "Five day weather forecast"}</p>
        </div>
    );
}

export default FuenfTagesVorschau;
