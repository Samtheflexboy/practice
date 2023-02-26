var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var text=document.getElementsByTagName("h3")[0];
var generator=document.getElementsByClassName("class")[0];

function load(){
setThegradient();
}
load();

function setThegradient(){
	var col=color1.value; var col2=color2.value;
	var le='linear-gradient(to right,'+col+','+col2+')';
  document.body.style.background=le;
	text.innerText=le;
  }
const generateCode=function(){ 
  //! you can also give directly color instead of storing 
  var firstColor=color1.value='#'+ Math.ceil(Math.random() * 0xffffff).toString(16).padStart(6, "0");;
  var secondColor=color2.value='#'+Math.ceil(Math.random() * 0xffffff).toString(16).padStart(6, "0");;
  var le='linear-gradient(to right,'+firstColor+','+secondColor+')';
  document.body.style.background=le;
	text.innerText=le;
  
}

color1.addEventListener("input",setThegradient);
color2.addEventListener("input",setThegradient);
generator.addEventListener("click",generateCode);


