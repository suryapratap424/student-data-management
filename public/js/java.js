
let time = document.getElementById("time");
setInterval(f, 1000)
function f() {
    let d = new Date();
    let date = d.toString();
    time.innerHTML = date.slice(0, 25);
}
document.getElementById("plus").onclick = function () {
    let font = document.getElementById("para").style.fontSize;
    let x = parseInt(font.slice(0, 2));
    let out = x + 1 + "px";
    document.getElementById("para").style.fontSize = out;
}
document.getElementById("reset").onclick = function () {
    document.getElementById("para").style.fontSize = "16px";
}
document.getElementById("minus").onclick = function () {
    let font = document.getElementById("para").style.fontSize;
    let x = parseInt(font.slice(0, 2));
    let out = x - 1 + "px";
    document.getElementById("para").style.fontSize = out;
}
    // function validate() {
    //         if (document.forms["form"]["name"].value == '') {
    //           alert("only text");
    //           return false;
    //         }
          
    //  }
var i = 0;
function badha(a){
    i=a+1;
    return i;
}
setInterval(rainbow,50)
function rainbow(){
    let I = 127*(Math.sin(0.001*badha(i))+1); 
    let J = 127*(Math.sin(0.001*badha(i) + 120)+1);
    let K = 127*(Math.sin(0.001*badha(i)+ 240)+1);
    let theta = 90*(Math.sin(0.001*badha(i))+1); 
    document.getElementById("maincontent").style.backgroundImage= `linear-gradient(${theta}deg,rgb(${I},${J},${K}),rgb(${K},${J},${I}))`;
}