var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelectorAll("div img")[0].setAttribute("src",images[randomNumber1-1]);
document.querySelectorAll("div img")[1].setAttribute("src",images[randomNumber2-1]);
if(randomNumber1>randomNumber2){
  document.querySelector("div h1").innerHTML = "Player 1 won the game";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("div h1").innerHTML = "Player 2 won the game";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("div h1").innerHTML = "Draw";
}
