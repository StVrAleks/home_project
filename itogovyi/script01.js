


window.addEventListener('load', addGame); 
window.addEventListener('resize', addGame);

const sizeP = addGame();

function addGame()
{
  var sizePart = {};
  var widthEl = 0;
  var heightEl = 0;
  const newWid = window.innerWidth;
  const newHeig = window.innerHeight;
  allPartGame = document.getElementById('place_game_out');
 // var bodyPart = document.getElementsByTagName('body')[0];
  //var plashkaRight = document.getElementsByClassName('right')[0];
  //var plashkaBottom = document.getElementsByClassName('bottom')[0];
  //var labelBottom = document.getElementsByClassName('to_bottom')[0];

  //var widthGran;
  //var heightGran;

 if( newWid < 1061){
  widthEl = newWid*0.92;
  heightEl = newHeig*0.92;
  var allPartGame = document.getElementById('place_game_out');
  allPartGame.style.width = widthEl + 'px';
  allPartGame.style.height = heightEl + 'px';

var bottomgran = document.getElementsByClassName('right')[0];
var gran = bottomgran.getBoundingClientRect();

var topgran = document.getElementsByClassName('top')[0];
var granTop = topgran.getBoundingClientRect();

var forLabelTop = document.getElementById('for_game_layer1').offsetWidth + 21;
var forLabelBot = document.getElementById('for_game_layer1').offsetHeight - 26;

  //console.log('widthGran  ' + document.getElementById('for_game_layer2').offsetLeft );   
  //document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + ( gran.width-38 ) + 'px, 4px) rotateY(90deg)';
  //document.getElementsByClassName('left')[0].style.transform = 'translate(-17px,' + (granTop.height -15) + 'px) rotateX(90deg)';
  document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forLabelBot + 'px, 4px) rotateY(90deg)';
  document.getElementsByClassName('left')[0].style.transform = 'translate(-17px,' + forLabelTop + 'px) rotateX(90deg)';
  console.log('label', forLabelTop, forLabelBot);
  document.getElementsByClassName('for_label')[0].style.left = forLabelTop - forLabelBot/2 - 26 +'px';
  document.getElementsByClassName('to_bottom')[0].style.left = forLabelBot - 51 + 'px';
 }
 else if(newWid > 1060){
    widthEl = 0.68*newWid;
    heightEl =0.7*newHeig;
    allPartGame.style.width = widthEl+ 'px';
    allPartGame.style.height = heightEl+ 'px';


    var forLabelTop = document.getElementById('for_game_layer1').offsetWidth - 1;
    var forGranBot = document.getElementsByClassName('top')[0].offsetTop + document.getElementById('for_game_layer1').offsetHeight-6;
    var forLabelBot = forGranBot -18;


    document.getElementsByClassName('bottom')[0].style.transform = 'translate(0px,' + forGranBot + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'translate('+ forLabelTop + 'px, 0px) rotateY(90deg)';
    document.getElementsByClassName('to_bottom')[0].style.top = forLabelBot  + 'px';
 }
 console.log("w",widthEl, 'h',heightEl);
 sizePart.gamePartW = widthEl;
 sizePart.gamePartH = heightEl;
 sizePart.logoW = document.getElementById('logo').offsetLeft;
 sizePart.logoH = document.getElementById('logo').offsetTop;
 sizePart.layerW = (widthEl - document.getElementById('for_game_layer4').offsetWidth)/2;
 sizePart.layerH = (heightEl - document.getElementById('for_game_layer4').offsetHeight)/2;
 
 console.log(document.getElementById('for_game_layer4').offsetWidth, document.getElementById('for_game_layer4').offsetLeft);
 return sizePart;
/*var allPart = allPartGame.getBoundingClientRect();
var allPartWidth = allPart.width; 
var allPartHeight = allPart.height;
console.log(allPartWidth, allPartHeight);*/
  // Время для адаптивной магии!
}

const xmlns = "http://www.w3.org/2000/svg"; 

var canvas = document.getElementById('game_canvas');
const canvasPart = canvas.getContext("2d");
canvasPart.clearRect(0, 0, canvasPart.canvas.width, canvasPart.canvas.height);      
canvasPart.canvas.width = sizeP.gamePartW;
canvasPart.canvas.height = sizeP.gamePartH;

canvas.style.position = 'absolute';
canvas.style.top = 50 + '%';
canvas.style.left = 50 + '%';
canvas.style.transform = 'translate(-50%,-50%)';
canvas.style.zIndex = '10';
var allPartGame = 0;


var itemLogo = document.getElementById('logo');

var posLogoX = Math.round(sizeP.logoW, 2);
var posLogoY = Math.round(sizeP.logoH, 2);


//console.log(posLogoX, posLogoY);
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "red"; 
var lines = [
  {x: posLogoX *1.1, y: posLogoY *1.1},
  {x: posLogoX *1.3, y: posLogoY *1.1},
  {x: posLogoX *1.1, y: posLogoY *1.5},
  {x: posLogoX *1.6, y: posLogoY *1.1},
  {x: posLogoX *1.4, y: posLogoY *1.5},
],
line = lines.shift();
//console.log(line);
do {
  ctx.moveTo(line.x, line.y);
  line = lines.shift();
  ctx.lineTo(line.x, line.y);
} while (lines.length);


ctx.lineWidth = 2;
ctx.strokeStyle = "black"; 
ctx.moveTo(posLogoX*1.05, posLogoY*1.8);
ctx.lineTo(posLogoX*1.2, posLogoY*1.8);
ctx.lineTo(posLogoX*1.7, posLogoY*1.4);
ctx.lineTo(posLogoX*1.5, posLogoY*1.75);
ctx.lineTo(posLogoX*1.9, posLogoY*1.4);
ctx.lineTo(posLogoX*1.7, posLogoY*1.8);
ctx.closePath();
//ctx.stroke();



