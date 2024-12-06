//ширина и высота svg части
var partWidth = 800;
var partHeight = 500;

//высота и ширина ракеток
var posHeight = partHeight * 0.15;
var posWidth = 10;

//точка центра мяча
var ballPosX = partWidth / 2;
var ballPosY = 0;
var radiusBall = Math.round(partWidth / 15 * 0.5);
//обнуление скорости ракеток и мяча(по х и у)
var speedRight = 0;
var speedLeft = 0;
var speedR = 0;
var speedL = 0;
var ballSpeed = 0;
var ballSpeedY = 0;
//обнуление счета игры при обновлении страницы
var shet1 = 0;
var shet2 = 0;

//
//var flagLeft = 0;
//var flagRight =  0; 
//var randomX=0;
// var randomY=0;

var gamePartsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
gamePartsvg.setAttribute('width', partWidth);
gamePartsvg.setAttribute('height', partHeight);

var gamePart = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
gamePart.setAttribute('x', '0');
gamePart.setAttribute('y', '0');
gamePart.setAttribute('width', partWidth);
gamePart.setAttribute('height', partHeight);
gamePart.setAttribute('stroke', 'grey');
gamePart.setAttribute("fill", "#FCCA66");
gamePartsvg.appendChild(gamePart);
document.body.appendChild(gamePartsvg);
var leftPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
leftPos.setAttribute('id', 'leftPos');
leftPos.setAttribute('x', '0');
leftPos.setAttribute('y', partHeight/2 - posHeight/2);
leftPos.setAttribute('width', posWidth);
leftPos.setAttribute('height', posHeight);
leftPos.setAttribute("fill", "red");
leftPos.style.position = 'absolute';
gamePartsvg.appendChild(leftPos);
var rightPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
rightPos.setAttribute('id', 'rightPos');
rightPos.setAttribute('x', partWidth - posWidth);
rightPos.setAttribute('y', partHeight/2 - posHeight/2);
rightPos.setAttribute('width', posWidth);
rightPos.setAttribute('height', posHeight);
rightPos.setAttribute("fill", "black");
rightPos.style.position = 'absolute';
gamePartsvg.appendChild(rightPos);

var ballH = document.createElementNS(gamePartsvg.namespaceURI, 'circle');
gamePartsvg.appendChild(ballH);

    document.addEventListener('keydown', changeLeft, false);
    document.addEventListener('keydown', changeRight, false);
    document.addEventListener('keyup', changeLeftUP, false);
    document.addEventListener('keyup', changeRightUP, false);
    setInterval(plashkaMove, 1000 / 80); //80 раз в секунду 

function addPlay() {
//обнуляем нужные переменные, задаем позицию мяча на новый раунд
    speedRight = 0;
    speedLeft = 0;
    ballPosX = partWidth / 2;
    ballPosY = posHeight - radiusBall; 
    ballSpeed = 1;
    ballSpeedY = 1;
   

    ballH.setAttribute('id', 'IBall');
    ballH.setAttribute('cx', partWidth/2);
    ballH.setAttribute('cy', 0);
    ballH.setAttribute('r', radiusBall);
    ballH.setAttribute("fill", "orange");
    ballH.style.position = 'absolute';
    document.getElementById('schet1').innerHTML = shet2;
    document.getElementById('schet').innerHTML = ":";
    document.getElementById('schet2').innerHTML = shet1;

}

function changeLeft(event) {
    eo = window.event;
    eo.preventDefault();
    eo.repeat = false;

    if (eo.ctrlKey)
        speedLeft = 2;
    if (eo.shiftKey) 
        speedLeft = -2;
    return speedLeft || 0;
}

function changeRight(event) {
    eo = window.event;
    eo.preventDefault();
    eo.repeat = false;   

    if (eo.code === 'ArrowUp')
        speedRight = -2;
    if (eo.code === 'ArrowDown')
        speedRight = 2;
    return speedRight || 0;
}

