
var wrapP = buildWrapper('P');
var wrapH1 = buildWrapper('H1');
  console.log(wrapP);
  console.log(wrapH1);  

function buildWrapper(teg)
{
var myStroka = prompt("Введите строку");    
var masMnem = {"<":'&#60 ;', ">":'&#62;', "'":'&#39;', '"':'&#34;', "&":'&#38;', ")":'&#41;', ":":'&#58;'};    

var myIndex = myStroka.length; 
var atr = '';

if(myStroka.indexOf("{") >= 0)
    {
    myIndex = myStroka.indexOf("{");
    atr = myStroka.substring(myIndex + 1, myStroka.length - 1);
    atr = atr.replace(':', '=');
    atr = atr.replace(',', ';');
    }

 var newStroka = myStroka.substring(0, myIndex - 1);

 var x, y; 
 for(var i = 0; i<newStroka.length; i++)  
 {
   x = newStroka[i];
    if(newStroka[i] in masMnem)
      x = masMnem[newStroka[i]]; 
    y = y + x;
  }      
 let fullStr = "<" + teg +" " + atr +">" + y + "</" + teg +">";

return fullStr;
}
