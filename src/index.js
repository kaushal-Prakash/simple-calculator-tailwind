const themeBtn = document.querySelector(".theme-toggle-btn");
const body = document.querySelector("body");

themeBtn.addEventListener("click", () => {
    if(themeBtn.style.marginLeft === ""){
        themeBtn.style.marginLeft = "17px";
        body.classList.add("theme-2");
        body.classList.remove("theme-3");
    }
    else if(themeBtn.style.marginLeft === "17px"){
        themeBtn.style.marginLeft = "36px";
        body.classList.add("theme-3");
        body.classList.remove("theme-2");
    }
    else {
        body.classList.remove("theme-3");
        body.classList.remove("theme-2");
        themeBtn.style.marginLeft = "";
    }

});

let result =document.getElementById('result')
function calculate(number){
    result.value+=number;

}
function answer(){
    try{
     result.value=eval(result.value)
    }
    catch(error){
    alert('Enter the valid input');
    }
}
function clearrr(){
    result.value =" ";
}
function del(){
    result.value=result.value.slice(0,-1)
}
