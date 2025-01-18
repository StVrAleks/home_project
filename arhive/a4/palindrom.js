var myStroka = prompt("Введите строку для анализа?");

if(palindrom(myStroka) === true)
    alert('это палиндром');
else
    alert('это не палиндром');


function palindrom(newStr)
{
newStr = newStr.toLowerCase();
newStr = newStr.replace(/[\s.,\/#!$%\^&\*;:"{}=\-_`~()?№'+ъь]/g, '');
newStr = newStr.replace('ё', 'е');

function recurs(newStr){
var allLenght = newStr.length;      
    if(allLenght < 2)
        {
            return true;
        }
    if(newStr[0] === newStr[allLenght - 1])
        {
        newStr = newStr.substring(1, allLenght-1);
        return recurs(newStr);   
        }
    return false;        
}
return recurs(newStr);
}

