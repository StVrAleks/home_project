

window.addEventListener('load', add_svg);
window.addEventListener('load', addGame);

window.addEventListener('resize', addGame);

var contr1 = document.getElementById('control_1');
var contr2 = document.getElementById('control_2');
contr1.addEventListener('keydown', control1, false);
contr2.addEventListener('keydown', control2, false);

setInterval(get_size, 1000);
function get_size(){
  var screen_size ={
    newWid: window.innerWidth,
    newHeig: window.innerHeight
  };
  timer_game();
  return screen_size; 
}

function addGame() {
  var sizePart = {};
  var widthEl = 0;
  var heightEl = 0;
  var screen_size = get_size();
  const newWid = screen_size.newWid;// window.innerWidth;
  const newHeig = screen_size.newHeig;//window.innerHeight;
  var allPartGame = document.getElementById('place_game_out');

  if (newWid < 621) {
    widthEl = newWid * 0.93;
    heightEl = newHeig * 0.93;
    allPartGame.style.width = widthEl + 'px';
    allPartGame.style.height = heightEl + 'px';

    //для канвас делаем новые размеры после ротейт
    var placeForGame = document.getElementById('place_for_game');
    var placeGame = placeForGame.getBoundingClientRect();

    var newW = 0.85 * placeGame.height;
    var newH = 0.86 * placeGame.width;

    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = newW + 'px';
        placeLayer4.style.height = newH + 'px';
        placeLayer4.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';

    var layer4 = placeLayer4.getBoundingClientRect();

    var imgs = document.getElementById('img_game');
        imgs.style.width = layer4.height + 'px';
        imgs.style.height = layer4.width + 'px';
        imgs.style.transform = 'translate(-50%, -50%) rotate(90deg)';
  
    var canvas = document.getElementById('game_canvas');
        canvas.style.transform = 'translate(-50%, -50%) rotate(90deg)';



    var botGran = document.getElementById('place_for_game');
    var elemGran = botGran.getBoundingClientRect();
    //плашки
    var forLeft = elemGran.height - 16;
    var forBottom = elemGran.width - 9;
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forBottom + 'px, 5px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-2px, ' + forLeft + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'transform: translate(-0,5%, -9px) rotateX(90deg)';   
    //подписи
    var elemLabel = forBottom - document.getElementsByClassName('to_bottom')[0].offsetHeight/2;    
    document.getElementsByClassName('to_bottom')[0].style.left = elemLabel + 'px';
    document.getElementsByClassName('to_bottom')[0].style.top = '50%';

    var logo1 = document.getElementById('logo');
    var elem_logo = logo1.getBoundingClientRect(); 
    document.getElementById('svg1').style.transform = 'rotate(90deg)';
    document.getElementById('svg1').style.top = elem_logo.y + 'px';
    document.getElementById('svg1').style.left = elem_logo.x + 'px';

    var control_6 = document.getElementById('control_6');
    var control = control_6.getBoundingClientRect();
    document.getElementById('svg2').style.top = control.top - 4 + 'px';
    document.getElementById('svg2').style.left = control.x - 5 + 'px';
    document.getElementById('svg2').style.transform = 'rotate(90deg) translate(-11px, 2px)';

  }
  else if (newWid > 620 && newWid < 1061) {
    widthEl = newWid * 0.92;
    heightEl = newHeig * 0.92;
    allPartGame.style.width = widthEl + 'px';
    allPartGame.style.height = heightEl + 'px';


    var placeForGame = document.getElementById('place_for_game');
    var placeGame = placeForGame.getBoundingClientRect();
    var newW = 0.87 * placeGame.height;
    var newH = 0.90 * placeGame.width;

    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = newW + 'px';
        placeLayer4.style.height = newH + 'px';
        placeLayer4.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';

    var layer4 = placeLayer4.getBoundingClientRect();
    var imgs = document.getElementById('img_game');
        imgs.style.width = layer4.height + 'px';
        imgs.style.height = layer4.width + 'px';
        imgs.style.transform = 'translate(-50%, -50%) rotate(90deg)';

    var canvas = document.getElementById('game_canvas');
        canvas.style.transform = 'translate(-50%, -50%) rotate(90deg)';


    var botGran = document.getElementById('place_for_game');
    var elemGran = botGran.getBoundingClientRect();
    //плашки
    var forLeft = elemGran.height - document.getElementsByClassName('left')[0].offsetHeight / 2 - 2;
    var forBottom = elemGran.width - document.getElementsByClassName('bottom')[0].offsetWidth / 2 + 4;
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forBottom + 'px, 4px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-6px, ' + forLeft + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'translate(-6px, -10px) rotateX(90deg)';
    //подписи
    var elemLabel = forBottom - document.getElementsByClassName('to_bottom')[0].offsetHeight/2;   
    document.getElementsByClassName('to_bottom')[0].style.left = elemLabel + 'px';
    document.getElementsByClassName('to_bottom')[0].style.top = '50%';


    var logo1 = document.getElementById('logo');
    var elem_logo = logo1.getBoundingClientRect(); 
    document.getElementById('svg1').style.transform = 'rotate(90deg)';
    document.getElementById('svg1').style.top = elem_logo.y + 'px';
    document.getElementById('svg1').style.left = elem_logo.x + 'px';


    var control_6 = document.getElementById('control_6');
    var control = control_6.getBoundingClientRect();
    document.getElementById('svg2').style.top = control.top - 4 + 'px';
    document.getElementById('svg2').style.left = control.x - 5 + 'px';
    document.getElementById('svg2').style.transform = 'rotate(90deg) translate(-12px, 2px)';
  
  }
  else if (newWid > 1060) {
    widthEl = 0.68 * newWid;
    heightEl = 0.7 * newHeig;
    allPartGame.style.width = widthEl + 'px';
    allPartGame.style.height = heightEl + 'px';

    var gameLayer4 = document.getElementById('for_game_layer4');
    var layer4 = gameLayer4.getBoundingClientRect();


    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = '87%';
        placeLayer4.style.height = '82.06%';
        placeLayer4.style.transform = 'translate(-50%, -50%) rotate(0deg)';


    var canvas = document.getElementById('game_canvas');
        canvas.style.transform = 'translate(-50%, -50%) rotate(0deg)';

    var imgs = document.getElementById('img_game');
        imgs.style.width = layer4.width + 'px';
        imgs.style.height = layer4.height + 'px';
        imgs.style.transform = 'translate(-50%, -50%) rotate(0deg)';

    var botGran = document.getElementById('place_for_game');
    var elemGran = botGran.getBoundingClientRect();

    //плашки
    var forRight = elemGran.width - document.getElementsByClassName('right')[0].offsetWidth / 2;
    var forBottom = elemGran.height - document.getElementsByClassName('bottom')[0].offsetHeight / 2;;    
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(0px,' + forBottom + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'translate(' + forRight + 'px, 0px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-15px, 0px) rotateY(90deg)';   
    //подписи
    var forLabelBot = document.getElementById('for_game_layer2').offsetHeight;    
    document.getElementsByClassName('to_bottom')[0].style.top = forLabelBot + 'px';
    document.getElementsByClassName('to_bottom')[0].style.left = '50%';


    var logo1 = document.getElementById('logo');
    var elem_logo = logo1.getBoundingClientRect(); 
    document.getElementById('svg1').style.transform = 'rotate(0deg)';
    document.getElementById('svg1').style.top = elem_logo.y + 'px';
    document.getElementById('svg1').style.left = elem_logo.x + 'px';
    
    var control_6 = document.getElementById('control_6');
    var control = control_6.getBoundingClientRect();
    document.getElementById('svg2').style.top = control.top - 4 + 'px';
    document.getElementById('svg2').style.left = control.x - 5 + 'px';
    document.getElementById('svg2').style.transform = 'rotate(0deg)';
  }

  sizePart.gamePartW = document.getElementById('for_game_layer4').offsetWidth;
  sizePart.gamePartH = document.getElementById('for_game_layer4').offsetHeight;
  //sizePart.layerW = layer4.x;//(widthEl - document.getElementById('for_game_layer4').offsetWidth) / 2;
 // sizePart.layerH = layer4.y;//(heightEl - document.getElementById('for_game_layer4').offsetHeight) / 2;
//console.log(layer4.x, layer4.y);
//console.log((widthEl - document.getElementById('for_game_layer4').offsetWidth) / 2, (heightEl - document.getElementById('for_game_layer4').offsetHeight) / 2);
  add_canvas(sizePart);
}

function add_svg() {
  //рисуем логотип
  var logo1 = document.getElementById('logo');
  var elem_logo = logo1.getBoundingClientRect();  

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var logoW = document.getElementById('logo').offsetWidth;
  var logoH = document.getElementById('logo').offsetHeight;
  var svgX = elem_logo.x;
  var svgY = elem_logo.y;
  svg.setAttribute('width', logoW);
  svg.setAttribute('height', logoH);
  svg.style.position = 'absolute';
  svg.style.top = svgY + 'px';
  svg.style.left = svgX + 'px';
  svg.id = 'svg1';

  var part = [];
  var masXY = {
    0: { 11: 0.1, 12: 0.2, 21: 0.3, 22: 0.2 },//и
    1: { 11: 0.3, 12: 0.2, 21: 0.1, 22: 0.65 },//и
    2: { 11: 0.1, 12: 0.65, 21: 0.55, 22: 0.2 },//и
    3: { 11: 0.55, 12: 0.2, 21: 0.35, 22: 0.65 },//и
    4: { 11: 0.1, 12: 0.9, 21: 0.25, 22: 0.9 },//m
    5: { 11: 0.25, 12: 0.9, 21: 0.7, 22: 0.45 },//m
    6: { 11: 0.7, 12: 0.45, 21: 0.5, 22: 0.9 },//m
    7: { 11: 0.5, 12: 0.9, 21: 0.9, 22: 0.45 },//m
    8: { 11: 0.9, 12: 0.45, 21: 0.7, 22: 0.9 }//m
  };

  for (var i = 0; i < 9; i++) {
    part[i] = document.createElementNS(svg.namespaceURI, 'line');
    part[i].setAttribute('x1', logoW * masXY[i][11]);
    part[i].setAttribute('y1', logoH * masXY[i][12]);
    part[i].setAttribute('x2', logoW * masXY[i][21]);
    part[i].setAttribute('y2', logoH * masXY[i][22]);
    part[i].setAttribute('stroke', 'black');
    part[i].setAttribute('stroke-width', 3);
    svg.appendChild(part[i]);
  }
  document.body.appendChild(svg);

  var svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  var control_6 = document.getElementById('control_6');
  var control = control_6.getBoundingClientRect();
  console.log('tyt', control.top, control.x);
  var controlW = 2.5 * document.getElementById('control_6').offsetWidth;
  var controlH = 2.5 * document.getElementById('control_6').offsetHeight;

  for (var i = 0; i < 11; i++) {
    if (i < 3 || i > 7) {
      var curcleItem = document.createElementNS(svg2.namespaceURI, 'circle');
      var curcleItemX = controlW * 0.6 + controlW * 0.5 * Math.sin(360 / 12 / 180 * Math.PI * (i + 1));
      var curcleItemY = controlW * 0.6 - controlW * 0.5 * Math.cos(360 / 12 / 180 * Math.PI * (i + 1));
      curcleItem.setAttribute('cx', curcleItemX*0.7);
      curcleItem.setAttribute('cy', curcleItemY);
      curcleItem.setAttribute('r', 1.5);
      curcleItem.setAttribute("fill", "black");
      svg2.appendChild(curcleItem);
    }
  }

  svg2.setAttribute('width', controlW);
  svg2.setAttribute('height', controlH);
  svg2.style.position = 'absolute';
  svg2.style.top = control.top - 4 + 'px';
  svg2.style.left = control.x - 5 + 'px';
  svg2.id = 'svg2';
  document.body.appendChild(svg2);
}

function add_canvas(sizeP) {
  const xmlns = "http://www.w3.org/2000/svg";
  var canvas = document.getElementById('game_canvas');
  const canvasPart = canvas.getContext("2d");
  canvasPart.clearRect(0, 0, canvasPart.canvas.width, canvasPart.canvas.height);
  canvasPart.canvas.width = sizeP.gamePartW;
  canvasPart.canvas.height = sizeP.gamePartH;

  const ctx = canvas.getContext("2d");
  var posGameX = Math.round(sizeP.gamePartW, 2);
  var posGameY = Math.round(sizeP.gamePartH, 2);

  //крыша
  ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.fillStyle = "#941121";
  ctx.strokeStyle = 'grey';
  for (var i = 0; i < 2; i++) {
    ctx.moveTo(posGameX * 0.01, posGameY * 0.13);
    ctx.lineTo(posGameX * 0.075, posGameY * 0.01);
    ctx.lineTo(posGameX * 0.18, posGameY * 0.23);
    ctx.stroke();
    if (i === 0) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.fillStyle = "#851E1F";
      ctx.strokeStyle = '#851E1F';
    }
  }

  //труба
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#ff0000";
  ctx.moveTo(posGameX * 0.11, posGameY * 0.07);
  ctx.lineTo(posGameX * 0.15, posGameY * 0.07);
  ctx.lineTo(posGameX * 0.15, posGameY * 0.15);
  ctx.fill();

  ctx.stroke();
  ctx.closePath();
  //выход
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#5A5F60";
  ctx.moveTo(posGameX * 0.15, posGameY * 0.15);
  ctx.lineTo(posGameX * 0.15, posGameY * 0.09);
  ctx.lineTo(posGameX * 0.17, posGameY * 0.09);
  ctx.lineTo(posGameX * 0.17, posGameY * 0.16);
  ctx.lineTo(posGameX * 0.21, posGameY * 0.2);
  ctx.lineTo(posGameX * 0.21, posGameY * 0.03);
  ctx.lineTo(posGameX * 0.17, posGameY * 0.09);
  //окно
  ctx.moveTo(posGameX * 0.17, posGameY * 1.6);
  ctx.lineTo(posGameX * 0.21, posGameY * 1.62);
  ctx.stroke();

  //склон  4 шт
  var posY = [0, 0.215, 0, 0.215];
  var posX = {
    0: { 0: 0, 1: 0.11, 2: 0.2, 3: 0.165, 4: 0.165 },
    1: { 0: 0, 1: 0.11, 2: 0.2, 3: 0.165, 4: 0.165 },
    2: { 0: 1, 1: 0.89, 2: 0.8, 3: 0.835, 4: 0.835 },
    3: { 0: 1, 1: 0.89, 2: 0.8, 3: 0.835, 4: 0.835 }
  };
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#6B4C21";
  for (i = 0; i < 4; i++) {
    ctx.moveTo(posGameX * posX[i][0], posGameY * (0.27 + posY[i]));
    ctx.lineTo(posGameX * posX[i][1], posGameY * (0.27 + posY[i]));
    ctx.lineTo(posGameX * posX[i][2], posGameY * (0.385 + posY[i]));

    //подпорка
    ctx.moveTo(posGameX * posX[i][3], posGameY * (0.35 + posY[i]));
    ctx.lineTo(posGameX * posX[i][4], posGameY * (0.45 + posY[i]));
    ctx.stroke();
  }
  //забор
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "#6B4C21";
  ctx.moveTo(posGameX * 0.01, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.01, posGameY * 0.62);
  ctx.moveTo(posGameX * 0.043, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.043, posGameY * 0.62);
  ctx.moveTo(posGameX * 0.083, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.083, posGameY * 0.62);

  ctx.moveTo(posGameX * 0.120, posGameY * 0.52);
  ctx.lineTo(posGameX * 0.120, posGameY * 0.645);
  ctx.moveTo(posGameX * 0.152, posGameY * 0.55);
  ctx.lineTo(posGameX * 0.152, posGameY * 0.675);
  ctx.fillStyle = "#6B4C21";
  ctx.stroke();

  //забор
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.strokeStyle = "#6B4C21";
  ctx.moveTo(posGameX * 0.99, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.99, posGameY * 0.62);
  ctx.moveTo(posGameX * 0.957, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.957, posGameY * 0.62);
  ctx.moveTo(posGameX * 0.917, posGameY * 0.495);
  ctx.lineTo(posGameX * 0.917, posGameY * 0.62);
  ctx.moveTo(posGameX * 0.88, posGameY * 0.52);
  ctx.lineTo(posGameX * 0.88, posGameY * 0.645);
  ctx.moveTo(posGameX * 0.848, posGameY * 0.55);
  ctx.lineTo(posGameX * 0.848, posGameY * 0.675);
  ctx.fillStyle = "#6B4C21";
  ctx.stroke();

  //куст
  var setRad = [20, 8, 8, 20, 8]; //радиусы большого круга для отрисовки кустов
  var flag = 1;
  var setX = [1, 2.95, 16.7, 18.8, 18.8], setY = [1, 1.04, 1.04, 1, 0.1]; //смещение кустов по оси х, у
  ctx.beginPath();
  ctx.lineWidth = 1;
  for (var i = 0; i < 5; i++) //всего 4 куста в ряд
  {
    ctx.moveTo(posGameX * 0.05 * setX[i] + setRad[i], posGameY * 0.7 * setY[i]);
    ctx.arc(posGameX * 0.05 * setX[i], posGameY * 0.7 * setY[i], setRad[i], 0, Math.PI * 2, true);
    for (var j = 0; j < 12; j++) {
      var degX = posGameX * 0.05 * setX[i] - setRad[i] * Math.sin(360 / 12 / 180 * Math.PI * (j + 1));
      var degY = posGameY * 0.7 * setY[i] - setRad[i] * Math.cos(360 / 12 / 180 * Math.PI * (j + 1));
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
  var flag = 0;
  for (var i = 0; i < 2; i++) {
    x = 0;
    if (i == 1)
      flag = 0.8;
    ctx.moveTo(posGameX * (flag), posGameY * 0.85);
    for (var j = 1; j < 4; j++) {
      ctx.lineTo(posGameX * (0.01 + x + flag), posGameY * 0.88);
      ctx.lineTo(posGameX * (0.02 + x + flag), posGameY * 0.86);
      ctx.lineTo(posGameX * (0.05 + x + flag), posGameY * 0.88);
      ctx.lineTo(posGameX * (0.09 + x + flag), posGameY * 0.86);
      ctx.lineTo(posGameX * (0.11 + x + flag), posGameY * 0.89);
      ctx.lineTo(posGameX * (0.15 + x + flag), posGameY * 0.86);
      ctx.lineTo(posGameX * (0.16 + x + flag), posGameY * 0.89);
      x = j * 0.015;
    }
    ctx.lineTo(posGameX * (0.01 + flag), posGameY * 0.89);
    ctx.fill();
    ctx.stroke();
  }
  //трава 4 шт. по центру
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#2C390B";
  var flag = 1, x;
  var sdvigX = [0.1, 0.25, 0.4, 0.3];
  var sdvigY = [0, 0.053, 0, 0.09];
  for (var i = 0; i < 4; i++) {
    x = 0;
    if (i == 3)
      flag = 0.8;
    ctx.moveTo(posGameX * (0.186 + sdvigX[i]), posGameY * (0.89 * flag + sdvigY[i]));//3
    for (var j = 0; j < 2; j++) {
      ctx.lineTo(posGameX * (0.186 + x + sdvigX[i]), posGameY * (0.91 * flag + sdvigY[i]));//-0.1
      ctx.lineTo(posGameX * (0.195 + x + sdvigX[i]), posGameY * (0.89 * flag + sdvigY[i]));//3
      ctx.lineTo(posGameX * (0.201 + x + sdvigX[i]), posGameY * (0.91 * flag + sdvigY[i]));//3
      ctx.lineTo(posGameX * (0.211 + x + sdvigX[i]), posGameY * (0.89 * flag + sdvigY[i]));//3
      ctx.lineTo(posGameX * (0.224 + x + sdvigX[i]), posGameY * (0.91 * flag + sdvigY[i]));//3
      ctx.lineTo(posGameX * (0.235 + x + sdvigX[i]), posGameY * (0.89 * flag + sdvigY[i]));//3
      ctx.lineTo(posGameX * (0.241 + x + sdvigX[i]), posGameY * (0.91 * flag + sdvigY[i]));
      x = x + 0.055; //0.19 - разница между х-ми первой и последней точки
    }
    ctx.lineTo(posGameX * (0.186 + sdvigX[i]), posGameY * (0.91 * flag + sdvigY[i]));
    ctx.fill();
    ctx.stroke();
  }
}

function control1(event) {
  eo = window.event;
  eo.preventDefault();
  control_event();
  document.getElementById('gameA').style.opacity = 1;
  document.getElementById('control_4').style.background = 'red';
  document.getElementById('control_8').style.background = 'black';
  zayac_move();
 // setInterval(timer_game, 1000/n); //80 раз в секунду 
}
function control2(event) {
  eo = window.event;
  eo.preventDefault();
  control_event();
  document.getElementById('gameB').style.opacity = 1;
  document.getElementById('control_4').style.background = 'black';
  document.getElementById('control_8').style.background = 'red';
  zayac_move();
 // setInterval(timer_game, 1000/n); //80 раз в секунду 
}
function control_event(){

  var but1 = document.getElementById('but1');
  var but2 = document.getElementById('but2');
  var but3 = document.getElementById('but3');
  var but4 = document.getElementById('but4');

  but1.addEventListener('touchstart', left_top, false);
  but2.addEventListener('touchstart', left_bot, false);
  but3.addEventListener('touchstart', right_top, false);
  but4.addEventListener('touchstart', right_bot, false); 

  document.addEventListener('keydown', but_press, false);
  document.addEventListener('keydown', but_press, false);
  document.addEventListener('keydown', but_press, false);
  document.addEventListener('keydown', but_press, false);



  var imgs = document.getElementsByClassName('imgsGame');
  for(var i=0; i<imgs.length; i++)
    imgs[i].style.opacity = 0;
  var imgs = document.getElementsByClassName('chiken');
  for(var i=0; i<imgs.length; i++)
    imgs[i].style.opacity = 1;
}


function but_press(event){
 eo = window.event;
 eo.preventDefault();
 if(eo.code === 'ShiftLeft') 
    left_top();
 if(eo.code === 'ControlLeft')
    left_bot();
 if(eo.code === 'ArrowUp')
    right_top(eo);
 if(eo.code === 'ArrowDown')
    right_bot(eo);
}
function left_top(){
    var volk = document.getElementsByClassName('volk');
    var hend = document.getElementsByClassName('hend');
    volk[1].style.opacity = 1;
    volk[0].style.opacity = 0;
      for(var i=0; i<hend.length; i++)
          hend[i].style.opacity = 0;
      hend[0].style.opacity = 1;
}
function left_bot(){
  eo = window.event;
  eo.preventDefault();
    var volk = document.getElementsByClassName('volk');
    var hend = document.getElementsByClassName('hend');
    volk[1].style.opacity = 1;
    volk[0].style.opacity = 0;
    for(var i=0; i<hend.length; i++)
      hend[i].style.opacity = 0;
    hend[3].style.opacity = 1; 
}
function right_top(event){
  eo = window.event;
  eo.preventDefault();
    var volk = document.getElementsByClassName('volk');
    var hend = document.getElementsByClassName('hend');
    volk[0].style.opacity = 1;
    volk[1].style.opacity = 0;
    for(var i=0; i<hend.length; i++)
      hend[i].style.opacity = 0;
    hend[2].style.opacity = 1; 
}
function right_bot(event){
  eo = window.event;
  eo.preventDefault();
    var volk = document.getElementsByClassName('volk');
    var hend = document.getElementsByClassName('hend');
    volk[0].style.opacity = 1;
    volk[1].style.opacity = 0;
    for(var i=0; i<hend.length; i++)
      hend[i].style.opacity = 0;
    hend[1].style.opacity = 1;  
}
function timer_game() {
  const currTime=new Date();
  const seconds = currTime.getSeconds();
  //zayac_move();
  //game();
  return seconds;
}
function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}
function zayac_move(){
  var zaya = document.getElementById('zayac');
  var hends = document.getElementsByClassName('hend_z');
  hends[0].style.opacity = 0;
  hends[1].style.opacity = 0;  
  zaya.style.opacity = 0; 
 // const currTime=new Date();
 // const seconds = currTime.getSeconds();
  const seconds = timer_game();
  var rand = randomDiap(0,1);
  console.log(seconds);

//console.log(seconds);
  if(seconds % 5 === 0)
    {
    zaya.style.opacity = 1;
    hends[rand].style.opacity = 1;
    }
}
function game(){
  var shtraf=0;
  var ball = 0;

  //игра А. В зависимости от кол-ва штрафных очков - используются разные склоны
  var num_sklon = {
    0:{0:1, 1:2, 3:4},
    0.5:{0:1, 1:2, 3:4},
    1:{0:1, 1:2, 3:3},
    1.5:{0:1, 1:2, 3:3},
    2:{0:2, 1:3, 3:4},
    2.5:{0:2, 1:3, 3:4},
  };
  var num = num_sklon[0][randomDiap(0,3)];
  console.log(num);
  var eg1 = document.getElementsByClassName('eg_left_top');
  var eg2 = document.getElementsByClassName('eg_left_bot');
  var eg3 = document.getElementsByClassName('eg_right_top');
  var eg4 = document.getElementsByClassName('eg_right_bot');
  var eg = {
    1:eg1,
    2:eg2,
    3:eg3,
    4:eg4
  }
  return eg[num];
 /* console.log('aa', eg[num].length, (eg[num])[0]);
for(var i=0; i<eg[num].length; i++)
{
  (eg[num])[i].style.opacity = 1;
  console.log('bb', (eg[num])[0]);*/
 // (eg[num])[i].style.opacity = 0;
//}
function add_eggs(){

}
}