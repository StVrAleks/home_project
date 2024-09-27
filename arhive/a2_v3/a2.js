var myStroka = prompt('Введите строку');
var newstroka = funcStroka(myStroka);
alert("_" + newstroka + "_");


  
function funcStroka(myItem){
   var lStroka = myItem.length;
   var indexF = 0;
    for(var i = 0; lStroka; i++)
    {
        var indexF = 0;
        if(myItem[i] !== " ")
            {
            indexF = i;            
            break; 
            }
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
        var myNewItem = '';
        myNewItem = myItem.substring(indexF, indexS);  
   return myNewItem;
}
