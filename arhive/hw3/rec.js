let myStroka = prompt('Введите строку на русском языке');

myIt = countGl(myStroka);
console.log("Количество гласных в строке: ", myIt);  

function countGl(myArg)
{
 let masLetters = {а:0, е:0, ё:0, и:0, о:0, у:0, ы:0, э:0, ю:0, я:0};   
 myArg = myArg.toLowerCase();
 let countLetters = 0;
 for(var i=0; i<myArg.length; i++)
  {  
    if(myArg[i] in masLetters)
      countLetters = countLetters + 1;
  }      

return countLetters; 
}