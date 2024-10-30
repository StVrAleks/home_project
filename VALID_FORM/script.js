const formDef1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
{label:'URL сайта:',kind:'longtext',name:'siteurl'},
{label:'Посетителей в сутки:',kind:'number',name:'visitors'},
{label:'E-mail для связи:',kind:'shorttext',name:'email'},
{label:'Рубрика каталога:',kind:'dropdown',name:'division',
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
form1.style.width = "60%";
form1.style.borderTop = '1px solid grey';
form1.style.borderBottom = '1px solid grey';
//var form2 = document.getElementById('formII');
const addNewFORM = addForm(form1, formDef1);
//var addNewFORM = addForm(form2, formDef2);

function addForm(teg, formСontent){
    var objKinds = {'longtext':'text', 
                    'number':'number', 
                    'shorttext':'text', 
                    'radio':'radio', 
                    'check':'checkbox', 
                    'memo':'textarea',
                    'submit':'submit'};
   // console.log(teg);
    var inputElement = [];  
    var labelElement = [];  
    var divElement = document.createElement("div");
    for(var i = 0; i < formСontent.length; i++)
        {
        labelElement[i] = document.createElement("label");  
        if(formСontent[i].label)
            labelElement[i].innerText = formСontent[i].label || formСontent[i].text;
        if(formСontent[i].text)
            labelElement[i].for = formСontent[i].text.length;
            
            divElement.appendChild(labelElement[i]);  
        
        if(formСontent[i].kind === 'memo')
            inputElement[i] = document.createElement("textarea");    
        else
            inputElement[i] = document.createElement("input");
        inputElement[i].id = formСontent[i].text.length;
        inputElement[i].type = objKinds[formСontent[i].kind];   
        
        objKinds[formСontent[i].kind]
        
        if(formСontent[i].name)      
            inputElement[i].name = formСontent[i].name;
        
        if(formСontent[i].caption)
           inputElement[i].value = formСontent[i].caption;
        
        if(formСontent[i].value)
            inputElement[i].value = formСontent[i].value;
    //    console.log(formСontent[i].variants);

        if(formСontent[i].variants)
            var addItem = addForm(inputElement[i], formСontent[i].variants);
        divElement.appendChild(inputElement[i]);                 
        }
        teg.appendChild(divElement);  
  //      console.log(divElement);        
return true;
} 


/*inputEnement[i].setAttribute('label', formСontent[i].label);
        inputEnement[i].setAttribute('type', formСontent[i].kind);
        inputEnement[i].setAttribute('name', formСontent[i].name);
        inputEnement[i].setAttribute('caption', formСontent[i].caption);
        inputEnement[i].setAttribute('display', 'block');*/       
        // labelElement[i].style.padding = '5px';
       // labelElement[i].style.display = 'block';