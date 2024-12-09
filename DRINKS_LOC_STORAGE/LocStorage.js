class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(){
      this.drinkInfo ={};
    }

    addValue(key, keyVal) 
     {
      this.drinkInfo[key] =  JSON.parse(keyVal);
      console.log(this.drinkInfo[key]);
      localStorage.setItem(key, JSON.stringify(this.drinkInfo[key]));
     // localStorage.setItem(key, keyVal);
      //console.log('key'+ key, keyVal);
     console.log(localStorage);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
      //return this.drinkInfo[key];
      return localStorage.getItem(key);
    }
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(key) {
            if(key in this.drinkInfo)
                {
                //  delete this.drinkInfo[key];
                  localStorage.removeItem(key);
                  localStorage.clear(this.drinkInfo[key]);
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys() {
      //return Object.keys(this.drinkInfo);
      var infoKeys = Object.keys(this.drinkInfo);
      console.log(JSON.stringify(infoKeys));
      return localStorage.key(JSON.stringify(infoKeys));
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
    drinkStorage.addValue(drinkName, JSON.stringify({'алкогольный:' : alk, 'рецепт приготовления:': rec}));
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
function buttonForDel()
{
  var foundName = prompt("Укажите напиток, который необходимо удалить");
  var infoLine = drinkStorage.deleteValue(foundName);
  if(!JSON.parse(infoLine)){ 
      alert("Напиток " + foundName + " был не найден.");
  }
  else{ alert("Напиток " + foundName + " удален."); }
}
function buttonForGetKeys()
{
  var infoLine = drinkStorage.getKeys();
  console.log(JSON.parse(infoLine));
  alert(`
Перечень введенных напитков:
${JSON.parse(infoLine).keys}`);
}