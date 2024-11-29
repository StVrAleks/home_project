//setInterval(updateTime,1000);

window.addEventListener('load', document.getElementsByTagName('input')[0].focus(), false); 
function validInp(){
  if(document.getElementsByTagName('input')[0].value < 200 || document.getElementsByTagName('input')[0].value >800)
    return alert('Введено не верное значение');
  return true;
}

function addClock(){
    var diametr = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('button')[0].style.display = 'none';  
   
    setInterval(picClock(diametr),1000);
}
function picClock(diametr){

    const xmlns = "http://www.w3.org/2000/svg";  
  //  var diametr = document.getElementsByTagName('input')[0].value;
      var elClock = document.getElementById('bigClock');
        
      const contextClock = elClock.getContext("2d");
      contextClock.canvas.width = diametr;
      contextClock.canvas.height = diametr;
      var radius =  contextClock.canvas.width / 2; 
      contextClock.clearRect(0, 0, contextClock.canvas.width, contextClock.canvas.height);
      contextClock.beginPath();



      contextClock.arc(radius, radius, radius, 0, Math.PI *2);      
      contextClock.fillStyle = "#FCCA66";  
      contextClock.fill();

    var  ygolCkockX,ygolCkockY;
      for(var i = 0; i<12; i++)
        {
          ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(i+1))*0.85;
          ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(i+1))*0.85;
          contextClock.fillStyle = "red";          
          contextClock.moveTo(ygolCkockX, ygolCkockY);
          contextClock.beginPath();
          //contextClock.fillStyle = "red";
          contextClock.arc(
                ygolCkockX,
                ygolCkockY,
                diametr*0.1/2, 0, 2 * Math.PI);
          contextClock.fillStyle = "#48B382";  
          contextClock.fill();
          contextClock.beginPath();
          contextClock.moveTo(ygolCkockX, ygolCkockY);
          contextClock.fillStyle = "black"; 
          contextClock.textAlign = 'center';
        //  contextClock.fontSize = '50px';
          contextClock.font = diametr*0.07 +'px Arial';
          contextClock.textBaseline = 'middle';
          contextClock.fillText(i + 1, ygolCkockX, ygolCkockY);
          contextClock.fill();
      }
      //sec
      contextClock.moveTo(radius, radius);
     // contextClock.rotate((45 * Math.PI) / 180);      
      var lines = [
        {x: radius, y: radius},
        {x: radius - 5, y: radius - radius /2 },
        {x: radius, y: 5},
        {x: radius + 5, y: radius - radius /2},
        {x: radius, y: radius},
      ],
      line = lines.shift();
      do {
        contextClock.moveTo(line.x, line.y);
        line = lines.shift();
        contextClock.lineTo(line.x, line.y);
        
      } while (lines.length);
        //contextClock.translate((45 * Math.PI) / 180 );

      contextClock.stroke();

       //min
       contextClock.moveTo(radius, radius);
       var lines = [
         {x: radius, y: radius},
         {x: radius - 10, y: radius - radius /3},
         {x: radius, y: radius / 3},
         {x: radius + 10, y: radius - radius /3},
         {x: radius, y: radius},
       ],
       line = lines.shift();
       do {
         contextClock.moveTo(line.x, line.y);
         line = lines.shift();
         contextClock.lineTo(line.x, line.y);
       } while (lines.length);
 
       contextClock.stroke();

       //hour
       contextClock.moveTo(radius, radius);
       var lines = [
         {x: radius, y: radius},
         {x: radius - 20, y: radius - radius / 4},
         {x: radius, y: radius / 4},
         {x: radius + 20, y: radius - radius / 4},
         {x: radius, y: radius},
       ],
       line = lines.shift();
       do {
         contextClock.moveTo(line.x, line.y);
         line = lines.shift();
         contextClock.lineTo(line.x, line.y);
       } while (lines.length);
 
       contextClock.stroke();

      
    
   var gegRot = updateTime(); 

return true;
}


   function updateTime() {
      const currTime=new Date();
      var currTimeStr = formatDateTime(currTime);
      if(document.getElementById('curD'))
         document.getElementById('curD').textContent = currTimeStr;
      console.log(currTimeStr);  
   }

  // форматирует дату-время в формате чч:мм:сс
  function formatDateTime(dt) {
      const degSec = 360/12;
      const hours=dt.getHours();
      const minutes=dt.getMinutes();
      const seconds=dt.getSeconds();
      const ygolSec = seconds * 360/60;
      const ygolMin = minutes * 360/60;
      const ygolHours = (hours+minutes/60) * degSec;
   
      
   /*   if(document.getElementById('clockSec'))
        document.getElementById('clockSec').style.transform = 'rotate(' + ygolSec + 'deg)';
      if(document.getElementById('clockMin'))
        document.getElementById('clockMin').style.transform = 'rotate(' + ygolMin  + 'deg)';
      if(document.getElementById('clockHour'))
        document.getElementById('clockHour').style.transform = 'rotate(' + ygolHours + 'deg)';*/
      return str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
  }

   // дополняет строку val слева нулями до длины Len
   function str0l(val,len) {
      let strVal=val.toString();
      while (strVal.length < len)
          strVal='0'+strVal;
      return strVal;
  }