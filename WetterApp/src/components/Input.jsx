import { useContext, useState } from "react";
import { ContextWetter } from "../context/ContextProvider";

function Input() {
    const { sprache, setOrt, ort, setSprache } = useContext(ContextWetter);
    const [input, setInput] = useState(ort);
    const sucheHendle = (event) => {
        event.preventDefault();
        setOrt(input);
    };

    return (
        <div>
            <form>
                <select
                    value={sprache}
                    onChange={(event) => setSprache(event.target.value)}
                >
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>

                <input
                    type="text"
                    name="ort"
                    id="ort"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button type="submit" onClick={sucheHendle}>
                    Suche
                </button>
            </form>
        </div>
    );
}

export default Input;
