
let output1 = document.getElementById("output");

function total(num){
    output1.value += num;
}
function equal(){
    try{
        output1.value = eval(output1.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function square(num){
    output1.value = output1.value**2
}
function deletee(){
    output1.value =''
}
function every(){
    output1.value = output1.value.slice(0,-1);
}
