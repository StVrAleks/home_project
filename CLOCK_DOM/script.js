function addClock(){
    var diametr = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].style.display = 'none';
    document.getElementsByTagName('bytton')[0].style.display = 'none';    
    var clock = document.createElement("div"); 
    clock.id = 'bigClock';
    clock.style.width = Number(diametr) + 'px';
    clock.style.height = Number(diametr) + 'px';
    clock.style.borderRadius = '50%';
    clock.style.backgroundColor = 'yellow';
    clock.style.position = 'absolute';
    document.body.appendChild(clock); 
    
    var clockItems = [];
    for(var i = 0; i<12; i++)
    {
      clockItems[i] = document.createElement("div"); 
      clockItems[i].id = 'item' + i;
      clockItems[i].style.width = 0.1 * Number(diametr)  + 'px';
      clockItems[i].style.height = 0.1 * Number(diametr)  + 'px';
      clockItems[i].style.borderRadius = '50%';
      clockItems[i].style.backgroundColor = 'green';
      clockItems[i].innerText = i+1;
      clockItems[i].style.fontSize = '11px';
      clockItems[i].style.textAlign= 'center';
      clockItems[i].style.left = Number(diametr) * positionX(i+1) + 'px';
      clockItems[i].style.top = Number(diametr) * positionY(i+1)  + 'px';
      clock.appendChild(clockItems[i]);   
    }
    for(var i = 0; i<12; i++)
            clockItems[i].style.position = 'absolute';

    var hour = document.createElement("div"); 
    hour.id = 'clockHour';
    hour.style.width = 0.1 * Number(diametr)  + 'px';
    hour.style.height = '30px';   
    hour.style.backgroundColor = 'black'; 
    var min  = document.createElement("div"); 
    min.id = 'clockMin';
    min.style.width = 0.1 * Number(diametr)  + 'px';
    min.style.height = '20px';
    min.style.backgroundColor = 'black';
    var sec  = document.createElement("div"); 
    sec.id = 'clockSec';
    sec.style.width = 0.1 * Number(diametr)  + 'px';
    sec.style.height = '10px';
    sec.style.backgroundColor = 'black';
}


function positionX(num, diam){
 if(num === 1 || num === 5)
    return 0.68;
 if(num === 2 || num === 4)
    return 0.82;
 if(num === 3)
    return 1-0.11;
 if(num === 6 || num === 12)
    return 0.5-0.1*0.5;
 if(num === 7 || num === 11)
    return 0.23;
 if(num === 8 || num === 10)
    return 0.075;
 if(num === 9)
    return 0;
}

function positionY(num){
    if(num === 1 || num === 11)
       return 0.08;
    if(num === 2 || num === 10)
       return 0.22;
    if(num === 3 || num === 9)
       return 0.5-0.1*0.5;
    if(num === 4 || num === 8)
       return 0.66;
    if(num === 5 || num === 7)
       return 0.825;
    if(num === 6)
       return 1-0.11;
    if(num === 12)
       return 0;
   }