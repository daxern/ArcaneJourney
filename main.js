/*
______                          
|  _  \                         
| | | |__ ___  _____ _ __ _ __  
| | | / _` \ \/ / _ \ '__| '_ \ 
| |/ / (_| |>  <  __/ |  | | | |
|___/ \__,_/_/\_\___|_|  |_| |_|

TO-DO LIST:
Create Achievements
Create Upgrades
On every power (10, 100, 1000 etc) reward magic affinity
MAGIC AFFINITY
PRESTIGE
Save System
ARCHANGEL ITEM
KARMA SYSTEM
CELESTIAL SYSTEM (SUN AND MOON)
*/

var player = {
	power: 0,
	mousepower: 1,
	PowerPerSecond: 0,
	mouseclicks: 0,
	TotalArcanePower: 0,
	playtime: 0
};
/*CORE*/
function IncreasePower() {
		player.power += player.mousepower;
		player.mouseclicks++;
		player.TotalArcanePower += player.mousepower;
		document.getElementById('TotalArcanePower').innerHTML = RoundtoDecimal(player.TotalArcanePower, 10);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
		document.getElementById('mouseclicks').innerHTML = Round(player.mouseclicks, 10);
	}

	/*BUILDINGS*/

function Building() {
		this.name = 'Building Name';
		this.cost = 10;
		this.persec = 1;
		this.qty = 0;
		this.oldCost = 0;
	}
	/*BUILDING 1*/

var Building1 = new Building();
Building1.name = 'Magician\'s Ring';
Building1.cost = 15;
Building1.persec = 0.1;
Building1.qty = 0;

