
/*
Доработать проект MOOD (слайды N.10) так, чтобы цветов в консоли было ровно
столько сколько запрошено, но цвета не повторялись. Для контроля повторения цветов
использовать объект.
*/

function randomDiap(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
if(colorsCount > 7)
    return console.log("Введите количество цветов менее 9.");
if(colorsCount < 0)
    return console.log("Введите положительное число");  

const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
var n, flag = 'false';
var colorName = {};
var NameCount = 1;

console.log( 'цветов: ' + colorsCount );
for ( let i=1; i<=colorsCount; i++ ) {
   for(let j=0; j<=NameCount; j++ )
    {
      n = randomDiap(0,7);
       if(!(n in colorName) && colors[n] !== '')
        {
          colorName[n] = colors[n]; 
          break;     
        } 
       NameCount = NameCount + 1;  
    }
    NameCount = 1;
  console.log( colorName[n]);
}
}
mood(3);