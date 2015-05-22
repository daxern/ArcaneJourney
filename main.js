/*
______                          
|  _  \                         
| | | |__ ___  _____ _ __ _ __  
| | | / _` \ \/ / _ \ '__| '_ \ 
| |/ / (_| |>  <  __/ |  | | | |
|___/ \__,_/_/\_\___|_|  |_| |_|

TO-DO LIST:
Notifications (50% done)
On every power (10, 100, 1000 etc) reward magic affinity
MAGIC AFFINITY
PRESTIGE
AUTO LOAD SYSTEM
ARCHANGEL ITEM
KARMA SYSTEM
FONT RESIZE (MOBILE SUPPORT)
CELESTIAL SYSTEM (SUN AND MOON CLICK FOR BONUSES/ SUN MOON AFFINITIES)
*/
//on updating of player, update saves too!!
var player = {
	power: 0,
	mousepower: 1,
	PowerPerSecond: 0,
	mouseclicks: 0,
	TotalArcanePower: 0,
	playtime: 0,
	prestige: 0,
	moonaffinity: 0,
	sunaffinity: 0,
	multiplier: 0
};
/*CORE*/
function IncreasePower() {
	player.power += player.mousepower;
	player.mouseclicks++;
	player.TotalArcanePower += player.mousepower;
	document.getElementById('TotalArcanePower').innerHTML = RoundtoDecimal(player
		.TotalArcanePower, 0);
	document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
	document.getElementById('mouseclicks').innerHTML = Round(player.mouseclicks,
		0);
}

function Multiplier() {
	player.mousepower = player.mousepower * multiplier;
}

function prestige() {
		player.prestige++;
	}
	/*BUILDINGS*/

function Building() {
		this.name = 'Building Name';
		this.cost = 10;
		this.persec = 1;
		this.qty = 0;
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 0);
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

function BuyUpgrade1() {
	if (player.power >= Upgrade1.cost) {
		Upgrade1.unlocked = true;
		player.power -= Upgrade1.cost;
		player.mousepower += 1;
		UpdateView();
		document.getElementById('UpgradeTwo').style.display = 'inline-block';
	}
}

function BuyUpgrade2() {
	if (player.power >= Upgrade2.cost) {
		Upgrade2.unlocked = true;
		player.power -= Upgrade2.cost;
		player.mousepower += 3;
		UpdateView();
		document.getElementById('UpgradeThree').style.display = 'inline-block';
	}
}

function BuyUpgrade3() {
	if (player.power >= Upgrade3.cost) {
		Upgrade3.unlocked = true;
		player.power -= Upgrade3.cost;
		player.mousepower += 10;
		UpdateView();
		document.getElementById('UpgradeFour').style.display = 'inline-block';
	}
}

function BuyUpgrade4() {
	if (player.power >= Upgrade4.cost) {
		Upgrade4.unlocked = true;
		player.power -= Upgrade4.cost;
		player.mousepower += 250;
		UpdateView();
		document.getElementById('UpgradeFive').style.display = 'inline-block';
	}
}

function BuyUpgrade5() {
	if (player.power >= Upgrade5.cost) {
		Upgrade5.unlocked = true;
		player.power -= Upgrade5.cost;
		player.mousepower += 10000;
		UpdateView();
	}
}

function BuyUpgrade6() {
	if (player.power >= Upgrade6.cost) {
		Upgrade6.unlocked = true;
		player.power -= Upgrade6.cost;
		Building1.persec += 0.2;
		UpdateView();
	}
}

function Upgrade1Enable() {
	if (Upgrade1.unlocked) {
		document.getElementById('UpgradeOne').style.display = 'none';
	} else {
		document.getElementById('UpgradeOne').style.display = 'inline-block';
	}
}

function Upgrade2Enable() {
	if (Upgrade2.unlocked) {
		document.getElementById('UpgradeTwo').style.display = 'none';
	}
}

function Upgrade3Enable() {
	if (Upgrade3.unlocked) {
		document.getElementById('UpgradeThree').style.display = 'none';
	}
}

