 class LocStorageClass{
    //сохраняет указанное значение под указанным ключом; 
    // если под этим ключом уже сохранено какое-то значение — оно должно быть перезаписано;
    constructor(keyObj){
      this.keyObj = keyObj;   
      this.storage = {}; 
      this.loadChanges(this.keyObj);
    } 
        saveChanges(){
          localStorage[this.keyObj] = JSON.stringify(this.storage);
        }

        loadChanges(){
          if(localStorage[this.keyObj])
          {
            try
            {
              this.storage = JSON.parse(localStorage[this.keyObj]);   
            }
            catch (er) {
              console.log('Сохраненные данные не корректны.');
            }  
          }  
        }  
       
    addValue(key, keyVal) 
     {
      this.storage[key] =  keyVal; 
      this.saveChanges();    
     }
    //возвращает значение по указанному ключу либо undefined;
    getValue(key) {
      return this.storage[key];
    }
 
    //удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
    deleteValue(key) {
      this.loadChanges(); 
      console.log(key, this.storage.hasOwnProperty['key']);//undefinde
      console.log(key, this.storage.hasOwnProperty[key]);//undefinde
      if ( this.storage.hasOwnProperty[key] )
                {
                  delete this.storage[key];
                  this.saveChanges();  
                  return true;
                } 
                return false;
    }
    //возвращает массив, состоящий из одних ключей. Класс должен быть чистым (не должен использовать никаких глобальных переменных, не должен «пачкать экран»).
    getKeys() {
      this.loadChanges(); 
     return Object.keys(this.storage);
    }
}

export  { LocStorageClass }