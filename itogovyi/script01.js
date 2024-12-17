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
ctx.closePath();
ctx.stroke();


var gamePart = document.getElementById('for_game_layer4');
var gameX = gamePart.offsetTop;
var gameY = gamePart.offsetLeft;
//var gameX = gamePart.offsetParent;
console.log('offsetTop'+gameX, gameY);
var gPart = gamePart.getBoundingClientRect();
console.log('gPart'+gPart.left);
var gamePartW = gPart.width;
var gamePartX = Math.round(gPart.x);
var gamePartH = gPart.height;
var gamePartY = Math.round(gPart.y);
console.log(gamePartW, gamePartX, gamePartH, gamePartY);


var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgX = gPart.top;
var svgY = gPart.left;
svg.style.width = gamePartW;
svg.style.height = gamePartH;
svg.style.position = 'absolute';
svg.style.top = svgX + 'px';
svg.style.left = svgY + 'px';

//координаты крыши
/*var homeXY = {
    x1: 0,
    y1: gamePartH/7,
    x2: gamePartH/7,
    y2: 0,
    x3: gamePartH/3,
    y3: gamePartH*2/7
  };*/
  
  //var home = document.createElementNS(svg.namespaceURI, 'line');  
//  home = svg.getContext("2d");
//var home = svg.getContext("2d");
var home = document.createElementNS(svg.namespaceURI, 'line');
    home.setAttribute('stroke', 'grey');
    home.setAttribute('stroke', 'grey');
    home.setAttribute('stroke-linecap', 'butt');    
    home.setAttribute('stroke-width', '4px');
    home.setAttribute('y1', gamePartH/7);
    home.setAttribute('x2',  gamePartH/7);
    home.setAttribute('y2', 0);
var home1 = document.createElementNS(svg.namespaceURI, 'line'); 
   // home.setAttribute('fill', 'red');  
   home1.setAttribute('stroke', 'grey');
   home1.setAttribute('stroke-linecap', 'butt');    
   home1.setAttribute('stroke-width', '4px');
   home1.setAttribute('x1', gamePartH/7);
   home1.setAttribute('y1', 0);
   home1.setAttribute('x2', gamePartH/3);
   home1.setAttribute('y2', gamePartH*2/7);      
var truba = document.createElementNS(svg.namespaceURI, 'line');
    truba.setAttribute('stroke', 'grey');
    truba.setAttribute('stroke-linecap', 'butt');    
    truba.setAttribute('stroke-width', '4px');
    truba.setAttribute('x1', gamePartH/3*0.8);
    truba.setAttribute('y1', gamePartH*2/7*0.2);
    truba.setAttribute('x2', gamePartH/3*0.8);
    truba.setAttribute('y2', gamePartH*2/7*0.6);   
var truba2 = document.createElementNS(svg.namespaceURI, 'line');
    truba2.setAttribute('stroke', 'grey');
    truba2.setAttribute('stroke-linecap', 'butt');    
    truba2.setAttribute('stroke-width', '4px');
    truba2.setAttribute('x1', gamePartH/3*0.65);
    truba2.setAttribute('y1', gamePartH*2/7*0.2);
    truba2.setAttribute('x2', gamePartH/3*0.8);
    truba2.setAttribute('y2', gamePartH*2/7*0.2);   
  // home.style.position = 'absolute';
    svg.appendChild(home);
    svg.appendChild(home1);
    svg.appendChild(truba);    
    svg.appendChild(truba2);     
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