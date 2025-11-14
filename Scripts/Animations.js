
let lightswitch = document.getElementById('lightswitch');
lightswitch.classList.add('continuous-spin');

lightswitch.addEventListener("dblclick", () => {
     if (lightswitch.src.endsWith('Media/agumonsymbol.png')) {

        lightswitch.style.opacity =0;
        setTimeout(()=>{
            lightswitch.src ='Media/gabumonsymbol.png';
            lightswitch.style.opacity = 1;
        },200);
    } 
    else{

        lightswitch.style.opacity =0;
        setTimeout(()=>{
            lightswitch.src ='Media/agumonsymbol.png';
            lightswitch.style.opacity = 1;
        },200);
    }
});

lightswitch.addEventListener("click", () => {

    lightswitch.classList.remove('continuous-spin');
    lightswitch.classList.remove('accelerate-spin');
    void lightswitch.offsetWidth;

    lightswitch.classList.add('accelerate-spin');

});

lightswitch.addEventListener("animationend", () => {
   if (lightswitch.classList.contains('accelerate-spin')) {
    
    lightswitch.classList.remove('accelerate-spin');
    lightswitch.classList.add('continuous-spin');
   }
});




//         --------------     FUTURE FEATURE LIGHT/DARK MODE -----------------