function BuyBuilding1() {
	if (player.power >= Building1.cost) {
		player.power -= Building1.cost;
		Building1.qty += 1;
		Building1.cost = Math.floor(15 * Math.pow(1.1, Building1.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building1Produce() {
		player.power = player.power + (Building1.qty * Building1.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 2*/

var Building2 = new Building();
Building2.name = 'Arcane Tome';
Building2.cost = 90;
Building2.persec = 0.5;
Building2.qty = 0;

function BuyBuilding2() {
	if (player.power >= Building2.cost) {
		player.power = player.power - Building2.cost;
		Building2.qty += 1;
		Building2.cost = Math.floor(90 * Math.pow(1.1, Building2.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building2Produce() {
		player.power = player.power + (Building2.qty * Building2.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 3*/

var Building3 = new Building();
Building3.name = 'Wanderer\'s Wand';
Building3.cost = 450;
Building3.persec = 4;
Building3.qty = 0;

function BuyBuilding3() {
	if (player.power >= Building3.cost) {
		player.power = player.power - Building3.cost;
		Building3.qty = Building3.qty + 1;
		Building3.cost = Math.floor(450 * Math.pow(1.1, Building3.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building3Produce() {
		player.power = player.power + (Building3.qty * Building3.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 4*/

var Building4 = new Building();
Building4.name = 'Summoner\'s Staff';
Building4.cost = 3000;
Building4.persec = 16;
Building4.qty = 0;

function BuyBuilding4() {
	if (player.power >= Building4.cost) {
		player.power = player.power - Building4.cost;
		Building4.qty = Building4.qty + 1;
		Building4.cost = Math.floor(3000 * Math.pow(1.1, Building4.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building4Produce() {
		player.power = player.power + (Building4.qty * Building4.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 5*/

var Building5 = new Building();
Building5.name = 'Summoner\'s Staff';
Building5.cost = 15000;
Building5.persec = 60;
Building5.qty = 0;

function BuyBuilding5() {
	if (player.power >= Building5.cost) {
		player.power = player.power - Building5.cost;
		Building5.qty = Building5.qty + 1;
		Building5.cost = Math.floor(15000 * Math.pow(1.1, Building5.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building5Produce() {
		player.power = player.power + (Building5.qty * Building5.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 6*/

var Building6 = new Building();
Building6.name = 'Summoner\'s Staff';
Building6.cost = 30000;
Building6.persec = 300;
Building6.qty = 0;

function BuyBuilding6() {
	if (player.power >= Building6.cost) {
		player.power = player.power - Building6.cost;
		Building6.qty = Building6.qty + 1;
		Building6.cost = Math.floor(30000 * Math.pow(1.1, Building6.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building6Produce() {
		player.power = player.power + (Building6.qty * Building6.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 7*/

var Building7 = new Building();
Building7.name = 'Crystal of Conjuration';
Building7.cost = 150000;
Building7.persec = 3200;
Building7.qty = 0;

function BuyBuilding7() {
	if (player.power >= Building7.cost) {
		player.power = player.power - Building7.cost;
		Building7.qty = Building7.qty + 1;
		Building7.cost = Math.floor(150000 * Math.pow(1.1, Building7.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building7Produce() {
		player.power = player.power + (Building7.qty * Building7.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 8*/

var Building8 = new Building();
Building8.name = 'Celestial Charm';
Building8.cost = 800000;
Building8.persec = 15500;
Building8.qty = 0;

function BuyBuilding8() {
	if (player.power >= Building8.cost) {
		player.power = player.power - Building8.cost;
		Building8.qty = Building8.qty + 1;
		Building8.cost = Math.floor(800000 * Math.pow(1.1, Building8.qty));
		UpdateView();
		PPS();
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building8Produce() {
		player.power = player.power + (Building8.qty * Building8.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*UPGRADES*/
	function Upgrade() {
		this.name = 'Upgrade Name';
		this.cost = 10;
		this.unlocked = false;
	}
	var Upgrade1 = new Upgrade();
	Upgrade1.name = 'Magic Click';
	Upgrade1.cost = 100;
	Upgrade1.unlocked = false;
	
	var Upgrade2 = new Upgrade();
	Upgrade2.name = 'Spell Click';
	Upgrade2.cost = 1000;
	Upgrade2.unlocked = false;
	
	var Upgrade3 = new Upgrade();
	Upgrade3.name = 'Arcane Click';
	Upgrade3.cost = 10000;
	Upgrade3.unlocked = false;
	
	var Upgrade4 = new Upgrade();
	Upgrade4.name = 'Sorcerer Click';
	Upgrade4.cost = 100000;
	Upgrade4.unlocked = false;
	
	var Upgrade5 = new Upgrade();
	Upgrade5.name = 'Divine Click';
	Upgrade5.cost = 1000000;
	Upgrade5.unlocked = false;
	
	var Upgrade6 = new Upgrade();
	Upgrade6.name = 'Golden Polish';
	Upgrade6.cost = 150;
	Upgrade6.unlocked = false;

	function BuyUpgrade1(){
		if(player.power >= Upgrade1.cost){
			Upgrade1.unlocked = true;
			player.power -= Upgrade1.cost;
			player.mousepower += 1;	
		}
	}
	function BuyUpgrade2(){
		if(player.power >= Upgrade2.cost){
			Upgrade2.unlocked = true;
			player.power -= Upgrade2.cost;
			player.mousepower += 3;	
		}
	}
	function BuyUpgrade3(){
		if(player.power >= Upgrade3.cost){
			Upgrade3.unlocked = true;
			player.power -= Upgrade3.cost;
			player.mousepower += 10;	
		}
	}
	function BuyUpgrade4(){
		if(player.power >= Upgrade4.cost){
			Upgrade4.unlocked = true;
			player.power -= Upgrade4.cost;
			player.mousepower += 250;	
		}
	}
	function BuyUpgrade5(){
		if(player.power >= Upgrade5.cost){
			Upgrade5.unlocked = true;
			player.power -= Upgrade5.cost;
			player.mousepower += 10000;	
		}
	}
	function BuyUpgrade6(){
		if(player.power >= Upgrade6.cost){
			Upgrade6.unlocked = true;
			player.power -= Upgrade6.cost;
			Building1.persec += 0.2;
		}
	}
	function Upgrade1Enable(){
		if(Upgrade1.unlocked){
			document.getElementById('UpgradeOne').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeOne').style.display = 'inline-block';
		}
	}
	function Upgrade2Enable(){
		if(Upgrade2.unlocked){
			document.getElementById('UpgradeTwo').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeTwo').style.display = 'inline-block';
		}
	}
	function Upgrade3Enable(){
		if(Upgrade3.unlocked){
			document.getElementById('UpgradeThree').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeThree').style.display = 'inline-block';
		}
	}
	function Upgrade4Enable(){
		if(Upgrade4.unlocked){
			document.getElementById('UpgradeFour').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeFour').style.display = 'inline-block';
		}
	}
	function Upgrade5Enable(){
		if(Upgrade5.unlocked){
			document.getElementById('UpgradeFive').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeFive').style.display = 'inline-block';
		}
	}
	function Upgrade6Enable(){
		if(Upgrade6.unlocked){
			document.getElementById('UpgradeSix').style.display = 'none';
		}
		else{
			document.getElementById('UpgradeSix').style.display = 'inline-block';
		}
	}
	/*STATS*/

	function PPS() {
		player.PowerPerSecond = (Building1.qty * Building1.persec) + (Building2.qty * Building2.persec) + (Building3.qty * Building3.persec) + (Building4.qty * Building4.persec) + (Building5.qty * Building5.persec) + (Building6.qty * Building6.persec) + (Building7.qty * Building7.persec) + (Building8.qty * Building8.persec);
		document.getElementById('PowerPerSeconds').innerHTML = RoundtoDecimal(player.PowerPerSecond, 10);
	}
	function Playtime() { 
	player.playtime++;
	var days = parseInt( player.playtime / 86400 );
	var hours = parseInt( player.playtime / 3600 ) % 24;
	var minutes = parseInt( player.playtime / 60 ) % 60;
	var seconds = player.playtime % 60;
	document.getElementById('PlayTime').innerHTML = days + " Days " + (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
}
	/*ACHIEVEMENTS*/

function Achievement() {
	this.name = 'Achievement Name';
	this.unlocked = false;
}
window.Achievement1 = new Achievement();
Achievement1.name = 'Poof!';
Achievement1.unlocked = false;

window.Achievement2 = new Achievement();
Achievement2.name = 'Pop!';
Achievement2.unlocked = false;

window.Achievement3 = new Achievement();
Achievement3.name = 'Bam!';
Achievement3.unlocked = false;


function AchievementOneGoal() {
	if (player.mousepower >= 5) {
		Achievement1.unlocked = true;
		window.clearInterval(A1Timer);
	} else {
		Achievement1.unlocked = false;
	}
}

function AchievementTwoGoal() {
	if (player.mousepower >= 25) {
		Achievement2.unlocked = true;
		window.clearInterval(A2Timer);
	} else {
		Achievement2.unlocked = false;
	}
}

function AchievementThreeGoal() {
	if (player.mousepower >= 125) {
		Achievement3.unlocked = true;
		window.clearInterval(A3Timer);
	} else {
		Achievement3.unlocked = false;
	}
}

function AchievementOne() {
	if (Achievement1.unlocked) {
		document.getElementById('AchievementOne').style.display = 'block';
		window.clearInterval(A1Timer);
	} else {
		document.getElementById('AchievementOne').style.display = 'none';
	}
}

function AchievementTwo() {
	if (Achievement2.unlocked) {
		document.getElementById('AchievementTwo').style.display = 'block';
	} else {
		document.getElementById('AchievementTwo').style.display = 'none';
	}
}

function AchievementThree() {
	if (Achievement3.unlocked) {
		document.getElementById('AchievementThree').style.display = 'block';
	} else {
		document.getElementById('AchievementThree').style.display = 'none';
	}
}

	/*MISC*/

	function UpdateView(){
		$('#TotalArcanePower').html(RoundtoDecimal(player.TotalArcanePower, 10));
		$('#CurrentPower').html(Round(player.power, 10));
		$('#mouseclicks').html(Round(player.mouseclicks, 10));
		document.getElementById('PowerPerSeconds').innerHTML = RoundtoDecimal(player.PowerPerSecond, 10);
		document.getElementById('Building1').innerHTML = Building1.qty;
		document.getElementById('Building1Cost').innerHTML = Building1.cost.toLocaleString();
		document.getElementById('1Qty').innerHTML = Round(Building1.qty);
		document.getElementById('1SPS').innerHTML = RoundtoDecimal(Building1.qty * Building1.persec);
		document.getElementById('1PP').innerHTML = RoundtoDecimal(Building1.persec);
		document.getElementById('Building2').innerHTML = Building2.qty;
		document.getElementById('Building2Cost').innerHTML = Building2.cost.toLocaleString();
		document.getElementById('2Qty').innerHTML = Round(Building2.qty);
		document.getElementById('2SPS').innerHTML = RoundtoDecimal(Building2.qty * Building2.persec);
		document.getElementById('2PP').innerHTML = RoundtoDecimal(Building2.persec);
		document.getElementById('Building3').innerHTML = Building3.qty;
		document.getElementById('Building3Cost').innerHTML = Building3.cost.toLocaleString();
		document.getElementById('3Qty').innerHTML = Round(Building3.qty);
		document.getElementById('3SPS').innerHTML = RoundtoDecimal(Building3.qty * Building3.persec);
		document.getElementById('3PP').innerHTML = RoundtoDecimal(Building3.persec);
		document.getElementById('Building4').innerHTML = Building4.qty;
		document.getElementById('Building4Cost').innerHTML = Building4.cost.toLocaleString();
		document.getElementById('4Qty').innerHTML = Round(Building4.qty);
		document.getElementById('4SPS').innerHTML = RoundtoDecimal(Building4.qty * Building4.persec);
		document.getElementById('4PP').innerHTML = RoundtoDecimal(Building4.persec);
		document.getElementById('Building5').innerHTML = Building5.qty;
		document.getElementById('Building5Cost').innerHTML = Building5.cost.toLocaleString();
		document.getElementById('5Qty').innerHTML = Round(Building5.qty);
		document.getElementById('5SPS').innerHTML = RoundtoDecimal(Building5.qty * Building5.persec);
		document.getElementById('5PP').innerHTML = RoundtoDecimal(Building5.persec);
		document.getElementById('Building6').innerHTML = Building6.qty;
		document.getElementById('Building6Cost').innerHTML = Building6.cost.toLocaleString();
		document.getElementById('6Qty').innerHTML = Round(Building6.qty);
		document.getElementById('6SPS').innerHTML = RoundtoDecimal(Building6.qty * Building6.persec);
		document.getElementById('6PP').innerHTML = RoundtoDecimal(Building6.persec);
		document.getElementById('Building7').innerHTML = Building7.qty;
		document.getElementById('Building7Cost').innerHTML = Building7.cost.toLocaleString();
		document.getElementById('7Qty').innerHTML = Round(Building7.qty);
		document.getElementById('7SPS').innerHTML = RoundtoDecimal(Building7.qty * Building7.persec);
		document.getElementById('7PP').innerHTML = RoundtoDecimal(Building7.persec);
		document.getElementById('Building8').innerHTML = Building8.qty;
		document.getElementById('Building8Cost').innerHTML = Building8.cost.toLocaleString();
		document.getElementById('8Qty').innerHTML = Round(Building8.qty);
		document.getElementById('8SPS').innerHTML = RoundtoDecimal(Building8.qty * Building8.persec);
		document.getElementById('8PP').innerHTML = RoundtoDecimal(Building8.persec);
	}
	function TotalProduce() {
		Building1Produce() + Building2Produce() + Building3Produce() + Building4Produce() + Building5Produce() + Building6Produce() + Building7Produce() + Building8Produce();
	}

	function Round(input, forcedecimal) {
		forcedecimal = Math.pow(10, 0);
		var result = Math.round(input * forcedecimal) / forcedecimal;
		return result;
	}

	function RoundtoDecimal(input, forcedecimal2) {
			forcedecimal2 = Math.pow(10, 1);
			var result = Math.round(input * forcedecimal2) / forcedecimal2;
			return result;
	}

	/*SAVE*/

	function SaveGame() {
		localStorage['MainSave'] = btoa(JSON.stringify(player));
		localStorage['BuildingSave1'] = btoa(JSON.stringify(Building1));
		localStorage['BuildingSave2'] = btoa(JSON.stringify(Building2));
		localStorage['BuildingSave3'] = btoa(JSON.stringify(Building3));
		localStorage['BuildingSave4'] = btoa(JSON.stringify(Building4));
		localStorage['BuildingSave5'] = btoa(JSON.stringify(Building5));
		localStorage['BuildingSave6'] = btoa(JSON.stringify(Building6));
		localStorage['BuildingSave7'] = btoa(JSON.stringify(Building7));
		localStorage['BuildingSave8'] = btoa(JSON.stringify(Building8));
		localStorage['UpgradeSave1'] = btoa(JSON.stringify(Upgrade1));
		localStorage['UpgradeSave2'] = btoa(JSON.stringify(Upgrade2));
		localStorage['UpgradeSave3'] = btoa(JSON.stringify(Upgrade3));
		localStorage['UpgradeSave4'] = btoa(JSON.stringify(Upgrade4));
		localStorage['UpgradeSave5'] = btoa(JSON.stringify(Upgrade5));
		localStorage['UpgradeSave6'] = btoa(JSON.stringify(Upgrade6));
	}
	
	function LoadGame() {
		if (!localStorage['MainSave']) return;
		var save_data = JSON.parse(atob(localStorage['MainSave']));
		var save_dataBuilding1 = JSON.parse(atob(localStorage['BuildingSave1']));
		var save_dataBuilding2 = JSON.parse(atob(localStorage['BuildingSave2']));
		var save_dataBuilding3 = JSON.parse(atob(localStorage['BuildingSave3']));
		var save_dataBuilding4 = JSON.parse(atob(localStorage['BuildingSave4']));
		var save_dataBuilding5 = JSON.parse(atob(localStorage['BuildingSave5']));
		var save_dataBuilding6 = JSON.parse(atob(localStorage['BuildingSave6']));
		var save_dataBuilding7 = JSON.parse(atob(localStorage['BuildingSave7']));
		var save_dataBuilding8 = JSON.parse(atob(localStorage['BuildingSave8']));
		var save_dataUpgrade1 = JSON.parse(atob(localStorage['UpgradeSave1']));
		var save_dataUpgrade2 = JSON.parse(atob(localStorage['UpgradeSave2']));
		var save_dataUpgrade3 = JSON.parse(atob(localStorage['UpgradeSave3']));
		var save_dataUpgrade4 = JSON.parse(atob(localStorage['UpgradeSave4']));
		var save_dataUpgrade5 = JSON.parse(atob(localStorage['UpgradeSave5']));
		var save_dataUpgrade6 = JSON.parse(atob(localStorage['UpgradeSave6']));
		
		player = save_data;
		Building1 = save_dataBuilding1;
		Building2 = save_dataBuilding2;
		Building3 = save_dataBuilding3;
		Building4 = save_dataBuilding4;
		Building5 = save_dataBuilding5;
		Building6 = save_dataBuilding6;
		Building7 = save_dataBuilding7;
		Building8 = save_dataBuilding8;
		Upgrade1 = save_dataUpgrade1;
		Upgrade2 = save_dataUpgrade2;
		Upgrade3 = save_dataUpgrade3;
		Upgrade4 = save_dataUpgrade4;
		Upgrade5 = save_dataUpgrade5;
		Upgrade6 = save_dataUpgrade6;
		if (localStorage.getItem("power") === null) {
			power = player.power;
		}
		UpdateView();

	}
	function ResetGame() {
		localStorage.removeItem('MainSave');
		localStorage.removeItem('BuildingSave1');
		localStorage.removeItem('BuildingSave2');
		localStorage.removeItem('BuildingSave3');
		localStorage.removeItem('BuildingSave4');
		localStorage.removeItem('BuildingSave5');
		localStorage.removeItem('BuildingSave6');
		localStorage.removeItem('BuildingSave7');
		localStorage.removeItem('BuildingSave8');
		localStorage.removeItem('UpgradeSave1');
		localStorage.removeItem('UpgradeSave2');
		localStorage.removeItem('UpgradeSave3');
		localStorage.removeItem('UpgradeSave4');
		localStorage.removeItem('UpgradeSave5');
		localStorage.removeItem('UpgradeSave6');
		
		player = {
		power: 0,
		mousepower: 1,
		PowerPerSecond: 0,
		mouseclicks: 0,
		TotalArcanePower: 0,
		playtime: 0
		};
		UpdateView();
	};	
	/*TIMERS*/

function Timer1() {
	window.setInterval(function() {
		TotalProduce();
	}, 1000);
}

var A1Timer = window.setInterval(function() {AchievementOneGoal();AchievementOne();}, 1000)
var A2Timer = window.setInterval(function() {AchievementTwoGoal();	AchievementTwo();}, 1000)
var A3Timer = window.setInterval(function() {AchievementThreeGoal();AchievementThree();}, 1000)
var AutoSave = window.setInterval(function() {SaveGame();}, 30000)
var PlayTimer = window.setInterval(function() {Playtime();}, 1000)
var UpgradeTimer = window.setInterval(function() {
		Upgrade1Enable();
		Upgrade2Enable();
		Upgrade3Enable();
		Upgrade4Enable();
		Upgrade5Enable();
		Upgrade6Enable();
	}, 1000);
Timer1();

$(document).ready(function() {
	$('.squares .square-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.squares ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('actives').siblings().removeClass('actives');
		e.preventDefault();
	});
});
$(document).ready(function() {
	$('.triangles .triangle-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.triangles ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('active1').siblings().removeClass('active1');
		e.preventDefault();
	});
	$( "#HideUpgrades" ).click(function() {     
	$('#upgrades').toggle("slide", { direction: "left" }, 1000);
	});
});

$(window).load(function() {
	$('#loader').delay(300).animate({
		opacity: 0,
		width: 0,
		height: 0
	}, 1000);
});
