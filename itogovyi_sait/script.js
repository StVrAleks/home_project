function RedirectUrl() {
var mas_h2 = document.getElementsByTagName("h2");
var mas_all_items = document.getElementsByClassName('all_group');
find_val = $("input[id='text-to-find']").val();
var flag = 0;
    
if (find_val === "")
    {
    alert("Введите искомый товар.");
    return false;
    }
   else {
        find_val = find_val.toLowerCase();  
        for (let index = 0; index < mas_h2.length; index++) 
        {
        var new_text = mas_h2[index].innerText.toLowerCase();
         if(new_text.includes(find_val) == false)
                {
                console.log(new_text);
                mas_all_items[index].style.display = 'none';
                flag = flag + 1;
                }    
         } 
        var my_button = document.getElementById('button_clear'); 
            my_button.style.display = 'block';
    }
   if (flag ===  mas_h2.length) 
    {
        for (let index = 0; index < mas_h2.length; index++) {
            mas_all_items[index].style.display = 'inline-block';
        }
    alert('По вашему поиску ничего не найдено.');
   }     
} 
function ClearUrl() {
    var mas_all_items = document.getElementsByClassName('all_group');
    for (let index = 0; index < mas_all_items.length; index++) {
        mas_all_items[index].style.display = 'inline-block';
    }  
    var my_button = document.getElementById('button_clear'); 
    my_button.style.display = 'none';  
    $("input[id='text-to-find']").val("");
}