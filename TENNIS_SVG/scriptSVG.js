//window.addEventListener('load', bodyStart, false); 

 
/*function bodyStart(event){
    eo = window.event;
    eo.preventDefault();
   
}*/

  var gamePartsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var partWidth = 1000;
  var partHeight = 600;
  var IBlockHeight = 10;

      gamePartsvg.setAttribute('width',  partWidth);
      gamePartsvg.setAttribute('height', partHeight);
  var gamePart = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
      gamePart.setAttribute('x',  '0');
      gamePart.setAttribute('y', IBlockHeight);   
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

  var radiusBall = Math.round(partWidth/15*0.5); 
  var ballH = document.createElementNS(gamePartsvg.namespaceURI, 'circle');
      ballH.setAttribute('id', 'IBall');
      ballH.setAttribute('cx',  partWidth / 2);
      ballH.setAttribute('cy', IBlockHeight);   
      ballH.setAttribute('r', radiusBall); 
      ballH.setAttribute("fill", "orange"); 
      ballH.style.position = 'absolute'; 
      gamePartsvg.appendChild(ballH);
    

  var speedRight = 0;
  var speedLeft = 0;
  var ballPosX = partWidth/2;
  var ballSpeed = 1;  
  var ballPosY = IBlockHeight;
  var ballSpeedY = 1;  
  var shet1 = 0;
  var shet2 = 0;
  document.getElementById('schet1').innerHTML = shet1;
  document.getElementById('schet2').innerHTML = shet2;

function addPlay(){
    document.addEventListener('keydown', changeLeft, false); 
    document.addEventListener('keydown', changeRight, false); 
    setInterval(plashkaMove, 1000/65); //80 раз в секунду     
 }

function changeLeft(event){
    eo = window.event;
    eo.preventDefault();   
    
    if (eo.ctrlKey) {
        speedLeft = speedLeft + 1;
        return speedLeft;   
    }
    if (eo.shiftKey) {
        speedLeft = speedLeft - 1;
        return speedLeft;      
        }
    return speedLeft||0;     
}

function changeRight(event){
    eo = window.event;
    eo.preventDefault();   

    if (eo.code === 'ArrowUp') {
        speedRight = speedRight - 1;
        return speedRight;       
    }
    if (eo.code === 'ArrowDown') {
        speedRight = speedRight + 1;
        return speedRight;      
        }  
    return speedRight||0;     
}

 function plashkaMove(){

//    var transformAttr = flagLeft + speedLeft;
   var flagLeft = partHeight/2 - posHeight/2;
   var flagRight = partHeight/2 - posHeight/2;
   leftPos.setAttribute('y', flagLeft + speedLeft); 
  // var transformAttrText = ' translate(' + '0'+ ',' + transformAttr + 'px)';
  // leftPos.setAttribute('transform', transformAttrText);
   rightPos.setAttribute('y', flagRight + speedRight); 


   //*********** ball */  

    ballPosX = ballPosX + ballSpeed;  //смещение мяча по X
      // вылетел ли мяч правее стены
      if ( ballPosX + radiusBall > partWidth ) {
      //  console.log(partWidth, ballPosX + radiusBall);
           ballSpeed = 0;
           ballSpeedY = 0;
           ballPosX = partWidth - radiusBall;
           shet1 = shet1 + 1; 
      }
      // вылетел ли мяч левее стены
      if ( ballPosX < 0 ) {
           ballSpeed = 0;
           ballSpeedY = 0;
           ballH.posX = 0;
           shet2 = shet2 + 1;
      }
var ballPosHeight = ballPosY + radiusBall;    
    ballPosY = ballPosY + ballSpeedY;  //смещение мяча по Y
      // вылетел ли мяч ниже пола?
      if (ballPosHeight > partHeight) {
          ballSpeedY = -ballSpeedY;
          ballPosY = partHeight - radiusBall;
    }
      // вылетел ли мяч выше потолка?
        if ( ballPosY < 0 ) {
            ballSpeedY = -ballSpeedY;
            ballPosY = 0;
    }
    ballH.setAttribute('cx', ballPosX);
    ballH.setAttribute('cy', ballPosY); 
    console.log(shet1, shet2);
    console.log(document.getElementById('schet1').innerHTML);

}
