/*TODO:
Create Achievements
Create Upgrades
Make new mechanic
Create other buildings
PRESTIGE
Save System
ARCHANGEL ITEM
*/
var power = 0;
var mousepower = 1;
var PowerPerSecond = 0;

/*CORE*/
function IncreasePower(){
	power = power + mousepower;
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}
/*ACHIEVEMENTS*/
function Achievement() {
	this.name = "Achievement Name";
	this.unlocked = false;
}
window.Achievement1 = new Achievement();
	Achievement1.name = "Crawl";
	Achievement.unlocked = false;

if(power >= 15){
	Achievement1.unlocked = true;
}else{
	
}

/*BUILDINGS*/
function Building() {
	this.name = "Building Name";
	this.cost = 10;
	this.persec = 1;
	this.qty = 0;
	this.oldCost = 0
}
/*BUILDING 1*/
window.Building1 = new Building();
	Building1.name = "Creation Crystal";
	Building1.cost = 15;
	Building1.persec = 0.1;
	Building1.qty = 0;

function BuyBuilding1(){
	if(power >= Building1.cost){
		power = power - Building1.cost;
		Building1.qty = Building1.qty + 1;
		Building1.cost = Math.floor(15 * Math.pow(1.1,Building1.qty));
		document.getElementById("Building1").innerHTML = Building1.qty;
		document.getElementById("Building1Cost").innerHTML = Building1.cost;
		PPS;
	}
	else{
		console.log("You don't have enough power!")
	}
}

function Building1Produce() {
	power = power + (Building1.qty * Building1.persec);
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}
/*BUILDING 2*/
window.Building2 = new Building();
	Building2.name = "Creation Crystal";
	Building2.cost = 75;
	Building2.persec = 0.5;
	Building2.qty = 0;

function BuyBuilding2(){
	if(power >= Building2.cost){
		power = power - Building2.cost;
		Building2.qty = Building2.qty + 1;
		Building2.cost = Math.floor(75 * Math.pow(1.1,Building2.qty));
		document.getElementById("Building2").innerHTML = Building2.qty;
		document.getElementById("Building2Cost").innerHTML = Building2.cost;
		PPS;
	}
	else{
		console.log("You don't have enough power!")
	}
}

function Building2Produce() {
	power = power + (Building2.qty * Building2.persec);
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}

/*STATS*/
function PPS(){
	PowerPerSecond = (Building1.qty * Building1.persec)+(Building2.qty * Building2.persec);
	document.getElementById("PowerPerSecond").innerHTML = RoundtoDecimal(PowerPerSecond, 10);
}

/*MISC*/
function Round(input,forcedecimal) {
	forcedecimal = Math.pow(10,0);
	var result = Math.round(input * forcedecimal) / forcedecimal;
	return result;
}	
function RoundtoDecimal(input,forcedecimal2) {
	forcedecimal2 = Math.pow(10,1);
	var result = Math.round(input * forcedecimal2) / forcedecimal2;
	return result;
}	

/*TIMERS*/
window.setInterval(function(){
		Building1Produce();
		PPS();
		Building2Produce()
}, 1000);

setInterval(function () { SaveGame(); }, 100000);
