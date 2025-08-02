const button=document.getElementById("btn");
button.addEventListener("click", doSomething);
function doSomething(){
    alert("order sucessfull🍔")
    button.style.color="black",
    button.style.fontSize="20px"
    button.style.backgroundColor=" rgb(71, 231, 85)",
    document.getElementById("btn").innerText="sucessfull";
    button.disabled=true;
}

var bt1=document.getElementById("btn1");
bt1.addEventListener("click", doAnythink);
function doAnythink(){
    alert("order placed✅")
    bt1.style.color="black",
    bt1.style.background="rgb(71, 231, 85)",
    document.getElementById("btn1").innerText="successful";
    bt1.disabled=true;
};
var bt2=document.getElementById("btn2");
bt2.addEventListener("click", Listener);
function Listener(){
    alert("order placed✅")
    bt2.style.color="black",
    bt2.style.backgroundColor="rgb(71,231,85)",
    document.getElementById("btn2").innerText="successfull";
    bt2.disabled=true;

};
const orderbtn=document.getElementById("btn");
const cancelbtn=document.getElementById("btn0");
window.onload=()=>{
    cancelbtn.style.display="none";
}
orderbtn.onclick=()=>{
    
    cancelbtn.style.display="inline-block";

};
function cancelOrder(){
    alert("Order cancel❌");
    cancelbtn.style.display="none";
    orderbtn.innerText="Order Now";
    orderbtn.style.backgroundColor="black";
    orderbtn.style.color="white";
    orderbtn.style.justifyContent="center";
    orderbtn.style.alignItems="center";
    orderbtn.disabled=false;
}
