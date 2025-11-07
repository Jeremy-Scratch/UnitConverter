
export let inputElement = document.getElementById('input');
export let outputElement = document.getElementById('output');
export let unitOption = document.getElementById('myDropdown1');
export let unitOption2 = document.getElementById('myDropdown2');



export function tempConverter() {

    if ((unitOption.value === 'celsius') && (unitOption2.value === 'kelvin')) {
        outputElement.value = Number(inputElement.value) + 273.15;
    }
    if (unitOption.value === 'celsius' && unitOption2.value === 'fahrenheit') {
        outputElement.value = (Number(inputElement.value) * 9 / 5) + 32;
    }
}