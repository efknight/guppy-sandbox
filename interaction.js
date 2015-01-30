function checkIfLifeFormsAreCloseToEachOther() {
	for (var currentLifeForm = 0; currentLifeForm < worldVar.totalLifeForms; currentLifeForm++) {
		TempXPos1stLifeForm = lifeForm[currentLifeForm].xPosition;
		TempYPos1stLifeForm = lifeForm[currentLifeForm].yPosition;
		for (var secondLifeForm = 0; secondLifeForm < worldVar.totalLifeForms; secondLifeForm++) {
			TempXPos2ndLifeForm = lifeForm[secondLifeForm].xPosition;
			TempYPos2ndLifeForm = lifeForm[secondLifeForm].yPosition;
			if (currentLifeForm != secondLifeForm) {
				if (isWithInRange(TempXPos1stLifeForm, TempXPos2ndLifeForm, 20)) {
					if (isWithInRange(TempYPos1stLifeForm, TempYPos2ndLifeForm, 20)) {
						checkIfLifeFormsRecentlyInteracted(currentLifeForm, secondLifeForm);
					}
				}
			}
		}
	}
}

function checkIfLifeFormsRecentlyInteracted(firstLifeForm, secondLifeForm) {
	if (isWithInRange(worldVar.lastTimeTwoLifeFormsInteracted, worldVar.turnCounter, 80) === false) { //might want to change this 50 its the time it waits till it can fire again. 
		worldVar.lastTimeTwoLifeFormsInteracted = worldVar.turnCounter;
		lifeFormInteraction(firstLifeForm, secondLifeForm);
	}
}

function lifeFormInteraction(firstLifeForm, secondLifeForm) {
	//later there will be other options
	mating(firstLifeForm, secondLifeForm);
}

function AreBothLifeFormsOldEnough(firstLifeForm, secondLifeForm) {
	var TempBothLifeFormsOldEnough = false;
	var tempLifeFormAge = worldVar.turnCounter - lifeForm[firstLifeForm].timeStampBorn;
	var tempLifeFormAge2 = worldVar.turnCounter - lifeForm[secondLifeForm].timeStampBorn;
	if (tempLifeFormAge > worldVar.adultMaturityAge && tempLifeFormAge2 > worldVar.adultMaturityAge) {
		TempBothLifeFormsOldEnough = true;
	}
	return TempBothLifeFormsOldEnough;
}


//FLAG this is where the bug of the fish in the wrong spot and the wrong kind of fish is
function mating(firstLifeForm, secondLifeForm) {
	if (AreBothLifeFormsOldEnough(firstLifeForm, secondLifeForm)) {
		//console.log("fish" + firstLifeForm + " and fish" + secondLifeForm + " just mated");
		console.log("fish" + firstLifeForm + lifeForm[firstLifeForm].baseColor + lifeForm[firstLifeForm].stripeColor + lifeForm[firstLifeForm].dotColor);
		console.log("fish" + secondLifeForm + lifeForm[secondLifeForm].baseColor + lifeForm[secondLifeForm].stripeColor + lifeForm[secondLifeForm].dotColor);

		tempStripes = figureOutStripesFromParents(firstLifeForm, secondLifeForm);
		tempDot = figureOutDotFromParents(firstLifeForm, secondLifeForm);

		console.log("stripes: " + tempStripes);
		console.log("dot: " + tempDot);


		addNewLifeComplete(worldVar.totalLifeForms, lifeForm[firstLifeForm].xPosition, lifeForm[secondLifeForm].yPosition, "gray", tempStripes, tempDot);
		//addNewLifeFormLocation(lifeForm[firstLifeForm].xPosition, lifeForm[firstLifeForm].yPosition, "gray", tempStripes, tempDot);

		$("#heart").css({
			left: lifeForm[firstLifeForm].xPosition - 50,
			top: lifeForm[firstLifeForm].yPosition - 50
		});
		$("#heart").show(1500, hideTheHeart());
		hideTheHeart();
	}
}


function hideTheHeart() {
	$("#heart").hide(1500);
}

function figureOutStripesFromParents(parent1, parent2) {
	var tempStripes = "No";
	var RandomNumber = Math.random();
	if (RandomNumber < 0.5) {
		tempStripes = lifeForm[parent1].stripeColor;
		console.log("got stripes " + tempStripes + " from parent: " + parent1);
	} else {
		tempStripes = lifeForm[parent2].stripeColor;
		console.log("got stripes " + tempStripes + " from parent: " + parent2);
	}
	//console.log(RandomNumber = " Parent1: " + lifeForm[parent1].stripeColor + " parent2: " + lifeForm[parent2].stripeColor);
	//console.log(lifeForm[parent1].baseColor, lifeForm[parent1].stripeColor, lifeForm[parent1].dotColor);
	//console.log(tempStripes);
	return tempStripes;
}

function figureOutDotFromParents(parent1, parent2) {
	var tempDot = "No";
	if (Math.random() < 0.5) {
		tempDot = lifeForm[parent1].dotColor;
		console.log("got stripes " + tempDot + " from parent: " + parent1);
	} else {
		tempDot = lifeForm[parent2].dotColor;
		console.log("got stripes " + tempDot + " from parent: " + parent2);
	}
	return tempDot;
}