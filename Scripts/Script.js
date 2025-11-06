

let unitType = document.getElementById('myDropdown');
const inputElement = document.getElementById('input');

unitType.addEventListener('change', function(){
    if(unitType.value==='Longitude'){
        inputDdLongitude();
        outputDdLongitude();
    }
    if (unitType.value==='Weight') {
        inputDdweight();
        outputDdweight();
    } 
    if (unitType.value==='Temperature') {
        inputDdTemperature();
        outputDdTemperature();
    }
});

inputElement.addEventListener('input',function () {
    let input = inputElement.value;
console.log(input);
    
});

function LongitudeOperations(input) {
    
}

function inputDdLongitude() {

    let option1 = document.getElementById('option1');
    option1.textContent = 'kilometer';
    let option2 = document.getElementById('option2');
    option2.textContent = 'meter';
    let option3 = document.getElementById('option3');
    option3.textContent = 'centimetre';
    let option4 = document.getElementById('option4');
    option4.textContent = 'millimeter';
    let option5 = document.getElementById('option5');
    option5.textContent = 'mile';
    let option6 = document.getElementById('option6');
    option6.textContent = 'yard';
    let option7 = document.getElementById('option7');
    option7.textContent = 'foot';
    let option8 = document.getElementById('option8');
    option8.textContent = 'inch';
}

function outputDdLongitude() {

    let option11 = document.getElementById('option11');
    option11.textContent = 'kilometer';
    let option22 = document.getElementById('option22');
    option22.textContent = 'meter';
    let option33 = document.getElementById('option33');
    option33.textContent = 'centimetre';
    let option44 = document.getElementById('option44');
    option44.textContent = 'millimeter';
    let option52 = document.getElementById('option55');
    option52.textContent = 'mile';
    let option66 = document.getElementById('option66');
    option66.textContent = 'yard';
    let option77 = document.getElementById('option77');
    option77.textContent = 'foot';
    let option88 = document.getElementById('option88');
    option88.textContent = 'inch';
}

function inputDdTemperature() {

    let option1 = document.getElementById('option1');
    option1.textContent = 'celsius';
    let option2 = document.getElementById('option2');
    option2.textContent = 'fahrenheit';
    let option3 = document.getElementById('option3');
    option3.textContent = 'kelvin';
}

function outputDdTemperature() {

    let option11 = document.getElementById('option11');
    option11.textContent = 'celsius';
    let option22 = document.getElementById('option22');
    option22.textContent = 'fahrenheit';
    let option33 = document.getElementById('option33');
    option33.textContent = 'kelvin';
}

function inputDdweight() {

    let option1 = document.getElementById('option1');
    option1.textContent = 'ton';
    let option2 = document.getElementById('option2');
    option2.textContent = 'kilogram';
    let option3 = document.getElementById('option3');
    option3.textContent = 'gram';
    let option4 = document.getElementById('option4');
    option4.textContent = 'miligram';
    let option5 = document.getElementById('option5');
    option5.textContent = 'pound';
    let option6 = document.getElementById('option6');
    option6.textContent = 'ounce';
}

function outputDdweight() {

    let option11 = document.getElementById('option11');
    option11.textContent = 'ton';
    let option22 = document.getElementById('option22');
    option22.textContent = 'kilogram';
    let option33 = document.getElementById('option33');
    option33.textContent = 'gram';
    let option44 = document.getElementById('option44');
    option44.textContent = 'miligram';
    let option52 = document.getElementById('option55');
    option52.textContent = 'pound';
    let option66 = document.getElementById('option66');
    option66.textContent = 'ounce';
}