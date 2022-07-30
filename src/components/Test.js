import React from 'react';


const Test = ({propName, propSetName}) => {
    return (
        <>
            <h1> Ami {propName}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto reprehenderit quidem tempore ratione quo debitis dicta quis ad eos fugit asperiores esse ducimus mollitia deserunt eveniet ab est commodi, possimus ipsa voluptates quam! Ipsum, qui nobis nemo sapiente rerum blanditiis accusantium tempore assumenda doloribus ullam, maxime minus veniam, harum vitae.</p>
            <button onClick={() => propSetName('moyna')}> Click Me</button>


        </>
    );
};

export default Test;


