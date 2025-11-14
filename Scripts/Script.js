import { convert, tempConverter, unitOption, unitOption2, inputElement, outputElement } from "./UnitOperations.js";
const unitType = document.getElementById('myDropdown');

/** 
* @param {string} category
*/

const SELECT_RULES = {
    Length: {
        select1: 'kilometer',
        select2: 'meter',
        select3: 'centimeter',
        select4: 'millimeter',
        select5: 'mile',
        select6: 'yard',
        select7: 'foot',
        select8: 'inch',
    },
    Mass: {
        select1: 'ton',
        select2: 'kilogram',
        select3: 'gram',
        select4: 'milligram',
        select5: 'pound',
        select6: 'ounce',
    },
    Temperature: {
        select1: 'celsius',
        select2: 'fahrenheit',
        select3: 'kelvin',
    }
}

unitType.addEventListener('change', function () {
    const category = unitType.value;
    selectPopulate(category);
    conversionHandler();
});

function conversionHandler() {

    const inputValue = parseFloat(inputElement.value);
    const outputValue =parseFloat(outputElement.value);
    const fromUnit = unitOption.value;
    const toUnit = unitOption2.value;
    const category = unitType.value;
    let result;

    if (isNaN(inputValue)) 
    return outputElement.value = ''; 

    if (category === 'Temperature') {
        result = tempConverter();
    }
    else {
        result = convert(inputValue, fromUnit, toUnit, category);
    }

    if (result !== null) {
        outputElement.value = Math.round(result * 10000) / 10000;
    } else {
        outputElement.value = 'Error';
    }
}

inputElement.addEventListener('input', conversionHandler);
unitOption.addEventListener('change', conversionHandler);
unitOption2.addEventListener('change', conversionHandler);

function selectPopulate(category) {

    const rules = SELECT_RULES[category];
    unitOption.innerHTML = '';
    unitOption2.innerHTML = '';

    //INPUT-SELECT OPTIONS
    for (const key in rules) {
        let option = document.createElement('option');
        option.value = rules[key];
        option.textContent = rules[key];
        unitOption.appendChild(option);
    }
    //OUTPUT-SELECT OPTIONS
    for (const key in rules) {
        let option = document.createElement('option');
        option.value = rules[key];
        option.textContent = rules[key];
        unitOption2.appendChild(option);
    }
}