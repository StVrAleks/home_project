setInterval(updateTime,1000);

window.addEventListener('load', document.getElementsByTagName('input')[0].focus(), false); 
function validInp(){
  if(document.getElementsByTagName('input')[0].value < 200 || document.getElementsByTagName('input')[0].value >600)
    return alert('Введено не верное значение');
  return true;
}

function addClock(){
    var diametr = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('button')[0].style.display = 'none';  

    var clock = document.createElement("div"); 
    clock.id = 'bigClock';
    clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.style.borderRadius = '50%';
  //  clock.style.padding = '2%';
    clock.style.backgroundColor = '#FCCA66';
    clock.style.position = 'absolute';
    document.body.appendChild(clock); 
    
    var clockItems = [];
    var clockSpan = [];
    var clockNumber = 14;
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

      clockItems[i].style.fontSize = '20px';
      clockItems[i].style.left = 100*positionX(i+1, clockNumber) + '%';//Number(diametr) * positionX(i+1, clockNumber) + 'px';
      clockItems[i].style.top = 100*positionY(i+1, clockNumber) + '%';//Number(diametr) * positionY(i+1, clockNumber)  + 'px';
      clockItems[i].appendChild(clockSpan[i]);
      clock.appendChild(clockItems[i]);   
    }
    for(var i = 0; i<12; i++)
       clockItems[i].style.position = 'absolute';
       

    var hour = document.createElement("div"); 
    hour.id = 'clockHour';
    hour.style.width = 0.35 * Number(diametr)  + 'px';
    hour.style.height = '10px';   
    hour.style.backgroundColor = 'black';
    hour.style.position = 'absolute'; 
    hour.style.left = '50%';
    hour.style.top = '50%'; 
    hour.style.transform = 'translate(-50%, -50%)';
    hour.style.transformOrigin = 'top left'; 
    hour.style.transform = 'rotate(-90deg)';   
    clock.appendChild(hour);  

    var min  = document.createElement("div"); 
    min.id = 'clockMin';
    min.style.width = 0.4 * Number(diametr)  + 'px';
    min.style.height = '7px';
    min.style.backgroundColor = 'black';
    min.style.position = 'absolute'; 
    min.style.left = '50%';
    min.style.top = '50%';
    min.style.transform = 'translate(-50%, -50%)';
    min.style.transformOrigin = 'top left'; 
    min.style.transform = 'rotate(-90deg)';   

    clock.appendChild(min);  
    var sec  = document.createElement("div"); 
    sec.id = 'clockSec';
    sec.style.width = 0.5 * Number(diametr)  + 'px';
    sec.style.height = '3px';
    sec.style.backgroundColor = 'black';
    sec.style.position = 'absolute'; 
    sec.style.left = '50%';
    sec.style.top = '50%';
    sec.style.transform = 'translate(-50%, -50%)';
    console.log(Number(diametr) / 2);
    sec.style.transformOrigin = 'top left';
    sec.style.transform = 'rotate(-90deg)';
    clock.appendChild(sec); 
    
 
    //const currTime=new Date();
    var timeNew = document.createElement("span"); 
    timeNew.id = 'curD';
    timeNew.style.fontStyle = 'italic';
    timeNew.style.fontWeight = 'bold';
    timeNew.style.fontSize = '25px';
    timeNew.style.position = 'absolute';
    timeNew.style.left = Number(diametr)*0.5 + 'px';
    timeNew.style.top = Number(diametr)*0.3 + 'px';
    timeNew.style.transform = 'translate(-50%, -50%)';
    clock.appendChild(timeNew);     

}


function positionX(num, partClock){
 //partClock = 15

 if( num === 1 || num === 5)
 // return 8/12 - partClock*0.5/100; 
   return 5/7 - partClock*0.5/100; 
 if(num === 2 || num === 4)
  //return 10/12 - partClock*0.5/100; 
  return 6/7 - partClock*0.5/100; 
 if(num === 7 || num === 11)
  //return  4/12 - partClock*0.5/100; 
  return  2/7 -  partClock*0.5/100; 
 if(num === 8 || num === 10)
  //return  2/12 - partClock*0.5/100; 
  return  1/7 - partClock*0.5/100; 

 if(num === 6 || num === 12)
  //return  6/12 - partClock*0.5/100; 
  return  0.5 - 1/14; 
 if(num === 3)
   return 6/7;
 if(num === 9)
    return 1/7 - partClock/100;
}

function positionY(num, partClock){
    if(num === 1 || num === 11)
     // return  2/12 - 0.5*partClock/100;  
     return  1/7 - partClock*0.5/100;//partClock/100;  
    if(num === 2 || num === 10)
      //return  4/12 - partClock*0.5/100; 
    return  2/7 - partClock*0.5/100; 

    if(num === 4 || num === 8)
      //return 8/12 - partClock*0.5/100;  
      return 4/7 + partClock*0.5/100;    
    if(num === 5 || num === 7)
      //return 10/12 - partClock*0.5/100; 
      return 5/7 + partClock*0.5/100; 

    if(num === 6)
       return 1 - partClock/100;
    if(num === 12)
       return 0.5/100;

    if(num === 3 || num === 9)
      return  6/12 - partClock*0.5/100;       
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
      const hours=dt.getHours();
      const minutes=dt.getMinutes();
      const seconds=dt.getSeconds();
      const ygolSec = -90 + seconds * 6;
      const ygolMin = -90 + minutes * 6;
      const ygolHours = -90 + (hours-12) * 30 + 5/60*minutes*6;
      console.log(-90 + (hours-12)*30 , 5/60*minutes*6);
      if(document.getElementById('clockSec'))
        document.getElementById('clockSec').style.transform = 'rotate(' + ygolSec + 'deg)';
      if(document.getElementById('clockMin'))
        document.getElementById('clockMin').style.transform = 'rotate(' + ygolMin  + 'deg)';
      if(document.getElementById('clockHour'))
        document.getElementById('clockHour').style.transform = 'rotate(' + ygolHours + 'deg)';
      return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
  }
   // дополняет строку val слева нулями до длины Len
   function str0l(val,len) {
      let strVal=val.toString();
      while ( strVal.length < len )
          strVal='0'+strVal;
      return strVal;
  }