


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
if(newWid < 621){
//  widthEl = document.getElementById('place_game_out').offsetWidth;
//  heightEl = document.getElementById('place_game_out').offsetHeight;
/*var forLabelTop = document.getElementById('for_game_layer1').offsetWidth + 21;
var forLabelBot = document.getElementById('for_game_layer1').offsetHeight - 26;

 document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + (gran.width-25) + 'px, 4px) rotateY(90deg)';
 document.getElementsByClassName('left')[0].style.transform = 'translate(-21px,' + gran.height + 'px) rotateX(90deg)';

 //console.log('label', forLabelTop, forLabelBot);
  document.getElementsByClassName('for_label')[0].style.left = forLabelTop - forLabelBot/2 - 26 +'px';
  document.getElementsByClassName('to_bottom')[0].style.left = forLabelBot - 51 + 'px';
*/
}
 else if( newWid > 620 && newWid < 1061){
  widthEl = newWid*0.92;
  heightEl = newHeig*0.92;
  var allPartGame = document.getElementById('place_game_out');
  allPartGame.style.width = widthEl + 'px';
  allPartGame.style.height = heightEl + 'px';


var botgran = document.getElementById('for_game_layer1');
var gran = botgran.getBoundingClientRect();

var topgran = document.getElementsByClassName('top')[0];
var granTop = topgran.getBoundingClientRect();
/*
var forLabelTop = document.getElementById('for_game_layer1').offsetWidth + 21;
var forLabelBot = document.getElementById('for_game_layer1').offsetHeight - 26;

 document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + (gran.width-25) + 'px, 4px) rotateY(90deg)';
 document.getElementsByClassName('left')[0].style.transform = 'translate(-21px,' + gran.height + 'px) rotateX(90deg)';

 //console.log('label', forLabelTop, forLabelBot);
  document.getElementsByClassName('for_label')[0].style.left = forLabelTop - forLabelBot/2 - 26 +'px';
  document.getElementsByClassName('to_bottom')[0].style.left = forLabelBot - 51 + 'px';*/

  var botGran = document.getElementById('for_game_layer1');
    var elemGran = botGran.getBoundingClientRect();
    var forLabelTop = elemGran.height-3;
    //var forGranBot = document.getElementsByClassName('top')[0].offsetTop + document.getElementById('for_game_layer1').offsetHeight-6;
    var forGranBot = elemGran.width - 29;
    console.log( elemGran.top, elemGran.height, elemGran.width, elemGran.left);
    var forLabelBot = forGranBot -14;


    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forGranBot + 'px, 4px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-27px, '+ forLabelTop + 'px) rotateX(90deg)';
    document.getElementsByClassName('to_bottom')[0].style.top = forLabelBot  + 'px';

 }
 else if(newWid > 1060){
    widthEl = 0.68*newWid;
    heightEl =0.7*newHeig;
    allPartGame.style.width = widthEl+ 'px';
    allPartGame.style.height = heightEl+ 'px';

    var imgs = document.getElementById('img_game');
imgs.style.width = widthEl + 'px';
imgs.style.height = heightEl + 'px';
    var botGran = document.getElementById('for_game_layer1');
    var elemGran = botGran.getBoundingClientRect();
    var forLabelTop = elemGran.width-7;
    //var forGranBot = document.getElementsByClassName('top')[0].offsetTop + document.getElementById('for_game_layer1').offsetHeight-6;
    var forGranBot = elemGran.height - 7;
   // console.log(elemBot.bottom, elemBot.top, elemBot.height);
    var forLabelBot = forGranBot -14;


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
//ctx.closePath();
ctx.stroke();



var posGameX = Math.round(sizeP.layerW ,2);
var posGameY = Math.round(sizeP.layerH ,2);

console.log(sizeP.layerW, sizeP.layerH);

//крыша
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.fillStyle = "#941121";
    ctx.strokeStyle ='grey';    
for(var i=0; i<2; i++)
{
    ctx.moveTo(posGameX*1.02, posGameY*1.5);
    ctx.lineTo(posGameX*1.15, posGameY*1.07);
    ctx.lineTo(posGameX*1.5, posGameY*2.3);
    ctx.stroke();
    if(i===0)
    {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.fillStyle = "#851E1F";   
      ctx.strokeStyle ='#851E1F'; 
    } 
}

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
//окно
ctx.moveTo(posGameX*1.4, posGameY*1.6);
ctx.lineTo(posGameX*1.5, posGameY*1.62);
ctx.stroke();

//склон left 2 шт
var posY = [0, 1.2, 0, 1.2];
var posX = {0:{0:1, 1:1.2, 2:1.6, 3:1.45, 4:1.45},
            1:{0:1, 1:1.2, 2:1.6, 3:1.45, 4:1.45},
            2:{0:3.725, 1:3.5, 2:3.1, 3:3.25, 4:3.25},
            3:{0:3.725, 1:3.5, 2:3.1, 3:3.25, 4:3.25}
           };
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#6B4C21";  
  for(i = 0; i < 4; i++)
  { 
      ctx.moveTo(posGameX*posX[i][0], posGameY*(2.6 + posY[i]));
      ctx.lineTo(posGameX*posX[i][1], posGameY*(2.6 + posY[i]));
      ctx.lineTo(posGameX*posX[i][2], posGameY*(3.2 + posY[i]));

      //подпорка
      ctx.moveTo(posGameX*posX[i][3], posGameY*(3 + posY[i]));
      ctx.lineTo(posGameX*posX[i][4], posGameY*(3.4 + posY[i]));
      ctx.stroke();
  } 
//забоор
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#6B4C21"; 
    ctx.moveTo(posGameX*1.02, posGameY*3.85);
    ctx.lineTo(posGameX*1.02, posGameY*4.2);
    ctx.moveTo(posGameX*1.09, posGameY*3.85);
    ctx.lineTo(posGameX*1.09, posGameY*4.2);
    ctx.moveTo(posGameX*1.18, posGameY*3.85);
    ctx.lineTo(posGameX*1.18, posGameY*4.2);

ctx.moveTo(posGameX*1.27, posGameY*4);
ctx.lineTo(posGameX*1.27, posGameY*4.35);
ctx.moveTo(posGameX*1.36, posGameY*4.1);
ctx.lineTo(posGameX*1.36, posGameY*4.45);
ctx.fillStyle = "#6B4C21";
ctx.stroke();

//забоор
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "#6B4C21"; 
ctx.moveTo(posGameX*3.7, posGameY*3.85);
ctx.lineTo(posGameX*3.7, posGameY*4.2);
ctx.moveTo(posGameX*3.6, posGameY*3.85);
ctx.lineTo(posGameX*3.6, posGameY*4.2);
ctx.moveTo(posGameX*3.51, posGameY*3.85);
ctx.lineTo(posGameX*3.51, posGameY*4.2);
ctx.moveTo(posGameX*3.42, posGameY*4);
ctx.lineTo(posGameX*3.42, posGameY*4.35);
ctx.moveTo(posGameX*3.33, posGameY*4.1);
ctx.lineTo(posGameX*3.33, posGameY*4.45);
ctx.fillStyle = "#6B4C21";
ctx.stroke();

//куст
var setRad = [20, 8, 8, 20, 8]; //радиусы большого круга для отрисовки кустов
var flag = 1;
var setX = [1, 1.25, 2.65, 2.9, 2.97], setY = [1, 1.03, 1.03, 1, 0.26]; //смещение кустов по оси х, у
ctx.beginPath();
ctx.lineWidth = 1;
for(var i=0; i < 5; i++) //всего 4 куста в ряд
{
    ctx.moveTo(posGameX*1.21 *setX[i] + setRad[i], posGameY*4.9 * setY[i]);
    ctx.arc(posGameX*1.21 * setX[i], posGameY*4.9 * setY[i], setRad[i], 0, Math.PI * 2, true); 
    for(var j = 0; j < 12; j++)
          {
            var degX = posGameX*1.21 * setX[i] - setRad[i] * Math.sin(360/12/180*Math.PI*(j+1));
            var degY = posGameY*4.9 * setY[i] - setRad[i] * Math.cos(360/12/180*Math.PI*(j+1));
            ctx.moveTo(degX, degY);
               ctx.arc(degX, degY, 5 + flag, 0, Math.PI * 2, true);
              flag = flag + 1;
            if (flag == 3)
              flag = flag + 3;  
            if (flag == 7)
              flag = 2;      
          }
      flag = 1;
      ctx.fillStyle = "#2C390B";
      ctx.fill();     
  } 


//большая трава
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#2C390B"; 
var flag=0;
for(var i=0; i<2; i++)
{ 
  x=0;
  if(i==1)
    flag=2.1;
  ctx.moveTo(posGameX*(1+flag), posGameY*5.8);
  for(var j=1; j<4; j++)
    {
    ctx.lineTo(posGameX*(1.02 + x + flag), posGameY*6);
    ctx.lineTo(posGameX*(1.04 + x + flag), posGameY*5.9);
    ctx.lineTo(posGameX*(1.08 + x + flag), posGameY*6);
    ctx.lineTo(posGameX*(1.13 + x + flag), posGameY*5.9);
    ctx.lineTo(posGameX*(1.17 + x + flag), posGameY*6.1);
    ctx.lineTo(posGameX*(1.19 + x + flag), posGameY*5.9);
    ctx.lineTo(posGameX*(1.21 + x + flag), posGameY*6.1);
    x = j * 0.19; //0.19 - разница между х-ми первой и последней точки
    }
    ctx.lineTo(posGameX*(1.02 + flag), posGameY*6.1);
    ctx.fill();
    ctx.stroke();
}
//трава 4 шт. по центру
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#2C390B"; 
var flag=1, x;
var sdvigX = [0, 0.25, 0.65, 0.8];
var sdvigY = [0, 0.53, 0, -0.3];
 for(var i = 0; i < 4; i++)
 {
  x=0;
  if(i==3)
    flag = 0.8;
  ctx.moveTo(posGameX*(1.92+ sdvigX[i]), posGameY*(5.7*flag + sdvigY[i]));//3
    for(var j=0; j<2; j++)
        {
        ctx.lineTo(posGameX*(1.92 + x + sdvigX[i]), posGameY*(5.8*flag + sdvigY[i]));//-0.1
        ctx.lineTo(posGameX*(1.94 + x + sdvigX[i]), posGameY*(5.7*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(1.98 + x + sdvigX[i]), posGameY*(5.8*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(2.03 + x + sdvigX[i]), posGameY*(5.7*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(2.07 + x + sdvigX[i]), posGameY*(5.9*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(2.09 + x + sdvigX[i]), posGameY*(5.7*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(2.11 + x + sdvigX[i]), posGameY*(5.9*flag + sdvigY[i]));
        x = x + 0.19; //0.19 - разница между х-ми первой и последней точки
        }
    ctx.lineTo(posGameX*(1.94 + sdvigX[i]), posGameY*(5.9*flag + sdvigY[i]));
    ctx.fill();
    ctx.stroke();
 }  
