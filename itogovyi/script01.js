const xmlns = "http://www.w3.org/2000/svg"; 

var allPartGame = document.getElementById('place_game_out');
console.log(allPartGame);
var allPart = allPartGame.getBoundingClientRect();
var allPartWidth = allPart.width;
var allPartHeight = allPart.height;
var allPartY = (allPartHeight - allPartGame.offsetTop)/2;
var allPartX = (allPartWidth - allPartGame.offsetLeft)/4;
var posY = allPartX - allPartHeight/2;


var itemLogo = document.getElementById('logo');
var partLogo = itemLogo.getBoundingClientRect();
var logoWidth = partLogo.width;
var logoHeight = partLogo.height;
var logoY = itemLogo.offsetTop;
var logoX = itemLogo.offsetLeft;
var posLogoX = Math.round((logoWidth - logoX)*1.21, 2);
//var posLogoX = (logoX - logoWidth*0.21);
var posLogoY = Math.round((logoY - logoHeight *0.15)/2 , 2);

var canvas = document.getElementById('game_canvas');

canvas.style.width = allPartWidth + 'px';
canvas.style.height = allPartHeight + 'px';
canvas.style.position = 'absolute';
canvas.style.top = 50 + '%';//'112px';//
canvas.style.left = 50 + '%';//'281px';//
canvas.style.transform = 'translate(-50%,-25%)';
canvas.style.zIndex = '10';

console.log(posLogoX, posLogoY);
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "black"; 
var lines = [
  {x: Math.round(posLogoX*1.1 ,1), y: Math.round(posLogoY*1.1 ,1)},
  {x: Math.round(posLogoX*1.3 ,1), y: Math.round(posLogoY*1.1 ,1)},
  {x: Math.round(posLogoX*1.1 ,1), y: Math.round(posLogoY*1.5 ,1)},
  {x: Math.round(posLogoX*1.6 ,1), y: Math.round(posLogoY*1.1 ,1)},
  {x: Math.round(posLogoX*1.4 ,1), y: Math.round(posLogoY*1.5 ,1)},
],
line = lines.shift();
console.log(line);
do {
  ctx.moveTo(line.x, line.y);
  line = lines.shift();
  ctx.lineTo(line.x, line.y);
} while (lines.length);

//ctx.stroke();
//ctx.closePath();

//ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "black"; 
ctx.moveTo(posLogoX*1.1, posLogoY*1.75);
ctx.lineTo(posLogoX*1.2, posLogoY*1.75);
ctx.lineTo(posLogoX*1.8, posLogoY*1.3);
ctx.lineTo(posLogoX*1.6, posLogoY*1.75);
ctx.lineTo(posLogoX*2, posLogoY*1.3);
ctx.lineTo(posLogoX*1.8, posLogoY*1.75);
ctx.stroke();
ctx.closePath();

var gamePart = document.getElementById('for_game_layer4');
var game = gamePart.getBoundingClientRect();
var gameW = (allPartWidth - game.width)/2 * 0.88;
var gameH = (allPartHeight - game.height)/2 * 1.12;
var gameX = gamePart.offsetLeft;
var gameY = gamePart.offsetTop;
var posGameX = Math.round((gameW - gameX)/2 ,2);
var posGameY = Math.round((gameH*1.08 - gameY)/2 ,2);
console.log(gameW, gameH, posGameX, posGameY);

//крыша
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#ff0000";  
ctx.moveTo(posGameX*0.97, posGameY*1.5);
ctx.lineTo(posGameX*1.15, posGameY*1.02);
ctx.lineTo(posGameX*1.5, posGameY*2.3);
ctx.stroke();
ctx.closePath();
//труба
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#ff0000";  
ctx.moveTo(posGameX*1.25, posGameY*1.3);
ctx.lineTo(posGameX*1.35, posGameY*1.3);
ctx.lineTo(posGameX*1.35, posGameY*1.75);
ctx.fill();
ctx.stroke();
ctx.closePath();
//выход
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#ff0000";  
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
ctx.fillStyle = "#ff0000";  
ctx.moveTo(posGameX*1.4, posGameY*1.6);
ctx.lineTo(posGameX*1.5, posGameY*1.62);
ctx.stroke();
ctx.closePath();
//склон
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#ff0000";  
ctx.moveTo(posGameX*0.97, posGameY*2.6);//3
ctx.lineTo(posGameX*1.2, posGameY*2.6);//3
ctx.lineTo(posGameX*1.6, posGameY*3.2);//3,6
ctx.stroke();
ctx.closePath();
//подпорка
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#ff0000";  
ctx.moveTo(posGameX*1.45, posGameY*3);//3,4
ctx.lineTo(posGameX*1.45, posGameY*3.4);//3,8
ctx.stroke();
ctx.closePath();