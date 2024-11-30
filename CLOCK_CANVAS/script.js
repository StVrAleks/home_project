//setInterval(picClock,1000);

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
    
    picClock();
    updateTime();
   
}
function picClock(){

    const xmlns = "http://www.w3.org/2000/svg";  
    var diametr = document.getElementsByTagName('input')[0].value;
      var elClock = document.getElementById('bigClock');
        
      const contextClock = elClock.getContext("2d");
      contextClock.clearRect(0, 0, contextClock.canvas.width, contextClock.canvas.height);      
      contextClock.canvas.width = diametr;
      contextClock.canvas.height = diametr;
      var radius =  contextClock.canvas.width / 2;
      
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
          contextClock.font = diametr*0.07 +'px Arial';
          contextClock.textBaseline = 'middle';
          contextClock.fillText(i + 1, ygolCkockX, ygolCkockY);
          contextClock.fill();
      }
      //time
      const currTime = new Date();
      const degSec = 360/12;
      const hours=currTime.getHours();
      const minutes=currTime.getMinutes();
      const seconds=currTime.getSeconds();
      const ygolSec = seconds * 360/60;
      const ygolMin = minutes * 360/60;
      const ygolHours = (hours+minutes/60) * degSec;

      //sec
      var startCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*((seconds+30)/5))*0.2;
      var startCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*((seconds+30)/5))*0.2;
      ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(seconds/5))*0.85;
      ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(seconds/5))*0.85;
      contextClock.moveTo(radius, radius);   
      contextClock.beginPath();  
      var lines = [
        {x: startCkockX, y: startCkockY},
       // {x: radius - 5, y: radius - radius /2 },
        {x: ygolCkockX, y: ygolCkockY},
      //  {x: radius + 5, y: radius - radius /2},
        {x: startCkockX, y: startCkockY},
      ],
      line = lines.shift();
      contextClock.lineWidth = radius*0.01;
      do {
        contextClock.moveTo(line.x, line.y);
        line = lines.shift();
        contextClock.lineTo(line.x, line.y);      
      } while (lines.length);
      contextClock.stroke();
      contextClock.moveTo(ygolCkockX, ygolCkockY); 
      contextClock.arc(ygolCkockX, ygolCkockY, radius*0.002, 0, 2 * Math.PI);
      contextClock.fill();

//********************* */
      //min
      startCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*((minutes+30)/5))*0.2;
      startCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*((minutes+30)/5))*0.2;
      ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(minutes/5))*0.75;
      ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(minutes/5))*0.75;
 
       contextClock.moveTo(radius, radius);
       contextClock.beginPath();
       var lines = [
         {x: startCkockX, y: startCkockY},
       //  {x: radius - 10, y: radius - radius /3},
         {x: ygolCkockX, y: ygolCkockY},
         {x: ygolCkockX, y: ygolCkockY},
       //  {x: radius + 10, y: radius - radius /3},
         {x: startCkockX, y: startCkockY},
       ],
       line = lines.shift();
       contextClock.lineWidth = radius*0.015;
       do {
         contextClock.moveTo(line.x, line.y);
         line = lines.shift();
         contextClock.lineTo(line.x, line.y);
       } while (lines.length);
       contextClock.stroke();       
       contextClock.moveTo(ygolCkockX, ygolCkockY); 
       contextClock.arc(ygolCkockX, ygolCkockY, radius*0.005, 0, 2 * Math.PI);
       contextClock.fill();


//************* 
        //hour   
      startCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*((hours+70 + minutes+30)/60))*0.2;
      startCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*((hours+70 + minutes+30)/60))*0.2; 
       ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(hours + minutes/60))*0.65;
       ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(hours + minutes/60))*0.65;
  
       contextClock.moveTo(radius, radius);
       contextClock.beginPath();
       var lines = [
         {x: startCkockX, y: startCkockY},
       //  {x: radius - 20, y: radius - radius / 4},
         {x: ygolCkockX, y: ygolCkockY},
       //  {x: radius + 20, y: radius - radius / 4},
         {x: startCkockX, y: startCkockY},
       ],
       line = lines.shift();
       
       do {
         contextClock.moveTo(line.x, line.y);
         line = lines.shift();
         contextClock.lineTo(line.x, line.y);
         contextClock.lineWidth = radius*0.02;
       } while (lines.length);
       contextClock.stroke();
       contextClock.moveTo(ygolCkockX, ygolCkockY); 
       contextClock.arc(ygolCkockX, ygolCkockY, radius*0.007, 0, 2 * Math.PI);      
       contextClock.fill();
//*********** */
//timer
       contextClock.moveTo(radius*0.70, radius*0.85);
       contextClock.fillStyle = "black"; 
       contextClock.textAlign = 'center';
       contextClock.font = diametr*0.07 +'px Arial';
       contextClock.textBaseline = 'middle';
       contextClock.fillText(str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2), diametr*0.5, diametr*0.25);
       contextClock.fill();  
       console.log(str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2));  

return true;
}

   function updateTime() {
      const currTime=new Date();
      setInterval(picClock,1000); 
      return currTime;
   }
   // дополняет строку val слева нулями до длины Len
   function str0l(val,len) {
      let strVal=val.toString();
      while (strVal.length < len)
          strVal='0'+strVal;
      return strVal;
  }