// Your scripts here
//declare interactive elements
const billAmount = document.getElementById('amount');
const billPercent = document.getElementById('percent');
const calcButton = document.getElementById('calculate');
// declare static elements
const tipTotal = document.getElementById('tip');
const actualTotal = document.getElementById('total');


let tip = 0.00;
let total = 0;
calcButton.onclick = (e) => {
    const bill = billAmount.value;
    const percent = billPercent.value;
    x = parseFloat(bill)
    y = parseFloat(percent)
    tip1 = y * x
    total1 = x + tip1;
    tipTotal.innerHTML = tip1;
    actualTotal.innerHTML = total1;

};
