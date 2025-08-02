function updateReview(){
    const input =document.getElementById("reviewInput").value;

    const p=document.getElementById("review");

    if (input.trim() !=="") {
        p.innerText=input;

        document.getElementById("reviewInput").value="";
        
    }
}
function updateReview2(){
    const input2 =document.getElementById("reviewInput2").value;

    const p=document.getElementById("review2");

    if (input2.trim() !=="") {
        p.innerText=input2;

        document.getElementById("reviewInput2").value="";
        
    }
}
function updateReview3(){
    const input3 =document.getElementById("reviewInput3").value;

    const p=document.getElementById("review3");

    if (input3.trim() !=="") {
        p.innerText=input3;

        document.getElementById("reviewInput3").value="";
        
    }
};

