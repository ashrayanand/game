var color = null;

function setColor(element) {
  color = element.value;
}

function createBorder(element) {
   element.style.border = "1px dashed";
}

function removeBorder(element) {
   element.style.border = null;
}

function applyColor(element) {
  if (color) {
    if (element.style.background){
      alert("Already applied " + element.style.background + " color.");
    }
    else
      element.style.background = color;
  }
  else
    alert("Please select a color before clicking on boxes.");
}

function resetColor() {
  var i;
  var boxes = document.getElementsByClassName("box");
  var boxLength = boxes.length;
  
  for (i=0; i<boxLength; i++) {
   boxes[i].removeAttribute('style');
  }
  
  color = null;
  
  var radios = document.getElementsByName('color');
  var radioLength = radios.length;
  
  for (i=0; i<radioLength; i++){
     radios[i].checked = false;
  }
    
}
