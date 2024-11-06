
function forInput(tegId, len, tegClass){
    var proverka = true;
    var inputElement = document.getElementById(tegId).value;
    var spanElement = document.getElementsByClassName(tegClass);   
    spanElement[0].style.display = 'none'; 

    if(tegId === 'nameSait')        
        proverka = validStart(inputElement);   

    if(tegId === 'sait')        
        proverka = validStroka(inputElement);   

    if(tegId === 'email')        
        proverka = validEmail(inputElement);  

    if(inputElement.length < len || proverka===false) 
        {
        spanElement[0].style.display = 'inline';
        } 
}

function forDate(tegId){
  var curDate = new Date();
  var firstDate = new Date(1990, 1, 1);
  //var firstDate = '1990-01-01';
  var dateElement = document.getElementById(tegId).value;  
   // console.log(new Date(this.value));
   var test = setDate(dateElement.getDate());
   console.log(test);
  console.log(dateElement);  
  console.log(curDate);
  console.log(firstDate);

  var CountTime1 = dateElement - firstDate;
  var CountTime2 = dateElement - curDate;

  console.log(CountTime1);
  console.log(CountTime2);
}

function validStroka(stroka){
  if(stroka.startsWith("www") || stroka.startsWith("http") || stroka.startsWith("https")){
    console.log(stroka);
    if(stroka.includes("."))
        return true;
  }
  return false;
}

function validStart(stroka){
   var regex = /[А-ЯЁ A-Z]/g;
   var found = stroka[0].match(regex);
   console.log(found);
   if(found !== 'null')
      return true;
return false;
}

function validEmail(stroka){
if(stroka.includes("@"))
   return true;
return false;
}
