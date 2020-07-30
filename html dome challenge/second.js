document.getElementById("myBtn").addEventListener("click",function(){
var massege = document.getElementById("rowtext").value;
alert (massege);
}, false);


function func(){
    var x = document.getElementById("rowtext").value;
    document.getElementById("h1propery").innerHTML = x;
//    console.log(x.length);
    if (x.length>10){
    document.getElementById("h1propery").style.color = "#ff0000";
    }
}