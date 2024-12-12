class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(){
      this.storage ={};
    }

    addValue(key, keyObj, keyVal) 
     {
     // this.drinkInfo[key] =  keyVal;
      this.storage[keyObj] =  JSON.parse(keyVal);
      localStorage[key] = this.storage[keyObj];
     console.log(localStorage);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
      return localStorage.getItem(key);
    }
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(key) {
            if(key in localStorage)
                {
                  localStorage.removeItem(key);
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys() {
  /*    var countKey='';
      for(var i =0; i<localStorage.length; i++)
        countKey = countKey + localStorage.key(i) + " ";
      console.log(countKey);*/
      //return Object.keys(this.drinkInfo);
     // var infoKeys = Object.keys(this.storage);
     return Object.keys(this.storage);

   return countKey;
    }
}

let  drinkStorage = {};
drinkStorage = new LocStorageClass();
let  foodStorage = {};
foodStorage = new LocStorageClass();


function buttonForAdd()
{  
    var drinkName = prompt("Введите название напитка, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Напиток алкогольный?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
    console.log(drinkName);
    drinkStorage.addValue("DRINKS", drinkName, JSON.stringify({'алкогольный:' : alk, 'рецепт приготовления:': rec}));
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

function buttonForGet()
{
   var foundName = prompt("Укажите название напитка"); 
   var infoLine = drinkStorage.getValue(foundName);
   console.log(JSON.parse(infoLine));
   if(infoLine){
      alert(`
 Название напитка: ${foundName}
 Алкогольность: ${JSON.parse(infoLine)['алкогольный:']}
 Рецепт: \n ${JSON.parse(infoLine)['рецепт приготовления:']}
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
   console.log(JSON.parse(infoLine));
   if(infoLine){
      alert(`
 Название блюда: ${foundName}
 Десерт: ${JSON.parse(infoLine)['десерт:']}
 Рецепт: \n ${JSON.parse(infoLine)['рецепт приготовления:']}
            `);
   }
   else{
       alert('Такого блюда нет.');
   }
}

function buttonForDel()
{
  var foundName = prompt("Укажите напиток, который необходимо удалить");
  var infoLine = drinkStorage.deleteValue(foundName);
  if(!infoLine){ 
      alert("Напиток " + foundName + " был не найден.");
  }
  else{ alert("Напиток " + foundName + " удален."); }
}
function buttonForDelFood()
{
  var foundName = prompt("Укажите блюдо, которое необходимо удалить");
  var infoLine = foodStorage.deleteValue(foundName);
  if(!JSON.parse(infoLine)){ 
      alert("Блюдо " + foundName + " было не найдено.");
  }
  else{ alert("Блюдо " + foundName + " удалено."); }
}

function buttonForGetKeys()
{
  var infoLine = drinkStorage.getKeys();
  alert(`
Перечень введенных напитков и блюд:
${infoLine}`);
}

function buttonForGetKeysFood()
{
  var infoLine = foodStorage.getKeys();
  alert(`
Перечень введенных блюд и напитков:
${infoLine}`);
}