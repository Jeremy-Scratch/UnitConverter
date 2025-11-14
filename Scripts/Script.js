import { convert, tempConverter, unitOption, unitOption2, inputElement, outputElement } from "./UnitOperations.js";

const unitType = document.getElementById('myDropdown');

unitType.addEventListener('change', function () {
    if (unitType.value === 'Length') {
        inputDdLongitude();
        outputDdLongitude();
    }
    if (unitType.value === 'Mass') {
        inputDdweight();
        outputDdweight();
    }
    if (unitType.value === 'Temperature') {
        inputDdTemperature();
        outputDdTemperature();
    }
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

function inputDdLongitude() {

    let option1 = document.getElementById('option1');
    option1.value = option1.textContent = 'kilometer';
    let option2 = document.getElementById('option2');
    option2.value = option2.textContent = 'meter';
    let option3 = document.getElementById('option3');
    option3.value = option3.textContent = 'centimeter';
    let option4 = document.getElementById('option4');
    option4.value = option4.textContent = 'millimeter';
    let option5 = document.getElementById('option5');
    option5.value = option5.textContent = 'mile';
    let option6 = document.getElementById('option6');
    option6.value = option6.textContent = 'yard';
    let option7 = document.getElementById('option7');
    option7.value = option7.textContent = 'foot';
    let option8 = document.getElementById('option8');
    option8.value = option8.textContent = 'inch';
}

function outputDdLongitude() {

    let option11 = document.getElementById('option11');
    option11.value = option11.textContent = 'kilometer';
    let option22 = document.getElementById('option22');
    option22.value = option22.textContent = 'meter';
    let option33 = document.getElementById('option33');
    option33.value = option33.textContent = 'centimeter';
    let option44 = document.getElementById('option44');
    option44.value = option44.textContent = 'millimeter';
    let option55 = document.getElementById('option55');
    option55.value = option55.textContent = 'mile';
    let option66 = document.getElementById('option66');
    option66.value = option66.textContent = 'yard';
    let option77 = document.getElementById('option77');
    option77.value = option77.textContent = 'foot';
    let option88 = document.getElementById('option88');
    option88.value = option88.textContent = 'inch';
}

function inputDdTemperature() {

    let option1 = document.getElementById('option1');
    option1.value = option1.textContent = 'celsius';
    let option2 = document.getElementById('option2');
    option2.value = option2.textContent = 'fahrenheit';
    let option3 = document.getElementById('option3');
    option3.value = option3.textContent = 'kelvin';
}

function outputDdTemperature() {

    let option11 = document.getElementById('option11');
    option11.value = option11.textContent = 'celsius';
    let option22 = document.getElementById('option22');
    option22.value = option22.textContent = 'fahrenheit';
    let option33 = document.getElementById('option33');
    option33.value = option33.textContent = 'kelvin';
}

function inputDdweight() {

    let option1 = document.getElementById('option1');
    option1.value = option1.textContent = 'ton';
    let option2 = document.getElementById('option2');
    option2.value = option2.textContent = 'kilogram';
    let option3 = document.getElementById('option3');
    option3.value = option3.textContent = 'gram';
    let option4 = document.getElementById('option4');
    option4.value = option4.textContent = 'milligram';
    let option5 = document.getElementById('option5');
    option5.value = option5.textContent = 'pound';
    let option6 = document.getElementById('option6');
    option6.value = option6.textContent = 'ounce';
}

function outputDdweight() {

    let option11 = document.getElementById('option11');
    option11.value = option11.textContent = 'ton';
    let option22 = document.getElementById('option22');
    option22.value = option22.textContent = 'kilogram';
    let option33 = document.getElementById('option33');
    option33.value = option33.textContent = 'gram';
    let option44 = document.getElementById('option44');
    option44.value = option44.textContent = 'milligram';
    let option55 = document.getElementById('option55');
    option55.value = option55.textContent = 'pound';
    let option66 = document.getElementById('option66');
    option66.value = option66.textContent = 'ounce';
}