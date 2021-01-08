console.log("Ready!");
let box = document.getElementById('myImage');
let a = false;
let b = false;
let c = false;
let d = false;
let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
var audio1 = new Audio('audio/openscene.wav');
var audio2 = new Audio('audio/scene1_activate_robot.wav');
var audio3 = new Audio('audio/scene2_kids.wav');
var audio4 = new Audio('audio/scene3_kitchen.wav');
var audio5 = new Audio('audio/scene4_factory.wav');
var audio6 = new Audio('audio/ending.wav');

function start() {
  audio1.play();
  document.getElementById("start").style.display = "none";
  box.src = "image/glitch1.png";
  setTimeout(function(){box.src = "image/glitch2.png"} , 2000);
  setTimeout(function(){box.src = "image/big.png"}, 6000);
  setTimeout(function(){document.getElementById("loading").style.display = "block"}, 6050);
  setTimeout(function(){document.getElementById("loading").style.display = "none"}, 30000);
  setTimeout(function(){box.src = "image/glitch2.png"}, 30005);
  setTimeout(function(){box.src = "image/big.png"}, 35500);
  setTimeout(function(){document.getElementById("soundwave").style.display = "block"}, 35800);
  setTimeout(function(){document.getElementById("soundwave").style.display = "none"}, 56950);
  setTimeout(function(){document.getElementById("mainpage").style.display = "block"}, 57000);
}

function back(){
  box.src = "image/big.png";
  document.getElementById("soundwave").style.display = "none";
  document.getElementById("guide").style.display = "none";
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  if (s1 + s2 + s3 + s4 == 4){
    final();
    document.getElementById("soundwave").style.display = "none";
  } else{
    document.getElementById("mainpage").style.display = "block";
  }
}

function replay(){

  if (a == true){
    audio2.currentTime = 0;
    scene1();
  } else if (b==true) {
    audio3.currentTime = 0;
    scene2();
  }else if (c==true) {
    audio4.currentTime = 0;
    scene3();
  }else if (d==true){
    audio5.currentTime = 0;
    scene4();
  }
}

function final(){
  audio6.play();
  box.src="image/glitch2.png";
  setTimeout(function(){box.src ="image/big.png"},12000);
  document.getElementById("soundwave").style.display = "none";

}

function scene1() {
  audio2.currentTime = 0;
  audio2.play();
  a = true;
  b = false;
  c = false;
  d = false;
  s1 = 1;
  document.getElementById("mainpage").style.display = "none";
  box.src = "image/glitch2.png";
  setTimeout(function(){box.src = "image/big.png"} , 500);
  setTimeout(function(){document.getElementById("guide").style.display = "block"} , 500);
  setTimeout(function(){document.getElementById("soundwave").style.display = "block"} , 20000);
  setTimeout(function(){document.getElementById("soundwave").style.display = "none"} , 29000);
  setTimeout(function(){document.getElementById("soundwave").style.display = "block"} , 42000);
  setTimeout(function(){document.getElementById("soundwave").style.display = "none"} , 69000);

}

function scene2() {
  audio3.currentTime = 0;
  audio3.play();
  a = false;
  b = true;
  c = false;
  d = false;
  s2 = 1;
  document.getElementById("mainpage").style.display = "none";
  box.src = "image/glitch2.png";
  setTimeout(function(){box.src = "image/kids.png"} , 500);
  setTimeout(function(){document.getElementById("guide").style.display = "block"} , 500)
  setTimeout(function(){  document.getElementById("soundwave").style.display = "block"} , 11000);
  setTimeout(function(){  document.getElementById("soundwave").style.display = "none"} , 53000);
  setTimeout(function(){  document.getElementById("soundwave").style.display = "block"} , 59000);
  setTimeout(function(){  document.getElementById("soundwave").style.display = "none"} , 68700);
}

function scene3() {
  audio4.currentTime = 0;
  audio4.play();
  a = false;
  b = false;
  c = true;
  d = false;
  s3 = 1;
  document.getElementById("mainpage").style.display = "none";
  box.src = "image/glitch2.png";
  setTimeout(function(){box.src = "image/cooking.png"} , 500);
  setTimeout(function(){document.getElementById("guide").style.display = "block"}, 500)
  setTimeout(function(){  document.getElementById("soundwave").style.display = "block"} , 19000);
  setTimeout(function(){  document.getElementById("soundwave").style.display = "none"} , 72000);

}

function scene4() {
  audio5.currentTime = 0;
  audio5.play();
  a = false;
  b = false;
  c = false;
  d = true;
  s4 = 1;
  document.getElementById("mainpage").style.display = "none";
  box.src = "image/glitch2.png";
  setTimeout(function(){box.src = "image/garbage.png"} , 500);
  setTimeout(function(){document.getElementById("guide").style.display = "block"}, 500)
  setTimeout(function(){document.getElementById("soundwave").style.display = "block"}, 7800);
  setTimeout(function(){document.getElementById("soundwave").style.display = "none"}, 59000);
}



var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
}

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
}
