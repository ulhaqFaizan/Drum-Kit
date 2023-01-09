
var arr = document.querySelectorAll(".drum");
var i=0;
while(i < arr.length){
    arr[i].addEventListener("click", function (){
      var key = this.innerHTML;
      playSound(key);
      animate(key);
    });
    i++;
}

document.addEventListener("keydown", function(){
  var key2 = event.key;
  playSound(key2);
  animate(key2);
} );



function playSound (key){

  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default:

  }

}
function animate(key){
  var button = document.querySelector("."+key);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
