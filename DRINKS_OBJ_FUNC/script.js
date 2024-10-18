

class ObjStorageFunc{
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;

     /*drinkName;*/
     key;
     keyVal = {};
     addValue(key, keyVal) 
     {
      this.key =  keyVal;
      console.log(this.key, this.keyVal);
      console.log(key, this.keyVal);
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(myKey) {console.log(myKey, this.myKey);}

    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(myKey) {
            if(myKey in this.myKey)
                {
                  delete this[myKey];
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys(myKey) {console.log(this.keys(this.myKey));}
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
  //  drinkStorage.key = drinkName;
  //  drinkStorage.myKey = drinkStorage[drinkName];
    drinkStorage = new ObjStorageFunc();
    drinkStorage.addValue(drinkName, drinkStorage);
  /*  for(drinkName in drinkStorage)
        console.log(drinkName);
    return drinkStorage.drinkName; */
}

function buttonForGet()
{
    var foundName = prompt("Укажите название напитка"); 
    console.log(foundName);
    console.log(drinkName);
    console.log(drinkStorage);
    console.log(drinkStorage.keys(drinkName));
    console.log('Инфо о ' + foundName, + " "+ drinkStorage.foundName);
    if(foundName in drinkStorage){
        alert(drinkName, drinkStorage.drinkName);
        return getValue(drinkName);
    }
    else{
        alert("Напиток " +  drinkName + " не найден.");
        return console.log("Напиток " +  drinkName + " не найден.");      
    } 
}