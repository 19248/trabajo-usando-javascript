var car  = document.getElementById("");
var nv1  = document.getElementById("nav1");
var nv2  = document.getElementById("nav2");
var nv3  = document.getElementById("nav3");
var nv4  = document.getElementById("nav4");
var text = document.querySelectorAll(".textoo");


function cambiar() {
nv1.style.background="#ffcc00";
nv2.style.background="#ffcc00";
nv3.style.background="#ffcc00";
nv4.style.background="#ffcc00";
for (x = 0;x<text.length;x++) {
	text[x].innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.";

}
console.log(text);