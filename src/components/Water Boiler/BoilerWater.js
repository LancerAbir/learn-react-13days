import React, { Component } from 'react';
import { convertFun, toCelsius, toFahrenheit } from '../../JavaScript Function/WaterBoil';
import BoilerCalculator from './BoilerCalculator';
import WaterInput from './WaterInput';



class BoilerWater extends Component {

    state = {
        temper: '',
        scale: 'c'
    }

    temperScale = (e, scale) => {
        this.setState({ 
            temper: e.target.value, 
            scale
        })
    }


 
    render() {
        const { temper, scale } = this.state;
        const celsius = scale === 'f' ? convertFun(temper, toCelsius) : temper
        const fahrenheit = scale === 'c' ? convertFun(temper, toFahrenheit) : temper

        return (
            <fieldset> 
                <WaterInput temper={celsius}  scale='c' temperScale={this.temperScale} />
                <WaterInput temper={fahrenheit}  scale='f' temperScale={this.temperScale} />
                <BoilerCalculator temper={parseFloat(temper)} />
            </fieldset>
            
        );
    }
}

export default BoilerWater;