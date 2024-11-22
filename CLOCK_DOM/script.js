//setInterval(updateTime,1000);

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

    clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.id = 'bigClock';   
    document.body.appendChild(clock); 
    
    var clockItems = [];
    var clockSpan = [];

    //100% экрана часов разделим условно на 7 частей (9; 8,10; 7,11; 6,12; 5,1; 4,2; 3), 
    //получаем, что максимальный по размеру диаметр круга с цифрами может быть 14% от объема большего диаметра,
    //что и запишем в clockNumber
    var clockNumber = 100/7;
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
      clockItems[i].style.left = 100*positionX(i+1, clockNumber) + '%';
      clockItems[i].style.top = 100*positionY(i+1, clockNumber) + '%';
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
    timeNew.style.fontSize = '25px';
    timeNew.style.position = 'absolute';
    timeNew.style.left = Number(diametr)*0.5 + 'px';
    timeNew.style.top = Number(diametr)*0.3 + 'px';
    timeNew.style.transform = 'translate(-50%, -50%)';
    clock.appendChild(timeNew);     

   var gegRot = updateTime(); 

return true;
}


function positionX(num, partClock){
 //partClock = 14%
//всего 7 частей, отсюда выводим коэффициент для расоложения каждого из кругов и смещаем туда центр "пациента"
 if( num === 1 || num === 5)
    return 5/7 - partClock*0.5/100; 
 if(num === 2 || num === 4)
    return 6/7 - partClock*0.5/100; 
 if(num === 7 || num === 11)
    return  2/7 -  partClock*0.5/100; 
 if(num === 8 || num === 10)
    return  1/7 - partClock*0.5/100; 

 if(num === 6 || num === 12)
    return  4/7 - partClock/100; 
 if(num === 3)
   return 6/7;
 if(num === 9)
    return 1/7 - partClock/100;
}

function positionY(num, partClock){
    if(num === 1 || num === 11)  
      return  1/7 - partClock*0.5/100;
    if(num === 2 || num === 10)
      return  2/7 - partClock*0.5/100; 

    if(num === 4 || num === 8)
      return 4/7 + partClock*0.5/100;    
    if(num === 5 || num === 7)
      return 5/7 + partClock*0.5/100; 

    if(num === 6)
       return 5/7 + partClock/100;
    if(num === 12)
       return 1/7 - partClock/100;

    if(num === 3 || num === 9)
      return  4/7 - partClock/100;       
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
      const degSec = 360/60;
      const degSectionHour = 5/60;
      const hours=dt.getHours();
      const minutes=dt.getMinutes();
      const seconds=dt.getSeconds();
      const ygolSec = 180 + seconds * degSec;
      const ygolMin = 180 + minutes * degSec;
      const ygolHours = 180 + (hours-12) * 30 + degSectionHour*minutes*degSec;
   
      //  console.log(-90 + (hours-12)*30 , 5/60*minutes*6);
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
      while (strVal.length < len)
          strVal='0'+strVal;
      return strVal;
  }