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
        select7: '',
        select8: '',
    },
    Temperature: {
        select1: 'celsius',
        select2: 'fahrenheit',
        select3: 'kelvin',
        select4: '',
        select5: '',
        select6: '',
        select7: '',
        select8: '',
    }
}

unitType.addEventListener('change', function () {
    const category = unitType.value;
    selectPopulate(category);
    conversionHandler();
});

function conversionHandler() {

    const inputValue = parseFloat(inputElement.value);
    const fromUnit = unitOption.value;
    const toUnit = unitOption2.value;
    const category = unitType.value;

    if (isNaN(inputValue)) {
        outputElement.value = '';
        return;
    }

    let result;
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
    //INPUT-SELECT OPTIONS
    let option1 = document.getElementById('option1');
    option1.value = option1.textContent = rules.select1;
    let option2 = document.getElementById('option2');
    option2.value = option2.textContent = rules.select2;
    let option3 = document.getElementById('option3');
    option3.value = option3.textContent = rules.select3;
    let option4 = document.getElementById('option4');
    option4.value = option4.textContent = rules.select4;
    let option5 = document.getElementById('option5');
    option5.value = option5.textContent = rules.select5;
    let option6 = document.getElementById('option6');
    option6.value = option6.textContent = rules.select6;
    let option7 = document.getElementById('option7');
    option7.value = option7.textContent = rules.select7;
    let option8 = document.getElementById('option8');
    option8.value = option8.textContent = rules.select8;
    //OUTPUT-SELECT OPTIONS
    let option11 = document.getElementById('option11');
    option11.value = option11.textContent = rules.select1;
    let option22 = document.getElementById('option22');
    option22.value = option22.textContent = rules.select2;
    let option33 = document.getElementById('option33');
    option33.value = option33.textContent = rules.select3;
    let option44 = document.getElementById('option44');
    option44.value = option44.textContent = rules.select4;
    let option55 = document.getElementById('option55');
    option55.value = option55.textContent = rules.select5;
    let option66 = document.getElementById('option66');
    option66.value = option66.textContent = rules.select6;
    let option77 = document.getElementById('option77');
    option77.value = option77.textContent = rules.select7;
    let option88 = document.getElementById('option88');
    option88.value = option88.textContent = rules.select8;
}