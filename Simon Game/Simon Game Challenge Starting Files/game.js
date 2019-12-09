var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour;
var userClickedPattern = [];
var userChosenColour;
var level =0;
var started=false;


$(".btn").click("click",function(){

  userChosenColour = $(this ).attr("id");
  userClickedPattern.push(userChosenColour);
  new Audio("sounds/"+userChosenColour+".mp3").play();
      animatePress(userChosenColour);
  // console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
});

checkAnswer(level);

$(this).keypress(function(){
  if(!started){
  nextSequence();
  started = true;
}

});


function nextSequence() {
userClickedPattern = [];
var n;
started = true;
n =  Math.floor(Math.random()*4);
randomChosenColour = buttonColours[n];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
// new Audio("sounds/"+randomChosenColour+".mp3").play();
playSound(randomChosenColour);
animatePress(randomChosenColour);

level++;
if(level==0)
{
  $("h1").text("Press A Key to Start");

}
else{
  $("h1").text("Level "+level);
}

return n;
}


function playSound(name) {
new Audio("sounds/"+name+".mp3").play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
  setTimeout(function(){   $("#"+currentColour).removeClass("pressed"); }, 100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
      if(userClickedPattern.length===gamePattern.length){
      setTimeout(function() {
          nextSequence();
      },1000);}
    }
    else {
      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
