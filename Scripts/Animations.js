
let lightswitch = document.getElementById('lightswitch');
let gridContainer = document.getElementsByTagName('div')

lightswitch.addEventListener("click", () => {
     if (lightswitch.src.endsWith('Media/agumonsymbol.png')) {

        lightswitch.style.opacity =0;
        setTimeout(()=>{
            lightswitch.src ='Media/gabumonsymbol.png';
            lightswitch.style.opacity = 1;
        },200);

        
        // darkMode();
    } 
    else{

        lightswitch.style.opacity =0;
        setTimeout(()=>{
            lightswitch.src ='Media/agumonsymbol.png';
            lightswitch.style.opacity = 1;
        },200);

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