
var numberOfImages = 2;
var score = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

var startDiv = document.getElementById('start');
var startButton = document.getElementById('startGame');
startButton.addEventListener('click', generateImages);

var replay = document.getElementById('gameOver');
//generate faces
function generateImages() {

  startDiv.style.display = 'none';
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

    var array = Array.prototype.slice.call(theLeftSide.childNodes);

    [].forEach.call(theLeftSide.childNodes, function(child) {
        // if you clicked a wrong image call function gameOver
        if(child !=theLeftSide.lastChild){
            child.addEventListener('click', badClick);
            child.addEventListener('touchstart', badClick);
        }
    });

  // if you clicked the right image call function nextLevel
  theLeftSide.lastChild.addEventListener('click', nextLevel)
  theLeftSide.lastChild.addEventListener('touchstart', nextLevel);
};

// bad click
function badClick() {
  replay.style.display = 'block';
  document.getElementById('finalScore').innerHTML += score;
	while (theLeftSide.firstChild) {
		theLeftSide.removeChild(theLeftSide.lastChild);
	}
	while (theRightSide.firstChild) {
		theRightSide.removeChild(theRightSide.lastChild);
	}
  numberOfImages = 2;
  score = 0;

};

// reload page
document.getElementById('reload').onclick = function (){
    replay.style.display = 'none';
    startDiv.style.display = 'block';
    generateImages();

  // window.location.reload(true);
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

