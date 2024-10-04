var myStroka = prompt("Введите строку для анализа?");

if(palindrom(myStroka) === true)
    alert('это палиндром');
else
    alert('это не палиндром');


function palindrom(NewStr)
{
NewStr = NewStr.toLowerCase();
NewStr = NewStr.replace(/[\s.,\/#!$%\^&\*;:"{}=\-_`~()?№'+ъь]/g, '');
NewStr = NewStr.replace('ё', 'е');

return recurs(NewStr);
}

function recurs(NewStr){
var allLenght = NewStr.length;      
    if(allLenght < 2)
        {
            return true;
        }
    if(NewStr[0] === NewStr[allLenght - 1])
        {
        NewStr = NewStr.substring(1, allLenght-1);
        return recurs(NewStr);   
        }
    return false;        
}