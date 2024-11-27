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

    const xmlns = "http://www.w3.org/2000/svg";  
    var diametr = document.getElementsByTagName('input')[0].value;
      document.getElementsByTagName('input')[0].style.display = 'none';
      document.getElementsByTagName('button')[0].style.display = 'none';  
  
     // var clock = document.createElement("div"); 
    // var clockSVG = document.createElementNS(xmlns, "svg");
     var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     svg.setAttribute('width',  diametr);
     svg.setAttribute('height', diametr);
     var clock = document.createElementNS(svg.namespaceURI, 'circle');
     clock.setAttribute('cx',  diametr/2);
     clock.setAttribute('cy', diametr/2);
     clock.setAttribute('r', diametr/2);
     clock.setAttribute("fill", "#FCCA66");
     svg.appendChild(clock);
     document.body.appendChild(svg);



   /* clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.id = 'bigClock';   
    document.body.appendChild(clock); */
    
    var clockItems = [];
    var clockText = [];
    var clockTextPath;
    var radius = 0.5*diametr*0.8;
    
    var clockNumber = 8;
    var ygolCkockX;
    var ygolCkockY;
    var clockM;
    for(var i = 0; i<12; i++)
    {
      clockItems[i] = document.createElementNS(svg.namespaceURI, 'circle');
      ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(i+1));
      ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(i+1));
      clockItems[i].setAttribute('cx',  ygolCkockX);
      clockItems[i].setAttribute('cy', ygolCkockY);
      clockItems[i].setAttribute('r', diametr*clockNumber/100);
      clockItems[i].setAttribute("fill", "#48B382");
      clockItems[i].setAttribute("id", 'num' + i + 1);
      clockText[i] = document.createElementNS(svg.namespaceURI, 'text'); 
      clockText[i].setAttribute("fill", "black");
      clockText[i].setAttribute("font-size", "15px");
     /* clockText[i].setAttribute("x", ygolCkockX);
      clockText[i].setAttribute("y", ygolCkockY);
    */  clockTextPath = document.createElementNS(svg.namespaceURI, 'textPath'); 
      clockTextPath.setAttribute("xlink:href", 'num' + i + 1);
      clockTextPath.textContent = 1;

      clockText[i].appendChild(clockTextPath);   
      clockItems[i].appendChild(clockText[i]);    
      svg.appendChild(clockItems[i]); 
    }

       
    setInterval(updateTime,1000);

    var min = document.createElementNS(svg.namespaceURI, 'line');
    min.setAttribute('x1',  diametr*0.5);
    min.setAttribute('y1', diametr*0.5);
    min.setAttribute('x2',  diametr*0.7);
    min.setAttribute('y2', diametr*0.7 - 20);
    min.setAttribute('stroke', 'black');
    min.setAttribute('stroke-width', 5);
    min.setAttribute('id', 'clockMin');
    svg.appendChild(min);


    var sec = document.createElementNS(svg.namespaceURI, 'line');
    sec.setAttribute('x1',  diametr*0.5);
    sec.setAttribute('y1', diametr*0.5);
    sec.setAttribute('x2',  diametr*0.8);
    sec.setAttribute('y2', diametr*0.8);
    sec.setAttribute('stroke', 'black');
    sec.setAttribute('stroke-width', 5);
    sec.setAttribute('id', 'clockSec');
    svg.appendChild(sec);

   /* var sec  = document.createElement("div"); 
    sec.id = 'clockSec';
    sec.style.height = 0.5 * Number(diametr)  + 'px';*/


    var hour = document.createElement("div"); 
    hour.id = 'clockHour';
    hour.style.height = 0.25 * Number(diametr) + 'px';
     
   // clock.appendChild(min);   
   // clock.appendChild(sec); 
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