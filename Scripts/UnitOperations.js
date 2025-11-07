import {unitType} from "./Script.js";
export let inputElement = document.getElementById('input');
export let outputElement = document.getElementById('output');
export let unitOption = document.getElementById('myDropdown1');
export let unitOption2 = document.getElementById('myDropdown2');
const kelvin = 273.15;


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