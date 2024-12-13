class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(){
      this.storage ={};
    }

    addValue(key, keyObj, keyVal) 
     {
      if(key in localStorage)
        {
          this.storage =  JSON.parse(localStorage[key]);
        }
      this.storage[keyObj] =  JSON.parse(keyVal); 
      localStorage.setItem(key, JSON.stringify(this.storage));
      console.log(localStorage);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
      return localStorage.getItem(key);
    }
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(key, keyObj) {
            if(keyObj in JSON.parse(localStorage[key]))
                {
                  var keyVal = JSON.parse(localStorage[key]);
                  localStorage.removeItem(keyObj);
                  delete this.storage[keyObj];  
                  localStorage.setItem(key, JSON.stringify(this.storage));
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys(key) {
      if(key in localStorage)
        {
          this.storage =  JSON.parse(localStorage[key]);
        }
     return Object.keys(JSON.parse(localStorage[key]));

   return countKey;
    }
}

let  drinkStorage = {};
drinkStorage = new LocStorageClass();
let  foodStorage = {};
foodStorage = new LocStorageClass();
let drink = {};


function buttonForAdd()
{  
    var drinkName = prompt("Введите название напитка, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Напиток алкогольный?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
    var drink = {};
   drink[drinkName] = {'алкогольный:' : alk, 'рецепт приготовления:': rec};
   drinkStorage.addValue('drink', drinkName, JSON.stringify(drink[drinkName]));
}

function buttonForAddFood()
{  
    var foodName = prompt("Введите название блюда, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Это десерт?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
    var dishes = {};
    dishes[foodName] = {'десерт:' : alk, 'рецепт приготовления:': rec};
    foodStorage.addValue('dishes', foodName, JSON.stringify(dishes[foodName]));
}
//-*-*-*-*-*-*-*-*-*-*-*
function buttonForGet()
{
   var foundName = prompt("Укажите название напитка"); 
   var infoLine = drinkStorage.getValue("drink");
   infoLine = JSON.parse(infoLine);
   infoLine = infoLine[foundName];  

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
   var infoLine = drinkStorage.getValue("dishes");   
   infoLine = JSON.parse(infoLine);
   infoLine = infoLine[foundName];  
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
  var infoLine = drinkStorage.deleteValue("drink", foundName);

  if(!infoLine){ 
      alert("Напиток " + foundName + " был не найден.");
  }
  else {alert("Напиток " + foundName + " удален."); }
}

function buttonForDelFood()
{
  var foundName = prompt("Укажите блюдо, которое необходимо удалить");
  var infoLine = foodStorage.deleteValue("dishes", foundName);
  if(!infoLine){ 
      alert("Блюдо " + foundName + " было не найдено.");
  }
  else {alert("Блюдо " + foundName + " удалено."); }
}
//-*-*-*-*-*-*-*-*
function buttonForGetKeys()
{
  var infoLine = drinkStorage.getKeys('drink');
  alert(`
Перечень введенных напитков и блюд:
${infoLine}`);
}

function buttonForGetKeysFood()
{
  var infoLine = foodStorage.getKeys('dishes');
  alert(`
Перечень введенных блюд и напитков:
${infoLine}`);
}