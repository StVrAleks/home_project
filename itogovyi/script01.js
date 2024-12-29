


window.addEventListener('load', addGame); 
window.addEventListener('resize', addGame);

//const sizeP = addGame();

function addGame()
{
  var sizePart = {};
  var widthEl = 0;
  var heightEl = 0;
  const newWid = window.innerWidth;
  const newHeig = window.innerHeight;
  allPartGame = document.getElementById('place_game_out');

if(newWid < 621){
  widthEl = newWid*0.92;
  heightEl = newHeig*0.92;

  var allPartGame = document.getElementById('place_game_out');
      allPartGame.style.width = widthEl + 'px';
      allPartGame.style.height = heightEl + 'px';
 
  //для канвас делаем новые размеры после ротейт
  widthEl = newHeig*0.87;
  heightEl = newWid*0.905;

  var placeForGame = document.getElementById('place_for_game');
  var placeGame = placeForGame.getBoundingClientRect();

  var placeLayer4 = document.getElementById('for_game_layer4');
      placeLayer4.style.width = 0.85 * placeGame.height + 'px';
      placeLayer4.style.height = 0.88* placeGame.width + 'px';
      placeLayer4.style.transform = 'rotate(90deg) translate(-' + 0.5*(0.88* placeGame.width) + 'px,' + 0.5*(0.85 * placeGame.height) + 'px)';

 // var gameLayer4 = document.getElementById('for_game_layer4');
  var layer4 = placeLayer4.getBoundingClientRect();

  var imgs = document.getElementById('img_game');
      imgs.style.width = layer4.height + 'px';
      imgs.style.height = layer4.width + 'px';
      imgs.style.transform = 'translate(-50%, -50%) rotate(90deg)';

  var placeLayer1 = document.getElementById('for_game_layer1');
  var layer1 = placeLayer1.getBoundingClientRect();
  var botWidth = document.getElementsByClassName('bottom')[0].offsetWidth;  
      document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + (layer1.width-botWidth) + 'px, 3px) rotateY(90deg)';
      document.getElementsByClassName('left')[0].style.transform = 'translate(-21px, '+ layer1.height + 'px) rotateX(90deg)';
  var placeLayer2 = document.getElementById('for_game_layer2');
  var layer2 = placeLayer2.getBoundingClientRect();
  //console.log(layer1.top, layer1.width, botWidth, placeLayer1.offsetWidth);
  document.getElementById('bottom_label').style.transform = 'translate('+layer1.height/4 +'px,-50%) rotate(270deg)';
  document.getElementById('top_label').style.transform = 'translate(-'+ layer2.height/2 + 'px, 0px) rotate(270deg)';
  sizePart.logo = 'rotate(90deg)';
}
 else if( newWid > 620 && newWid < 1061){
  widthEl = newWid*0.92;
  heightEl = newHeig*0.92;
  var allPartGame = document.getElementById('place_game_out');
      allPartGame.style.width = widthEl + 'px';
      allPartGame.style.height = heightEl + 'px';

  widthEl = newHeig*0.847;
  heightEl = newWid*0.805;
  
  var gameLayer4 = document.getElementById('for_game_layer4');
  var layer4 = gameLayer4.getBoundingClientRect();

  var imgs = document.getElementById('img_game');
      imgs.style.width = layer4.height + 'px';
      imgs.style.height = layer4.width + 'px';
      imgs.style.transform = 'translate(-50%, -50%) rotate(90deg)';


  var botGran = document.getElementById('for_game_layer1');
  var elemGran = botGran.getBoundingClientRect();
  var forLabelTop = elemGran.height - 3;
    //var forGranBot = document.getElementsByClassName('top')[0].offsetTop + document.getElementById('for_game_layer1').offsetHeight-6;
  var forGranBot = elemGran.width - 29;
  //  console.log(elemGran.top, elemGran.height, elemGran.width, elemGran.left);
  var forLabelBot = forGranBot - 14;
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forGranBot + 'px, 4px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-27px, '+ forLabelTop + 'px) rotateX(90deg)';
    document.getElementsByClassName('to_bottom')[0].style.top = forLabelBot  + 'px';
    sizePart.logo = 'rotate(90deg)';
 }
 else if(newWid > 1060){
    widthEl = 0.68*newWid;
    heightEl =0.7*newHeig;
    allPartGame.style.width = widthEl+ 'px';
    allPartGame.style.height = heightEl+ 'px';

    var gameLayer4 = document.getElementById('for_game_layer4');
    var layer4 = gameLayer4.getBoundingClientRect();

    var imgs = document.getElementById('img_game');
        imgs.style.width = layer4.width + 'px';
        imgs.style.height = layer4.height + 'px';
   
   
    var botGran = document.getElementById('for_game_layer1');
    var elemGran = botGran.getBoundingClientRect();
    var forLabelTop = elemGran.width-7;
    //var forGranBot = document.getElementsByClassName('top')[0].offsetTop + document.getElementById('for_game_layer1').offsetHeight-6;
    var forGranBot = elemGran.height - 7;
   // console.log(elemBot.bottom, elemBot.top, elemBot.height);
    var forLabelBot = forGranBot - 14;


    document.getElementsByClassName('bottom')[0].style.transform = 'translate(0px,' + forGranBot + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'translate('+ forLabelTop + 'px, 0px) rotateY(90deg)';
    document.getElementsByClassName('to_bottom')[0].style.top = forLabelBot  + 'px';
    sizePart.logo = 'rotate(0deg)';
  }
 console.log("w",widthEl, 'h',heightEl);
 sizePart.gamePartW = document.getElementById('for_game_layer4').offsetWidth;//widthEl;
 sizePart.gamePartH =document.getElementById('for_game_layer4').offsetHeight;// heightEl;
 //sizePart.logoW = document.getElementById('logo').offsetLeft;
 //sizePart.logoH = document.getElementById('logo').offsetTop;
 sizePart.layerW = (widthEl - document.getElementById('for_game_layer4').offsetWidth)/2;
 sizePart.layerH = (heightEl - document.getElementById('for_game_layer4').offsetHeight)/2;
 
 var add_canva = add_canvas(sizePart);
 //console.log(document.getElementById('for_game_layer4').offsetWidth, document.getElementById('for_game_layer4').offsetLeft);
 //return sizePart;
 add_svg(sizePart.logo);
  // Время для адаптивной магии!
}
function add_svg(transfLogo){
//рисуем логотип
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var logoW = document.getElementById('logo').offsetWidth;
var logoH = document.getElementById('logo').offsetHeight;
var svgX = document.getElementById('place_game_I').offsetWidth + document.getElementById('logo').offsetLeft + document.getElementById('logo').offsetWidth;
var svgY = document.getElementById('place_game_I').offsetHeight/2 - document.getElementById('logo').offsetHeight;
svg.setAttribute('width',  logoW);
svg.setAttribute('height', logoH);
svg.style.position = 'absolute';
svg.style.top = svgY + 'px';
svg.style.left = svgX + 'px';
svg.style.transform = transfLogo;

var part = [];
var masXY = {
  0:{11:0.1, 12:0.2, 21:0.3, 22:0.2},//и
  1:{11:0.3, 12:0.2, 21:0.1, 22:0.65},//и
  2:{11:0.1, 12:0.65, 21:0.55, 22:0.2},//и
  3:{11:0.55, 12:0.2, 21:0.35, 22:0.65},//и
  4:{11:0.1, 12:0.9, 21:0.25, 22:0.9},//m
  5:{11:0.25, 12:0.9, 21:0.7, 22:0.45},//m
  6:{11:0.7, 12:0.45, 21:0.5, 22:0.9},//m
  7:{11:0.5, 12:0.9, 21:0.9, 22:0.45},//m
  8:{11:0.9, 12:0.45, 21:0.7, 22:0.9}//m
};

for(var i =0; i<9; i++)
{
  part[i] = document.createElementNS(svg.namespaceURI, 'line');
  part[i].setAttribute('x1',  logoW * masXY[i][11]);
  part[i].setAttribute('y1', logoH * masXY[i][12]);
  part[i].setAttribute('x2',  logoW * masXY[i][21]);
  part[i].setAttribute('y2', logoH * masXY[i][22]);
  part[i].setAttribute('stroke', 'black');
  part[i].setAttribute('stroke-width', 3);
  svg.appendChild(part[i]);
} 
document.body.appendChild(svg);

var svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

var controlW = document.getElementById('control_6').offsetWidth;
var controlH = document.getElementById('control_6').offsetHeight;
var controlX = document.getElementById('control').offsetWidth + document.getElementById('control_6').offsetLeft + document.getElementById('control_6').offsetWidth;
var controlY = document.getElementById('place_game_III').offsetHeight/2 - document.getElementById('control_6').offsetHeight;
console.log(controlX,document.getElementById('control').offsetWidth );
svg2.setAttribute('width',  controlW+2);
svg2.setAttribute('height', controlH);
svg2.style.position = 'absolute';
svg2.style.top = controlY + 'px';
svg2.style.left = controlX + 'px';
document.body.appendChild(svg2);
}



