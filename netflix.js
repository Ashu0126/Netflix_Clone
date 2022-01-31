var query1 = document.getElementById("q1").addEventListener("click", que1);

var query2 = document.getElementById("q2").addEventListener("click", que2);

var query3 = document.getElementById("q3").addEventListener("click", que3);

var query4 = document.getElementById("q4").addEventListener("click", que4);

var query5 = document.getElementById("q5").addEventListener("click", que5);

var query6 = document.getElementById("q6").addEventListener("click", que6);

var imag1 = document.querySelector(".question #q1 img");
var imag2 = document.querySelector(".question #q2 img");
var imag3 = document.querySelector(".question #q3 img");
var imag4 = document.querySelector(".question #q4 img");
var imag5 = document.querySelector(".question #q5 img");
var imag6 = document.querySelector(".question #q6 img");

function que1(e) {
  imag1.classList.toggle("active");
  document.querySelector(".question #s1").classList.toggle("active");
}

function que2(e) {
  imag2.classList.toggle("active");
  document.querySelector(".question #s2").classList.toggle("active");
}

function que3(e) {
  imag3.classList.toggle("active");
  document.querySelector(".question #s3").classList.toggle("active");
}

function que4(e) {
  imag4.classList.toggle("active");
  document.querySelector(".question #s4").classList.toggle("active");
}

function que5(e) {
  imag5.classList.toggle("active");
  document.querySelector(".question #s5").classList.toggle("active");
}

function que6(e) {
  imag6.classList.toggle("active");
  document.querySelector(".question #s6").classList.toggle("active");
}
