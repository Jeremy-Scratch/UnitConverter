import {unitType} from "./Script.js";
export let inputElement = document.getElementById('input');
export let outputElement = document.getElementById('output');
export let unitOption = document.getElementById('myDropdown1');
export let unitOption2 = document.getElementById('myDropdown2');
const kelvin = 273.15;

/** 
* @param {number} value 
* @param {string} fromUnit
* @param {string} toUnit
* @param {string} category
*
*/

const CONVERSION_RULES = {
    Length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.34,
        yard: 1.09361,
        foot: 0.3048,
        inch: 0.0254,
    },
    Mass: {
        gram: 1,
        ton: 1000000,
        kilogram: 1000,
        milligram: 0.001,
        pound: 453.592,
        ounce: 28.3495,
    }
}


export function tempConverter() {

    switch (true) {
        case unitOption.value === 'celsius':
            if (unitOption2.value === 'kelvin') {
                outputElement.value = Number(inputElement.value) + kelvin;
            }
            if (unitOption2.value === 'fahrenheit') {
                outputElement.value = (Number(inputElement.value) * 9 / 5) + 32;
            }
            break;
        case unitOption.value === 'kelvin': 
            if (unitOption2.value === 'celsius') {
                outputElement.value = Number(inputElement.value) - kelvin;
            }
            if (unitOption2.value === 'fahrenheit') {
                outputElement.value = (Number(inputElement.value)- kelvin) * 9 / 5 + 32;
            }
            break;
        case unitOption.value === 'fahrenheit':
            if (unitOption2.value === 'celsius') {
                outputElement.value = (Number(inputElement.value) - 32)  * 5 / 9;
            }
            if (unitOption2.value === 'kelvin') {
                outputElement.value = (Number(inputElement.value)- 32) * 5 / 9 + kelvin;
            }
            break;
    }
}

function convert(value,fromUnit,toUnit,category) {

    const rules = CONVERSION_RULES[category];
    const baseUnit = value * rules[fromUnit];
    const convertedValue = baseUnit / rules[toUnit];

    return convertedValue;
}