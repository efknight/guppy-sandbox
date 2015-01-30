$("#quest").click(function () {
	$("#questBox").toggle(1000);
	$("#questBoxYellow").toggle(1000);
	$("#questBoxBlue").toggle(1000);
	$("#questBoxCursor").toggle(1000);
	worldVar.scenerioHasBeenLaunched = 1;
});



$("#victory").click(function () {
	hideVictory();

});

function hideVictory() {
	$("#victory").hide(1000);

}


function displayVictory() {
	$("#victory").css({
		opacity: 1,
		left: "25%",
		top: "20%",
	}, 1000, function () {
		animateQuestbox2();
	});

}


//click on the star this is for testing
// animation needs to stop itself when its not showing
function animateQuestbox1() {
	$("#questBoxCursor").animate({
		opacity: 1,
		left: "40%",
		top: "39%",
	}, 1000, function () {
		animateQuestbox2();
	});
}

function animateQuestbox2() {
	$("#questBoxCursor").animate({
		opacity: 1,
		left: "60%",
		top: "39%",
	}, 1000, function () {
		// Animation complete.
	});

	$("#questBoxYellow").animate({
		opacity: 1,
		left: "56%",
		top: "38%",
	}, 1000, function () {
		animateQuestbox3();
	});
}

function animateQuestbox3() {
	$("#questBoxCursor").animate({
		opacity: 0,
		left: "60%",
		top: "39%",
	}, 1000, function () {
		// Animation complete.
	});

	$("#questBoxYellow").animate({
		opacity: 0,
		left: "56%",
		top: "38%",
	}, 1000, function () {
		animateQuestbox4();
	});
}

function animateQuestbox4() {
	$("#questBoxCursor").animate({
		opacity: 0,
		left: "55%",
		top: "32%",
	}, 1000, function () {
		// Animation complete.
	});

	$("#questBoxYellow").animate({
		opacity: 0,
		left: "35%",
		top: "37%",
	}, 1000, function () {
		animateQuestbox5();
	});
}

function animateQuestbox5() {
	$("#questBoxCursor").animate({
		opacity: 1,
		left: "55%",
		top: "32%",
	}, 1000, function () {
		// Animation complete.
	});

	$("#questBoxYellow").animate({
		opacity: 1,
		left: "35%",
		top: "37%",
	}, 1000, function () {
		animateQuestbox1();
	});
}

$("#questBox").click(function () {
	hideQuestBox();
	runscenerio1();
	$("#quest").show(3000);
});

function hideQuestBox() {
	//alert("you clicked it");
	$("#questBoxYellow").stop(true, true);
	$("#questBoxCursor").stop(true, true);


	$("#questBoxYellow").hide(100);
	$("#questBoxBlue").hide(100);
	$("#questBoxCursor").hide(100);
	$("#questBox").hide(300);
}