const xmlns = "http://www.w3.org/2000/svg"; 

var canvas = document.getElementById('logo');
var logoPos = canvas.getBoundingClientRect();
var logoW = logoPos.width;
var logoH = logoPos.height;
var logoX = Math.round(logoPos.top) - logoW;
var logoY = Math.round(logoPos.left) - logoH;
console.log(logoW, logoX, logoY);       
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = "black"; 
ctx.moveTo(logoX-50, logoY + 15);
ctx.lineTo(logoX, logoY + 15);
ctx.lineTo(logoX-50, logoY + 70);
ctx.lineTo(logoX+80, logoY + 15);
ctx.lineTo(logoX+20, logoY + 80);
//logos.shift(); 
ctx.stroke();
ctx.beginPath();
ctx.moveTo(logoX - 100, logoY + logoH*2 - 2);
ctx.moveTo(logoX - 40, logoY + logoH*2 - 2);
ctx.lineTo(logoX + 110, logoY + 45);
ctx.lineTo(logoX + 60, logoY + logoH*2 - 10);
ctx.lineTo(logoX + 180, logoY + 45);
ctx.lineTo(logoX + 140, logoY + logoH*2 - 2);
ctx.stroke();

var gamePart = document.getElementById('for_game_layer4');
var gPart = gamePart.getBoundingClientRect();
var gamePartW = gPart.width;
var gamePartX = Math.round(gPart.x);
var gamePartH = gPart.height;
var gamePartY = Math.round(gPart.y);
console.log(gamePartW, gamePartX, gamePartH, gamePartY);
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
varsvgX = 228;
varsvgY = -252;
svg.style.width = gamePartW;
svg.style.height = gamePartH;
svg.style.position = 'absolute';
svg.style.transform = 'translate(228px,-252px)';

//svg.style.transform = translateX(gamePartX);
//svg.style.transform = translateY(gamePartY);

//svg.style.x = gamePartX;
//svg.y = gamePartY;
var home = document.createElementNS(svg.namespaceURI, 'line');
    home.setAttribute('x1', 0);
    home.setAttribute('y1', gamePartH/5);
    home.setAttribute('x2',  gamePartW/15);
    home.setAttribute('y2', 0);
    home.setAttribute('x3',  Math.round(gamePartW*2/15));
    home.setAttribute('y3', gamePartH*2/5);    
    home.setAttribute('stroke', 'grey');
    home.setAttribute('fill', 'red');
    home.setAttribute('stroke-linecap', 'butt');    
    home.setAttribute('stroke-width', '4px');
  
   home.style.position = 'absolute';
    svg.appendChild(home);
    document.body.appendChild(svg);


/*var canvas2 = document.getElementById('control_2');

var dzin = canvas2.getBoundingClientRect();

var dzinW = dzin.width;
var dzinH = dzin.height;
var dzinX = Math.round(dzin.top);
var dzinY = Math.round(dzin.left);
console.log(dzinX, dzinY);   
ctx.beginPath();
ctx.lineWidth = 10;
ctx.fillStyle = "black"; 
ctx.moveTo(dzinX, dzinY);
ctx.lineTo(dzinX+10, dzinY + 10);
ctx.stroke();*/