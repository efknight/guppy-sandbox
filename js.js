var SCREENY;
var SCREENX;
var tickCounter = 0;
var fishIsMoving = 0;

var fishSelected = 0;
var fishHeadingToAtvie = 0;
var fishHeadingToX = 0;
var fishHeadingToY = 0;
var fishFacingRight = 1;
var fishX = 0;
var fishY = 0;
var lastClickX = 0;
var lastClickY = 0;



// onload
window.onload = function () {
	var nIntervId = setInterval(clockTick, 5);
	SCREENY = $(window).height();
	SCREENX = $(window).width();
};

// clocktick
function clockTick() {
	tickCounter += 1;
	checkIfFishIsSelected();
	autoMoveFish();
	movefish();
}

//check if fish selected
function movefish() {

	if (checkIfFishIsSelected()) {
		if (fishHeadingToX > fishX) {
		fishX += 1;
		fishFacingRight = 1;
		$("#gray_fish_highlight").removeClass('flipped');
	}
	if (fishHeadingToX < fishX) {
		fishX -= 1;
		fishFacingRight = 0;
		$("#gray_fish_highlight").addClass('flipped')
	}
	if (fishHeadingToY > fishY) {
		fishY += 1;
	}
	if (fishHeadingToY < fishY) {
		fishY -= 1;
	}
	displayFish()

	}
	
}

function autoMoveFish() {
if (fishFacingRight == 1) {
	fishY += 0.1;
	fishX += 0.3;
	fishFacingRight = 1;
		displayFish()
}
}

function displayFish() {
	$("#gray_fish_highlight").css({
		opacity: 1,
		left: fishX,
		top: fishY,
	}, 1000, function () {});
console.log(fishFacingRight);
}


//does the select fish and sets where it wants to go
//toggles between selected fish on or off
$("#gray_fish_highlight").click(function () {
	if (fishSelected == 0) {
		$("#gray_fish_highlight").attr("src", "media/grayFishhighlight.png");
		fishSelected = 1;
	} else {
		$("#gray_fish_highlight").attr("src", "media/grayFish.png");
		fishSelected = 0;
		console.log("fish not selected: " + fishSelected)
		
	}
});

// knows where you clicked

$(document).on("click", function (event) {
	console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
	lastClickX = event.pageX;
	lastClickY = event.pageY;
	setXYForFish();
});

function setXYForFish() {
	if (checkIfFishIsSelected()) {
		fishHeadingToX = lastClickX;
		fishHeadingToY = lastClickY;
	}
}


function checkIfFishIsSelected() {
	if (fishSelected == 1) {
		return 1;
	} else {
		return 0;
		console.log("no fish selected")
	}
}