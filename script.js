
var numberOfFaces = 5;
var score = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

//generate faces
function generateFaces() {
  for (var i = 0; i < numberOfFaces; i++) {
    var img = document.createElement('img');
    var theleftSideImages = theLeftSide.appendChild(img);
    var x_position = Math.floor(Math.random() * parseInt(window.getComputedStyle(theLeftSide,null).getPropertyValue("width"))*.8);
    var y_position = Math.floor(Math.random() * parseInt(window.getComputedStyle(theLeftSide,null).getPropertyValue("height"))*.9);
    
    img.src = "images/football.png";
    img.style.left = x_position + "px";
    img.style.top = y_position + "px";

  }

  LeftSideImages = theLeftSide.cloneNode(true);
  LeftSideImages.removeChild(LeftSideImages.lastChild);
  rightSideImages = theRightSide.appendChild(LeftSideImages);
  theLeftSide.lastChild.onclick = nextLevel;
};

// game over
theBody.onclick = function gameOver() {
  var gameOver =document.getElementById('gameOver')
  gameOver.style.display = 'block';
  document.getElementById('finalScore').innerHTML += score;
  theBody.onclick = null;
  theLeftSide.lastChild.onclick = null;
};

// reload page
function reload (){
  window.location.reload(true);
}

// next level
function nextLevel(event) {
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.lastChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.lastChild);
  }
  event.stopPropagation();
  numberOfFaces += 5;
  generateFaces();
  score += 10;

 document.getElementById('score').innerHTML = score;
};

