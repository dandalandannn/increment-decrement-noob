const btnDecrement = document.getElementById("btnDecrement");
const btnReset = document.getElementById("btnReset");
const btnIncrement = document.getElementById("btnIncrement");
const numberValue = document.getElementById("numberValue");

let count = 0;

btnReset.onclick = function(){
    count = 0;
    numberValue.textContent = count;
}
btnIncrement.onclick = function(){
    count++;
    numberValue.textContent = count;
}
btnDecrement.onclick = function(){
    count--;
    numberValue.textContent = count;
}
