//setInterval(updateTime,1000);

window.addEventListener('load', document.getElementsByTagName('input')[0].focus(), false); 
function validInp(){
  if(document.getElementsByTagName('input')[0].value < 200 || document.getElementsByTagName('input')[0].value > 800)
    return alert('Введено не верное значение');
  return true;
}

function addClock(){
  //const xmlns = "http://www.w3.org/2000/svg";  
  var diametr = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('button')[0].style.display = 'none';  

   var clock = document.createElement("div"); 

    clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.id = 'bigClock';   
    document.body.appendChild(clock); 
    
    var clockItems = [];
    var clockSpan = [];
    var radius = 0.5*diametr*0.85;
    
    var clockNumber = 10;
    var ygolCkockX;
    var ygolCkockY;
    for(var i = 0; i<12; i++)
    {
      clockItems[i] = document.createElement("div"); 
      clockSpan[i] = document.createElement("span"); 
      clockSpan[i].innerText = i+1;
      clockSpan[i].style.top = '50%';
      clockSpan[i].style.left = '50%';
      clockSpan[i].style.position = 'absolute';
      clockSpan[i].style.transform = 'translate(-50%, -50%)';
      clockItems[i].style.width = clockNumber/100 * Number(diametr)  + 'px';
      clockItems[i].style.height = clockNumber/100 * Number(diametr)  + 'px';
      clockItems[i].style.borderRadius = '50%';
      clockItems[i].style.backgroundColor = '#48B382';
      clockItems[i].style.fontSize = Number(diametr)*0.07  + 'px';
      ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(i+1)) - diametr*clockNumber/100*0.5;
      ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(i+1)) - diametr*clockNumber/100*0.5;
      clockItems[i].style.left = ygolCkockX + 'px';
      clockItems[i].style.top = ygolCkockY + 'px';
      clockItems[i].appendChild(clockSpan[i]);
      clock.appendChild(clockItems[i]);   
    }
    for(var i = 0; i<12; i++)
       clockItems[i].style.position = 'absolute';
       
    setInterval(updateTime,1000);


    var min  = document.createElement("div"); 
 
    min.id = 'clockMin';
    min.style.height = 0.40 * Number(diametr)  + 'px'; 

    var sec  = document.createElement("div"); 
    sec.id = 'clockSec';
    sec.style.height = 0.5 * Number(diametr)  + 'px';


    var hour = document.createElement("div"); 
    hour.id = 'clockHour';
    hour.style.height = 0.25 * Number(diametr) + 'px';
     
    clock.appendChild(min);   
    clock.appendChild(sec); 
    clock.appendChild(hour);  


    var timeNew = document.createElement("span"); 
    timeNew.id = 'curD';
    timeNew.style.fontStyle = 'italic';
    timeNew.style.fontWeight = 'bold';
    timeNew.style.fontSize = Number(diametr)*0.07  + 'px';
    timeNew.style.position = 'absolute';
    timeNew.style.left = Number(diametr)*0.5 + 'px';
    timeNew.style.top = Number(diametr)*0.3 + 'px';
    timeNew.style.transform = 'translate(-50%, -50%)';
    clock.appendChild(timeNew);     

   var gegRot = updateTime(); 

return true;
}

   function updateTime() {
      const currTime=new Date();
      var currTimeStr = formatDateTime(currTime);
      if(document.getElementById('curD'))
         document.getElementById('curD').innerText = currTimeStr;
      console.log(currTimeStr);  
   }

  // форматирует дату-время в формате чч:мм:сс
  function formatDateTime(dt) {
      const degSec = 360/12;
      const hours=dt.getHours();
      const minutes=dt.getMinutes();
      const seconds=dt.getSeconds();
      const ygolSec = 180 + seconds * 360/60;
      const ygolMin = 180 + minutes * 360/60;
      const ygolHours = 180 + (hours+minutes/60) * degSec;
   
      
      if(document.getElementById('clockSec'))
        document.getElementById('clockSec').style.transform = 'rotate('+ygolSec+'deg)';
      if(document.getElementById('clockMin'))
        document.getElementById('clockMin').style.transform = 'rotate(' + ygolMin  + 'deg)';
      if(document.getElementById('clockHour'))
        document.getElementById('clockHour').style.transform = 'rotate(' + ygolHours + 'deg)';
      return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
  }

   // дополняет строку val слева нулями до длины Len
   function str0l(val,len) {
      let strVal=val.toString();
      while (strVal.length < len)
          strVal='0'+strVal;
      return strVal;
  }