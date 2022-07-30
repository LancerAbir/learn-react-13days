import React, { useState } from 'react';

const Dumy = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment}>plus</button>
            </div>
        </div>
    );
};

export default Dumy;