
function forInput(tegId, len){
    var proverka = true;
    var inputElement = document.getElementById(tegId).value; 
    var spanElement = document.querySelector('#' + tegId + ' ~ span');   
    spanElement.style.display = 'none';     
    
    if(inputElement === '')
    {
      spanElement.style.display = 'inline';
      return false;
    } 

    if(tegId === 'nameSait')        
        proverka = validStart(inputElement); 

    if(tegId === 'sait')        
        proverka = validStroka(inputElement);   

    if(tegId === 'email')        
        proverka = validEmail(inputElement);  
  
    if(tegId === 'viziters')  
      if(inputElement < 0) 
        proverka = false;    

    if(inputElement.length < len || proverka === false) 
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
   var regex = /[А-ЯЁA-Z]/g;
   if(stroka === '')
      return false;
   var found = stroka[0].match(regex);
   if(found === null)
      return false;
return true;
}

function validEmail(stroka){
if(stroka.includes("@"))
   return true;
return false;
}

function validSelect(tegId){
  var selectElement = document.getElementById(tegId);
  var spanElement = document.querySelector('#' + tegId + ' ~ span');    
  spanElement.style.display = 'none'; 
  if(selectElement.options[0].selected === true)   
    spanElement.style.display = 'inline';

  return true;
}

function validRadio(tegId){
  var radioForm = document.getElementsByName(tegId);
  var radioClass = document.querySelector('p > .radioType ~ span'); 

  radioClass.style.display = 'none';
  var flag=0;
  for(var i=0; i<radioForm.length;i++)
    {
      if(!radioForm[i].checked)
         flag=flag+1;
    }
   if(flag === 3) 
    radioClass.style.display = 'inline';
}

function validCheck(tegId){
  var checkedForm = document.getElementById(tegId);
  var checkedClass = document.querySelector('p > #checkForm ~ span'); 

  checkedClass.style.display = 'none';  
  if(checkedForm.checked === false)
    checkedClass.style.display = 'inline';
}

function validArea(tegId){
  var textForm = document.getElementById(tegId);
  var textClass = document.querySelectorAll('p > textarea ~ span'); 
  textClass[0].style.display = 'none';
  if(textForm.value === '' || textForm.value === ' ') 
    textClass[0].style.display = 'inline';
}


function validAll(){
  var item;
  var allForm = document.getElementsByTagName('form')[0];
  var inputsForm = allForm.querySelectorAll('p > input');
 
  for(var i = 0; i<inputsForm.length; i++){
    if(inputsForm[i].type === 'text')
        item = forInput(inputsForm[i].id, inputsForm[i].minLength);
    else if(inputsForm[i].type === 'number')
      item = forInput(inputsForm[i].id, 0);
    else if(inputsForm[i].type === 'date')
      item = forDate(inputsForm[i].id);
  }

//SELECT
  var selectForm = document.querySelectorAll('p > select');
  item = validSelect(selectForm[0].id);
//RADIO

  item = validRadio('radioGroup');

//CHECK
  item = validCheck('checkForm');

//TEXTAREA
  item = validArea('full-view');

  var spanInfo = document.getElementsByClassName('invalid_info');
  var InputInfo = document.getElementsByClassName('input-info');

  for(i=0; i<spanInfo.length;i++){
    if(spanInfo[i].style.display === 'inline')
    {
      InputInfo[i].focus();
      return event.preventDefault();
    }
      
  }

  return allForm.submit();
}
