// gets a random number between min and max
function getRandomBetween(min, max) {
	return Math.random() * (max - min) + min;
}

//gives back a spacific number based on the percentage between two other numbers
function getLocationBetween(min, max, location) {
	return location * (max - min) + min;
}

//compares x and y and tells you if they are close to each other
function isWithInRange(x, y, range) {
	var IscloseEnough = false;
	if (x > y - range && x < y + range) {
		IscloseEnough = true;
	}
	return IscloseEnough;
}

//creats the string that leads to the right png
function creatFishStripeDotPattern(baseColor, stripeColor, dotColor) {
	var fishString = "media/grayFishNoStripesNoDots.png";
	fishString = "media/" + baseColor + "Fish" + stripeColor + "Stripes" + dotColor + "Dots.png";
	//console.log(fishString);
	return fishString;
}