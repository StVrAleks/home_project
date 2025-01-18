function ObjStorageFunc(){
    
    const self = this;
    this.drinkInfo ={};
    //сохраняет указанное значение под указанным ключом; если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано; 
    self.addValue = function(key, keyVal) 
        {
          this.drinkInfo[key] =  keyVal;
          console.log(key, this.drinkInfo);
        }
    //возвращает значение по указанному ключу либо undefined;
    self.getValue = function(key) {return this.drinkInfo[key];}        
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    self.deleteValue = function(key) {
                if(key in this.drinkInfo)
                    {
                      delete this.drinkInfo[key];
                      return true;
                    } 
                    return false;
        }   
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    self.getKeys = function() {return Object.keys(this.drinkInfo);}        
}

var drinkStorage = new ObjStorageFunc();

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
   if(infoLine){
      alert(`
 Название напитка: ${foundName}
 Алкогольность: ${infoLine['алкогольный:']}
 Рецепт: \n ${infoLine['рецепт приготовления:']}`);
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
Перечень всех напитков:\n ${infoLine}`);
}