$(document).ready(function(){
    $('#one').after('<p>My stuff here</p>')
    });
	
$(document).ready(function(){
   var $p= $('<p>My stuff here</p>')
    $('#one').after($p)
    $('#two').after($p)
    });
	
$(document).ready(function(){
var $p= $('<p>My stuff here</p>')
$('#one').after($p)
$('#two').after($p)
$($p).remove()
});
	
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});

$(document).ready(function(){
    $('div').fadeOut()
    });
	
$(document).click(function(){
    $('div').fadeOut('fast')
    });
	
$('div').hover(function(){
  $('div').addClass('green');
});

$(document).ready(function(){
    $('div').hover(function(){
    $('div').fadeOut('fast')
    $('div').addClass('red')
    })
    });
	
	$(document).ready(function(){

    // Fill in the blanks!
    $('img').animate({ top:'+=100px'}, 1000 );
});

$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('explode')
    })});
	
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('bounce', {times:3},500)
    })});
	
<!-- Load the jquery-ui script for effects.  http://jqueryui.com/ -->

<!DOCTYPE html>
<html>
    <head>
        <title>Krypton Redux</title>
		<link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
		<div></div>
	</body>
</html>

$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('slide')
    })});
	
	
<!DOCTYPE html>
<html>
    <head>
		<title>Vanishing Act</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type='text/javascript' src='script.js'></script>
	</head>
	<body>
        <div></div>   
	</body>
</html>

	
<!-- Javascript section -->

confirm("this is a test confirmation message");

console.log(2 * 5)
console.log("Hello")

List of comparison operators:

> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to


if ( "Nathan" > 8) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("It is a short name huh...");
}

// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4); 

console.log(14%3);
console.log(99%8);
console.log(11%3);

//An example of an if/else statement with modulo in the condition

if( 12%2 === 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// Check if the user is ready to play!

confirm("I am ready to play!");

var age = prompt("What's your age?");

if(age < 13) 
{
    // do this code
    console.log("You're allowed to play, but we take no responsibility.");
}
else   // "otherwise"
{
    // do this code
    console.log("You're old enough, fire away!");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if(userAnswer === "Yes") 
{
    // do this code
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else   // "otherwise"
{
    // do this code
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Please rate the game 1 to 10.");

if(feedback > 8) 
{
    // do this code
    console.log("Thank You! We should race at the next concert!");
}
else   // "otherwise"
{
    // do this code
    console.log("I'll keep practicing coding and racing");
}

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1,choice2) {
    if (choice1 === choice2) {
    return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
        return "rock wins"
        }
        else {
        return "paper wins"
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
        return "paper wins"
        }
        else {
        return "scissors wins"
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
        return "scissors wins"
        }
        else {
        return "rock wins"
        }
    }
}

compare(userChoice,computerChoice);


/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


<!-- Dragon Slaying Exercise -->
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


<!-- Code for executing a switch statement -->
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

<!-- Choose your own adventure game -->
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}


<!-- Building a contact list -->

var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");

JQuery Again!!!!!!!!!!!!!!
<script>
  $(document).ready(function() {
  $("button").addClass("animated bounce")
  });
</script>

<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

  });
</script>

<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
  });
</script>


<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "green");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
    $('body').addClass('animated hinge')
  });
</script>

<!-- You shouldn't need to modify code below this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>


