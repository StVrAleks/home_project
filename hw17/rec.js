let myStroka = prompt('Введите строку на русском языке');

myIt = countGl(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt);  

myIt2 = countFilter(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt2.length);  

myIt3 = countRed(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt3);  


function countGl(myArg)
{
 let masLetters = {а:0, е:0, ё:0, и:0, о:0, у:0, ы:0, э:0, ю:0, я:0};   
 myArg = myArg.toLowerCase();
 var myNewArg = new Array;
 myNewArg = [...myArg];

 let countLetters = 0;
 myNewArg.forEach((item) => {
  if(item in masLetters)
      countLetters = countLetters + 1;});
return countLetters; 
}

function countFilter(myArg)
{
 let masLetters = {а:0, е:0, ё:0, и:0, о:0, у:0, ы:0, э:0, ю:0, я:0};   
 myArg = (myArg.toLowerCase()).split('');
 let countLetters = 0;
 
 countLetters = myArg.filter(index => 
                      index in masLetters);
return countLetters; 
}

function countRed(myArg)
{
 let masLetters = {а:0, е:0, ё:0, и:0, о:0, у:0, ы:0, э:0, ю:0, я:0};   
 myArg = (myArg.toLowerCase()).split('');
 let countLetters = 0;

 countLetters = myArg.reduce((currentSum, currentNumber) => {
              if(currentNumber in masLetters) 
              { 
                countLetters = countLetters + 1;
                return currentNumber, countLetters}});
return countLetters;  
}