var power = 0;
var mousepower = 1;
var PowerPerSecond = 0;

function Building() {
	this.name = "Building Name";
	this.cost = 10;
	this.persec = 1;
	this.qty = 0;
}

window.Building1 = new Building();
	Building1.name = "Creation Crystal";
	Building1.cost = 15;
	Building1.persec = 0.1;
	Building1.qty = 0;

function IncreasePower(){
	power = power + mousepower;
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}

function BuyBuilding1(){
	if(power >= Building1.cost){
		power = power - Building1.cost;
		Building1.qty = Building1.qty + 1;
		Building1.cost = Math.floor(15 * Math.pow(1.1,Building1.qty));  
		document.getElementById("Building1").innerHTML = Building1.qty;	
		document.getElementById("Building1Cost").innerHTML = Building1.cost;	
	}
	else{
		console.log("You don't have enough power!")
	}
}
function Building1Produce() {
	power = power + (Building1.qty * Building1.persec);
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}
function PPS(){
	PowerPerSecond = Building1.qty * Building1.persec;
	document.getElementById("PowerPerSecond").innerHTML = Round(PowerPerSecond, 10);
}


function Round(input,forcedecimal) {
	forcedecimal = Math.pow(10,0);
	var result = Math.round(input * forcedecimal) / forcedecimal;
	return result;
}	
window.setInterval(function(){
		Building1Produce();
		PPS();
}, 1000);
