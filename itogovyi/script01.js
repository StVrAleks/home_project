

window.addEventListener('load', add_svg);
window.addEventListener('load', addGame);

window.addEventListener('resize', addGame);

var contr1 = document.getElementById('control_1');
var contr2 = document.getElementById('control_2');
var contr3 = document.getElementById('control_3');
contr1.addEventListener('touchstart', control1, false);
contr2.addEventListener('touchstart', control2, false);
contr3.addEventListener('touchstart', for_control3, false);
var time_start = 0; //отслеживание выбора режима игры
var flag_zaya; //отслеживание появление зайца
var shtraf = 0; //счет штрафных очков
var ball = 0; //счет пойманных яиц
var flag = 0; //для обнуления счета
var time_change = 2;
var control_sec;

setInterval(get_size, 1000/4);

function get_size(){
  var ratio = window.devicePixelRatio || 1;
  var screen_size ={
    newWid: window.innerWidth || screen.width*ratio,//*ratio,
    newHeig: window.innerHeight || screen.height*ratio//*ratio
  };
  var sec = control3();
  zayac_move(time_start, sec);
  gameA(time_start, sec); //запуск игры А
  gameB(time_start, sec); //запуск игры Б
  document.getElementById('ochki').innerText = ball;
console.log("control_sec", control_sec);
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
    widthEl = newWid * 0.89;
    heightEl = newHeig * 0.93;
    allPartGame.style.width = widthEl + 'px';
    allPartGame.style.height = heightEl + 'px';
    allPartGame.style.transform = 'translate(-' + 0.5 * widthEl + 'px,-' + 0.5 * heightEl + 'px)';
   
    //для канвас делаем новые размеры после ротейт
    var placeForGame = document.getElementById('place_for_game');
        placeForGame.style.width = "100%";
        placeForGame.style.height = "100%";   
    var placeGame = placeForGame.getBoundingClientRect();

    var newW = 0.855 * placeGame.height;
    var newH = 0.865 * placeGame.width;

    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = newW + 'px';
        placeLayer4.style.height = newH + 'px';
        placeLayer4.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';

    var layer4 = placeLayer4.getBoundingClientRect();

    var imgs = document.getElementById('img_game');
        imgs.style.width = newW + 'px';
        imgs.style.height = newH + 'px';
        imgs.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';//'translate(-'+ 0.5*layer4.height + 'px, -' + + 0.5 * layer4.width+'px) rotate(90deg)';
  
    var canvas = document.getElementById('game_canvas');
        sizePart.gamePartW = document.getElementById('for_game_layer4').offsetWidth;
        sizePart.gamePartH = document.getElementById('for_game_layer4').offsetHeight;
      //  sizePart.gamePartW = newW;
      //  sizePart.gamePartH = newH;   
        canvas.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';//'translate(-50%, -50%) rotate(90deg)';



    var botGran = document.getElementById('place_for_game');
    var elemGran = botGran.getBoundingClientRect();
    //плашки
    var forLeft = elemGran.height - 16;
    var forBottom = elemGran.width - document.getElementsByClassName('bottom')[0].offsetWidth / 2 + 4;//9;
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forBottom + 'px, 3px) rotateY(90deg)';
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
    allPartGame.style.transform = 'translate(-50%,-50%)';

    var placeII = document.getElementById('place_game_II');
    var placeGameII = placeII.getBoundingClientRect();

  //  var placeIIW = placeGameII.width;
    var placeIIH = placeGameII.height;
    var pnewH = placeIIH;   
    var pnewW = 0.75 * placeIIH;      
    var placeForGame = document.getElementById('place_for_game');
    var placeGame = placeForGame.getBoundingClientRect();
        placeForGame.style.width = pnewW + 'px';
        placeForGame.style.height = pnewH + 'px'; 
    
    var newW = 0.87 * pnewH;//placeGame.height; 0.87 
    var newH =  0.88 * pnewW;//placeGame.width;0.90

    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = newW + 'px';
        placeLayer4.style.height = newH + 'px';
        placeLayer4.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';
  

  //  var layer4 = placeLayer4.getBoundingClientRect();
    var imgs = document.getElementById('img_game');
        imgs.style.width = newW + 'px';
        imgs.style.height = newH + 'px';
        imgs.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';//'translate(-50%, -50%) rotate(90deg)';

    var canvas = document.getElementById('game_canvas');
        canvas.style.transform = 'rotate(90deg) translate(-' + 0.5 * newH + 'px,' + 0.5 * newW + 'px)';//'translate(-50%, -50%) rotate(90deg)';

        sizePart.gamePartW = newW;
        sizePart.gamePartH = newH;

    var botGran = document.getElementById('place_for_game');
    var elemGran = botGran.getBoundingClientRect();
    //плашки
    var forLeft = elemGran.height - document.getElementsByClassName('left')[0].offsetHeight / 2 - 2;
    var forBottom = elemGran.width - document.getElementsByClassName('bottom')[0].offsetWidth / 2 + 4;
    document.getElementsByClassName('bottom')[0].style.transform = 'translate(' + forBottom + 'px, 4px) rotateY(90deg)';
    document.getElementsByClassName('left')[0].style.transform = 'translate(-6px, ' + forLeft + 'px) rotateX(90deg)';
    document.getElementsByClassName('right')[0].style.transform = 'translate(-6px, -10px) rotateX(90deg)';
    //подписи
    var elemLabel = forBottom-4  - document.getElementsByClassName('to_bottom')[0].offsetHeight/2;   
    document.getElementsByClassName('to_bottom')[0].style.left = elemLabel + 7 + 'px';
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
    allPartGame.style.transform = 'translate(-50%,-50%)';

    var placeForGame = document.getElementById('place_for_game');
      placeForGame.style.width = "94%";
      placeForGame.style.height = "90%"; 

    var gameLayer4 = document.getElementById('for_game_layer4');
    var layer4 = gameLayer4.getBoundingClientRect();
    var newW = 0.57 * widthEl;
    var newH = 0.7206 * heightEl;

    var placeLayer4 = document.getElementById('for_game_layer4');
        placeLayer4.style.width = newW +'px';
        placeLayer4.style.height = newH +'px';
        placeLayer4.style.transform = 'translate(-50%, -50%) rotate(0deg)';


    var canvas = document.getElementById('game_canvas');
        canvas.style.transform = 'translate(-50%, -50%) rotate(0deg)';

        sizePart.gamePartW = document.getElementById('for_game_layer4').offsetWidth;
        sizePart.gamePartH = document.getElementById('for_game_layer4').offsetHeight;

    var imgs = document.getElementById('img_game');
        imgs.style.width = newW +'px';
        imgs.style.height = newH +'px';
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
    var forLabelBot = forBottom -4 - document.getElementsByClassName('to_bottom')[0].offsetHeight/2;//document.getElementById('for_game_layer2').offsetHeight;    
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
  document.getElementById('ochki').style.opacity = 1;
  document.getElementById('control_4').style.background = 'red';
  document.getElementById('control_8').style.background = 'black';
 /* var after_el = document.querySelector('#but1');
  after_el.style.animationName = 'rule';
  after_el.style.transition = 'all 0';*/
  time_start = 1;
  control_sec = 3;
  left_top();
}
function control2(event) {
  eo = window.event;
  eo.preventDefault();
  control_event();
  document.getElementById('gameB').style.opacity = 1;
  document.getElementById('control_4').style.background = 'black';
  document.getElementById('control_8').style.background = 'red';
  time_start = 2;
  control_sec = 2;
  left_top();
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
function for_control3(){
  document.getElementById('curTime').style.opacity = 1;
}
function control3() {
  const currTime=new Date();
  const hour = currTime.getHours();
  const min = currTime.getMinutes();
  const sec = currTime.getSeconds();
  var msec = currTime.getMilliseconds()/1000;
 // console.log('msec', msec);
  if(msec < 0.26)
    msec = 0.25;
    else if(msec > 0.25 && msec < 0.51)
      msec = 0.5;
      else if(msec > 0.5 && msec < 0.76)
        msec = 0.75;
        else if(msec > 0.75)
          msec = 0;
  document.getElementById('curTime').innerText = str0l(hour,2) + ':' + str0l(min,2)+ ':' + str0l(sec,2);
 // }
 return sec + msec;
}
function str0l(val,len) {
  let strVal=val.toString();
  while (strVal.length < len)
      strVal='0'+strVal;
  return strVal;
}
function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

function createTimerPromiseZaya(obj, obj_next, val, time, result) {

  return new Promise( (resolve,reject) => {
      setTimeout( () => {
        flag_zaya = val;
        obj.style.opacity = val;
        obj_next.style.opacity = val;
        resolve(result);
        if(!obj || !obj_next)
          reject("ошибка!!!"); 
      }, 1000*time);
  });

}
function zayac_move(time_start, sec){
  if(time_start === 1 || time_start === 2) //если игра запущена
  {
  var zaya = document.getElementById('zayac');
  var hends = document.getElementsByClassName('hend_z'); 
 /* const currTime=new Date();
  const seconds = currTime.getSeconds();*/
  var rand = randomDiap(0,1); //разные руки зайца
  
  if(sec % 6 === 0)
    {
      createTimerPromiseZaya(zaya, hends[rand], 1, 4, 2)
      .then( result => {
        return createTimerPromiseZaya(zaya, hends[rand], 0, 2, 3);
        })  
      .catch( error => {
        console.log("случилась ошибка: "+error);
      });
   }
 }   
}

function createTimerPromise(obj, obj_next, time, result) {

  return new Promise( (resolve,reject) => {
      setTimeout( () => {
        obj.style.opacity = 0;
        obj_next.style.opacity = 1;
        soundClickEg();
        resolve(result);
        if(!obj || !obj_next)
          reject("ошибка!!!"); 
      }, 1000/time);
  });

}

function createTimerPromise2(obj_next, result) {

  return new Promise( (resolve,reject) => {
     setTimeout( () => {
       obj_next.style.opacity = 0;
       resolve(result);
       if(!obj_next)
         reject("ошибка!!!"); 
     }, 1000/2);
 });

}

function gameA(time_start, sec){
  if(time_start === 1 && sec % control_sec === 0)//на стартке: 1 в 3 сек
  {
    //игра А. В зависимости от кол-ва штрафных очков - используются разные склоны
    var num_sklon = {
      0:{0:1, 1:2, 2:4},
      0.5:{0:1, 1:2, 2:4},
      1:{0:1, 1:2, 2:3},
      1.5:{0:1, 1:2, 2:3},
      2:{0:2, 1:3, 2:4},
      2.5:{0:2, 1:3, 2:4},
    };
    if(shtraf < 3.5)
    {
    var num = num_sklon[shtraf][randomDiap(0,2)];  
      game(num);
    } 
    else 
      time_start = 0;
  }
}
function gameB(time_start){
//  time_change = 1.5;
  if(time_start === 2)
  {
    //игра B. Используются все лотки произвольно
    var num_sklon = {
      0:{0:1, 1:2, 2:3, 3:4}
    };
    var num = num_sklon[0][randomDiap(0,3)];
    if(shtraf < 3.5)
      game(num);
    else 
      time_start = 0;
  }
}
function game(num)
{
  var eg1 = document.getElementsByClassName('eg_left_top');
  var eg2 = document.getElementsByClassName('eg_left_bot');
  var eg3 = document.getElementsByClassName('eg_right_top');
  var eg4 = document.getElementsByClassName('eg_right_bot');
  var bd1 = document.getElementById('bdyj_left1');
  var bd2 = document.getElementById('bdyj_left2');    
  var bd3 = document.getElementById('bdyj_right1');
  var bd4 = document.getElementById('bdyj_right2');
  var cypL = document.getElementsByClassName('cyplenok_left');
  var cypR = document.getElementsByClassName('cyplenok_right');
  var hend = document.getElementsByClassName('hend');
  var eg = {
      1:{"eg": eg1, "bd":bd1, "cyp":cypL, "hend": hend[0]},
      2:{"eg": eg2,"bd":bd2, "cyp":cypL, "hend": hend[3]},
      3:{"eg": eg3,"bd":bd3, "cyp":cypR, "hend": hend[2]},
      4:{"eg": eg4,"bd":bd4, "cyp":cypR, "hend": hend[1]}
  }
  move_ags(eg[num]);
}

function move_ags(new_eg){
  (new_eg.eg)[0].style.opacity = 1;
 createTimerPromise((new_eg.eg)[0], (new_eg.eg)[1], control_sec/2, 0)
      .then( result => {
        return createTimerPromise((new_eg.eg)[1], (new_eg.eg)[2], control_sec/2, 2)
        })   
        .then( result => {
          return createTimerPromise((new_eg.eg)[2], (new_eg.eg)[3],control_sec/2, 2)
          })  
          .then( result => {
            return createTimerPromise((new_eg.eg)[3], (new_eg.eg)[4],control_sec/2, 2)
            }) 
            .then( result => {
              return createTimerPromise2((new_eg.eg)[4], 2)
              }) 
              .then( result => {
                if((new_eg.hend).style.opacity === "1") 
                {
                    ball = ball + 1;
                    if(ball === 200 || ball ===500) 
                      shtraf = 0;
                    console.log("Очки: ", ball);
                    return createTimerPromise2((new_eg.eg)[4], 2)
                }
                else 
                {
                soundClick();
                 new_eg.bd.style.opacity = 1;
                    return move_bdyj(new_eg);
                }
                })  
      .catch( error => {
        console.log("случилась ошибка: " + error);
      });
      if(ball < 26)
        control_sec = 3;
      else if(ball > 25 && ball < 51)
        control_sec = 2.5;
      else if(ball > 50 && ball < 76)
        control_sec = 2;
      else if(ball > 75 && ball < 100)
        control_sec = 1.5; 
      else if(ball > 99)
        control_sec = 2;

  }
 function move_bdyj(new_eg){
  createTimerPromise2(new_eg.bd, 2)
      .then( result => {
        if(flag_zaya === 1)
        {
          shtraf = shtraf + 0.5;
          if(shtraf > 2.5)
            time_start = 0;
           move_cyp(new_eg);
        }  
        else
         {
          shtraf = shtraf + 1;
          window.navigator.vibrate(200);  
          if(shtraf > 2.5)
            time_start = 0;
         }
          
        flag_zaya = 0;  
        })  
      .catch( error => {
        console.log("случилась ошибка: " + error);
      });
      console.log("Штрафные:", shtraf);
      if(shtraf >=  0.5)
        {
           document.getElementsByClassName('bant')[0].style.opacity = 1;
        }
        if(shtraf >=  1.5)
          {
             document.getElementsByClassName('bant')[1].style.opacity = 1;
          }
          if(shtraf >=  2.5)
            {
               document.getElementsByClassName('bant')[2].style.opacity = 1;
            }
      if(shtraf > 2.5)
      {
        time_start = 0;
        document.getElementById('game_over').style.opacity = 1;
        ball = 0;
        shtraf = 0;
      }  
 } 
function move_cyp(new_eg){
    createTimerPromise(new_eg.bd, (new_eg.cyp)[0], control_sec, 2)
    .then( result => {
      return createTimerPromise((new_eg.cyp)[0], (new_eg.cyp)[1],control_sec, 2)
      })  
      .then( result => {
        return createTimerPromise((new_eg.cyp)[1], (new_eg.cyp)[2],control_sec, 2)
        }) 
        .then( result => {
          return createTimerPromise((new_eg.cyp)[2], (new_eg.cyp)[3],control_sec, 2)
          }) 
          .then( result => {
            return createTimerPromise2((new_eg.cyp)[3], 2)
            }) 
.catch( error => {
console.log("случилась ошибка: "+error);
});
}
function soundClickEg() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'audio/eg.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'audio/bdyj.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