function add_canvas(sizeP){
const xmlns = "http://www.w3.org/2000/svg"; 




var canvas = document.getElementById('game_canvas');
const canvasPart = canvas.getContext("2d");
canvasPart.clearRect(0, 0, canvasPart.canvas.width, canvasPart.canvas.height);      
canvasPart.canvas.width = sizeP.gamePartW;
canvasPart.canvas.height = sizeP.gamePartH;

const ctx = canvas.getContext("2d");


var posGameX = Math.round(sizeP.gamePartW ,2);
var posGameY = Math.round(sizeP.gamePartH ,2);

console.log(posGameX, posGameY);

//крыша
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.fillStyle = "#941121";
    ctx.strokeStyle ='grey';    
for(var i=0; i<2; i++)
{
    ctx.moveTo(posGameX*0.01, posGameY*0.13);
    ctx.lineTo(posGameX*0.075, posGameY*0.01);
    ctx.lineTo(posGameX*0.18 , posGameY*0.23);
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
ctx.moveTo(posGameX*0.11, posGameY*0.07);
ctx.lineTo(posGameX*0.15, posGameY*0.07);
ctx.lineTo(posGameX*0.15, posGameY*0.15);
ctx.fill();

ctx.stroke();
ctx.closePath();
//выход
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "#5A5F60";  
ctx.moveTo(posGameX*0.15, posGameY*0.15);
ctx.lineTo(posGameX*0.15, posGameY*0.09);
ctx.lineTo(posGameX*0.17, posGameY*0.09);
ctx.lineTo(posGameX*0.17, posGameY*0.16);
ctx.lineTo(posGameX*0.21, posGameY*0.2);
ctx.lineTo(posGameX*0.21, posGameY*0.03);
ctx.lineTo(posGameX*0.17, posGameY*0.09);
//окно
ctx.moveTo(posGameX*0.17, posGameY*1.6);
ctx.lineTo(posGameX*0.21, posGameY*1.62);
ctx.stroke();

//склон left 2 шт
var posY = [0, 0.215, 0, 0.215];
var posX = {0:{0:0, 1:0.11, 2:0.2, 3:0.165, 4:0.165},
            1:{0:0, 1:0.11, 2:0.2, 3:0.165 , 4:0.165},
            2:{0:1, 1:0.89, 2:0.8, 3:0.835, 4:0.835},
            3:{0:1, 1:0.89, 2:0.8, 3:0.835, 4:0.835}
           };
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#6B4C21";  
  for(i = 0; i < 4; i++)
  { 
      ctx.moveTo(posGameX*posX[i][0], posGameY*(0.27 + posY[i]));
      ctx.lineTo(posGameX*posX[i][1], posGameY*(0.27 + posY[i]));
      ctx.lineTo(posGameX*posX[i][2], posGameY*(0.385 + posY[i]));

      //подпорка
      ctx.moveTo(posGameX*posX[i][3], posGameY*(0.35 + posY[i]));
      ctx.lineTo(posGameX*posX[i][4], posGameY*(0.45 + posY[i]));
      ctx.stroke();
  } 
//забор
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "#6B4C21"; 
    ctx.moveTo(posGameX*0.01, posGameY*0.495);
    ctx.lineTo(posGameX*0.01, posGameY*0.62);
    ctx.moveTo(posGameX*0.043, posGameY*0.495);
    ctx.lineTo(posGameX*0.043, posGameY*0.62);
    ctx.moveTo(posGameX*0.083, posGameY*0.495);
    ctx.lineTo(posGameX*0.083, posGameY*0.62);

ctx.moveTo(posGameX*0.120, posGameY*0.52);
ctx.lineTo(posGameX*0.120, posGameY*0.645);
ctx.moveTo(posGameX*0.152, posGameY*0.55);
ctx.lineTo(posGameX*0.152, posGameY*0.675);
ctx.fillStyle = "#6B4C21";
ctx.stroke();

//забор
ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle = "#6B4C21"; 
ctx.moveTo(posGameX*0.99, posGameY*0.495);
ctx.lineTo(posGameX*0.99, posGameY*0.62);
ctx.moveTo(posGameX*0.957, posGameY*0.495);
ctx.lineTo(posGameX*0.957, posGameY*0.62);
ctx.moveTo(posGameX*0.917, posGameY*0.495);
ctx.lineTo(posGameX*0.917, posGameY*0.62);
ctx.moveTo(posGameX*0.88, posGameY*0.52);
ctx.lineTo(posGameX*0.88, posGameY*0.645);
ctx.moveTo(posGameX*0.848, posGameY*0.55);
ctx.lineTo(posGameX*0.848, posGameY*0.675);
ctx.fillStyle = "#6B4C21";
ctx.stroke();

//куст
var setRad = [20, 8, 8, 20, 8]; //радиусы большого круга для отрисовки кустов
var flag = 1;
var setX = [1, 2.95, 16.7, 18.8, 18.8], setY = [1, 1.04, 1.04, 1, 0.1]; //смещение кустов по оси х, у
ctx.beginPath();
ctx.lineWidth = 1;
for(var i=0; i < 5; i++) //всего 4 куста в ряд
{
    ctx.moveTo(posGameX*0.05 *setX[i] + setRad[i], posGameY*0.7 * setY[i]);
    ctx.arc(posGameX*0.05 * setX[i], posGameY*0.7 * setY[i], setRad[i], 0, Math.PI * 2, true); 
    for(var j = 0; j < 12; j++)
          {
            var degX = posGameX*0.05 * setX[i] - setRad[i] * Math.sin(360/12/180*Math.PI*(j+1));
            var degY = posGameY*0.7 * setY[i] - setRad[i] * Math.cos(360/12/180*Math.PI*(j+1));
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
    flag=0.8;
  ctx.moveTo(posGameX*(flag), posGameY*0.85);
  for(var j=1; j<4; j++)
    {
    ctx.lineTo(posGameX*(0.01 + x + flag), posGameY*0.88);
    ctx.lineTo(posGameX*(0.02 + x + flag), posGameY*0.86);
    ctx.lineTo(posGameX*(0.05 + x + flag), posGameY*0.88);
    ctx.lineTo(posGameX*(0.09 + x + flag), posGameY*0.86);
    ctx.lineTo(posGameX*(0.11 + x + flag), posGameY*0.89);
    ctx.lineTo(posGameX*(0.15 + x + flag), posGameY*0.86);
    ctx.lineTo(posGameX*(0.16 + x + flag), posGameY*0.89);
    x = j * 0.015; 
    }
    ctx.lineTo(posGameX*(0.01 + flag), posGameY*0.89);
    ctx.fill();
    ctx.stroke();
}
//трава 4 шт. по центру
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#2C390B"; 
var flag=1, x;
var sdvigX = [0.1, 0.25, 0.4, 0.3];
var sdvigY = [0, 0.053, 0, 0.09];
 for(var i = 0; i < 4; i++)
 {
  x=0;
  if(i==3)
    flag = 0.8;
  ctx.moveTo(posGameX*(0.186+ sdvigX[i]), posGameY*(0.89*flag + sdvigY[i]));//3
    for(var j=0; j<2; j++)
        {
        ctx.lineTo(posGameX*(0.186 + x + sdvigX[i]), posGameY*(0.91*flag + sdvigY[i]));//-0.1
        ctx.lineTo(posGameX*(0.195 + x + sdvigX[i]), posGameY*(0.89*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(0.201 + x + sdvigX[i]), posGameY*(0.91*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(0.211 + x + sdvigX[i]), posGameY*(0.89*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(0.224 + x + sdvigX[i]), posGameY*(0.91*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(0.235 + x + sdvigX[i]), posGameY*(0.89*flag + sdvigY[i]));//3
        ctx.lineTo(posGameX*(0.241 + x + sdvigX[i]), posGameY*(0.91*flag + sdvigY[i]));
        x = x + 0.055; //0.19 - разница между х-ми первой и последней точки
        }
    ctx.lineTo(posGameX*(0.186 + sdvigX[i]), posGameY*(0.91*flag + sdvigY[i]));
    ctx.fill();
    ctx.stroke();
 }  
}