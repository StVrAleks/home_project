let myStroka = prompt('Введите строку на русском языке');

let myIt = countGl(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt);  

let myIt2 = countFilter(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt2);  

let myIt3 = countRed(myStroka);
console.log("forEach_Количество гласных в строке: ", myIt3);  


function countGl(userLine)
{
  let masLetters = {о:0, а:0, е:0, и:0, ё:0, у:0, ы:0, э:0, ю:0, я:0};   
 userLine = userLine.toLowerCase();
userLine = [...userLine];

 let countLetters = 0;
 userLine.forEach((item) => {
  if(item in masLetters)
      countLetters = countLetters + 1;});
return countLetters; 
}

function countFilter(userLine)
{
 let masLetters = {о:0, а:0, е:0, и:0, ё:0, у:0, ы:0, э:0, ю:0, я:0};   
 userLine = (userLine.toLowerCase()).split('');
 let countLetters = 0;
 
 countLetters = userLine.filter(index => 
                      index in masLetters);
return countLetters.length; 
}

function countRed(userLine)
{
  let masLetters = {о:0, а:0, е:0, и:0, ё:0, у:0, ы:0, э:0, ю:0, я:0};   
 userLine = (userLine.toLowerCase()).split('');
 let countLetters = 0;

 countLetters = userLine.reduce((currentSum, currentVal) => {
              if(currentVal in masLetters) 
              { 
                countLetters = countLetters + 1;
                return countLetters;
              }
              return countLetters;},0);
return countLetters;  
}