import React, { Component } from 'react';
import BoilerCalculator from './BoilerCalculator';
import WaterInput from './WaterInput';



class BoilerWater extends Component {

    state = {
        temper: ''
    }

    temperScall = (e) => {
        this.setState({ temper: e.target.value})
    }

    render() {
        const { temper } = this.state;
        return (
            
            <fieldset> 
                <WaterInput temper={temper}  scale='c' temperScallTo={this.temperScall} />
                <WaterInput temper={temper}  scale='f'   temperScallTo={this.temperScall} />
                <BoilerCalculator temper={parseFloat(temper)} />
            </fieldset>
            
        );
    }
}

export default BoilerWater;