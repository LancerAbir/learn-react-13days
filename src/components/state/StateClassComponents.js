import React, { Component } from 'react';
import Button from './Button';

class StateClassComponents extends Component {
   

    state = {
            todayMatch: 'Bangladesh Vs Zimbabwe',
            name: 'Robia',
            age: 30,
            mitaName: 'kakoli'
    }


    // Event handlerClick 
    handlerClick = (changeName) => {;
        this.setState({name: changeName})
    }

    // state handler
    gameHandlerOn() {
        this.setState({ todayMatch: 'India Vs Pakistan'}) 
    }
    gameHandlerOff() {
        this.setState((state, props) => ({
            todayMatch: 'Afganistan Vs kolkata'
        })) 
    }
    gameHandlerToday() {
        this.setState({ todayMatch: 'Bangladesh Vs Zimbabwe'}) 
    }

    componentDidMount () {   
         setInterval(() => {
            this.gameHandlerOn()
        }, 1000);
        setInterval(() => {
            this.gameHandlerOff()
        }, 2000);
        setInterval(() => {
            this.gameHandlerToday()
        }, 3000);
      
            // fetch('https://jsonplaceholder.typicode.com/posts')
            // .then(response => response.json())
            // .then(data => {console.log(data)})
    }


    // componentWillUnmount() {
    //     clearInterval(this.gameHandlerOn());
    //     clearInterval(this.gameHandlerOff());
    // }
  
    render() {
        const {name, todayMatch, age, mitaName} = this.state;
        const {propName} = this.props;


      


        // {mitaName === 'Mita' ? <Button propsFunction={() => this.handlerClick(mitaName)} 
        // mitaName='Mita' nameProps={name} /> : <Button propsFunction={() => this.handlerClick(mitaName)} mitaName='Kobita' nameProps={name} /> }

     
        
        
        return (
            <div>
                <h2> learn state {propName} </h2>
                <h3>ajker khela {todayMatch}</h3>
                <h4>kaka {age} {name} </h4>


                <h1>My Crass {name}</h1>

                <button onClick={() => this.handlerClick("Bobita")}> Name Change Bobita </button>

             

                {
                    mitaName ===  'kakoli' ? <Button propsFunction={() => this.handlerClick('kakoli')} 
                    mitaName={mitaName} nameProps={name} /> : <Button propsFunction={() => this.handlerClick('mita')} 
                    mitaName={mitaName} nameProps={name} />
                }
  
            </div>
        );
    }
}

export default StateClassComponents;