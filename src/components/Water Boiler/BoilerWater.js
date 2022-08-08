import React, { Component } from 'react';
import BoilerCalculator from './BoilerCalculator';

class BoilerWater extends Component {
    render() {
        return (
            <div>
                water Boiler
                <BoilerCalculator />
            </div>
        );
    }
}

export default BoilerWater;