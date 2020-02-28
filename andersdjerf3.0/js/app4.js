window.addEventListener('load',()=>{
let long;
let lat;

let temperatureDescription=document.querySelector(".temperature-description");
let temperatureDegree=document.querySelector(".temperature-degree");
let locationTimezone=document.querySelector(".location-timezone");
let temperaturSection =document.querySelector(".temperature-section");
const temperatureSpan=document.querySelector(".temperature-section span");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;

        const proxy='https://cors-anywhere.herokuapp.com/';
        const api=`${proxy}https://api.darksky.net/forecast/9ec978affbb2bba406082d6a49bce228/${lat},${long}`;
        
        fetch(api)
           .then(response=>{
               return response.json();
           })
           .then(data=>{
               console.log(data);
               const {temperature, summary, icon} = data.currently;
               //sätt DOM  atribut från api'et
               temperatureDegree.textContent=temperature;
               temperatureDescription.textContent=summary;
               locationTimezone.textContent=data.timezone;

               //omvanndla till celsius
               let celsius=(temperature-32)*(5/9);
            
               
               //sätt animeringen
                setIcons(icon, document.querySelector('.icon'));

                //konventera tempraturen
                temperaturSection.addEventListener('click',()=>{
                        if(temperatureSpan.textContent==="F"){
                            temperatureSpan.textContent="C";
                            temperatureDegree.textContent=Math.floor(celsius);

                        }
                        else{
                            temperatureSpan.textContent="F";
                            temperatureDegree.textContent=temperature;
                        }
                })

           });
        });
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: " rgb(33, 39, 129)" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});
   


