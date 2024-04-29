const inputbox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll(".button");


let result = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click" , (e) =>{
        if(e.target.innerHTML == "="){
            result = eval(result);
            inputbox.value = result;
        }else if(e.target.innerHTML == "AC"){
            result = "";
            inputbox.value = result;
        }
        else if(e.target.innerHTML == "DEL"){
            result = result.substring(0, result.length - 1);
            inputbox.value = result;
        }
        
        else(
            result += e.target.innerHTML ,
            inputbox.value = result
        )
    })

})
