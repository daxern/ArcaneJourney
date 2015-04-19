/*
______                          
|  _  \                         
| | | |__ ___  _____ _ __ _ __  
| | | / _` \ \/ / _ \ '__| '_ \ 
| |/ / (_| |>  <  __/ |  | | | |
|___/ \__,_/_/\_\___|_|  |_| |_|

TO DO:
Create Achievements
Create Upgrades
On every power (10, 100, 1000 etc) reward magic affinity
MAGIC AFFINITY
Create other buildings
PRESTIGE
Save System
ARCHANGEL ITEM
KARMA SYSTEM

*/
var player = {
	power: 0,
	mousepower: 1,
	PowerPerSecond: 0,
	mouseclicks: 0,
	TotalArcanePower: 0
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
		window.clearInterval(Timer3);
	} else {
		Achievement1.unlocked = false;
	}
}

function AchievementTwoGoal() {
	if (player.mousepower >= 25) {
		Achievement2.unlocked = true;
		window.clearInterval(Timer4);
	} else {
		Achievement2.unlocked = false;
	}
}

function AchievementThreeGoal() {
	if (player.mousepower >= 125) {
		Achievement3.unlocked = true;
		window.clearInterval(Timer5);
	} else {
		Achievement3.unlocked = false;
	}
}

