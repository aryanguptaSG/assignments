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

var boy = document.querySelector("#boy").cloneNode(true);
document.querySelector(".hello_1_boy").appendChild(boy);