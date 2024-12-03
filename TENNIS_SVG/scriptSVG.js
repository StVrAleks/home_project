//setInterval(picClock,1000);

function addPlay(){
  document.getElementsByTagName('button')[0].style.display = 'none';
  var gamePartsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var partWidth = 1200;
  var partHeight = 800;
      gamePartsvg.setAttribute('width',  partWidth);
      gamePartsvg.setAttribute('height', partHeight);
  var gamePart = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
      gamePart.setAttribute('x',  '0');
      gamePart.setAttribute('y', '10vh');   
      gamePart.setAttribute('width',  partWidth);
      gamePart.setAttribute('height', partHeight); 
      gamePart.setAttribute("fill", "#FCCA66");
      gamePartsvg.appendChild(gamePart);
      document.body.appendChild(gamePartsvg);

  var posHeight = 40;  
  var posWidth = 10;   

  var leftPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');
      leftPos.setAttribute('id',  'leftPos');
      leftPos.setAttribute('x',  '0');
      leftPos.setAttribute('y', partHeight/2 - posHeight/2);   
      leftPos.setAttribute('width',  posWidth);
      leftPos.setAttribute('height', posHeight); 
      leftPos.setAttribute("fill", "red");
      leftPos.style.position = 'absolute';
      gamePartsvg.appendChild(leftPos);

  var rightPos = document.createElementNS(gamePartsvg.namespaceURI, 'rect');   
      rightPos.setAttribute('id', 'rightPos');
      rightPos.setAttribute('x',  partWidth - posWidth);
      rightPos.setAttribute('y', partHeight/2 - posHeight/2);   
      rightPos.setAttribute('width',  posWidth);
      rightPos.setAttribute('height', posHeight); 
      rightPos.setAttribute("fill", "black");
      rightPos.style.position = 'absolute';
      gamePartsvg.appendChild(rightPos);

      setInterval(plashkaMove(), 1000);

    /*  eo = window.event;
      if (event.shiftKey) {
        alert('нажат Shift');
      }*/
  //leftPos.addEventListener('click', plashkaMove, false);
      
 }


 function plashkaMove(){
    eo = window.event;
   // eo.preventDefault(); 
    var leftPlashka = document.getElementById('leftPos');
    var rightPlashka = document.getElementById('rightPos');
    var transformAttr;
    var flag;
    console.log(leftPlashka.value, rightPlashka);  
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey) {
            flag = partHeight/2 - posHeight/2 - 1;
            transformAttr = ' translate(' + '0'+ ',' + flag + ')';
            domElemnt.setAttribute('transform', transformAttr);
            console.log(leftPlashka);        
            //leftPos = leftPos - 1;   
        }
        if (e.shiftKey) {
            flag = partHeight/2 - posHeight/2 + 1;
            transformAttr = ' translate(' + '0'+ ',' + flag + ')';
            domElemnt.setAttribute('transform', transformAttr);
            console.log(leftPlashka);        
            }
        console.log('Нажата клавиша Ctrl?', e.ctrlKey);
      })

	/*if (eo.ctrlKey) {
        console.log(leftPlashka.y);        
		leftPos.setAttribute('y', partHeight/2 - posHeight/2 - 1);   
	}
	if (eo.shiftKey) {
    console.log(leftPlashka.y);           
		leftPos.setAttribute('y', partHeight/2 - posHeight/2 + 1);   
	}*/
}