var posGameX = Math.round(sizeP.layerW ,2);
var posGameY = Math.round(sizeP.layerH ,2);

console.log(sizeP.layerW, sizeP.layerH);

//крыша
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#941121";

ctx.strokeStyle ='grey';  
ctx.moveTo(posGameX, posGameY*1.5);
ctx.lineTo(posGameX*1.15, posGameY*1.02);
ctx.lineTo(posGameX*1.5, posGameY*2.3);
ctx.stroke();
ctx.closePath();


//труба
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#ff0000";  
ctx.moveTo(posGameX*1.25, posGameY*1.3);
ctx.lineTo(posGameX*1.35, posGameY*1.3);
ctx.lineTo(posGameX*1.35, posGameY*1.75);
ctx.fill();

ctx.stroke();
ctx.closePath();
//выход
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#5A5F60";  
ctx.moveTo(posGameX*1.35, posGameY*1.75);
ctx.lineTo(posGameX*1.35, posGameY*1.45);
ctx.lineTo(posGameX*1.4, posGameY*1.45);
ctx.lineTo(posGameX*1.4, posGameY*1.8);
ctx.lineTo(posGameX*1.5, posGameY*2);
ctx.lineTo(posGameX*1.5, posGameY*1.3);
ctx.lineTo(posGameX*1.4, posGameY*1.45);

ctx.stroke();
ctx.closePath();
//окно
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#5A5F60";  
ctx.moveTo(posGameX*1.4, posGameY*1.6);
ctx.lineTo(posGameX*1.5, posGameY*1.62);

ctx.stroke();
ctx.closePath();
//склон
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#6B4C21";  
ctx.moveTo(posGameX*1, posGameY*2.6);
ctx.lineTo(posGameX*1.2, posGameY*2.6);
ctx.lineTo(posGameX*1.6, posGameY*3.2);

ctx.stroke();
ctx.closePath();
//подпорка
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#6B4C21";  
ctx.moveTo(posGameX*1.45, posGameY*3);
ctx.lineTo(posGameX*1.45, posGameY*3.4);

ctx.stroke();
//ctx.closePath();
//склон2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#6B4C21";  
ctx.moveTo(posGameX*1, posGameY*3.8);
ctx.lineTo(posGameX*1.2, posGameY*3.8);
ctx.lineTo(posGameX*1.6, posGameY*4.4);

ctx.stroke();
//ctx.closePath();
//подпорка2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#6B4C21";  
ctx.moveTo(posGameX*1.45, posGameY*4.2);//3,4
ctx.lineTo(posGameX*1.45, posGameY*4.6);//3,8

ctx.stroke();
//ctx.closePath();

//забоор
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#6B4C21"; 
ctx.moveTo(posGameX*1.02, posGameY*3.85);//3
ctx.lineTo(posGameX*1.02, posGameY*4.2);//3
ctx.stroke();
ctx.moveTo(posGameX*1.09, posGameY*3.85);//3
ctx.lineTo(posGameX*1.09, posGameY*4.2);//3
ctx.stroke();
ctx.moveTo(posGameX*1.18, posGameY*3.85);//3
ctx.lineTo(posGameX*1.18, posGameY*4.2);//3
ctx.stroke();
ctx.moveTo(posGameX*1.27, posGameY*4);//3
ctx.lineTo(posGameX*1.27, posGameY*4.35);//3
ctx.stroke();
ctx.moveTo(posGameX*1.36, posGameY*4.1);//3
ctx.lineTo(posGameX*1.36, posGameY*4.45);//3
ctx.fillStyle = "#6B4C21";

ctx.stroke();
//ctx.closePath();

//куст
var radiusKust = 25;
var flag = 1;
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(posGameX*1.17, posGameY*4.9, radiusKust, 0, Math.PI * 2, true); // Внешняя окружность
for(var i = 0; i<12; i++)
  {
    var degX = posGameX*1.17 - radiusKust * Math.sin(360/12/180*Math.PI*(i+1))*0.85;
    var degY = posGameY*4.9 - radiusKust * Math.cos(360/12/180*Math.PI*(i+1))*0.85;
    ctx.moveTo(degX, degY);
       ctx.arc(degX, degY, 5 + flag, 0, Math.PI * 2, true);
       flag = flag + 1;
    if (flag == 3)
      flag = flag + 3;  
    if (flag == 7)
      flag = 2;      
  }
  flag = 1;
 var degX1 = posGameX*1.17 + radiusKust + 30;
 var degY1 = posGameY*4.9 +  radiusKust - 15;
ctx.moveTo(degX1, degY1);
ctx.arc(degX1, degY1, 15, 0, Math.PI * 2, true);
for(var i = 0; i<12; i++)
  {
    degX = degX1 - 15 * Math.sin(360/12/180*Math.PI*(i+1))*0.85;
    degY = degY1 - 15 * Math.cos(360/12/180*Math.PI*(i+1))*0.85;
    ctx.moveTo(degX, degY);
       ctx.arc(degX, degY, 5 + flag, 0, Math.PI * 2, true);
       flag = flag + 1;
    if (flag == 3)
      flag = flag + 3;  
    if (flag == 7)
      flag = 2;      
  }
ctx.fillStyle = "#2C390B";
ctx.fill();
//ctx.stroke();

//ctx.moveTo(110, 75);
//ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
