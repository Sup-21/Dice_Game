var randomNum1 = Math.floor(Math.random()*6)+1;     //1-6
var randomDiceImg = "dice"+randomNum1+".png";       //dice1.png to dice6.png
var randomImgSource1 = "images/"+randomDiceImg;    //images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1);

var randomNum2 = Math.floor(Math.random()*6)+1;
var randomImgSource2 = "images/dice"+randomNum2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNum2 > randomNum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!🏳️";
}