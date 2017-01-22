
var numberOfImages = 2;
var score = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

//generate faces
function generateImages() {
	// loop for the number of faces times
  for (var i = 0; i < numberOfImages; i++) {
	  
    var img = document.createElement('img');
    var x_position = Math.floor(Math.random() * parseInt(window.getComputedStyle(theLeftSide,null).getPropertyValue("width"))*.8);
    var y_position = Math.floor(Math.random() * parseInt(window.getComputedStyle(theLeftSide,null).getPropertyValue("height"))*.9);
    // image src and position
    img.src = "images/football.png";
    img.style.left = x_position + "px";
    img.style.top = y_position + "px";
	// appending the images to the leftside.
	theLeftSide.appendChild(img);
  }
  // clone images from the left side to the right side
  theLeftSideImagesClone = theLeftSide.cloneNode(true);
  // removing last image from the left side before cloning to the right side
  theLeftSideImagesClone.removeChild(theLeftSideImagesClone.lastChild);
  // cloning remaining images to the right side
  rightSideImages = theRightSide.appendChild(theLeftSideImagesClone);
  
  // loop through the leftside images:
  theLeftSide.childNodes.forEach(function(elem){
	// if you clicked a wrong image call function gameOver
	if(elem !=theLeftSide.lastChild){
		elem.onclick = gameOver;
	}
  })
  // if you clicked the right image call function nextLevel
  theLeftSide.lastChild.onclick = nextLevel;
 
};

// game over
function gameOver() {
  var replay = document.getElementById('gameOver')
  replay.style.display = 'block';
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
  numberOfImages += 2;
  generateImages();
  score += 10;

 document.getElementById('score').innerHTML = score;
};

