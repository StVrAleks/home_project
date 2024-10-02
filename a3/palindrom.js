var myStroka = prompt("Введите строку для анализа?");

myStroka = myStroka.toLowerCase();
myStroka = myStroka.replace(/\s/g, '');
myStroka = myStroka.replace(/[.,\/#!$%\^&\*;:"{}=\-_`~()?№'+]/g, '');
myStroka = myStroka.replace('ъ', 'ь', '');
myStroka = myStroka.replace('ё', 'е');
alert(palindrom(myStroka));

function palindrom(NewStr)
{
var allLenght = NewStr.length;    
var polLenght = Math.floor(0.5 * NewStr.length);
for(var i = 0; i <= polLenght; i++)
    {
        if(NewStr[i] !== NewStr[allLenght - i - 1])
            return 'это не палиндром';
    }
return 'это палиндром';
}