//could do list
//fish die if they are to old
// make everything move + or _ ocean current so everything kind of flows together
// make draggable work on mobile

$("#star").click(function () {
	addNewLifeComplete(worldVar.totalLifeForms, 300, 300, "gray", "No", "No");
	addNewLifeComplete(worldVar.totalLifeForms, 300, 300, "gray", "Yellow", "No");
	addNewLifeComplete(worldVar.totalLifeForms, 300, 300, "gray", "No", "Blue");
});

$("#star2").click(function () {
	animateQuestbox1();

});


//sets up the clock tick 
window.onload = function () {
	var nIntervId = setInterval(clockTick, 50);
	settings.SCREENY = $(window).height();
	settings.SCREENX = $(window).width();
	$("#heart").hide();
	$("#quest").hide(0);
	animateQuestbox1();
};


function clockTick() {
	checkEachLifeForm();
	worldVar.turnCounter += 1;
	checkIfLifeFormsAreCloseToEachOther();
}

//note that worldVar.totalLifeForms is counting from 0 so actually there is 1 more
//something about the naming thing on here

//creates the String so the right PNG is displayed


function addNewLifeComplete(CurrentLifeForm, x, y, baseColor, stripeColor, dotColor) {
	worldVar.totalLifeForms = CurrentLifeForm + 1;

	lifeForm[CurrentLifeForm].xPosition = x;
	lifeForm[CurrentLifeForm].yPosition = y;
	lifeForm[CurrentLifeForm].baseColor = baseColor;
	lifeForm[CurrentLifeForm].stripeColor = stripeColor;
	lifeForm[CurrentLifeForm].dotColor = dotColor;
	lifeForm[CurrentLifeForm].timeStampBorn = worldVar.turnCounter;

	TempStringForImage = creatFishStripeDotPattern(lifeForm[CurrentLifeForm].baseColor, lifeForm[CurrentLifeForm].stripeColor, lifeForm[CurrentLifeForm].dotColor);
	console.log(CurrentLifeForm + " x Pos: " + lifeForm[CurrentLifeForm].baseColor);
	console.log(TempStringForImage);


	$('body').prepend('<img id = "fish' + CurrentLifeForm + '" src="' + TempStringForImage + '" style="position: absolute; top: ' + y + 'px; left: ' + x + 'px; z-index: 3; width = "0.001%" Height="0.001%" align="left"/></div>');
	//$("#fish" + CurrentLifeForm).draggable(); //this makes the life Form Draggable
	$("#fish" + CurrentLifeForm).draggable({
		containment: "#containment-wrapper",
		scroll: false
	});
	$("#fish" + (CurrentLifeForm)).css({ // -1 becouse its already added in add new life
		left: x + 50,
		top: y + 50
	});



}