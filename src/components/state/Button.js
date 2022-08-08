import React, { Component } from 'react';

export default class Button extends Component {

 shouldComponentUpdate(nextProps) {
  const {propsFunction: currentChange, nameProps: currentChangeNameProps, mitaName: currentMitaName} = this.props;
  const {propsFunction: nextChange, nameProps: nextNameProps, mitaName: nextMitaName} = nextProps;
    if (currentChange ===  nextChange && (currentChangeNameProps === nextNameProps && currentMitaName === nextMitaName)) {
      return false;
    } return true;
  
  }
  
  render() {
    const {nameProps, propsFunction, mitaName} = this.props;

    return (
      <>
      
        <h1>My Love {nameProps} </h1>
        <button onClick={() => propsFunction(mitaName)}>Name Change Mita </button>
      </>
    )
  }
}
