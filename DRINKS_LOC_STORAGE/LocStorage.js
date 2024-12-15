class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; 
    // если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(keyObj){
      this.storage = {};
      this.keyObj = keyObj;
      this.storage.keyObj = localStorage.keyObj;
    }

    addValue(key, keyVal) 
     {
      if(key in localStorage)
        {
          this.storage[this.keyObj] =  JSON.parse(localStorage[this.keyObj]);
        }
        console.log(key);     
      this.storage[key] = JSON.parse(keyVal);
      localStorage.setItem(key, JSON.stringify(this.storage[key]));
      console.log(localStorage);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
      return localStorage.getItem(key);
    }
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(key, keyObj) {
      var objSt = JSON.parse(localStorage[key]);
            if(objSt in JSON.parse(localStorage[key]))
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
drinkStorage = new LocStorageClass('drink');
let  foodStorage = {};
foodStorage = new LocStorageClass('dishes');
//let drinks = {};


function buttonForAdd()
{  
    var drinkName = prompt("Введите название напитка, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Напиток алкогольный?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
 //   var drinks = {};
  // drinks[drinkName] = {'алкогольный:' : alk, 'рецепт приготовления:': rec};
   //drinkStorage.drink=drinkName;
   
   drinkStorage.addValue(drinkName, JSON.stringify({'алкогольный:' : alk, 'рецепт приготовления:': rec}));
   console.log(drinkStorage.drink, drinkStorage);
   //drinkStorage.addValue(drinkName, JSON.stringify(drinks));
  // drinkStorage.addValue('drink', JSON.stringify(drink));
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
    foodStorage.addValue('dishes', JSON.stringify(dishes));
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
  var infoLine = drinkStorage.drink.deleteValue(foundName);

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