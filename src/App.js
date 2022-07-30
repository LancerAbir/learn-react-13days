import { useState } from "react";
import Dumy from "./components/Dumy";
import Test from "./components/Test";

function App() {

    const [name, setName] = useState('Anjan Dhar')

    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Hello Moyna !</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1 )}> Plus </button>
            <Test propName={name} propSetName={setName} />
            <Dumy />
        </div>
    );
}

export default App;
