//window.addEventListener('load', bodyStart, false); 

 
/*function bodyStart(event){
    eo = window.event;
    eo.preventDefault();
   
}*/


  var partWidth = 800;
  var partHeight = 500;
  var IBlockHeight = 10;

  var posHeight = partHeight*0.15;  
  var posWidth = 10; 

  var speedRight = 0;
  var speedLeft = 0;
  var ballPosX = partWidth/2;
  var ballSpeed = 1;  
  var ballPosY = IBlockHeight;
  var ballSpeedY = 1;  
  var shet1 = 0;
  var shet2 = 0;
  var radiusBall = Math.round(partWidth/15*0.5); 
  //var randomX=0;
 // var randomY=0;

  var gamePartsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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
      gamePartsvg.appendChild(ballH);

  function addPlace(){
      speedRight = 0;
      speedLeft = 0;
      ballPosX = partWidth/2;
      ballSpeed = 1;  
      ballPosY = IBlockHeight;
      ballSpeedY = 1;  

 
   
      ballH.setAttribute('id', 'IBall');
      ballH.setAttribute('cx',  partWidth / 2);
      ballH.setAttribute('cy', IBlockHeight);   
      ballH.setAttribute('r', radiusBall); 
      ballH.setAttribute("fill", "orange"); 
      ballH.style.position = 'absolute'; 
       
 // document.getElementById('schet1').innerHTML = shet2;
  document.getElementById('schet').innerHTML = ":";
 // document.getElementById('schet2').innerHTML = shet1;

  //randomX = Math.random();
  //randomY = Math.random();
  //console.log(randomX, randomY);
  }
  
function addPlay(){
    addPlace();
    document.addEventListener('keydown', changeLeft, false); 
    document.addEventListener('keydown', changeRight, false); 
   // clearInterval(setInterval(plashkaMove, 1000/80));
    setInterval(plashkaMove, 1000/80); //80 раз в секунду     
 }

function changeLeft(event){
    eo = window.event;
    eo.preventDefault();   
    
    if (eo.ctrlKey) {
        speedLeft = speedLeft + 2;
        return speedLeft;   
    }
    if (eo.shiftKey) {
        speedLeft = speedLeft - 2;
        return speedLeft;      
        }
    return speedLeft||0;     
}

function changeRight(event){
    eo = window.event;
    eo.preventDefault();   

    if (eo.code === 'ArrowUp') {
        speedRight = speedRight - 2;
        return speedRight;       
    }
    if (eo.code === 'ArrowDown') {
        speedRight = speedRight + 2;
        return speedRight;      
        }  
    return speedRight||0;     
}

 function plashkaMove(){

//    var transformAttr = flagLeft + speedLeft;
   var flagLeft = partHeight/2 - posHeight/2 + speedLeft;
   var flagRight = partHeight/2 - posHeight/2 + speedRight;
   leftPos.setAttribute('y', flagLeft); 
  // var transformAttrText = ' translate(' + '0'+ ',' + transformAttr + 'px)';
  // leftPos.setAttribute('transform', transformAttrText);
   rightPos.setAttribute('y', flagRight); 


   //*********** ball */  

    ballPosX = ballPosX + ballSpeed;  //смещение мяча по X
      // вылетел ли мяч правее стены
      if ( ballPosX + radiusBall > partWidth ) {
      //  console.log(partWidth, ballPosX + radiusBall);
           ballSpeed = 0;
           ballSpeedY = 0;
           ballPosX = partWidth - radiusBall;
           shet2 = shet2 + 1; 
           document.getElementById('schet2').innerHTML = shet2;
       }
      // вылетел ли мяч левее стены
      if ( ballPosX <= 0 ) {
           ballSpeed = 0;
           ballSpeedY = 0;
           ballPosX = radiusBall;
           shet1 = shet1 + 1;
           document.getElementById('schet1').innerHTML = shet1;
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
 //var leftH = partHeight/2 - posHeight/2;
 //var leftW = partHeight/2 - posHeight/2;  
 //posWidth, posHeight
    ballH.setAttribute('cx', ballPosX);
    ballH.setAttribute('cy', ballPosY);           

    if ( ballPosY > flagLeft && ballPosY < flagLeft + posHeight && ballPosX <= posWidth) {
        //  console.log(partWidth, ballPosX + radiusBall);
             ballSpeed = -ballSpeed;
             ballSpeedY = -ballSpeedY;
             ballPosX =  posWidth + 1;
             ballPosY = ballPosY + 1;
         }   
         if ( ballPosY > flagRight && ballPosY < flagRight + posHeight && ballPosX + radiusBall*2 >= partWidth-posWidth) {
         //  console.log(ballPosY, flagRight, flagRight + posHeight);
                 ballSpeed = -ballSpeed;
                 ballSpeedY = -ballSpeedY;
                 console.log('a' + ballPosX, ballPosY);
                 ballPosX = partWidth - radiusBall - posWidth - 10;//radiusBall - posWidth + 1;
                 ballPosY = ballPosY; 
               //  console.log('b' + ballPosX, ballPosY);
             }   
         


}
