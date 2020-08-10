var cloud = document.querySelector("#id_cloud").cloneNode(true);
cloud.id="id1_cloud"
document.getElementById("main").appendChild(cloud);


var flag = document.querySelector(".flag").cloneNode(true);
flag.id="id1_flag"
document.getElementById("mountain").appendChild(flag);

var i=1;
while(i<=4){
var tree = document.querySelector(".tree").cloneNode(true);
tree.id="id"+i+"_tree"
document.getElementById("mountain").appendChild(tree);
i+=1;

}