import { useState } from "react";
import Dumy from "./components/Dumy";
import FormHandling from "./components/Form Handling/FormHandling";
import Clock from "./components/map function/Clock";
import StateClassComponents from "./components/state/StateClassComponents";
import Test from "./components/Test";
import BoilerWater from "./components/Water Boiler/BoilerWater";

function App() {

    const [name, setName] = useState('Chaity Rani Dhar')

    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Hello Moyna !</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1 )}> Plus </button>
            <Test propName={name} propSetName={setName} />
            <Dumy />
            <StateClassComponents propName={name} />

            <Clock />

            <FormHandling />

            <BoilerWater />
        </div>
    );
}

export default App;
