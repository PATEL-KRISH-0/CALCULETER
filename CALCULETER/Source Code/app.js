let result = document.querySelector(".result");
let numBox = document.querySelectorAll(".num-Box");
numBox = Array.from(numBox)
console.log(numBox);
var num2;

numBox.forEach((val, index) => {
    val.onclick = () => {
        num2 = index + 1
        result.innerHTML = result.innerHTML + num2
        console.log(num2);
    }
});

let zero = document.querySelector(".num-zero");
console.log(zero);
zero.onclick = () => {
    result.innerHTML = result.innerHTML + "0"
}


let addition = document.querySelector(".addition")
let division = document.querySelector(".division")
let multiplication = document.querySelector(".multiplication")
let subtraction = document.querySelector(".subtraction")



addition.onclick = () => {
    result.innerHTML = result.innerHTML + "+"
}
division.onclick = () => {
    result.innerHTML = result.innerHTML + "/"
}
multiplication.onclick = () => {
    result.innerHTML = result.innerHTML + "*"
}
subtraction.onclick = () => {
    result.innerHTML = result.innerHTML + "-"
}

//  FOR RESET 
let equal = document.querySelector(".equal");
equal.onclick = () => {
    let res = result.innerHTML
    res = eval(res)
    result.innerHTML = res;
}


// FOR RESET
let reset = document.querySelector(".reset");
reset.onclick = () => {
    result.innerHTML = ""
}