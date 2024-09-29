var myStroka = prompt('Введите строку');
if(myStroka === null)
  {
    alert("Вы не ввели строку");
  }
 else 
  {
   var newstroka = funcStroka(myStroka);
   alert("_" + newstroka + "_"); 
  } 

  
function funcStroka(myItem){
    var flag = 0;
    var lStroka = myItem.length;
    for(var i = 0; i < lStroka; i++)
    {
        var indexF = 0;      
        if(myItem[i] !== " ")
            {
            indexF = i; 
            flag = 'not';  
            break; 
            }
        flag = i;            
    }  
    if(flag === lStroka - 1)
       {
       console.log("Символов в строке: " + lStroka);    
       return "";    
       }    
    
    for(var i = lStroka-1; i >= indexF; i = i - 1)
        {
            var indexS = lStroka-1;  
            console.log(indexS);        
            if(myItem[i] !== " ")
                {
                indexS = i+1;
                console.log(indexS);
                break; 
                }
        }  
    if(indexF === 0 && indexS === lStroka)
        {
            console.log("Строка без внешних пробелов. Количество символов: " + lStroka);
            return myItem;   
        }   
        var myNewItem = myItem.substring(indexF, indexS);  
   return myNewItem;
}
