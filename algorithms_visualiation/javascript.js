function creatbar(){
 var height = document.getElementById("visual").offsetHeight;
 document.getElementById("bar0").style.height=height+"px";
 var w = document.getElementById("visual").offsetWidth;
 for(var i=1;i<w/10;i++){
     var bar= document.getElementById("bar0").cloneNode(true);
     bar.id = "bar"+i;
     bar.style.height = String(Math.floor(Math.random()*height))+"px";
     document.getElementById("visual").appendChild(bar)
 }     
}

creatbar()
function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}

async function Bubblesort(){
    document.getElementById("bubble").onclick="";
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

    for(var i=0;i<n;i++){
        document.getElementById("bar"+i).style.backgroundColor="rgb(3, 144, 130)";
        await sleep(50);
    }
    document.getElementById("bubble").onclick="Bubblesort()";
}