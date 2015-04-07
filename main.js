/*
______                          
|  _  \                         
| | | |__ ___  _____ _ __ _ __  
| | | / _` \ \/ / _ \ '__| '_ \ 
| |/ / (_| |>  <  __/ |  | | | |
|___/ \__,_/_/\_\___|_|  |_| |_|
/*

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
	Building1.name = "Magician's Ring";
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
	Building2.name = "Arcane Tome";
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
/*BUILDING 3*/
window.Building3 = new Building();
	Building3.name = "Wanderer's Wand";
	Building3.cost = 400;
	Building3.persec = 3.5;
	Building3.qty = 0;

function BuyBuilding3(){
	if(power >= Building3.cost){
		power = power - Building3.cost;
		Building3.qty = Building3.qty + 1;
		Building3.cost = Math.floor(375 * Math.pow(1.1,Building3.qty));
		document.getElementById("Building3").innerHTML = Building3.qty;
		document.getElementById("Building3Cost").innerHTML = Building3.cost;
		PPS;
	}
	else{
		console.log("You don't have enough power!")
	}
}

function Building3Produce() {
	power = power + (Building3.qty * Building3.persec);
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}
/*BUILDING 4*/
window.Building4 = new Building();
	Building4.name = "Summoner's Staff";
	Building4.cost = 2500;
	Building4.persec = 10;
	Building4.qty = 0;

function BuyBuilding4(){
	if(power >= Building4.cost){
		power = power - Building4.cost;
		Building4.qty = Building4.qty + 1;
		Building4.cost = Math.floor(475 * Math.pow(1.1,Building4.qty));
		document.getElementById("Building4").innerHTML = Building4.qty;
		document.getElementById("Building4Cost").innerHTML = Building4.cost;
		PPS;
	}
	else{
		console.log("You don't have enough power!")
	}
}

function Building4Produce() {
	power = power + (Building4.qty * Building4.persec);
	document.getElementById("CurrentPower").innerHTML = Round(power, 10);
}
/*STATS*/
function PPS(){
	PowerPerSecond = (Building1.qty * Building1.persec)+(Building2.qty * Building2.persec)+(Building3.qty * Building3.persec)+(Building4.qty * Building4.persec);
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
		Building2Produce()
		Building3Produce()
		PPS();
}, 1000);
