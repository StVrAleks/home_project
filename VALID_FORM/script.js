function forInput(tegId, len, tegClass){
    var proverka = true;
    var inputElement = document.getElementById(tegId).value;
    var spanElement = document.getElementsByClassName(tegClass);   
    spanElement[0].style.display = 'none'; 

    if(tegId === 'sait')        
        proverka = validStart(inputElement);   
    if(inputElement.length < len || proverka===false) 
        {
        spanElement[0].style.display = 'inline';
        } 

}

function validStart(stroka){
  if(stroka.startsWith("www") || stroka.startsWith("http") || stroka.startsWith("https")){
    console.log(stroka);
    if(stroka.includes("."))
        return true;
  }
  return false;
}



/*const formDef1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
{label:'URL сайта:',kind:'longtext',name:'siteurl'},
{label:'Посетителей в сутки:',kind:'number',name:'visitors'},
{label:'E-mail для связи:',kind:'shorttext',name:'email'},
{label:'Рубрика каталога:',kind: 'dropdown',name:'division',
variants:[{text:'здоровье',value:1},
          {text:'домашний уют',value:2},
          {text:'бытовая техника',value:3}]},
{label:'Размещение:',kind:'radio',name:'payment',
variants:[{text:'бесплатное',value:1},
          {text:'платное',value:2},
          {text:'VIP',value:3}]},
{label:'Разрешить отзывы:',kind:'check',name:'votes'},
{label:'Описание сайта:',kind:'memo',name:'description'},
{caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
{label:'Фамилия:',kind:'longtext',name:'lastname'},
{label:'Имя:',kind:'longtext',name:'firstname'},
{label:'Отчество:',kind:'longtext',name:'secondname'},
{label:'Возраст:',kind:'number',name:'age'},
{caption:'Зарегистрироваться',kind:'submit'},
];
const form1 = document.getElementById('formI');
const form2 = document.getElementById('formII');
const addNewFORM = addForm(form1, formDef1);
const addNewFORM2 = addForm(form2, formDef2);

function addForm(teg, formСontent){
    var objKinds = {'longtext':'text', 
                    'number':'number', 
                    'shorttext':'text', 
                    'dropdown':'select',    
                    'radio':'radio', 
                    'check':'checkbox', 
                    'memo':'textarea',
                    'submit':'submit'};

    var inputElement = [], labelElement = [], selectElement = [], labelForElement = [];  
    var divElement = document.createElement("div");
    for(var i = 0; i < formСontent.length; i++)
        {
        labelElement[i] = document.createElement("label");  
        if(formСontent[i].label)
            labelElement[i].innerText = formСontent[i].label || formСontent[i].text;
        if(formСontent[i].text)
            labelElement[i].for = formСontent[i].text.length;
        
        if(formСontent[i].kind === 'memo')
<<<<<<< HEAD
            inputElement[i] = document.createElement("textarea");    
        else
 /*           inputElement[i] = document.createElement("input");
        inputElement[i].id = formСontent[i].text.length;
        inputElement[i].type = objKinds[formСontent[i].kind];   
        
        objKinds[formСontent[i].kind]
        
        if(formСontent[i].name)      
=======
        {
            inputElement[i] = document.createElement("textarea"); 
            inputElement[i].type = objKinds[formСontent[i].kind];
>>>>>>> 85c47ce3f64fafedd9104d1fc4143f12f896eafa
            inputElement[i].name = formСontent[i].name;
            labelElement[i].appendChild(inputElement[i]);
            divElement.appendChild(labelElement[i]);  
        }
        else if(formСontent[i].kind === 'dropdown')  
        {
            inputElement[i] = document.createElement("select");
            inputElement[i].type = objKinds[formСontent[i].kind];  
            inputElement[i].name = formСontent[i].name;
            var itemVar=formСontent[i].variants;
            for(j=0; j<itemVar.length; j++)
            {
                selectElement[j] = document.createElement("option");
                selectElement[j].value = itemVar[j].value;
                selectElement[j].innerText = itemVar[j].text;
                inputElement[i].appendChild(selectElement[j]);    
            }
            labelElement[i].appendChild(inputElement[i]);
            divElement.appendChild(labelElement[i]);  
        }    
        else if(formСontent[i].kind === 'radio')  
            {
                var itemVar=formСontent[i].variants;
                for(j=0; j<itemVar.length; j++)
                {
                   // labelForElement[j] = document.createElement("label");              // variant 1
                   // labelForElement[j].innerText = itemVar[j].text;                   // vlojit input v labal
                   // labelElement[i].appendChild(labelForElement[j]);                     
                    selectElement[j] = document.createElement("input");
                    selectElement[j].type = objKinds[formСontent[i].kind];                    
                    selectElement[j].name = formСontent[i].name;
                    selectElement[j].value = itemVar[j].value;
                    selectElement[j].id = j;  
                    selectElement[j].innerText = itemVar[j].text;
                //    labelForElement[j].appendChild(selectElement[j]);                 //for variant 1
                    labelElement[i].appendChild(selectElement[j]);
                    labelForElement[j] = document.createElement("label");              
                    labelForElement[j].innerText = itemVar[j].text;  
                    labelForElement[j].for = selectElement[j].id;           //.for ne zadaetsya  
                    labelElement[i].appendChild(labelForElement[j]);                   
                }
                divElement.appendChild(labelElement[i]);  
            }  
        else
        {
            inputElement[i] = document.createElement("input");
            inputElement[i].type = objKinds[formСontent[i].kind];
            inputElement[i].name = formСontent[i].name;
            if(formСontent[i].caption)
                inputElement[i].value = formСontent[i].caption;
            if(formСontent[i].kind === 'check')
                inputElement[i].checked = 'checked';
            labelElement[i].appendChild(inputElement[i]);
            divElement.appendChild(labelElement[i]);              
        }}
return teg.appendChild(divElement);
} 
<<<<<<< HEAD
<<<<<<< HEAD


/*inputEnement[i].setAttribute('label', formСontent[i].label);
        inputEnement[i].setAttribute('type', formСontent[i].kind);
        inputEnement[i].setAttribute('name', formСontent[i].name);
        inputEnement[i].setAttribute('caption', formСontent[i].caption);
        inputEnement[i].setAttribute('display', 'block');*/       
        // labelElement[i].style.padding = '5px';
       // labelElement[i].style.display = 'block';*/
=======
>>>>>>> 85c47ce3f64fafedd9104d1fc4143f12f896eafa
=======
>>>>>>> 85c47ce3f64fafedd9104d1fc4143f12f896eafa
