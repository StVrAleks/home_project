const formDef1=
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
    var inputElement = [];  
    var labelElement = [];  
    var selectElement = [];  
    var labelForElement = [];
    var divElement = document.createElement("div");
    for(var i = 0; i < formСontent.length; i++)
        {
        labelElement[i] = document.createElement("label");  
        if(formСontent[i].label)
            labelElement[i].innerText = formСontent[i].label || formСontent[i].text;
        if(formСontent[i].text)
            labelElement[i].for = formСontent[i].text.length;
        
        if(formСontent[i].kind === 'memo')
        {
            inputElement[i] = document.createElement("textarea"); 
            inputElement[i].type = objKinds[formСontent[i].kind];
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
                    labelForElement[j] = document.createElement("label");              
                    labelForElement[j].innerText = itemVar[j].text;  
                    labelElement[i].appendChild(labelForElement[j]);                     
                    selectElement[j] = document.createElement("input");
                    selectElement[j].name = formСontent[i].name;
                    selectElement[j].type = objKinds[formСontent[i].kind];
                    selectElement[j].value = itemVar[j].value;
                //    selectElement[j].id = j;
                    selectElement[j].innerText = itemVar[j].text;
                    labelForElement[j].appendChild(selectElement[j]); 
       
                //    labelForElement[j].for = selectElement[j].id;
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
            labelElement[i].appendChild(inputElement[i]);
            divElement.appendChild(labelElement[i]);              
        }}
     //   $input(type='checkbox').atr('checked','checked');
   /*     inputElement[i].type = objKinds[formСontent[i].kind];
        
        objKinds[formСontent[i].kind]
        
        if(formСontent[i].name)      
            inputElement[i].name = formСontent[i].name;
        
        if(formСontent[i].caption)
           inputElement[i].value = formСontent[i].caption;
        
        if(formСontent[i].value)
            inputElement[i].value = formСontent[i].value;
        if(formСontent[i].text)
            inputElement[i].innerText = formСontent[i].text;
    //    console.log(formСontent[i].variants);

        if(formСontent[i].variants)
            var addItem = addForm(inputElement[i], formСontent[i].variants);
        labelElement[i].appendChild(inputElement[i]);
        divElement.appendChild(labelElement[i]);                 
        }*/
    //    teg.appendChild(divElement);  
  //      console.log(divElement);        
return teg.appendChild(divElement);
} 


/*inputEnement[i].setAttribute('label', formСontent[i].label);
        inputEnement[i].setAttribute('type', formСontent[i].kind);
        inputEnement[i].setAttribute('name', formСontent[i].name);
        inputEnement[i].setAttribute('caption', formСontent[i].caption);
        inputEnement[i].setAttribute('display', 'block');*/       
        // labelElement[i].style.padding = '5px';
       // labelElement[i].style.display = 'block';*/