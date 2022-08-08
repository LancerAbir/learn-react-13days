import React from 'react';
import ClockList from './ClockList';

const Clock = () => {

    const listArray = [
        {
        name: "abir",
        age: 30,
        target: 'React js'
    },
        {
        name: "abir2",
        age: 31,
        target: 'Anguler'
    },
        {
        name: "abir3",
        age: 32,
        target: 'Web'
    },
        {
        name: "robi",
        age: 32,
        target: 'jama'
    }
       
]

    return (
        <div>
            {listArray.map((e) => <ClockList key={Math.random()}  name={e.name} target={e.target} age={e.age} />)}
        </div>
    );
}; 

export default Clock;

