import { useContext } from "react";
import { ContextWetter } from "../context/ContextProvider";
const FuenfTagesVorschau = () => {
    const { sprache } = useContext(ContextWetter);

    return (

        <div className="fuenftageslink display">
            <a href="https://www.wetter.com/">
                {" "}
                <p>
                    {" "}
                    {sprache === "de"
                        ? "Fünf Tages Wettervorschau"
                        : sprache === "ar"
                        ? "توقعات الطقس لمدة خمسة أيام"
                        : "Five day weather forecast"}
                </p>
            </a>

        </div>
    );
};

export default FuenfTagesVorschau;
