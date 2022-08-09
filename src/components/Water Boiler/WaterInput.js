
  const shortNameTemper = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

const WaterInput = ({temper, temperScallTo, scale}) => {

  

    return (
        <> 
            <legend> Enter Temperature in {shortNameTemper[scale]}:</legend>
            <input type="text" value={temper} onChange={temperScallTo} />
        </>
    );
};

export default WaterInput;