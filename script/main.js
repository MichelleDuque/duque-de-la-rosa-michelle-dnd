// select your elements first - what is the user going to interact with it
// these are the targets -> these are what the "user" uses

//this is a 1 to 1 conecction to an element in the DOM
// let navButton = document.querySelector("#ButtonOne");

// this is a 1 to many connection to elements in the DOM
let navButtons = document.querySelectorAll("#buttonHolder img"), 
	theHeadLine = document.querySelector("#headLine h1"), 
	puzzleBoard = document.querySelector(".puzzle-board");

// functions go in the middle
// these are the actions that should happen
function changeBGImage(){
	debugger;
	// object.property = new value
	// theHeadLine.textContent = "Junior tu papa";
	// theHeadLine.classList.add("orange-headline");

	//Change the background image in the drop zone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '".jpg")';

}

// event handling  at the bottom -> how things react when you select the target
// how is the user going to interact with the elements / controls your provide?
// navButton.addEventListener("click", changeBGImage);

// process a collection of elements and add an event handler to each
navButtons.forEach(button => addEventListener("click", changeBGImage));