
  const shortNameTemper = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

const WaterInput = ({temper, temperScale, scale}) => {

  

    return (
        <> 
            <legend> Enter Temperature in {shortNameTemper[scale]}:</legend>
            <input type="text" value={temper} onChange={(e) => temperScale(e, scale)} />
        </>
    );
};

export default WaterInput;