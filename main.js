/*Minified for Faster loading, view main code on master branch*/
function IncreasePower(){player.power+=player.mousepower,player.mouseclicks++,player.TotalArcanePower+=player.mousepower,document.getElementById("TotalArcanePower").innerHTML=RoundtoDecimal(player.TotalArcanePower,0),document.getElementById("CurrentPower").innerHTML=Round(player.power,0),document.getElementById("mouseclicks").innerHTML=Round(player.mouseclicks,0)}function Building(){this.name="Building Name",this.cost=10,this.persec=1,this.qty=0}function BuyBuilding1(){player.power>=Building1.cost?(player.power-=Building1.cost,Building1.qty+=1,Building1.cost=Math.floor(15*Math.pow(1.1,Building1.qty)),UpdateView(),PPS()):console.log("You don't have enough power!")}function Building1Produce(){player.power=player.power+Building1.qty*Building1.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding2(){player.power>=Building2.cost?(player.power=player.power-Building2.cost,Building2.qty+=1,Building2.cost=Math.floor(90*Math.pow(1.1,Building2.qty)),UpdateView(),PPS()):console.log("You don't have enough power!")}function Building2Produce(){player.power=player.power+Building2.qty*Building2.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding3(){player.power>=Building3.cost?(player.power=player.power-Building3.cost,Building3.qty=Building3.qty+1,Building3.cost=Math.floor(450*Math.pow(1.1,Building3.qty)),UpdateView(),PPS()):console.log("You don't have enough power!")}function Building3Produce(){player.power=player.power+Building3.qty*Building3.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding4(){player.power>=Building4.cost?(player.power=player.power-Building4.cost,Building4.qty=Building4.qty+1,Building4.cost=Math.floor(3e3*Math.pow(1.1,Building4.qty)),UpdateView(),PPS()):console.log("You don't have enough power!")}function Building4Produce(){player.power=player.power+Building4.qty*Building4.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding5(){player.power>=Building5.cost?(player.power=player.power-Building5.cost,Building5.qty=Building5.qty+1,Building5.cost=Math.floor(15e3*Math.pow(1.1,Building5.qty)),UpdateView(),PPS()):console.log("You don't have enough power!")}function Building5Produce(){player.power=player.power+Building5.qty*Building5.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding6(){player.power>=Building6.cost?(player.power=player.power-Building6.cost,Building6.qty=Building6.qty+1,Building6.cost=Math.floor(3e4*Math.pow(1.1,Building6.qty)),UpdateView(),PPS()):console.log("You don't have enough player.power!")}function Building6Produce(){player.power=player.power+Building6.qty*Building6.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding7(){player.power>=Building7.cost?(player.power=player.power-Building7.cost,Building7.qty=Building7.qty+1,Building7.cost=Math.floor(15e4*Math.pow(1.1,Building7.qty)),UpdateView(),PPS()):console.log("You don't have enough player.power!")}function Building7Produce(){player.power=player.power+Building7.qty*Building7.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function BuyBuilding8(){player.power>=Building8.cost?(player.power=player.power-Building8.cost,Building8.qty=Building8.qty+1,Building8.cost=Math.floor(8e5*Math.pow(1.1,Building8.qty)),UpdateView(),PPS()):console.log("You don't have enough player.power!")}function Building8Produce(){player.power=player.power+Building8.qty*Building8.persec,document.getElementById("CurrentPower").innerHTML=Round(player.power,0)}function Upgrade(){this.name="Upgrade Name",this.cost=10,this.unlocked=!1}function BuyUpgrade1(){player.power>=Upgrade1.cost&&(Upgrade1.unlocked=!0,player.power-=Upgrade1.cost,player.mousepower+=1,UpdateView(),window.clearInterval(ColourTimer1))}function BuyUpgrade2(){player.power>=Upgrade2.cost&&(Upgrade2.unlocked=!0,player.power-=Upgrade2.cost,player.mousepower+=3,UpdateView())}function BuyUpgrade3(){player.power>=Upgrade3.cost&&(Upgrade3.unlocked=!0,player.power-=Upgrade3.cost,player.mousepower+=10,UpdateView())}function BuyUpgrade4(){player.power>=Upgrade4.cost&&(Upgrade4.unlocked=!0,player.power-=Upgrade4.cost,player.mousepower+=250,UpdateView())}function BuyUpgrade5(){player.power>=Upgrade5.cost&&(Upgrade5.unlocked=!0,player.power-=Upgrade5.cost,player.mousepower+=1e4,UpdateView())}function BuyUpgrade6(){player.power>=Upgrade6.cost&&(Upgrade6.unlocked=!0,player.power-=Upgrade6.cost,Building1.persec+=.2,UpdateView())}function Upgrade1Enable(){document.getElementById("UpgradeOne").style.display=Upgrade1.unlocked?"none":"inline-block"}function Upgrade1Color(){document.getElementById("UpgradeOne").style.backgroundColor=player.power>=Upgrade1.cost?"#FFCC66":"white",document.getElementById("UpgradeTwo").style.backgroundColor=player.power>=Upgrade2.cost?"#FFCC66":"white",document.getElementById("UpgradeThree").style.backgroundColor=player.power>=Upgrade3.cost?"#FFCC66":"white",document.getElementById("UpgradeFour").style.backgroundColor=player.power>=Upgrade4.cost?"#FFCC66":"white",document.getElementById("UpgradeFive").style.backgroundColor=player.power>=Upgrade5.cost?"#FFCC66":"white",document.getElementById("UpgradeSix").style.backgroundColor=player.power>=Upgrade6.cost?"#FFCC66":"white"}function Upgrade2Enable(){document.getElementById("UpgradeTwo").style.display=Upgrade2.unlocked?"none":"inline-block"}function Upgrade3Enable(){document.getElementById("UpgradeThree").style.display=Upgrade3.unlocked?"none":"inline-block"}function Upgrade4Enable(){document.getElementById("UpgradeFour").style.display=Upgrade4.unlocked?"none":"inline-block"}function Upgrade5Enable(){document.getElementById("UpgradeFive").style.display=Upgrade5.unlocked?"none":"inline-block"}function Upgrade6Enable(){document.getElementById("UpgradeSix").style.display=Upgrade6.unlocked?"none":"inline-block"}function PPS(){player.PowerPerSecond=Building1.qty*Building1.persec+Building2.qty*Building2.persec+Building3.qty*Building3.persec+Building4.qty*Building4.persec+Building5.qty*Building5.persec+Building6.qty*Building6.persec+Building7.qty*Building7.persec+Building8.qty*Building8.persec,document.getElementById("PowerPerSeconds").innerHTML=RoundtoDecimal(player.PowerPerSecond,10)}function Playtime(){player.playtime++;var e=parseInt(player.playtime/86400),i=parseInt(player.playtime/3600)%24,n=parseInt(player.playtime/60)%60,l=player.playtime%60;document.getElementById("PlayTime").innerHTML=e+" Days "+(10>i?"0"+i:i)+":"+(10>n?"0"+n:n)+":"+(10>l?"0"+l:l)}function Achievement(){this.name="Achievement Name",this.unlocked=!1}function AchievementOneGoal(){player.mousepower>=5?(Achievement1.unlocked=!0,window.clearInterval(A1Timer)):Achievement1.unlocked=!1}function AchievementTwoGoal(){player.mousepower>=25?(Achievement2.unlocked=!0,window.clearInterval(A2Timer)):Achievement2.unlocked=!1}function AchievementThreeGoal(){player.mousepower>=125?(Achievement3.unlocked=!0,window.clearInterval(A3Timer)):Achievement3.unlocked=!1}function AchievementOne(){Achievement1.unlocked?(document.getElementById("AchievementOne").style.display="block",window.clearInterval(A1Timer)):document.getElementById("AchievementOne").style.display="none"}function AchievementTwo(){document.getElementById("AchievementTwo").style.display=Achievement2.unlocked?"block":"none"}function AchievementThree(){document.getElementById("AchievementThree").style.display=Achievement3.unlocked?"block":"none"}function UpdateView(){$("#TotalArcanePower").html(RoundtoDecimal(player.TotalArcanePower,0)),$("#CurrentPower").html(Round(player.power,0)),$("#mouseclicks").html(Round(player.mouseclicks,0)),$("#PPC").html(Round(player.mousepower,0)),$("#PowerPerSeconds").html(RoundtoDecimal(player.PowerPerSecond,0)),$("#Building1").html(Building1.qty),$("#Building1Cost").html(Building1.cost.toLocaleString()),$("#1Qty").html(Round(Building1.qty)),$("#1SPS").html(RoundtoDecimal(Building1.qty*Building1.persec)),$("#1PP").html(RoundtoDecimal(Building1.persec)),$("#Building2").html(Building2.qty),$("#Building2Cost").html(Building2.cost.toLocaleString()),$("#2Qty").html(Round(Building2.qty)),$("#2SPS").html(RoundtoDecimal(Building2.qty*Building2.persec)),$("#2PP").html(RoundtoDecimal(Building2.persec)),$("#Building3").html(Building3.qty),$("#Building3Cost").html(Building3.cost.toLocaleString()),$("#3Qty").html(Round(Building3.qty)),$("#3SPS").html(RoundtoDecimal(Building3.qty*Building3.persec)),$("#3PP").html(RoundtoDecimal(Building3.persec)),$("#Building4").html(Building4.qty),$("#Building4Cost").html(Building4.cost.toLocaleString()),$("#4Qty").html(Round(Building4.qty)),$("#4SPS").html(RoundtoDecimal(Building4.qty*Building4.persec)),$("#4PP").html(RoundtoDecimal(Building4.persec)),$("#Building5").html(Building5.qty),$("#Building5Cost").html(Building5.cost.toLocaleString()),$("#5Qty").html(Round(Building5.qty)),$("#5SPS").html(RoundtoDecimal(Building5.qty*Building5.persec)),$("#5PP").html(RoundtoDecimal(Building5.persec)),$("#Building6").html(Building6.qty),$("#Building6Cost").html(Building6.cost.toLocaleString()),$("#6Qty").html(Round(Building6.qty)),$("#6SPS").html(RoundtoDecimal(Building6.qty*Building6.persec)),$("#6PP").html(RoundtoDecimal(Building6.persec)),$("#Building7").html(Building7.qty),$("#Building7Cost").html(Building7.cost.toLocaleString()),$("#7Qty").html(Round(Building7.qty)),$("#7SPS").html(RoundtoDecimal(Building7.qty*Building7.persec)),$("#7PP").html(RoundtoDecimal(Building7.persec)),$("#Building8").html(Building8.qty),$("#Building8Cost").html(Building8.cost.toLocaleString()),$("#8Qty").html(Round(Building8.qty)),$("#8SPS").html(RoundtoDecimal(Building8.qty*Building8.persec)),$("#8PP").html(RoundtoDecimal(Building8.persec))}function TotalProduce(){Building1Produce()+Building2Produce()+Building3Produce()+Building4Produce()+Building5Produce()+Building6Produce()+Building7Produce()+Building8Produce()}function RoundtoDecimal(e,i){i=Math.pow(10,1);var n=Math.round(e*i)/i;return n}function Round(e,i){if(e>=1e6){i=e>=1e6?3:1;var n=Math.floor(logFloor(e)/3),l=[" Million"," Billion "," Trillion "," Quadrillion "," Quintillion "," Sextillion "," Septillion "," Octillion "," Nonillion "," Decillion "," Undecillion "," Doedecillion "," Tredecillion "," Quattuordecillion "," Quindecillion "," Sexdecillion "," Septendecillion "," Octodecillion "," Novemdecillion "," Vigintillion "," Unvigintillion "," Duovigintillion "," Tresvigintillion "," Quattuorvigintillion "," Quinquavigintillion "," Sesvigintillion "," Septemvigintillion "," Octovigintillion "," Novemvigintillion "," Trigintillion "," Untrigintillion "," Duotrigintillion "," Trestrigintillion "," Quattuortrigintillion "," Quinquatrigintillion "," Sestrigintillion "," Septentrigintillion "," Octotrigintillion "," Noventrigintillion "," Quadragintillion "," Unquadragintillion "," Duoquadragintillion "," Trequadragintillion "," Quattuorquadragintillion "," Quinquadragintillion  "," Sexquadragintillion "," Septquadragintillion, "," Octoquadragintillion "," Novemquadragintillion "," Quinquagintillion "," Unquinquagintillion  "," Duoquinquagintillion "," Trequinquagintillion "],o=Round(e/Math.pow(10,3*n),i);return o+""+l[n-2]}return numberWithCommas(e.toFixed(i))}function numberWithCommas(e){var i=e.toString().split(".");return i[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(i[1]?"."+i[1]:"")}function logFloor(e){for(var i=0;e>=10;)i++,e/=10;return i}function SaveGame(){localStorage.MainSave=btoa(JSON.stringify(player)),localStorage.BuildingSave1=btoa(JSON.stringify(Building1)),localStorage.BuildingSave2=btoa(JSON.stringify(Building2)),localStorage.BuildingSave3=btoa(JSON.stringify(Building3)),localStorage.BuildingSave4=btoa(JSON.stringify(Building4)),localStorage.BuildingSave5=btoa(JSON.stringify(Building5)),localStorage.BuildingSave6=btoa(JSON.stringify(Building6)),localStorage.BuildingSave7=btoa(JSON.stringify(Building7)),localStorage.BuildingSave8=btoa(JSON.stringify(Building8)),localStorage.UpgradeSave1=btoa(JSON.stringify(Upgrade1)),localStorage.UpgradeSave2=btoa(JSON.stringify(Upgrade2)),localStorage.UpgradeSave3=btoa(JSON.stringify(Upgrade3)),localStorage.UpgradeSave4=btoa(JSON.stringify(Upgrade4)),localStorage.UpgradeSave5=btoa(JSON.stringify(Upgrade5)),localStorage.UpgradeSave6=btoa(JSON.stringify(Upgrade6))}function LoadGame(){if(localStorage.MainSave){var e=JSON.parse(atob(localStorage.MainSave)),i=JSON.parse(atob(localStorage.BuildingSave1)),n=JSON.parse(atob(localStorage.BuildingSave2)),l=JSON.parse(atob(localStorage.BuildingSave3)),o=JSON.parse(atob(localStorage.BuildingSave4)),t=JSON.parse(atob(localStorage.BuildingSave5)),r=JSON.parse(atob(localStorage.BuildingSave6)),a=JSON.parse(atob(localStorage.BuildingSave7)),d=JSON.parse(atob(localStorage.BuildingSave8)),u=JSON.parse(atob(localStorage.UpgradeSave1)),g=JSON.parse(atob(localStorage.UpgradeSave2)),c=JSON.parse(atob(localStorage.UpgradeSave3)),p=JSON.parse(atob(localStorage.UpgradeSave4)),B=JSON.parse(atob(localStorage.UpgradeSave5)),m=JSON.parse(atob(localStorage.UpgradeSave6));player=e,Building1=i,Building2=n,Building3=l,Building4=o,Building5=t,Building6=r,Building7=a,Building8=d,Upgrade1=u,Upgrade2=g,Upgrade3=c,Upgrade4=p,Upgrade5=B,Upgrade6=m,null===localStorage.getItem("power")&&(power=player.power),UpdateView()}}function ResetGame(){localStorage.removeItem("MainSave"),localStorage.removeItem("BuildingSave1"),localStorage.removeItem("BuildingSave2"),localStorage.removeItem("BuildingSave3"),localStorage.removeItem("BuildingSave4"),localStorage.removeItem("BuildingSave5"),localStorage.removeItem("BuildingSave6"),localStorage.removeItem("BuildingSave7"),localStorage.removeItem("BuildingSave8"),localStorage.removeItem("UpgradeSave1"),localStorage.removeItem("UpgradeSave2"),localStorage.removeItem("UpgradeSave3"),localStorage.removeItem("UpgradeSave4"),localStorage.removeItem("UpgradeSave5"),localStorage.removeItem("UpgradeSave6"),player={power:0,mousepower:1,PowerPerSecond:0,mouseclicks:0,TotalArcanePower:0,playtime:0},UpdateView()}function Timer1(){window.setInterval(function(){TotalProduce()},1e3)}var player={power:0,mousepower:1,PowerPerSecond:0,mouseclicks:0,TotalArcanePower:0,playtime:0},Building1=new Building;Building1.name="Magician's Ring",Building1.cost=15,Building1.persec=.1,Building1.qty=0;var Building2=new Building;Building2.name="Arcane Tome",Building2.cost=90,Building2.persec=.5,Building2.qty=0;var Building3=new Building;Building3.name="Wanderer's Wand",Building3.cost=450,Building3.persec=4,Building3.qty=0;var Building4=new Building;Building4.name="Summoner's Staff",Building4.cost=3e3,Building4.persec=16,Building4.qty=0;var Building5=new Building;Building5.name="Summoner's Staff",Building5.cost=15e3,Building5.persec=60,Building5.qty=0;var Building6=new Building;Building6.name="Summoner's Staff",Building6.cost=3e4,Building6.persec=300,Building6.qty=0;var Building7=new Building;Building7.name="Crystal of Conjuration",Building7.cost=15e4,Building7.persec=3200,Building7.qty=0;var Building8=new Building;Building8.name="Celestial Charm",Building8.cost=8e5,Building8.persec=15500,Building8.qty=0;var Upgrade1=new Upgrade;Upgrade1.name="Magic Click",Upgrade1.cost=100,Upgrade1.unlocked=!1;var Upgrade2=new Upgrade;Upgrade2.name="Spell Click",Upgrade2.cost=1e3,Upgrade2.unlocked=!1;var Upgrade3=new Upgrade;Upgrade3.name="Arcane Click",Upgrade3.cost=1e4,Upgrade3.unlocked=!1;var Upgrade4=new Upgrade;Upgrade4.name="Sorcerer Click",Upgrade4.cost=1e5,Upgrade4.unlocked=!1;var Upgrade5=new Upgrade;Upgrade5.name="Divine Click",Upgrade5.cost=1e6,Upgrade5.unlocked=!1;var Upgrade6=new Upgrade;Upgrade6.name="Golden Polish",Upgrade6.cost=150,Upgrade6.unlocked=!1,window.Achievement1=new Achievement,Achievement1.name="Poof!",Achievement1.unlocked=!1,window.Achievement2=new Achievement,Achievement2.name="Pop!",Achievement2.unlocked=!1,window.Achievement3=new Achievement,Achievement3.name="Bam!",Achievement3.unlocked=!1;var A1Timer=window.setInterval(function(){AchievementOneGoal(),AchievementOne()},1e3),A2Timer=window.setInterval(function(){AchievementTwoGoal(),AchievementTwo()},1e3),A3Timer=window.setInterval(function(){AchievementThreeGoal(),AchievementThree()},1e3),AutoSave=window.setInterval(function(){SaveGame()},3e4),PlayTimer=window.setInterval(function(){Playtime()},1e3),UpgradeTimer1=window.setInterval(function(){Upgrade1Enable()},1e3),UpgradeTimer2=window.setInterval(function(){Upgrade2Enable()},1e3),UpgradeTimer3=window.setInterval(function(){Upgrade3Enable()},1e3),UpgradeTimer4=window.setInterval(function(){Upgrade4Enable()},1e3),UpgradeTimer5=window.setInterval(function(){Upgrade5Enable()},1e3),UpgradeTimer6=window.setInterval(function(){Upgrade6Enable()},1e3),ColourTimer1=window.setInterval(function(){Upgrade1Color()},1e3);Timer1(),$(document).ready(function(){$(".squares .square-links a").on("click",function(e){var i=$(this).attr("href");$(".squares "+i).show().siblings().hide(),$(this).parent("li").addClass("actives").siblings().removeClass("actives"),e.preventDefault()})}),$(document).ready(function(){$(".triangles .triangle-links a").on("click",function(e){var i=$(this).attr("href");$(".triangles "+i).show().siblings().hide(),$(this).parent("li").addClass("active1").siblings().removeClass("active1"),e.preventDefault()}),$("#HideUpgrades").click(function(){$("#upgrades").toggle("slide",{direction:"left"},1e3)})}),$(window).load(function(){$("#loader").delay(300).animate({opacity:0,width:0,height:0},1e3)});
