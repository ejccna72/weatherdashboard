const api = {
    key: "8bc4d191da8bb99b847410a7f5c643bc",
    base: "https://api.openweathermap.org/data/2.5/"
}

const sBOX = document.querySelector(".sBOX");
const sCTY = document.querySelector(".cTY");
const sDTE = document.querySelector(".dTE");
const sTMP = document.querySelector(".tMP");
const sWTR = document.querySelector(".wTR");
const shLO = document.querySelector(".hLO");
const aCRD = document.querySelector(".hDN");


function myQuery(e){
    if(e.keyCode == 13){
        fetch(`${api.base}weather?q=`+sBOX.value+`&units=imperial&appid=${api.key}`).then(response => response.json()).then(dataDisplay)
        ;
    }
    function dataDisplay(response){
   
        if(response.cod === "404"){
                 
        aCRD.classList.add('card');
    
        sCTY.innerText = 'Invalid City';
    
        sTMP.innerText = 'N/A';
    
        sWTR.innerText = 'N/A';
    
        shLO.innerText = 'N/A' + '/'+ 'N/A';      
        }else{
            
        aCRD.classList.add('card');
    
        sCTY.innerText = response['name'] + ','+ response['sys']['country'];
    
        sTMP.innerText = response['main']['temp'] + String.fromCharCode(176) + 'c';
    
        sWTR.innerText = response.weather[0].main;
    
        shLO.innerText = response.main.temp_max + String.fromCharCode(176) + 'c'+ '/'+ response.main.temp_min + String.fromCharCode(176)+ 'c'
        }
}
}
sBOX.addEventListener('keypress', myQuery);
