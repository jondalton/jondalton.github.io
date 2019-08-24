var home = document.getElementById("home");
var brush = document.getElementById("brush");
var play = document.getElementById("play");
var laptop = document.getElementById("laptop");
var mic = document.getElementById("mic");
var camera = document.getElementById("camera");
var face = document.getElementById("face");

var img = document.getElementsByTagName("div")[1];

brush.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("design");
});

brush.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("design");
});

play.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("video");
});

play.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("video");
});

laptop.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("games");
});

laptop.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("games");
});

mic.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("sound");
});

mic.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("sound");
});

camera.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("photo");
});

camera.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("photo");
});

face.addEventListener("mouseover", function() {
	img.classList.remove("house");
	img.classList.add("about");
});

face.addEventListener("mouseout", function() {
	img.classList.add("house");
	img.classList.remove("about");
});