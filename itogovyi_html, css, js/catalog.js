
function ClearMebel(){
var val_etajerka = document.getElementsByClassName("etajerka");
var val_komod = document.getElementsByClassName("komod");
var val_modul = document.getElementsByClassName("modul");
var val_krovat = document.getElementsByClassName("krovat");
var val_kuhnya = document.getElementsByClassName("kuhnya");
var val_stol = document.getElementsByClassName("stol");
var val_tumba = document.getElementsByClassName("tumba");
var val_shkaf = document.getElementsByClassName("shkaf");
var val_vannaya = document.getElementsByClassName("vannaya");

 if(document.getElementById('etajerka_catalog').checked)
 {
  category_filter(val_etajerka, 'block');
}
  else
    {
    category_filter(val_etajerka, 'none');
  }

if(document.getElementById('komod_catalog').checked)
  {
    category_filter(val_komod, 'block');
 }
  else
    {
      document.getElementById('vse_catalog').checked = false;  
      document.getElementById('mebel_catalog').checked = false;
      category_filter(val_komod, 'none');
  }

 if(document.getElementById('krovat_catalog').checked)
  {
    category_filter(val_krovat, 'block');
 }
  else
    {
      category_filter(val_krovat, 'none');
  }


 if(document.getElementById('kuhnya_catalog').checked)
  {
    category_filter(val_kuhnya, 'block');
 }
  else
    {
      category_filter(val_kuhnya, 'none');
  }
 if(document.getElementById('modul_catalog').checked)
  {
    category_filter(val_modul, 'block');
 }
  else
    {
      category_filter(val_modul, 'none');
  }
 if(document.getElementById('shkaf_catalog').checked)
  {
    category_filter(val_shkaf, 'block');
 }
  else
    {
      category_filter(val_shkaf, 'none');
  }
 if(document.getElementById('stol_catalog').checked)
  {
    category_filter(val_stol, 'block');
 }
  else
    {
      category_filter(val_stol, 'none');
  }
 if(document.getElementById('tumba_catalog').checked)
  {
    category_filter(val_tumba, 'block');
 }
  else
    {
      document.getElementById('vse_catalog').checked = false;  
      document.getElementById('vse_catalog').checked = false;
      category_filter(val_tumba, 'none');
  }
if(document.getElementById('vannaya_catalog').checked)
  {
    category_filter(val_vannaya, 'block');
 }
  else
    {
      category_filter(val_vannaya, 'none');
  }
}
function ClearInoe(){
var val_lavka = document.getElementsByClassName("lavka");
var val_music = document.getElementsByClassName("music");
var val_osveschenie = document.getElementsByClassName("osveschenie");
var val_shkatulka = document.getElementsByClassName("shkatulka");
var val_yaschik = document.getElementsByClassName("yaschik");
var val_obsad = document.getElementsByClassName("obsad");
var val_lestnitsa = document.getElementsByClassName("lestnitsa");
var val_stropila = document.getElementsByClassName("strop_sys");

if(document.getElementById('lavka_catalog').checked)
  {
    category_filter(val_lavka, 'block');
 }
  else
    {
      category_filter(val_lavka, 'none');
  }

 if(document.getElementById('shkatulka_catalog').checked)
  {
    category_filter(val_shkatulka, 'block');
 }
  else
    {
      category_filter(val_shkatulka, 'none');
  }

 if(document.getElementById('lestnitsa_catalog').checked)
  {
    category_filter(val_lestnitsa, 'block'); 
 }
  else
    {
      category_filter(val_lestnitsa, 'none'); 
  }
 if(document.getElementById('osveschenie_catalog').checked)
  {
    category_filter(val_osveschenie, 'block'); 
 }
  else
    {
      category_filter(val_osveschenie, 'none'); 
  }
 if(document.getElementById('obsadnaya_korobka_catalog').checked)
  {
    category_filter(val_obsad, 'block'); 
 }
  else
    {
      category_filter(val_obsad, 'none'); 
  }
 if(document.getElementById('music_catalog').checked)
  {
    category_filter(val_music, 'block'); 
 }
 else
    {
      category_filter(val_music, 'none'); 

 if(document.getElementById('yaschik_catalog').checked)
  {
    category_filter(val_yaschik, 'block');
 }
  else
    {
      category_filter(val_yaschik, 'none');          
  }
}
if(document.getElementById('stropil_catalog').checked)
  {
    category_filter(val_stropila, 'block');
 }
  else
    {
      category_filter(val_stropila, 'none');          
  }
}
function category_filter(category_name, category_val){
  for (let index = 0; index < category_name.length; index++) 
    {
      category_name[index].style.display = category_val;
    }
}

