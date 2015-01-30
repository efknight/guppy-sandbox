Variable declare
var abc = 123


dialog box
confirm("I am ok")
prompt("What is your name?");

//console
console.log(2 * 5)

//If then statement


if (a == b) {
	alert("Let's go down the first road!");
} else {
	// What should we do if the condition is false? Fill in here:

}


//%  like devision but gives a remainder

parts of a string
	.substring(3, 7)

//Function
var divideByThree = function (number) {
	var val = number / 3;
	console.log(val);
};



//While Loop
var a = 1;

while (a < 10) {
	console.log(a);
	a++;
}

//array
var multipleValues[];

multipleValues[0] = 50;
multipleValues[1] = "Mouse";

console.log(multipleValues[1]);

//change something in the DOM

var myNewElement = document.getElementById("abc");
myNewElement.innerHTML = "new text";

//this is how to change css
$("#bluePixel1").css({
	width: 30 + "%",
	//left: cup4HPossition + "%",
	//left: 70 + "%",
	//opacity: 1,
	position: 'absolute',
});

//hide
$("#arrow2").hide();

//change image source
$("#nameo").attr("src", "media/storageTank4.png");

//time tick
window.onload = function () {
	var nIntervId = setInterval(clockTick, 40);
};

function moveFish() {
	showDataWhereLifeFormIs();
	var tempX = lifeForm.Xposition;
	if (lifeForm.direction == "E") {
		lifeForm.Xposition += 1;
		$("#draggableLifeForm").removeClass('flipped');
		if (lifeForm.Xposition >= 80) {
			lifeForm.direction = "W";
		}
		tempX = lifeForm.Xposition;
		$("#draggableLifeForm").css({
			left: tempX + "px"
		});
	}
	if (lifeForm.direction == "W") {
		lifeForm.Xposition -= 1;
		$("#draggableLifeForm").addClass('flipped');
		if (lifeForm.Xposition <= 30) {
			lifeForm.direction = "E";
		}
		tempX = lifeForm.Xposition;
		$("#draggableLifeForm").css({
			left: tempX + "px"
		});
	}
}



// var tempPos = [];
// for (var i = 0; i < worldVar.numberOfLifeForms; i++) {
// 	tempPos[i] = $("#fish" + worldVar.numberOfLifeForms).position();
// 	lifeForm[i].xPosition = tempPos[i].left;