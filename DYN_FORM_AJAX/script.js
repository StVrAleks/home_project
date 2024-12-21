//https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json
//https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json

function testLoadData() {
    $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json",
        { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler }
    );
    $.ajax("https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json",
        { type:'GET', dataType:'json', success:addForm, error:errorHandler }
    );   
}

/*function dataLoaded(data) {
    console.log('загруженные через AJAX данные:');
    console.log(data);
}*/
function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}
/*
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
*/
function addForm(data){
    const formDef1 = JSON.parse(data);
    console.log(formDef1);
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
