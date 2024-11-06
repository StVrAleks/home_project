
function forInput(tegId, len){
    var proverka = true;
    var inputElement = document.getElementById(tegId).value; 
    var spanElement = document.querySelector('#' + tegId + ' ~ span');   
    spanElement.style.display = 'none'; 

    if(tegId === 'nameSait')        
        proverka = validStart(inputElement);   

    if(tegId === 'sait')        
        proverka = validStroka(inputElement);   

    if(tegId === 'email')        
        proverka = validEmail(inputElement);  

    if(inputElement.length < len || proverka===false) 
        spanElement.style.display = 'inline';
}

function forDate(tegId){
  var curDate = new Date();
  var firstDate = new Date(1990, 1, 1);
  var dateElement = new Date(document.getElementById(tegId).value);  
  var CountTime1 = (dateElement - firstDate);
  var CountTime2 = (curDate - dateElement);
 
  var spanElement = document.querySelector('#' + tegId + ' ~ span');   
  spanElement.style.display = 'none'; 

  if(CountTime1 < 0 || CountTime2 < 0 || isNaN(CountTime1) || isNaN(CountTime2))
    spanElement.style.display = 'inline';
  return false;
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
   if(stroka === '')
    return false;
   var found = stroka[0].match(regex);
   if(found !== 'null')
      return true;
return false;
}

function validEmail(stroka){
if(stroka.includes("@"))
   return true;
return false;
}

function validSelect(tegId){
  var selectElement = document.getElementById(tegId);
  //var spanElement = document.getElementsByClassName(tegClass);  
  var spanElement = document.querySelector('#' + tegId + ' ~ span');    
  spanElement.style.display = 'none'; 
  if(selectElement.options[0].selected === true)
        spanElement.style.display = 'inline';
  return true;
}
/*
$("form").on("submit", function() {
 
  return false; //для наглядности
});*/

function validAll(){
  var item;
  var allForm = document.getElementsByTagName('form')[0];
  var inputsForm = allForm.querySelectorAll('p > input');
  //var selectForm = allForm.querySelectorAll('p > select');
 
  for(var i = 0; i<inputsForm.length; i++){
   // console.log(inputsForm[i].id);
    if(inputsForm[i].type === 'text')
        item = forInput(inputsForm[i].id, inputsForm[i].minLength);
    else if(inputsForm[i].type === 'number')
      item = forInput(inputsForm[i].id, 0);
    else if(inputsForm[i].type === 'date')
      item = forDate(inputsForm[i].id);
  }


  var selectForm = document.querySelectorAll('p > select');
  item = validSelect(selectForm[0].id);


  var checkedForm = document.getElementById('checkForm');
  var checkedClass = document.querySelector('p > #checkForm ~ span'); 
  checkedClass.style.display = 'none';  
  if(checkedForm.checked === false)
    checkedClass.style.display = 'inline';

  var textForm = allForm.querySelectorAll('p > textarea');
  var textClass = allForm.querySelectorAll('p > textarea ~ span'); 
  textClass[0].style.display = 'none';
  if(textForm[0].value === '' || textForm[0].value === ' ') 
    textClass[0].style.display = 'inline';

  return false;
 // allForm.submit();
}
//onsubmit="validAll();