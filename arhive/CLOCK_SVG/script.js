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

    
    var clockItems, clockText;
    var radius = 0.5*diametr*0.8;
    var fontClock = diametr*0.06;
    var clockNumber = 8;
    var ygolCkockX, ygolCkockY;

    for(var i = 0; i<12; i++)
    {
      clockItems = document.createElementNS(svg.namespaceURI, 'circle');
      ygolCkockX = diametr*0.5 + radius * Math.sin(360/12/180*Math.PI*(i+1));
      ygolCkockY = diametr*0.5 - radius * Math.cos(360/12/180*Math.PI*(i+1));
      clockItems.setAttribute('cx',  ygolCkockX);
      clockItems.setAttribute('cy', ygolCkockY);
      clockItems.setAttribute('r', diametr*clockNumber/100);
      clockItems.setAttribute("fill", "#48B382");
      clockItems.setAttribute("id", 'num' + i + 1);

      clockText = document.createElementNS(svg.namespaceURI, 'text'); 
      clockText.setAttribute("x", ygolCkockX - 0.4*diametr*clockNumber/100);
      clockText.setAttribute("y", ygolCkockY + 0.5*diametr*clockNumber/100 - fontClock/2);    
      clockText.setAttribute("fill", "#000000");
      clockText.setAttribute("font-size", fontClock  + 'px');
      clockText.textContent = i + 1; 
         
      svg.appendChild(clockItems); 
      svg.appendChild(clockText); //не могу в clockItems добавить clockText. По разметки тогда верно, но цифры не видны
    }

       
    setInterval(updateTime,1000);

    var min = document.createElementNS(svg.namespaceURI, 'line');
    min.setAttribute('x1',  diametr*0.5);
    min.setAttribute('y1', diametr*0.25);
    min.setAttribute('x2',  diametr*0.5);
    min.setAttribute('y2', diametr*0.5);
    min.setAttribute('stroke', 'black');
    min.setAttribute('stroke-width', diametr*0.01);
    min.setAttribute('id', 'clockMin');
    min.style.transformOrigin = '50% 50%'; 
       
    svg.appendChild(min);


    var sec = document.createElementNS(svg.namespaceURI, 'line');
    sec.setAttribute('x1',  diametr*0.5);
    sec.setAttribute('y1', diametr*0.15);
    sec.setAttribute('x2',  diametr*0.5);
    sec.setAttribute('y2', diametr*0.5);
    sec.setAttribute('stroke', 'black');
    sec.setAttribute('stroke-width', diametr*0.005);
    sec.setAttribute('id', 'clockSec');
    sec.style.transformOrigin = '50% 50%'; 
    svg.appendChild(sec);


    var hour = document.createElementNS(svg.namespaceURI, 'line');
    hour.setAttribute('x1',  diametr*0.5);
    hour.setAttribute('y1', diametr*0.3);
    hour.setAttribute('x2',  diametr*0.5);
    hour.setAttribute('y2', diametr*0.5);
    hour.setAttribute('stroke', 'black');
    hour.setAttribute('stroke-width', diametr*0.015);
    hour.setAttribute('id', 'clockHour');
    hour.style.transformOrigin = '50% 50%'; 
    svg.appendChild(hour); 
 


    var timeNew = document.createElementNS(svg.namespaceURI, 'text'); 
    timeNew.setAttribute("x", Number(diametr)*0.37); //как отцентрировать картинку
    timeNew.setAttribute("y", Number(diametr)*0.35);
    timeNew.setAttribute("fill", "black");
    timeNew.setAttribute("font-size", Number(diametr)*0.07  + 'px');
    timeNew.setAttribute("font-weight", 'bold');
    timeNew.setAttribute("font-style", 'italic');
    timeNew.setAttribute("id", 'curD');    
    svg.appendChild(timeNew);    
    

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