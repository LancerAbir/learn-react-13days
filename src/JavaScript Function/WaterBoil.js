export const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5 )/9
}  

export const toFahrenheit = (celsius) => {
    return (( celsius * 9) /5) +32
}  

export const convertFun = (temperature, converterTo) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) return  alert('Please enter a valid Number')
    
    const output = converterTo(input)
    const rounded = Math.round(output * 100) / 100
    return rounded.toString()
    
}  