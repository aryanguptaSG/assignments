var i=1;
while(i<=20){
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
function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}



var hight=treverse(document.getElementById("box"));

async function bubbleshort(){
    var i,j;
    // console.log(hight);
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            // document.getElementById("element_"+j).style.backgroundColor="lightblue";
            if(hight[i]<hight[j]){
                document.getElementById("element_"+i).style.backgroundColor="yellow";
                document.getElementById("element_"+j).style.backgroundColor="red";
                await sleep(500);
             var temp = hight[i];
             hight[i]=hight[j];
             hight[j]=temp;
             document.getElementById("element_"+i).style.height=hight[i]+"px";
             document.getElementById("element_"+i).style.backgroundColor="red";

             document.getElementById("element_"+j).style.height=hight[j]+"px";
             document.getElementById("element_"+j).style.backgroundColor="yellow";

             await sleep(500);

            }
            document.getElementById("element_"+j).style.backgroundColor="lightgreen";
        }
    }
    for(i=0;i<n;i++){
        await sleep(3);
        document.getElementById("element_"+i).style.backgroundColor="red";
    }
    console.log(hight);
}

