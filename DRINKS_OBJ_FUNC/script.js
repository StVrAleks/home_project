class ObjStorageFunc{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    
    self = this.drinkInfo ={};
   addValue = function(key, keyVal) 
     {
      this.drinkInfo[key] =  keyVal;
      console.log(key, this.drinkInfo);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue = function(key) {return this.drinkInfo[key];}
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue = function(key) {
            if(key in this.drinkInfo)
                {
                  delete this.drinkInfo[key];
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys = function() {return Object.keys(this.drinkInfo);}
}

let  drinkStorage = {};
drinkStorage = new ObjStorageFunc();

function buttonForAdd()
{  
    var drinkName = prompt("Введите название напитка, пожалуйста");    
    var alk = 'Нет';
    if(confirm("Напиток алкогольный?"))
        var alk = 'Да';
    var rec = prompt("Укажите рецепт его приготовления");
    drinkStorage.addValue(drinkName, {'алкогольный:' : alk, 'рецепт приготовления:': rec});
}

function buttonForGet()
{
    var foundName = prompt("Укажите название напитка"); 
    var infoLine = drinkStorage.getValue(foundName);
    console.log(foundName, infoLine);
}
function buttonForDel()
{
    var foundName = prompt("Укажите напиток, который необходимо удалить");
    var infoLine = drinkStorage.deleteValue(foundName);
    console.log(foundName, infoLine); 
}
function buttonForGetKeys()
{
    var infoLine = drinkStorage.getKeys();
    console.log(infoLine);
}