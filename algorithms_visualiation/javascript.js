var i=1;
while(i<=100){
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
            document.getElementById("element_"+i).style.backgroundColor="blue";
            document.getElementById("element_"+j).style.backgroundColor="blue";
            await sleep(0.02);
            if(hight[i]<hight[j]){
                document.getElementById("element_"+i).style.backgroundColor="yellow";
                document.getElementById("element_"+j).style.backgroundColor="red";
                await sleep(0.02);
             var temp = hight[i];
             hight[i]=hight[j];
             hight[j]=temp;
             document.getElementById("element_"+i).style.height=hight[i]+"px";
             document.getElementById("element_"+i).style.backgroundColor="red";

             document.getElementById("element_"+j).style.height=hight[j]+"px";
             document.getElementById("element_"+j).style.backgroundColor="yellow";

             await sleep(3);

            }
            document.getElementById("element_"+i).style.backgroundColor="lightblue";
            document.getElementById("element_"+j).style.backgroundColor="lightgreen";
            await sleep(3);
        }
    }
    for(i=0;i<n;i++){
        await sleep(3);
        document.getElementById("element_"+i).style.backgroundColor="red";
    }
    console.log(hight);
}




function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            document.getElementById("element_"+i).style.backgroundColor="yellow";
            document.getElementById("element_"+j).style.backgroundColor="red";
            swap(items, i, j); //sawpping two elements
            document.getElementById("element_"+i).style.height=items[i]+"px";
            document.getElementById("element_"+i).style.backgroundColor="red";

            document.getElementById("element_"+j).style.height=items[j]+"px";
            document.getElementById("element_"+j).style.backgroundColor="yellow";
            i++;
            j--;
            
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

async function activatequickshort(){
   var x= quickSort(hight, 0, hight.length - 1);
   console.log(x);
  
    
}