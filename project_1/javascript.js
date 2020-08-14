var cloud = document.querySelector("#id_cloud").cloneNode(true);
cloud.id="id1_cloud";
document.getElementById("main").appendChild(cloud);


var flag = document.querySelector(".flag").cloneNode(true);
flag.id="id1_flag";
document.getElementById("mountain").appendChild(flag);

var i=1;
while(i<=4){
var tree = document.querySelector(".tree").cloneNode(true);
tree.id="id"+i+"_tree";
document.getElementById("mountain").appendChild(tree);
i+=1;

}

var house = document.querySelector(".house").cloneNode(true);
house.id="id1_house";
document.getElementById("mountain").appendChild(house);

i=1;
while(i<3){
var boy = document.querySelector("#boy").cloneNode(true);
boy.id="id"+i+"_boy";
document.querySelector(".house").appendChild(boy);
i+=1;
}
var boy = document.querySelector("#boy").cloneNode(true);
document.querySelector("#hello_boy").appendChild(boy);


i=1;
while(i<3){
var boy = document.querySelector("#boy").cloneNode(true);
document.querySelector("#hello_"+i+"_boy").appendChild(boy);
i+=1;
}


function message(){
	document.querySelector(".message_button").style.display="none";
	document.querySelector(".message").style.display = "block";
}

function validate(){
	var name = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var number = document.getElementById("number").value;
	var date = document.getElementById("date").value;
	var time = document.getElementById("time").value;
	document.querySelector(".message").style.display = "none";
	document.getElementById("response").style.display="block";
	var data ={
		username: name,
		mail:email,
		phone:number,
		Date: date,
		Time:time,
	}
	document.querySelector("#response>h1").innerHTML="Hello "+data.username+"<br>we will contact you soon by your email : "+data.mail;
	document.querySelector("#response>h2").innerHTML="Date : "+data.Date+"<br>Time : "+data.Time;
	console.log(data);
	var jsondata= JSON.stringify(data);
	console.log(jsondata);

}



var lastScrollTop = 200;
var navbar = document.getElementById("header");
window.addEventListener("scroll",function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop>1800){
		navbar.style.top="-200px";
	}
	else if(scrollTop>lastScrollTop){
		navbar.style.top="-200px";
	}
	else{
		navbar.style.top="0px";
	}
	if(scrollTop>200){
	lastScrollTop =scrollTop;
	}
})