
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
  
const colors = { 1:'', 2:'красный', 3:'оранжевый', 4:'жёлтый', 5:'зелёный', 6:'голубой', 7:'синий', 8:'фиолетовый' };
var n;
const colorName = {[n]:'' };

console.log( 'цветов: ' + colorsCount );
for ( let i=1; i<=colorsCount; i++ ) {
   do{
      n=randomDiap(1,7);        
     } while(n in colorName);
      colorName[n] = colors[n];
      console.log( colorName[n] );
}
}

mood(3);