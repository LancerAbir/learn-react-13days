import React from 'react';

const BoilerCalculator = ({temper = 0}) => {
    
    return (
        <div>
            {temper <= 99 ? <h2>jol gorom hoy nai</h2>: <h2>jol gorom hoy hoise</h2>}

        </div>
    );
};

export default BoilerCalculator;