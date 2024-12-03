//setInterval(picClock,1000);
window.addEventListener('load', bodyStart, false); 





function bodyStart(event){
    eo = window.event;
    eo.preventDefault();
}

  //document.getElementsByTagName('button')[0].style.display = 'none';
  var gamePartsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var partWidth = 1000;
  var partHeight = 600;
      gamePartsvg.setAttribute('width',  partWidth);
      gamePartsvg.setAttribute('height', partHeight);
  var gamePart = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
      gamePart.setAttribute('x',  '0');
      gamePart.setAttribute('y', '10vh');   
      gamePart.setAttribute('width',  partWidth);
      gamePart.setAttribute('height', partHeight); 
      gamePart.setAttribute("fill", "#FCCA66");
      gamePartsvg.appendChild(gamePart);
      document.body.appendChild(gamePartsvg);

  var posHeight = partHeight*0.15;  
  var posWidth = 10;   

  var leftPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
      leftPos.setAttribute('id',  'leftPos');
      leftPos.setAttribute('x',  '0');
      leftPos.setAttribute('y', partHeight/2 - posHeight/2);   
      leftPos.setAttribute('width',  posWidth);
      leftPos.setAttribute('height', posHeight); 
      leftPos.setAttribute("fill", "red");
      leftPos.style.position = 'absolute';
      gamePartsvg.appendChild(leftPos);

  var rightPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');   
      rightPos.setAttribute('id', 'rightPos');
      rightPos.setAttribute('x',  partWidth - posWidth);
      rightPos.setAttribute('y', partHeight/2 + posHeight/2);   
      rightPos.setAttribute('width',  posWidth);
      rightPos.setAttribute('height', posHeight); 
      rightPos.setAttribute("fill", "black");
      rightPos.style.position = 'absolute';
      gamePartsvg.appendChild(rightPos);

  var ballH = document.createElementNS(gamePartsvg.namespaceURI, 'circle');
      ballH.setAttribute('id', 'IBall');
      ballH.setAttribute('x',  partWidth / 2);
      ballH.setAttribute('y', 0);   
      ballH.setAttribute('width',  partWidth/15);
      ballH.setAttribute('height', partWidth/15);    
      ballH.setAttribute("fill", "white");  
      gamePartsvg.appendChild(ballH);
    
     /*   update : function() {
            const ballElem=
                document.getElementById('IBall');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
        }*/

function addPlay(){
  // const eo = window.event;
  // eo.preventDefault();
    setInterval(plashkaMove(partHeight, posHeight), 1000/80); //80 раз в секунду
      
 }


 function plashkaMove(partHeight, posHeight){
   // eo = window.event;
   // eo.preventDefault(); 
    var leftPlashka = document.getElementById('leftPos');
    var rightPlashka = document.getElementById('rightPos');
    var transformAttr;
    var flagLeft = partHeight/2 - posHeight/2;
    var flagRight = partHeight/2 - posHeight/2;
    console.log(leftPlashka.value, rightPlashka);  
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey) {
            flagLeft = flagLeft + 1;
            leftPos.setAttribute('y', flagLeft); 
            //transformAttr = ' translate(' + '0'+ ',' + flag + 'px)';
           // leftPlashka.setAttribute('transform', transformAttr);
            console.log(leftPlashka);         
        }
        if (e.shiftKey) {
            flagLeft =flagLeft - 1;
            leftPos.setAttribute('y', flagLeft);
           // transformAttr = ' translate(' + '0'+ ',' + flag + 'px)';
           // leftPlashka.setAttribute('transform', transformAttr);
            console.log(leftPlashka);        
            }
            if (e.code === 'ArrowUp') {
                flagRight = flagRight - 1;
                rightPos.setAttribute('y', flagRight); 
                //transformAttr = ' translate(' + '0'+ ',' + flag + 'px)';
               // leftPlashka.setAttribute('transform', transformAttr);
                console.log(rightPlashka);         
            }
            if (e.code === 'ArrowDown') {
                flagRight =flagRight + 1;
                rightPos.setAttribute('y', flagRight);
               // transformAttr = ' translate(' + '0'+ ',' + flag + 'px)';
               // leftPlashka.setAttribute('transform', transformAttr);
                console.log(rightPlashka);        
                }  
                
                
      })


      ballH.posX+=ballH.speedX;

      // вылетел ли мяч правее стены
      if ( ballH.posX+ballH.width>areaH.width ) {
          ballH.speedX=-ballH.speedX;
          ballH.posX=areaH.width-ballH.width;
      }
      // вылетел ли мяч левее стены
      if ( ballH.posX<0 ) {
          ballH.speedX=-ballH.speedX;
          ballH.posX=0;
      }

   //   ballH.update();

}
