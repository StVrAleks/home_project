
/*
Доработать проект MOOD (слайды N.10) так, чтобы цветов в консоли было ровно
столько сколько запрошено, но цвета не повторялись. Для контроля повторения цветов
использовать объект.
*/

function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
if(colorsCount > 8)
    return console.log("Введите количество цветов менее 9.");
if(colorsCount < 0)
    return console.log("Введите положительное число");  
const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
var n, flag;
const colorName = [];

console.log( 'цветов: ' + colorsCount );
for ( let i=1; i<=colorsCount; i++ ) {
  do{
      n=randomDiap(1,7);
      flag = colorName.some(item => item === colors[n])        
    } while(flag);
  colorName[n] = colors[n];
  console.log( colorName[n]);
}
}

mood(3);