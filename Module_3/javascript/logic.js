function collapse(){
	x = document.querySelector("nav");
	console.log(  document.querySelector("nav").style.height);
	console.log(  document.querySelector("nav").style.visibility);
	console.log(x.style.display);

	if (x.style.visibility=="" || (x.style.display=="" && x.style.visibility =="hidden") ||  x.style.height == "0px" || x.style.visibility =="hidden"){
		document.querySelector("nav").style.transition ="height 1s";
		document.querySelector("nav").style.visibility ="visible";
			document.querySelector("nav").style.height ="100px";
		// document.querySelector("nav").style.display ="block";
	}
	else {
		console.log(x)
			document.querySelector("nav").style.transition ="height 2̥s";
			document.querySelector("nav").style.visibility ="hidden";
		document.querySelector("nav").style.height ="0px";
	}
}
function checker(){
	if (window.innerWidth > 767){

		document.querySelector("nav").style.display="none";

	}
	else{
		document.querySelector("nav").style.display="block";
	}
}
window.addEventListener("resize" ,checker);
document.querySelector("button").addEventListener("click",collapse);
document.querySelector("button").addEventListener("blur",collapse);
