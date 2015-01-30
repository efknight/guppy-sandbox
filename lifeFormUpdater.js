function checkEachLifeForm() { //for all the little things
	for (var currentLifeForm = 0; currentLifeForm < worldVar.totalLifeForms; currentLifeForm++) {
		SyncLifeFormXY(currentLifeForm);
		makeSureLifeFormIsOnScreenProperly(currentLifeForm);
		makeLifeFormLookLikeTheirAge(currentLifeForm);
		moveFish(currentLifeForm);
		checkVictoryCondition(currentLifeForm);
	}
}

function checkVictoryCondition(currentLifeForm) {
	if (lifeForm[currentLifeForm].stripeColor == "Yellow" && lifeForm[currentLifeForm].dotColor == "Blue") {
		var tempLifeFormAge = worldVar.turnCounter - lifeForm[currentLifeForm].timeStampBorn;
		if (tempLifeFormAge > worldVar.adultMaturityAge) {
			displayVictory();
		}
	}

}

function SyncLifeFormXY(currentLifeForm) {
	var tempPos = [];
	tempPos[currentLifeForm] = $("#fish" + currentLifeForm).position();
	lifeForm[currentLifeForm].yPosition = tempPos[currentLifeForm].top;
	lifeForm[currentLifeForm].xPosition = tempPos[currentLifeForm].left;
}

function makeSureLifeFormIsOnScreenProperly(currentLifeForm) {
	if (lifeForm[currentLifeForm].yPosition < 7) {
		lifeForm[currentLifeForm].yPosition++;
		console.log("pushed him down");
		$("#fish" + currentLifeForm).css({
			top: lifeForm[currentLifeForm].yPosition
		});
	}
	if (lifeForm[currentLifeForm].yPosition > settings.SCREENY * 0.93) {
		lifeForm[currentLifeForm].yPosition--;
		console.log("pushed him up");
		$("#fish" + currentLifeForm).css({
			top: lifeForm[currentLifeForm].yPosition
		});
	}
}

function makeLifeFormLookLikeTheirAge(currentLifeForm) {
	tempLifeFormAge = worldVar.turnCounter - lifeForm[currentLifeForm].timeStampBorn;
	if (tempLifeFormAge > worldVar.adultMaturityAge) {
		tempLifeFormAge = worldVar.adultMaturityAge;
	}
	//console.log(tempLifeFormAge);
	$("#fish" + (currentLifeForm)).css({
		width: tempLifeFormAge / (worldVar.adultMaturityAge / 100),
		height: tempLifeFormAge / (worldVar.adultMaturityAge / 50)
	});
}

function moveFish(currentLifeForm) {
	changeDirectionsForNoReason(currentLifeForm);
	checkToSeeIfLifeFormNeedsToChangeDirection(currentLifeForm);
	if (lifeForm[currentLifeForm].direction == "E") {
		lifeForm[currentLifeForm].xPosition += lifeForm[currentLifeForm].movementSpeed;
	}
	if (lifeForm[currentLifeForm].direction == "W") {
		lifeForm[currentLifeForm].xPosition -= lifeForm[currentLifeForm].movementSpeed;
	}
	$("#fish" + currentLifeForm).css({
		left: lifeForm[currentLifeForm].xPosition,
		top: lifeForm[currentLifeForm].yPosition
	});
}

function checkToSeeIfLifeFormNeedsToChangeDirection(currentLifeForm) {
	//need to get rid of the - 120 that just becouse the theme says a fish is 100 wide
	if (lifeForm[currentLifeForm].xPosition > settings.SCREENX - 120) {
		makeLifeFormHeadWest(currentLifeForm);
	}
	if (lifeForm[currentLifeForm].xPosition < 0) {
		makeLifeFormHeadEast(currentLifeForm);
	}
}

function makeLifeFormHeadWest(currentLifeForm) {
	lifeForm[currentLifeForm].direction = "W";
	$("#fish" + currentLifeForm).addClass('flipped');
}

function makeLifeFormHeadEast(currentLifeForm) {
	lifeForm[currentLifeForm].direction = "E";
	$("#fish" + currentLifeForm).removeClass('flipped');
}

function changeDirectionsForNoReason(CurrentLifeForm) {
	if (Math.random() < 0.01) {
		if (Math.random() < 0.5) {
			makeLifeFormHeadWest(CurrentLifeForm);
		} else {
			makeLifeFormHeadEast(CurrentLifeForm);
		}
	}
	if (Math.random() < 0.1) {
		if (Math.random() < 0.49) {
			lifeForm[CurrentLifeForm].yPosition += 1;
		} else {
			lifeForm[CurrentLifeForm].yPosition -= 1;
		}
	}
}