function Upgrade4Enable() {
	if (Upgrade4.unlocked) {
		document.getElementById('UpgradeFour').style.display = 'none';
	}
}

function Upgrade5Enable() {
	if (Upgrade5.unlocked) {
		document.getElementById('UpgradeFive').style.display = 'none';
	}
}

function Upgrade6Enable() {
	if (Upgrade6.unlocked) {
		document.getElementById('UpgradeSix').style.display = 'none';
	} else {
		document.getElementById('UpgradeSix').style.display = 'inline-block';
	}
}

function Upgrade1Color() {
		if (player.power >= Upgrade1.cost) {
			document.getElementById('UpgradeOne').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeOne').style.backgroundColor = 'white';
		}
		if (player.power >= Upgrade2.cost) {
			document.getElementById('UpgradeTwo').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeTwo').style.backgroundColor = 'white';
		}
		if (player.power >= Upgrade3.cost) {
			document.getElementById('UpgradeThree').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeThree').style.backgroundColor = 'white';
		}
		if (player.power >= Upgrade4.cost) {
			document.getElementById('UpgradeFour').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeFour').style.backgroundColor = 'white';
		}
		if (player.power >= Upgrade5.cost) {
			document.getElementById('UpgradeFive').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeFive').style.backgroundColor = 'white';
		}
		if (player.power >= Upgrade6.cost) {
			document.getElementById('UpgradeSix').style.backgroundColor = '#FFCC66';
		} else {
			document.getElementById('UpgradeSix').style.backgroundColor = 'white';
		}
	}
	/*STATS*/

function PPS() {
	player.PowerPerSecond = (Building1.qty * Building1.persec) + (Building2.qty *
		Building2.persec) + (Building3.qty * Building3.persec) + (Building4.qty *
		Building4.persec) + (Building5.qty * Building5.persec) + (Building6.qty *
		Building6.persec) + (Building7.qty * Building7.persec) + (Building8.qty *
		Building8.persec);
	document.getElementById('PowerPerSeconds').innerHTML = RoundtoDecimal(player.PowerPerSecond,
		10);
}

function Playtime() {
		player.playtime++;
		var days = parseInt(player.playtime / 86400);
		var hours = parseInt(player.playtime / 3600) % 24;
		var minutes = parseInt(player.playtime / 60) % 60;
		var seconds = player.playtime % 60;
		document.getElementById('PlayTime').innerHTML = days + " Days " + (hours < 10 ?
				"0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" +
			(seconds < 10 ? "0" + seconds : seconds);
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
		$("#A1N").fadeIn("slow").append('Achievement Unlocked: Poof!');
		$("#dismiss1").click(function() {
			$("#A1N").fadeOut("slow");
		});
	} else {
		document.getElementById('AchievementOne').style.display = 'none';
	}
}

function AchievementTwo() {
	if (Achievement2.unlocked) {
		document.getElementById('AchievementTwo').style.display = 'block';
		$("#A2N").fadeIn("slow").append('Achievement Unlocked: Pop!');
		$("#dismiss2").click(function() {
			$("#A2N").fadeOut("slow");
		});
	} else {
		document.getElementById('AchievementTwo').style.display = 'none';
	}
}

function AchievementThree() {
		if (Achievement3.unlocked) {
			document.getElementById('AchievementThree').style.display = 'block';
			$("#A3N").fadeIn("slow").append('Achievement Unlocked: Bam!');
			$("#dismiss3").click(function() {
				$("#A3N").fadeOut("slow");
			});
		} else {
			document.getElementById('AchievementThree').style.display = 'none';
		}
	}
	/*MISC*/