function AchievementOne() {
	if (Achievement1.unlocked) {
		document.getElementById('AchievementOne').style.display = 'block';
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

/*BUILDINGS*/

function Building() {
		this.name = 'Building Name';
		this.cost = 10;
		this.persec = 1;
		this.qty = 0;
		this.oldCost = 0;
	}
	/*BUILDING 1*/

window.Building1 = new Building();
Building1.name = 'Magician\'s Ring';
Building1.cost = 15;
Building1.persec = 0.1;
Building1.qty = 0;

function BuyBuilding1() {
	if (player.power >= Building1.cost) {
		player.power -= Building1.cost;
		Building1.qty += 1;
		Building1.cost = Math.floor(15 * Math.pow(1.1, Building1.qty));
		document.getElementById('Building1').innerHTML = Building1.qty;
		document.getElementById('Building1Cost').innerHTML = Building1.cost.toLocaleString();
		document.getElementById('1Qty').innerHTML = Round(Building1.qty);
		document.getElementById('1CSPS').innerHTML = RoundtoDecimal(Building1.qty * Building1.persec);
		PPS;
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building1Produce() {
		player.power = player.power + (Building1.qty * Building1.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 2*/

window.Building2 = new Building();
Building2.name = 'Arcane Tome';
Building2.cost = 75;
Building2.persec = 0.5;
Building2.qty = 0;

function BuyBuilding2() {
	if (player.power >= Building2.cost) {
		player.power = player.power - Building2.cost;
		Building2.qty += 1;
		Building2.cost = Math.floor(75 * Math.pow(1.1, Building2.qty));
		document.getElementById('Building2').innerHTML = Building2.qty;
		document.getElementById('Building2Cost').innerHTML = Building2.cost.toLocaleString();
		document.getElementById('2Qty').innerHTML = Round(Building2.qty);
		document.getElementById('2CSPS').innerHTML = RoundtoDecimal(Building2.qty * Building2.persec);
		PPS;
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building2Produce() {
		player.power = player.power + (Building2.qty * Building2.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 3*/

window.Building3 = new Building();
Building3.name = 'Wanderer\'s Wand';
Building3.cost = 450;
Building3.persec = 3.5;
Building3.qty = 0;

function BuyBuilding3() {
	if (player.power >= Building3.cost) {
		player.power = player.power - Building3.cost;
		Building3.qty = Building3.qty + 1;
		Building3.cost = Math.floor(450 * Math.pow(1.1, Building3.qty));
		document.getElementById('Building3').innerHTML = Building3.qty;
		document.getElementById('Building3Cost').innerHTML = Building3.cost.toLocaleString();
		document.getElementById('3Qty').innerHTML = Round(Building3.qty);
		document.getElementById('3CSPS').innerHTML = RoundtoDecimal(Building3.qty * Building3.persec);
		PPS;
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building3Produce() {
		player.power = player.power + (Building3.qty * Building3.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 4*/

window.Building4 = new Building();
Building4.name = 'Summoner\'s Staff';
Building4.cost = 3000;
Building4.persec = 10;
Building4.qty = 0;

function BuyBuilding4() {
	if (player.power >= Building4.cost) {
		player.power = player.power - Building4.cost;
		Building4.qty = Building4.qty + 1;
		Building4.cost = Math.floor(3000 * Math.pow(1.1, Building4.qty));
		document.getElementById('Building4').innerHTML = Building4.qty;
		document.getElementById('Building4Cost').innerHTML = Building4.cost.toLocaleString();
		document.getElementById('4Qty').innerHTML = Round(Building4.qty);
		document.getElementById('4CSPS').innerHTML = RoundtoDecimal(Building4.qty * Building4.persec);
		PPS;
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building4Produce() {
		player.power = player.power + (Building4.qty * Building4.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 5*/

window.Building5 = new Building();
Building5.name = 'Summoner\'s Staff';
Building5.cost = 15000;
Building5.persec = 55;
Building5.qty = 0;

function BuyBuilding5() {
	if (player.power >= Building5.cost) {
		player.power = player.power - Building5.cost;
		Building5.qty = Building5.qty + 1;
		Building5.cost = Math.floor(15000 * Math.pow(1.1, Building5.qty));
		document.getElementById('Building5').innerHTML = Building5.qty;
		document.getElementById('Building5Cost').innerHTML = Building5.cost.toLocaleString();
		document.getElementById('5Qty').innerHTML = Round(Building5.qty);
		document.getElementById('5CSPS').innerHTML = RoundtoDecimal(Building5.qty * Building5.persec);
		PPS;
	} else {
		console.log('You don\'t have enough power!');
	}
}

function Building5Produce() {
		player.power = player.power + (Building5.qty * Building5.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 6*/

window.Building6 = new Building();
Building6.name = 'Summoner\'s Staff';
Building6.cost = 30000;
Building6.persec = 275;
Building6.qty = 0;

function BuyBuilding6() {
	if (player.power >= Building6.cost) {
		player.power = player.power - Building6.cost;
		Building6.qty = Building6.qty + 1;
		Building6.cost = Math.floor(30000 * Math.pow(1.1, Building6.qty));
		document.getElementById('Building6').innerHTML = Building6.qty;
		document.getElementById('Building6Cost').innerHTML = Building6.cost.toLocaleString();
		document.getElementById('6Qty').innerHTML = Round(Building6.qty);
		document.getElementById('56SPS').innerHTML = RoundtoDecimal(Building6.qty * Building6.persec);
		PPS;
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building6Produce() {
		player.power = player.power + (Building6.qty * Building6.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 7*/

window.Building7 = new Building();
Building7.name = 'Crystal of Conjuration';
Building7.cost = 150000;
Building7.persec = 3000;
Building7.qty = 0;

function BuyBuilding7() {
	if (player.power >= Building7.cost) {
		player.power = player.power - Building7.cost;
		Building7.qty = Building7.qty + 1;
		Building7.cost = Math.floor(150000 * Math.pow(1.1, Building7.qty));
		document.getElementById('Building7').innerHTML = Building7.qty;
		document.getElementById('Building7Cost').innerHTML = Building7.cost.toLocaleString();
		document.getElementById('7Qty').innerHTML = Round(Building7.qty);
		document.getElementById('7CSPS').innerHTML = RoundtoDecimal(Building7.qty * Building7.persec);
		PPS;
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building7Produce() {
		player.power = player.power + (Building7.qty * Building7.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*BUILDING 8*/

window.Building8 = new Building();
Building8.name = 'Celestial Charm';
Building8.cost = 800000;
Building8.persec = 15500;
Building8.qty = 0;

function BuyBuilding8() {
	if (player.power >= Building8.cost) {
		player.power = player.power - Building8.cost;
		Building8.qty = Building8.qty + 1;
		Building8.cost = Math.floor(800000 * Math.pow(1.1, Building8.qty));
		document.getElementById('Building8').innerHTML = Building8.qty;
		document.getElementById('Building8Cost').innerHTML = Building8.cost.toLocaleString();
		document.getElementById('8Qty').innerHTML = Round(Building8.qty);
		document.getElementById('8CSPS').innerHTML = RoundtoDecimal(Building8.qty * Building8.persec);
		PPS;
	} else {
		console.log('You don\'t have enough player.power!');
	}
}

function Building8Produce() {
		player.power = player.power + (Building8.qty * Building8.persec);
		document.getElementById('CurrentPower').innerHTML = Round(player.power, 10);
	}
	/*STATS*/

function PPS() {
		player.PowerPerSecond = (Building1.qty * Building1.persec) + (Building2.qty * Building2.persec) + (Building3.qty * Building3.persec) + (Building4.qty * Building4.persec) + (Building5.qty * Building5.persec) + (Building6.qty * Building6.persec) + (Building7.qty * Building7.persec) + (Building8.qty * Building8.persec);
		document.getElementById('PowerPerSeconds').innerHTML = RoundtoDecimal(player.PowerPerSecond, 10);
	}
	/*MISC*/

$(window).load(function() {
	$('#loader').delay(300).animate({
		opacity: 0,
		width: 0,
		height: 0
	}, 1000);
});

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

	/*TIMERS*/

function Timer1() {
	window.setInterval(function() {
		TotalProduce();
	}, 1000);
}
function Timer2() {
	window.setInterval(function() {
		PPS();
	}, 300);
}
function Timer3() {
	window.setInterval(function() {
		AchievementOneGoal();
		AchievementOne();
	}, 1000)
}

function Timer4() {
	window.setInterval(function() {
		AchievementTwoGoal();
		AchievementTwo();
	}, 1000)
}
function Timer5() {
	window.setInterval(function() {
		AchievementThreeGoal();
		AchievementThree();
	}, 1000)
}
Timer1();
Timer2();
Timer3();
Timer4();
Timer5();

function tab(tab) {
	document.getElementById('tab1').style.display = 'none';
	document.getElementById('tab2').style.display = 'none';
	document.getElementById('tab3').style.display = 'none';
	document.getElementById('tab4').style.display = 'none';
	document.getElementById('li_tab1').setAttribute('class', '');
	document.getElementById('li_tab2').setAttribute('class', '');
	document.getElementById('li_tab3').setAttribute('class', '');
	document.getElementById('li_tab4').setAttribute('class', '');
	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_' + tab).setAttribute('class', 'active');
}
$(document).ready(function() {
	$('.squares .square-links a').on('click', function(e) {
		var currentAttrValue = $(this).attr('href');
		$('.squares ' + currentAttrValue).show().siblings().hide();
		$(this).parent('li').addClass('actives').siblings().removeClass('actives');
		e.preventDefault();
	});
});
