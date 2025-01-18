
import {LocStorageClass} from './LocStorage.js';

let  drinkStorage = {};
drinkStorage = new LocStorageClass('drink');
let  foodStorage = {};
foodStorage = new LocStorageClass('dishes');

document.getElementById('dr1').onclick = buttonForAdd;
document.getElementById('dr2').onclick = buttonForGet;
document.getElementById('dr3').onclick = buttonForDel;
document.getElementById('dr4').onclick = buttonForGetKeys;

document.getElementById('ds1').onclick = buttonForAddFood;
document.getElementById('ds2').onclick = buttonForGetFood;
document.getElementById('ds3').onclick = buttonForDelFood;
document.getElementById('ds4').onclick = buttonForGetKeysFood;

function buttonForAdd()
{  
    var drinkName = prompt("Введите название напитка, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Напиток алкогольный?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");  
   drinkStorage.addValue(drinkName, JSON.stringify({'алкогольный:' : alk, 'рецепт приготовления:': rec}));
}

function buttonForAddFood()
{  
    var foodName = prompt("Введите название блюда, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Это десерт?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
    foodStorage.addValue(foodName, JSON.stringify({'десерт:' : alk, 'рецепт приготовления:': rec}));
}
//-*-*-*-*-*-*-*-*-*-*-*
function buttonForGet()
{
   var foundName = prompt("Укажите название напитка"); 
   var infoLine = drinkStorage.getValue(foundName);
 
   if(infoLine){
      alert(`
 Название напитка: ${foundName}
 Алкогольность: ${infoLine['алкогольный:']}
 Рецепт: \n ${infoLine['рецепт приготовления:']}
            `);
   }
   else{
       alert('Такого напитка нет.');
   }
}

function buttonForGetFood()
{
   var foundName = prompt("Укажите название блюда"); 
   var infoLine = foodStorage.getValue(foundName);   

   if(infoLine){
      alert(`
 Название блюда: ${foundName}
 Десерт: ${infoLine['десерт:']}
 Рецепт: \n ${infoLine['рецепт приготовления:']}
            `);
   }
   else{
       alert('Такого блюда нет.');
   }
}
//-*-*-*-*-*-*-*-*
function buttonForDel()
{
  var foundName = prompt("Укажите напиток, который необходимо удалить");
  var infoLine = drinkStorage.deleteValue(foundName);

  if(!infoLine){ 
      alert("Напиток " + foundName + " был не найден.");
  }
  else {alert("Напиток " + foundName + " удален."); }
}

function buttonForDelFood()
{
  var foundName = prompt("Укажите блюдо, которое необходимо удалить");
  var infoLine = foodStorage.deleteValue(foundName);
  if(!infoLine){ 
      alert("Блюдо " + foundName + " было не найдено.");
  }
  else {alert("Блюдо " + foundName + " удалено."); }
}
//-*-*-*-*-*-*-*-*
function buttonForGetKeys()
{
  var infoLine = drinkStorage.getKeys();
  alert(`
Перечень введенных напитков:
${infoLine}`);
}

function buttonForGetKeysFood()
{
  var infoLine = foodStorage.getKeys();
  alert(`
Перечень введенных блюд:
${infoLine}`);
}