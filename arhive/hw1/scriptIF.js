
var user_name = "";
var surname = "";
var patronymic = "";
do
 user_name = prompt("Введите ваше имя?");
while(!isNaN(user_name))
  user_name = "ваше ФИО: " + user_name + " ";

do
  var surname = prompt("Введите вашу фамилию?")
while(!isNaN(surname))  
  user_name = user_name + surname + " ";
do
  var patronymic = prompt("Введите ваше отчество?")
while(!isNaN(patronymic))    
  user_name = user_name + patronymic;

do
  var myAge = parseInt(prompt("Укажите ваш возраст в годах?"))
while(isNaN(myAge))    
  user_day = myAge*365;
var sex = confirm("Ваш пол мужской?" + "\n" + "Нажмите 'ОК', если ваш пол мужской"  + "\n" + "Нажмите 'Cancel', если ваш пол женский")

user_day = "ваш возраст в днях: " + user_day;
var fut_year = myAge + 5;

fut_year = "через 5 лет вам будет: " +  fut_year;
if(sex === true)
    {
        user_sex = "ваш пол: мужской" 
        if(myAge < 63)
            {
              var mes = "вы на пенсии: нет"   
            } 
        else{
              var mes = "вы на пенсии: да"
            }    
    }
else{
        user_sex = "ваш пол: женский"
        if(myAge < 58)
            {
              var mes = "вы на пенсии: нет"   
            } 
        else{
              var mes = "вы на пенсии: да"
            }          
    }    
age = "ваш возраст в годах: " + myAge;
alert(user_name  + "\n" + age + "\n" + user_day + "\n" + fut_year + "\n" + user_sex + "\n" + mes);

