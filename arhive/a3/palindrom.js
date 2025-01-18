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

var allLenght = NewStr.length;    
var polLenght = Math.floor(0.5 * NewStr.length);
for(var i = 0; i < polLenght; i++)
    {
        if(NewStr[i] !== NewStr[allLenght - i - 1])
            return false;
    }
return true;
}