function UpdateView() {
	$('#TotalArcanePower').html(RoundtoDecimal(player.TotalArcanePower, 0));
	$('#CurrentPower').html(Round(player.power, 0));
	$('#mouseclicks').html(Round(player.mouseclicks, 0));
	$('#PPC').html(Round(player.mousepower, 0));
	$('#PowerPerSeconds').html(RoundtoDecimal(player.PowerPerSecond, 0));
	$('#Building1').html(Building1.qty);
	$('#Building1Cost').html(Building1.cost.toLocaleString());
	$('#1Qty').html(Round(Building1.qty));
	$('#1SPS').html(RoundtoDecimal(Building1.qty * Building1.persec));
	$('#1PP').html(RoundtoDecimal(Building1.persec));
	$('#Building2').html(Building2.qty);
	$('#Building2Cost').html(Building2.cost.toLocaleString());
	$('#2Qty').html(Round(Building2.qty));
	$('#2SPS').html(RoundtoDecimal(Building2.qty * Building2.persec));
	$('#2PP').html(RoundtoDecimal(Building2.persec));
	$('#Building3').html(Building3.qty);
	$('#Building3Cost').html(Building3.cost.toLocaleString());
	$('#3Qty').html(Round(Building3.qty));
	$('#3SPS').html(RoundtoDecimal(Building3.qty * Building3.persec));
	$('#3PP').html(RoundtoDecimal(Building3.persec));
	$('#Building4').html(Building4.qty);
	$('#Building4Cost').html(Building4.cost.toLocaleString());
	$('#4Qty').html(Round(Building4.qty));
	$('#4SPS').html(RoundtoDecimal(Building4.qty * Building4.persec));
	$('#4PP').html(RoundtoDecimal(Building4.persec));
	$('#Building5').html(Building5.qty);
	$('#Building5Cost').html(Building5.cost.toLocaleString());
	$('#5Qty').html(Round(Building5.qty));
	$('#5SPS').html(RoundtoDecimal(Building5.qty * Building5.persec));
	$('#5PP').html(RoundtoDecimal(Building5.persec));
	$('#Building6').html(Building6.qty);
	$('#Building6Cost').html(Building6.cost.toLocaleString());
	$('#6Qty').html(Round(Building6.qty));
	$('#6SPS').html(RoundtoDecimal(Building6.qty * Building6.persec));
	$('#6PP').html(RoundtoDecimal(Building6.persec));
	$('#Building7').html(Building7.qty);
	$('#Building7Cost').html(Building7.cost.toLocaleString());
	$('#7Qty').html(Round(Building7.qty));
	$('#7SPS').html(RoundtoDecimal(Building7.qty * Building7.persec));
	$('#7PP').html(RoundtoDecimal(Building7.persec));
	$('#Building8').html(Building8.qty);
	$('#Building8Cost').html(Building8.cost.toLocaleString());
	$('#8Qty').html(Round(Building8.qty));
	$('#8SPS').html(RoundtoDecimal(Building8.qty * Building8.persec));
	$('#8PP').html(RoundtoDecimal(Building8.persec));
}

function TotalProduce() {
	Building1Produce() + Building2Produce() + Building3Produce() +
		Building4Produce() + Building5Produce() + Building6Produce() +
		Building7Produce() + Building8Produce();
}

function RoundtoDecimal(input, forcedecimal2) {
	forcedecimal2 = Math.pow(10, 1);
	var result = Math.round(input * forcedecimal2) / forcedecimal2;
	return result;
}

function Round(input, forcedecimal) {
	if (input >= 1e6) {
		if (input >= 1e6) {
			forcedecimal = 3;
		} else {
			forcedecimal = 1;
		}
		var z = Math.floor(logFloor(input) / 3);
		var prefixes = [" Million", " Billion ", " Trillion ", " Quadrillion ",
			" Quintillion ", " Sextillion ", " Septillion ", " Octillion ",
			" Nonillion ", " Decillion ", " Undecillion ", " Doedecillion ",
			" Tredecillion ", " Quattuordecillion ", " Quindecillion ",
			" Sexdecillion ", " Septendecillion ", " Octodecillion ",
			" Novemdecillion ", " Vigintillion ", " Unvigintillion ",
			" Duovigintillion ", " Tresvigintillion ", " Quattuorvigintillion ",
			" Quinquavigintillion ", " Sesvigintillion ", " Septemvigintillion ",
			" Octovigintillion ", " Novemvigintillion ", " Trigintillion ",
			" Untrigintillion ", " Duotrigintillion ", " Trestrigintillion ",
			" Quattuortrigintillion ", " Quinquatrigintillion ", " Sestrigintillion ",
			" Septentrigintillion ", " Octotrigintillion ", " Noventrigintillion ",
			" Quadragintillion ", " Unquadragintillion ", " Duoquadragintillion ",
			" Trequadragintillion ", " Quattuorquadragintillion ",
			" Quinquadragintillion  ", " Sexquadragintillion ",
			" Septquadragintillion, ", " Octoquadragintillion ",
			" Novemquadragintillion ", " Quinquagintillion ", " Unquinquagintillion  ",
			" Duoquinquagintillion ", " Trequinquagintillion "
		];
		var s = Round(input / Math.pow(10, 3 * z), forcedecimal);
		return s + "" + prefixes[z - 2];
	} else {
		return numberWithCommas(input.toFixed(forcedecimal));
	}
}

