const xmlns = "http://www.w3.org/2000/svg"; 

var canvas = document.getElementById('logo');
var logoPos = canvas.getBoundingClientRect();
var logoW = logoPos.width;
var logoH = logoPos.height;
var logoX = Math.round(logoPos.top) - logoH;
var logoY = Math.round(logoPos.left) - logoW;
console.log(logoW, logoX, logoY);       
const logos = canvas.getContext("2d");

logos.beginPath();
logos.lineWidth = 10;
logos.fillStyle = "black"; 
logos.moveTo(logoX-50, logoY + 15);
logos.lineTo(logoX, logoY + 15);
logos.lineTo(logoX-50, logoY + 70);
logos.lineTo(logoX+80, logoY + 15);
logos.lineTo(logoX+20, logoY + 80);
//logos.shift(); 
logos.stroke();
logos.beginPath();
logos.moveTo(logoX - 100, logoY + logoH*2 - 2);
logos.moveTo(logoX - 40, logoY + logoH*2 - 2);
logos.lineTo(logoX + 110, logoY + 45);
logos.lineTo(logoX + 60, logoY + logoH*2 - 10);
logos.lineTo(logoX + 180, logoY + 45);
logos.lineTo(logoX + 140, logoY + logoH*2 - 2);
logos.stroke();