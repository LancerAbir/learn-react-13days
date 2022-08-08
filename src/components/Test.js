import React from 'react';


const Test = ({propName, propSetName}) => {
    return (
        <>
            <h1> Ami {propName}</h1>
            <button onClick={() => propSetName('Abir er Bou')}> Click Me</button>
        </>
    );
};

export default Test;


