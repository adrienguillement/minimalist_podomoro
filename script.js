var countDownDate = new Date("Sep 5, 2019 15:37:25").getTime();
var startButton = document.getElementById("start");
var timer = false;

var default_minutes_podo = 25;
var default_secondes_podo = 00;
var minutes_podo = default_minutes_podo;
var secondes_podo = default_secondes_podo;

var default_minutes_break = 05;
var default_secondes_break = 00;
var minutes_break = default_minutes_break;
var secondes_break = default_secondes_break;

var default_minutes_long_break = 15;
var default_secondes_long_break = 00;
var minutes_long_break = default_minutes_long_break;
var secondes_long_break = default_secondes_long_break;

var loop = 4;
var current_loop = 0;

startButton.onclick = function() {
  if(!timer){
    timer = setInterval(setPodomoro, 1000);
  }
}

function setPodomoro() {

  if(secondes_podo.toString().length < 2){
    secondes_podo = "0" + secondes_podo;
  }
  if(minutes_podo.toString().length < 2){
    minutes_podo = "0" + minutes_podo;
  }

  //Display countdown
  document.getElementById("clockdiv").innerHTML = minutes_podo + ":" + secondes_podo;
  document.title = minutes_podo + ":" + secondes_podo;

  secondes_podo--;
  if(secondes_podo < 0){
    secondes_podo = 59;
    minutes_podo--;
  }
  if(minutes_podo < 0){
    minutes_podo = default_minutes_podo;
    secondes_podo = default_secondes_podo;
    clearInterval(timer);

    //Do we need long break?
    current_loop++;
    if(current_loop >= loop){
      current_loop = 0;
      timer = setInterval(setLongBreak, 1000);
    }
    else {
      timer = setInterval(setBreak, 1000);
    }
  }
}


function setBreak() {
  if(secondes_break.toString().length < 2){
    secondes_break = "0" + secondes_break;
  }
  if(minutes_break.toString().length < 2){
    minutes_break = "0" + minutes_break;
  }

  //Display countdown
  document.getElementById("clockdiv").innerHTML = minutes_break + ":" + secondes_break;
  document.title = minutes_break + ":" + secondes_break;

  secondes_break--;
  if(secondes_break < 0){
    secondes_break = 59;
    minutes_break--;
  }

  if(minutes_break < 0){
    minutes_break = default_minutes_break;
    secondes_break = default_secondes_break;
    clearInterval(timer);
    timer = setInterval(setPodomoro, 1000);
  }
}


function setLongBreak() {
  if(secondes_long_break.toString().length < 2){
    secondes_long_break = "0" + secondes_long_break;
  }
  if(minutes_long_break.toString().length < 2){
    minutes_long_break = "0" + minutes_long_break;
  }

  //Display countdown
  document.getElementById("clockdiv").innerHTML = minutes_long_break + ":" + secondes_long_break;
  document.title = minutes_long_break + ":" + secondes_long_break;

  secondes_long_break--;
  if(secondes_long_break < 0){
    secondes_long_break = 59;
    minutes_long_break--;
  }
  if(minutes_long_break < 0){
    minutes_long_break = default_minutes_long_break;
    secondes_long_break = default_secondes_long_break;
    clearInterval(timer);
    timer = setInterval(setPodomoro, 1000);
  }
}
