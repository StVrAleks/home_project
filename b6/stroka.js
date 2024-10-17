
//var obj = { teg:'', atr:'' };

var wrapP = buildWrapper('P');
var wrapH1 = buildWrapper('H1');


 console.log(wrapP);
 // console.log(wrapH1);  
 var wrapP1 = wrapP("Однажды в студёную зимнюю пору");
  console.log( wrapP1);
  console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
  console.log( wrapP("Однажды в <студёную> зимнюю пору") );
  console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );

//function buildWrapper(teg, myStroka, myatr)
function buildWrapper(teg)
{
  myText = '<' + teg + ' ';
  fullText = wrapP(text,options); 
  /*fullText = function wrapP(text) 
   {
   var masMnem = {"<":'&#60 ;', ">":'&#62;', "'":'&#39;', '"':'&#34;', "&":'&#38;', ")":'&#41;', ":":'&#58;'};    
   var myStroka = text; 
   var myIndex = myStroka.length; 
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
   let fullStr = atr +">" + y;
   return fullStr;
   }*/
return myText = myText + fullText + "</" + teg +">";
}

fullText = function wrapP(text,options) 
{
 options = options || {};
var masMnem = {"<":'&#60 ;', ">":'&#62;', "'":'&#39;', '"':'&#34;', "&":'&#38;', ")":'&#41;', ":":'&#58;'};    
var myStroka = text; 
var myIndex = text.length; 
atr = 0;
/*if(myStroka.indexOf("{") >= 0)
   {
   myIndex = myStroka.indexOf("{");
   atr = myStroka.substring(myIndex + 1, myStroka.length - 1);
   atr = atr.replace(':', '=');
   atr = atr.replace(',', ';');
   }
*/var newStroka = text.substring(0, myIndex - 1);
var x, y; 
for(var i = 0; i<newStroka.length; i++)  
   {
   x = newStroka[i];
   if(newStroka[i] in masMnem)
      x = masMnem[newStroka[i]]; 
   y = y + x;
   }      
let fullStr = atr +">" + y;
return fullStr;
}