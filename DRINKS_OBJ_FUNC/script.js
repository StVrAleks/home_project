class ObjStorageFunc{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    
    self = this.drinkInfo ={};
     addValue = function(key, keyVal) 
     {
      this.drinkInfo[key] =  keyVal;
      console.log(key, this.drinkInfo.key, this.drinkInfo);
     // console.log(key, this.keyVal);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue = function(key) {console.log(key, this.drinkInfo.key);}
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue = function(key) {
            if(key in this.drinkInfo.key)
                {
                  delete this.drinkInfo[key];
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys = function(key) {console.log(this.drinkInfo.keys(this.key));}
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

    drinkStorage = {
        [drinkName] : {'алкогольный:' : alk, 'рецепт приготовления:': rec}   
    };
    console.log(drinkName, drinkStorage[drinkName]);
    drinkStorage.addValue(drinkName, {'алкогольный:' : alk, 'рецепт приготовления:': rec});
}

function buttonForGet()
{
    var foundName = prompt("Укажите название напитка"); 
    console.log(foundName);
    console.log(drinkStorage.keys(drinkName));
    console.log('Инфо о ' + foundName, + " "+ drinkStorage.foundName);
    if(foundName in drinkStorage.drinkInfo){
        drinkStorage.getValue(drinkName);
        alert(drinkName, drinkStorage.drinkName);
        return getValue(drinkName);
    }
    else{
        alert("Напиток " +  drinkName + " не найден.");
        return console.log("Напиток " +  drinkName + " не найден.");      
    } 
}