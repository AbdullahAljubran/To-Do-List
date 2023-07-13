var input1;
var del
document.getElementById("b1").onclick=function(){
    input1=document.getElementById("te1").value;
     
}
function start(){
var b1=document.getElementById("b1");
b1.addEventListener("click", display,false);
var b2=document.getElementById("b2");
b2.addEventListener("click", display2,false);
}
start();
function display(){
    var d=document.getElementById("box1");
    var div=document.createElement("div");
    var c=document.createElement("input");
    c.setAttribute("type","checkbox");
    var v=document.createElement("label");
    v.textContent=input1;
    div.appendChild(c);
    div.appendChild(v);
    d.appendChild(div);
    
}

function display2(){
    var deletee=document.querySelectorAll('[type="checkbox"]:checked');
    Array.from(deletee).forEach(Element =>
    Element.parentNode.remove()
    );
    
}