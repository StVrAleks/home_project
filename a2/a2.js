var myStroka = prompt('Введите строку');
var newstroka = funcStroka(myStroka);
alert("_" + newstroka + "_");



function funcStroka(myItem){
    var lStroka = myItem.length;
    for(var i = 0; lStroka; i++)
    {
        var indexF = 0;
        if(myItem[i] !== " "){
            indexF = i;            
            break; 
        }
    }
    for(var i = lStroka-1; i > indexF; i = i - 1)
        {
            var indexS = myItem.length;          
            if(myItem[i] !== " ")
                {
                indexS = i;
                break; 
                }
        }
        var myNewItem = '';
        myNewItem = myItem.substring(1, 3);  
   return myNewItem;
}