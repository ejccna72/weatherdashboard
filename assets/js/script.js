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
const sHMD = document.querySelector(".hMD");
const sWND = document.querySelector(".wND");
const sVIS = document.querySelector('.vIS');


function myQuery(e){
    if(e.keyCode == 13){
        fetch(`${api.base}weather?q=`+sBOX.value+`&units=imperial&appid=${api.key}`).then(response => response.json()).then(dataDisplay)
        ;
    }
    function dataDisplay(response){
   
        if(response.cod === "404"){
                 
        aCRD.classList.add;
    
        sCTY.innerText = 'Invalid City';
    
;
        
    }else{
            
        aCRD.classList.add;
    
        sCTY.innerText = response['name'] + ', ' + response['sys']['country'];
    
        sTMP.innerText = 'Current Temp: ' + response['main']['temp'] + String.fromCharCode(176) + 'F';
    
        sWTR.innerText = 'Current Conditions: ' + response.weather[0].main;
    
        shLO.innerText = `High: ${response.main.temp_max}${String.fromCharCode(176)}F / Low: ${response.main.temp_min}${String.fromCharCode(176)}F`;
        
        sHMD.innerText = 'Humidity: ' + response['main']['humidity'] + '%';
    
        sWND.innertText = response['wind']['speed'];
       
        sVIS.innerText = 'Visibility: ' + response['visibility'] + "'"
    }
}
}



sBOX.addEventListener('keypress', myQuery);