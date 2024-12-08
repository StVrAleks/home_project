class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(){
      this.drinkInfo ={};
    }

    addValue(key, keyVal) 
     {
      this.drinkInfo[key] =  keyVal;
      localStorage.setItem(key, this.drinkInfo[key].alk);
     // localStorage.setItem(key, keyVal);
      console.log('key'+ key, keyVal);
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
                //  localStorage.clear(this.drinkInfo[key]);
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys() {
      //return Object.keys(this.drinkInfo);
      return localStorage.key(Object.keys(this.drinkInfo));
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
    var caseInfo=JSON.parse(JSON.stringify({'алкогольный:' : alk, 'рецепт приготовления:': rec}));
    console.log(caseInfo);
    //var caseInfo = 'алкогольный: '+ alk + ' рецепт приготовления: ' + rec;
    //drinkStorage.addValue(drinkName, {'алкогольный:' : alk, 'рецепт приготовления:': rec});
    drinkStorage.addValue(drinkName, caseInfo);
}

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
function buttonForDel()
{
  var foundName = prompt("Укажите напиток, который необходимо удалить");
  var infoLine = drinkStorage.deleteValue(foundName);
  if(!infoLine){ 
      alert("Напиток " + foundName + " был не найден.");
  }
  else{ alert("Напиток " + foundName + " удален."); }
}
function buttonForGetKeys()
{
  var infoLine = drinkStorage.getKeys();
  alert(`
Перечень введенных напитков:
${infoLine}`);
}