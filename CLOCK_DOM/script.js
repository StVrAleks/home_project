setInterval(updateTime,1000);

function addClock(){
    var diametr = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('button')[0].style.display = 'none';  

    var clock = document.createElement("div"); 
    clock.id = 'bigClock';
    clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.style.borderRadius = '50%';
    clock.style.backgroundColor = 'yellow';
    clock.style.position = 'absolute';
    document.body.appendChild(clock); 
    
    var clockItems = [];
    var clockNumber = 10;
    for(var i = 0; i<12; i++)
    {
      clockItems[i] = document.createElement("div"); 
      clockItems[i].id = 'item' + i;
      clockItems[i].style.width = clockNumber/100 * Number(diametr)  + 'px';
      clockItems[i].style.height = clockNumber/100 * Number(diametr)  + 'px';
      clockItems[i].style.borderRadius = '50%';
      clockItems[i].style.backgroundColor = 'green';
      clockItems[i].innerText = i+1;
      clockItems[i].style.fontSize = '11px';
      clockItems[i].style.textAlign= 'center';
      clockItems[i].style.left = Number(diametr) * positionX(i+1, clockNumber) + 'px';
      clockItems[i].style.top = Number(diametr) * positionY(i+1, clockNumber)  + 'px';
      clock.appendChild(clockItems[i]);   
    }
    for(var i = 0; i<12; i++)
            clockItems[i].style.position = 'absolute';

    var hour = document.createElement("div"); 
    hour.id = 'clockHour';
    hour.style.width = 0.4 * Number(diametr)  + 'px';
    hour.style.height = '10px';   
    hour.style.backgroundColor = 'green';
    hour.style.position = 'absolute'; 
    hour.style.left = Number(diametr) / 2 + 'px';
    hour.style.top = Number(diametr) / 2  + 'px';
    hour.style.transformOrigin = 'top left'; 
    hour.style.transform = 'rotate(-90deg)';   
    clock.appendChild(hour);  

    var min  = document.createElement("div"); 
    min.id = 'clockMin';
    min.style.width = 0.5 * Number(diametr)+20  + 'px';
    min.style.height = '7px';
    min.style.backgroundColor = 'pink';
    min.style.position = 'absolute'; 
    min.style.left = Number(diametr) / 2 + 'px';
    min.style.top = Number(diametr) / 2  + 'px';
    min.style.transformOrigin = 'top left'; 
    min.style.transform = 'rotate(-90deg)';   

    clock.appendChild(min);  
    var sec  = document.createElement("div"); 
    sec.id = 'clockSec';
    sec.style.width = 0.5 * Number(diametr)  + 'px';
    sec.style.height = '3px';
    sec.style.backgroundColor = 'black';
    sec.style.position = 'absolute'; 
    sec.style.left = Number(diametr) / 2 + 'px';
    sec.style.top = Number(diametr) / 2  + 'px';
    sec.style.transformOrigin = 'top left';
    sec.style.transform = 'rotate(-90deg)';
    clock.appendChild(sec); 
    
 
    //const currTime=new Date();
    var timeNew = document.createElement("span"); 
    timeNew.id = 'curD';
    timeNew.style.position = 'absolute';
    timeNew.style.left = Number(diametr)*0.4 + 'px';
    timeNew.style.top = Number(diametr)*0.2 + 'px';
    clock.appendChild(timeNew);     

}


function positionX(num, partClock){
 if(num === 1 || num === 5)
  return  (100 - 4*100/6 - 0.83)/100;  
  //return (100/6*4 - partClock*0.5)/100; 
   //return 0.68;
 if(num === 2 || num === 4)
  return  (100 - 5*100/6 - 0.83)/100; 
  // return (100/6*5 - partClock*0.5)/100;
   // return 0.82;
 if(num === 3)
   return (100/6*6 - partClock*0.5)/100;
   // return 1-0.11;
 if(num === 6 || num === 12)
  return  (100 - 3*100/6 - 0.83)/100;  
  //return (100/6*3 - partClock*0.5)/100;
  //  return 0.5-0.1*0.5;
 if(num === 7 || num === 11)
  return  (100 - 2*100/6 - 0.83)/100; 
  // return (100/6*2 - partClock*0.5)/100;
  //  return 0.23;
 if(num === 8 || num === 10)
  return  (100 - 100/6 - 0.83)/100;  
  //return (100/6 - partClock*0.5)/100;
   // return 0.075;
 if(num === 9)
    return 0;
}

function positionY(num, partClock){
    if(num === 1 || num === 11)
      return  (100 - 5*100/6 - 0.83)/100; 
      //return (100/6 - partClock*0.5)/100;
      // return 0.08; //100/6-10/100
    if(num === 2 || num === 10)
      return  (100 - 4*100/6 - 0.83)/100; 
      //return (100/6*2 - partClock*0.5)/100;
       //return 0.22;
    if(num === 3 || num === 9)
      return  (100 - 3*100/6 - 0.83)/100; 
      //return (100/6*3 - partClock*0.5)/100;
      // return 0.5-0.1*0.5;
    if(num === 4 || num === 8)
      return  (100 - 2*100/6 - 0.83)/100; 
      //return (100/6*4 - partClock*0.5)/100;
      // return 0.66;
    if(num === 5 || num === 7)
      return (100 - 100/6 - 0.83)/100; 
      //  return (100/6*5 - partClock*0.5)/100;
     // return 0.825;
    if(num === 6)
       return 1-0.01;
    if(num === 12)
       return 0;
   }

   function updateTime() {
      const currTime=new Date();
      var currTimeStr = formatDateTime(currTime);
      if(document.getElementById('curD'))
         document.getElementById('curD').innerText = currTimeStr;
      console.log(currTimeStr);  
   }

  // форматирует дату-время в формате дд.мм.гггг чч:мм:сс
  function formatDateTime(dt) {
      //const year=dt.getFullYear();
      //const month=dt.getMonth()+1;
      //const day=dt.getDate();
      const hours=dt.getHours();
      const minutes=dt.getMinutes();
      const seconds=dt.getSeconds();
      const ygolSec = -90 + seconds * 6;
      const ygolMin = -90 + minutes * 6;
      const ygolHours = -90 + hours * 30;
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