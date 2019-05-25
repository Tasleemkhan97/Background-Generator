var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 =document.querySelector("h3");
var body =document.querySelector("body");
console.log(body);

function createColor()
{
	var color3 = color1.value;
	var color4 =color2.value;


	body.style.background = "linear-gradient(to right,"+color3+","+color4+")";
	h3.textContent=body.style.background;
}

color1.addEventListener("input",createColor);


color2.addEventListener("input",createColor);
