const count_show_elm = document.getElementById("count");
const count_show_elm2 = document.getElementById("count2");
const count_show_elm3 = document.getElementById("count3");
const count_show_elm4 = document.getElementById("count4");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const risetButton = document.getElementById("riset")
stopButton.disabled = true
risetButton.disabled = true
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let nIntervId;
$('#start').addClass("startButton");
$(document).ready(function(){
  $(".startButton").click(function() {
    startButton.disabled = true
    if(!nIntervId) {
      nIntervId = setInterval(flashCount, 100);
    };
    if(startButton.disabled === true) {
      stopButton.disabled = false
      risetButton.disabled = false
    } 
  });
});
$('#stop').addClass("stopButton");
$(document).ready(function(){
  $(".stopButton").click(function() {
    clearInterval(nIntervId);
    nIntervId = null;
    if(stopButton.disabled === false) {
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  });
});
$('#riset').addClass("risetButton");
$(document).ready(function(){
  $(".risetButton").click(function() {
    startButton.disabled = false
    clearInterval(nIntervId);
    count = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count_show();
    if(risetButton.disabled === false) {
      risetButton.disabled = true;
      stopButton.disabled = true;
      console.log(false)
    }
  });
});
function count_show(){
    count_show_elm.textContent = count;
    count_show_elm2.textContent = count2;
    count_show_elm3.textContent = count3;
    count_show_elm4.textContent = count4;
}
function flashCount(){
  count += 1;
  while(count > 9) {
    count = 0;
    if(count === 0) {
      count2 += 1;
    };
    if (count2 === 61) {
      count2 = 0;
      count3 += 1;
    } ;
    if (count3 === 61) {
      count3 = 0;
      count4 += 1;
    } ;
    if (count4 === 25) {
      count4 = 0;
    };
  }
  count_show();
}
$(document).ready(function(){
  $("#start").hover(
    function() {
      $(this).css("font-weight", "bold");
    },
    function() {
      $(this).css("font-weight", "normal");
    },
  );
  $("#stop").hover(
    function() {
      $(this).css("font-weight", "bold");
    },
    function() {
      $(this).css("font-weight", "normal");
    },
  );
  $("#riset").hover(
    function() {
      $(this).css("font-weight", "bold");
    },
    function() {
      $(this).css("font-weight", "normal");
    },
  );
});