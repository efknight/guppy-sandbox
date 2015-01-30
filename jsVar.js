//global Settings
function settingsFunction() {
	this.SCREENX = 100;
	this.SCREENY = 100;
}
var settings = new settingsFunction();

//ingame settings
function worldVarFunction() {
	this.numberOfLifeForms = 0;
	this.turnCounter = 0;
	this.adultMaturityAge = 100;
	this.startingNumberOfLifeForms = 7;
	this.totalLifeForms = 0;
	this.scenerioHasBeenLaunched = 0;
}
var worldVar = new worldVarFunction();

// constructor
function LifeFormCreator() {
	this.position = 4;
	settingsFunction.SCREENY = $(window).height();
	this.yPosition = getRandomBetween(0, settingsFunction.SCREENY); // should be a pixel number
	this.xPosition = getRandomBetween(0, settingsFunction.SCREENX);
	this.direction = "E"; //N S E W NE NW SE SW
	this.species = "fish";
	this.creatrorSize = 5;
	this.movementSpeed = getRandomBetween(1, 2);
	this.timeStampBorn = 0;
	this.baseColor = "fuckedUp";
	this.stripeColor = "fuckedUp2"; //no if none
	this.dotColor = "fuckedUp3"; //no if none



	this.randomlyAssignLifeFormProperties = function () {
		this.lifespan = (Math.random() * 100 + 50);
	};

	this.randomlyAssignLifeFormProperties();
}
// instantiate 4 lifeForm
var lifeForm = [];
for (var i = 0; i < 1000; i++) {
	lifeForm.push(new LifeFormCreator(i));
}