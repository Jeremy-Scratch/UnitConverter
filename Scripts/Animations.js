
let lightswitch = document.getElementById('lightswitch');
let gridContainer = document.getElementsByTagName('div')

lightswitch.addEventListener("click",function () {
     if (lightswitch.src.endsWith('Media/agumonsymbol.png')) {

        lightswitch.src ='Media/gabumonsymbol.png';
        // darkMode();
    } 
    else{

        lightswitch.src ='Media/agumonsymbol.png';
        // lightMode();
    }
});

//         --------------     FUTURE FEATURE LIGHT/DARK MODE -----------------

// function darkMode() {
//     document.body.style.backgroundColor ='black';
//     gridContainer.style.backgroundColor='black';
// }

// function lightMode() {
//     document.body.style.backgroundColor ='white';
    
// }