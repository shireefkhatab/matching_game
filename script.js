
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
    console.log(x_position + ' ' + y_position)
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
  document.getElementById('finalScore').innetHTML += score;
  var gameOver =document.getElementById('gameOver')
  gameOver.style.display = 'block';
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