function changeLeftUP() {
    eo = window.event;
    if (eo.ctrlKey)
        speedLeft = 2;
    if (eo.shiftKey) 
        speedLeft = -2;
    return speedLeft || 0;
}

function changeRightUP(){
    eo = window.event;
    if (eo.code === 'ArrowUp')
        speedRight = -2;
    if (eo.code === 'ArrowDown')
        speedRight = 2;
    return speedRight || 0;
}

function plashkaMove() {
         
    var flagLeft = partHeight / 2 - posHeight / 2 + speedL;
    if (flagLeft > 0 && flagLeft < partHeight - posHeight)
    {
        speedL = speedL + speedLeft; 
        leftPos.style.transform = ' translate(' + '0'+ ',' + speedL + 'px)'; 
        speedLeft = 0; //прибавляет тормозов, но ракетка останавливается во время
    }
    else 
        speedL = speedL + speedLeft;

        //leftPos.style.transform = ' translate(' + '0'+ ',' + speedLeft + 'px)';
        //leftPos.setAttribute('y', flagLeft);
           
  var flagRight =partHeight / 2 - posHeight / 2  + speedR; 

    if (flagRight > 0 && flagRight < partHeight - posHeight)
    {
        speedR = speedR + speedRight;  
        rightPos.style.transform = ' translate(' + '0'+ ',' + speedR + 'px)';
        speedRight = 0; //прибавляет тормозов, но ракетка останавливается во время
    }
    else 
        speedR = speedR + speedRight;  

       // rightPos.style.transform = ' translate(' + '0'+ ',' + speedRight + 'px)';
      //  rightPos.setAttribute('y', flagRight);
    
    //*********** ball */  

ballPosX = ballPosX + ballSpeed;  //смещение мяча по X
    // вылетел ли мяч правее стены
    if (ballPosX + radiusBall > partWidth) {
        ballSpeed = 0;
        ballSpeedY = 0;
        ballPosX = partWidth - radiusBall;
        shet2 = shet2 + 1;
        document.getElementById('schet1').innerHTML = shet2;
    }
    // вылетел ли мяч левее стены
    if (ballPosX - radiusBall < 0) {    
        ballSpeed = 0;
        ballSpeedY = 0;
        ballPosX = radiusBall;
        shet1 = shet1 + 1;
        document.getElementById('schet2').innerHTML = shet1;
    }
    var ballPosHeight = ballPosY + radiusBall;
ballPosY = ballPosY + ballSpeedY;  //смещение мяча по Y
    // вылетел ли мяч ниже пола?
    if (ballPosHeight - radiusBall >= partHeight) {
        ballSpeedY = -ballSpeedY;
        ballPosY = partHeight - radiusBall;
    }
    // вылетел ли мяч выше потолка?
    if (ballPosY - radiusBall <= 0) {
        ballSpeedY = -ballSpeedY;
        ballPosY = radiusBall;
    }
//ballH.setAttribute('cx', ballPosX);
//ballH.setAttribute('cy', ballPosY);
    
    //отбила ли левая ракетка
    //центр мяча > верхней У позиции ракетки И центр мяча < нижней точки У ракетки (т.е. мяч попал в ракетку по коорд. у)
    //и крайняя левая точка мяча <= крайней точке ракетки по коорд. х
    if (ballPosY > flagLeft && ballPosY < flagLeft + posHeight && ballPosX - radiusBall <= posWidth) {    
        ballSpeed = -ballSpeed;
        ballSpeedY = -ballSpeedY;
        ballPosX = radiusBall + posWidth;
        ballPosY = ballPosY;
    }
    //отбила ли правая ракетка?
    if (ballPosY > flagRight && ballPosY < flagRight + posHeight && ballPosX + radiusBall >= partWidth - posWidth) {
        ballSpeed = -ballSpeed;
        ballSpeedY = -ballSpeedY;
        ballPosX = ballPosX;
        ballPosY = ballPosY;
    }
    var a = ballPosX -partWidth/2;
    var b = ballPosY;
  ballH.style.transform = ' translate(' + a +'px,' + b + 'px)'; 
}