function numberWithCommas(forcedecimal) {
	var parts = forcedecimal.toString().split(".");
	return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." +
		parts[1] : "");
}

function logFloor(x) {
	var count = 0;
	while (x >= 10) {
		count++;
		x /= 10;
	}
	return count;
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
	if (confirm(
		"Are you sure? This is a PERMANENT reset, and there's no going back!")) {
		if (confirm("Last Chance! Are you sure you want to HARD-RESET?")) {
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
		}
	}
}
/*TIMERS*/
function Timer1() {
	window.setInterval(function() {
		TotalProduce();
	}, 1000);
}
var A1Timer = window.setInterval(function() {
	AchievementOneGoal();
	AchievementOne();
}, 1000);
var A2Timer = window.setInterval(function() {
	AchievementTwoGoal();
	AchievementTwo();
}, 1000);
var A3Timer = window.setInterval(function() {
	AchievementThreeGoal();
	AchievementThree();
}, 1000);
var AutoSave = window.setInterval(function() {
	SaveGame();
}, 30000);
var PlayTimer = window.setInterval(function() {
	Playtime();
}, 1000);
var UpgradeTimer1 = window.setInterval(function() {
	Upgrade1Enable();
}, 1000);
var UpgradeTimer2 = window.setInterval(function() {
	Upgrade2Enable();
}, 1000);
var UpgradeTimer3 = window.setInterval(function() {
	Upgrade3Enable();
}, 1000);
var UpgradeTimer4 = window.setInterval(function() {
	Upgrade4Enable();
}, 1000);
var UpgradeTimer5 = window.setInterval(function() {
	Upgrade5Enable();
}, 1000);
var UpgradeTimer6 = window.setInterval(function() {
	Upgrade6Enable();
}, 1000);
var ColourTimer1 = window.setInterval(function() {
	Upgrade1Color();
}, 1000);
var MiscTimer1 = window.setInterval(function() {
	AllUpgradesBought();
}, 1000);
Timer1();

function AllUpgradesBought() {
	if ($('#upgrades').children(':visible').length == 0) {
		$('#upgrades').hide();
	}
}
$(document).ready(function() {
	$('.squares .square-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.squares ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('actives').siblings().removeClass('actives');
		e.preventDefault();
	});
	$('.triangles .triangle-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.triangles ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('active1').siblings().removeClass('active1');
		e.preventDefault();
	});
	$("#HideUpgrades").click(function() {
		$('#upgrades').toggle("slide", {
			direction: "left"
		}, 1000);
	});
	if ($('#upgrades').children(':visible').length == 0) {
		$('#upgrades').toggle("slide", {
			direction: "left"
		}, 1000);
	}
	$(window).resize(resizeText);
});
$(window).load(function() {
	$('#loader').delay(300).animate({
		opacity: 0,
		width: 0,
		height: 0
	}, 1000);
});
var resizeText = function() {
	var preferredFontSize = 180; // %
	var preferredSize = 1024 * 768;
	var currentSize = $(window).width() * $(window).height();
	var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
	var newFontSize = preferredFontSize * scalePercentage;
	$("#Caster").css("font-size", newFontSize + '%');
};
