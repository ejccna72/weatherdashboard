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

const s51TMP = document.querySelector(".five-1tMP");
const s51WTR = document.querySelector(".five-1wTR");
const s51hLO = document.querySelector(".five-1hLO");
const s51HMD = document.querySelector(".five-1hMD");
const s51WND = document.querySelector(".five-1wND");
const s51VIS = document.querySelector('.five-1vIS');

const s52TMP = document.querySelector(".five-2tMP");
const s52WTR = document.querySelector(".five-2wTR");
const s52hLO = document.querySelector(".five-2hLO");
const s52HMD = document.querySelector(".five-2hMD");
const s52WND = document.querySelector(".five-2wND");
const s52VIS = document.querySelector('.five-2vIS');

const s53TMP = document.querySelector(".five-3tMP");
const s53WTR = document.querySelector(".five-3wTR");
const s53hLO = document.querySelector(".five-3hLO");
const s53HMD = document.querySelector(".five-3hMD");
const s53WND = document.querySelector(".five-3wND");
const s53VIS = document.querySelector('.five-3vIS');

const s54TMP = document.querySelector(".five-4tMP");
const s54WTR = document.querySelector(".five-4wTR");
const s54hLO = document.querySelector(".five-4hLO");
const s54HMD = document.querySelector(".five-4hMD");
const s54WND = document.querySelector(".five-4wND");
const s54VIS = document.querySelector('.five-4vIS');

const s55TMP = document.querySelector(".five-5tMP");
const s55WTR = document.querySelector(".five-5wTR");
const s55hLO = document.querySelector(".five-5hLO");
const s55HMD = document.querySelector(".five-5hMD");
const s55WND = document.querySelector(".five-5wND");
const s55VIS = document.querySelector('.five-5vIS');


function myQuery(e){
    if(e.keyCode == 13){
        fetch(`${api.base}weather?q=`+sBOX.value+`&units=imperial&appid=${api.key}`).then(response => response.json()).then(dataDisplay);
    }
    function dataDisplay(response){
   
        if(response.cod === "404"){     
            aCRD.classList.add;
            sCTY.innerText = 'Invalid City';
            
            
        }else{
            
            aCRD.classList.add;
            
        sCTY.innerText = response['name'] + ', ' + response['sys']['country'];
    
        sTMP.innerText = 'Current Temp: ' + response['main']['temp'] + String.fromCharCode(176) + 'F';
    
        sWTR.innerText = 'Current Conditions: ' + response.weather[0].main;
    
        shLO.innerText = `High: ${response.main.temp_max}${String.fromCharCode(176)}F / Low: ${response.main.temp_min}${String.fromCharCode(176)}F`;
        
        sHMD.innerText = 'Humidity: ' + response['main']['humidity'] + '%';
    
        sWND.innerText = 'Wind: ' + response['wind']['speed'] + ' Deg: ' + response['wind']['deg'] + String.fromCharCode(176);
       
        sVIS.innerText = 'Visibility: ' + response['visibility'] + "'"
    }
}
}



sBOX.addEventListener('keypress', myQuery);