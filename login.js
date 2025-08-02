const form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    alert("login success✅");

    const btn=document.getElementById("btn");
    btn.innerText="success";
    btn.style.backgroundColor="rgb(71, 231, 85)";
    btn.style.color="white"
    btn.disabled=true;
    logout.style.display="inline-block";
    username.disabled=true;
    password.disabled=true;
    
});

var out=document.getElementById("logout");
out.addEventListener("click",doSomething);
function doSomething(){
    alert("your account logedout");
    out.style.backgroundColor="red";
    out.style.color="white";
}
document.getElementById("logout").addEventListener("click",function(){
    document.querySelector("form").reset();
    document.getElementById("btn");
    btn.innerText="login";
    logout.innerText="logout";
    
});

document.getElementById("logout").addEventListener("click",doSomething);
    function doSomething(){
    document.querySelector("logout");

    document.getElementById("btn").innerText="login";
    btn.style.backgroundColor="white";
    btn.style.color="black";
    btn.disabled=false;
}
document.getElementById("logout").addEventListener("click",function(){
    document.querySelector("form").reset();
    document.getElementById("btn");
    btn.innerText="login";
    logout.innerText="logout";
    alert("your account loggedout");
    logout.style.display="none";
    username.disabled=false;
    password.disabled=false;
   
});