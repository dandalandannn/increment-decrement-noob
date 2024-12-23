const btnDecrement = document.getElementById("btnDecrement");
const btnReset = document.getElementById("btnReset");
const btnIncrement = document.getElementById("btnIncrement");
const numberValue = document.getElementById("numberValue");

let count = 0;

btnReset.onclick = function(){
    numberValue.textContent = 0;
}
btnIncrement.onclick = function(){
    count++;
    numberValue.textContent = count;
}
btnDecrement.onclick = function(){
    count--;
    numberValue.textContent = count;
}
