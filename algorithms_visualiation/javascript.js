function creatbar(){
 var height = document.getElementById("visual").offsetHeight;
 document.getElementById("bar0").style.height=height+"px";
 var w = document.getElementById("visual").offsetWidth;
 for(var i=1;i<w/10;i++){
     var bar= document.getElementById("bar0").cloneNode(true);
     bar.id = "bar"+i;
     bar.style.height = String(Math.floor(Math.random()*height-10))+"px";
     document.getElementById("visual").appendChild(bar)
 }     
}

creatbar()
function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}
async function recolour(n){
    for(var i=0;i<n;i++){
        document.getElementById("bar"+i).style.backgroundColor="rgb(3, 144, 130)";
        await sleep(50);
    }
}
function deactivate(n){
    if(n==1){
    document.getElementById("controles").style.opacity="0";
}
else{
        document.getElementById("controles").style.opacity="1";
}
}



async function Bubblesort(){
    deactivate(1);
    var array = document.getElementById("visual")
    var n= array.childElementCount
    console.log(n+" Numbers of element")
    for(var i=0;i<n;i++){
        var h1=document.getElementById("bar"+i).offsetHeight;
        for(var j=0;j<n;j++){
            var h2 =document.getElementById("bar"+j).offsetHeight;
            if (h1<h2){
                var temp = h1;
                h1=h2;
                h2=temp;
                document.getElementById("bar"+i).style.backgroundColor="red";
                document.getElementById("bar"+j).style.backgroundColor="green";
                await sleep(50);
                document.getElementById("bar"+i).style.height=h1+"px";
                document.getElementById("bar"+j).style.height=h2+"px";
                document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
                document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
            }

        }
    }
    recolour(n);
    deactivate(0);
}


async function selectionSort()  
{ deactivate(1);
    var array = document.getElementById("visual")
    var n= array.childElementCount
    console.log(n+" Numbers of element")  
  
    // One by one move boundary of unsorted subarray  
    for (var i = 0; i<n-1; i++)  
    {  
        // Find the minimum element in unsorted array  
       var  min_idx = i;  
       var h1=document.getElementById("bar"+min_idx).offsetHeight;
       var min_h=h1;
        for (var j=i+1;j<n;j++) { 
            document.getElementById("bar"+i).style.backgroundColor="red";
            document.getElementById("bar"+j).style.backgroundColor="green";
            var h2=document.getElementById("bar"+j).offsetHeight;
            console.log(h1,h2);
            await sleep(50);
            if (h2 < min_h ) { 
                min_idx = j;
                min_h=h2; 
            } 
            document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
            document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
        }
        document.getElementById("bar"+min_idx).style.height=h1+"px";
        document.getElementById("bar"+i).style.height=min_h+"px";


        // Swap the found minimum element with the first element  
         
    } 
    
    recolour(n);
    deactivate(0);
} 