$('#vse_catalog').on('change',function() {
  var mediaQuery = window.matchMedia('(max-width: 650px)');
  var mediaQuery1 = window.matchMedia('(min-width: 651px)');
  var addMenu = document.getElementsByClassName('viz');
  if(this.checked){
       addMenu[0].style.top = '25%';
       addMenu[1].style.top = '30%';
       addMenu[0].style.left = '6%';
       addMenu[1].style.left = '6%';
       document.getElementById("vid_mebel").style.display = 'none';
       document.getElementById("vid_inoe").style.display = 'none';
       document.getElementById("inoe_catalog").checked = false;
       document.getElementById("mebel_catalog").checked = false;   
       unviz_all_group = document.getElementsByClassName('all_group');
       category_filter(unviz_all_group, 'inline-block');
       document.getElementById('form_mebel_id').style.visibility = 'hidden';
       document.getElementById('form_inoe_id').style.visibility = 'hidden';
      document.getElementById('vse_mebel_inoe_id').style.height = '14vh';
      if (window.innerWidth < 651) {
          addMenu[0].style.top = '33%';
          addMenu[1].style.top = '38%';
      }
      if (window.innerWidth > 650 && window.innerWidth < 766) {
        addMenu[0].style.top = '20%';
        addMenu[1].style.top = '25%';
    }
    }
  else{
       addMenu[0].style.top = '-1000%';
       addMenu[1].style.top = '-1000%';
       document.getElementById('vse_mebel_inoe_id').style.height = '5vh';
  }
});

$('#mebel_catalog').on('change',function() {  
  if(this.checked){
    document.getElementById("vid_mebel").style.display = 'inline';
    document.getElementById("chek_mebel").style.top = '-1000%';
    document.getElementById("chek_inoe").style.top = '-1000%';
    document.getElementById("vse_catalog").checked = false;
    document.getElementById("inoe_catalog").checked = false;
    unviz_inoe = document.getElementsByClassName('inoe_group');
    category_filter(unviz_inoe, 'none');
    document.getElementById('form_mebel_id').style.visibility = 'visible';
    document.getElementById('vse_mebel_inoe_id').style.height = '20vh';

  }
  else{
    document.getElementById("vid_mebel").style.display = 'none';
    document.getElementById('form_mebel_id').style.visibility = 'hidden';
  }

});
$('#inoe_catalog').change(function() {  
  if(this.checked){
    document.getElementById("vid_inoe").style.display = 'inline';
    document.getElementById("chek_mebel").style.top = '-1000%';
    document.getElementById("chek_inoe").style.top = '-1000%';
    document.getElementById("vse_catalog").checked = false;
    document.getElementById("mebel_catalog").checked = false;   
    unviz_mebel = document.getElementsByClassName('mebel_group');
    category_filter(unviz_mebel, 'none');
    document.getElementById('form_inoe_id').style.visibility = 'visible';
    document.getElementById('vse_mebel_inoe_id').style.height = '28vh';
  }
  else{
    document.getElementById("vid_inoe").style.display = 'none';
    category_filter(mebel_group, 'inline-block');
    document.getElementById('form_inoe_id').style.visibility = 'hidden';
   }
});

const mediaQuery = window.matchMedia('(max-width: 650px)')
if (mediaQuery.matches) {
  var addMenu = document.getElementsByClassName('viz');
       addMenu[0].style.top = '31%';
       addMenu[1].style.top = '35%';
}