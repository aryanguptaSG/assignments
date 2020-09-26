var i=1;
while(i<=250){
var tree = document.getElementById("element_0").cloneNode(true);
tree.id="element_"+i;
tree.style.height= String(Math.floor(Math.random()*500+100))+"px";
document.getElementById("box").appendChild(tree);
i+=1;

}

var n =  document.getElementById("box").childElementCount;

function treverse(element){
    var n = element.childElementCount;
    var hight= new Array(n)
    
    
for (var i=0;i<n;i++){
	if (i==0){
        // console.log(element.firstElementChild);
        var style = window.getComputedStyle(element.firstElementChild);
        hight[i]=Number(style.getPropertyValue('height').slice(0,3));
		var x= element.firstElementChild;
		treverse(x);
	}
	else{
        // console.log(x.nextElementSibling);
        var style = window.getComputedStyle(x.nextElementSibling);
        hight[i]=Number(style.getPropertyValue('height').slice(0,3));
		x=x.nextElementSibling;
		treverse(x);
    }
    

}
// console.log(hight);
return hight;
}
// function sleep(delay){
//     const date = Date.now();
//     let currentDate = null;
//     do{
//         currentDate = Date.now();
//     }while(currentDate-date < delay);
// }



var hight=treverse(document.getElementById("box"));

function bubbleshort(){
    var i,j;
    // console.log(hight);
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(hight[i]<hight[j]){
             var temp = hight[i];
             hight[i]=hight[j];
             hight[j]=temp;
             document.getElementById("element_"+i).style.height=hight[i]+"px";
            
             document.getElementById("element_"+j).style.height=hight[j]+"px";

            }
        }
    }
    console.log(hight);
}

