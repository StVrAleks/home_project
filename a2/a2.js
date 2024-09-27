var myStroka = prompt('Введите строку');
var newstroka = funcStroka(myStroka);
alert("_" + newstroka + "_");


  
function funcStroka(myItem){
    var lStroka = myItem.length;
    for(var i = 0; lStroka; i++)
    {
        var indexF = 0;
        if(myItem[i] !== " ")
            {
            indexF = i;           
            break; 
            }
    } 
    if(indexF === 0)
        {
        console.log("Символов в строке: " + lStroka);    
        return "";    
        }    
    
    for(var i = lStroka-1; i > indexF; i = i - 1)
        {
            var indexS = lStroka;          
            if(myItem[i] !== " ")
                {
                indexS = i+1;
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
