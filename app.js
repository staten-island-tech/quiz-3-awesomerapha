function tipCalc(x) {
    if(x < 50) {
        return x * 0.2;
    }
    else if (50 < x < 200) {
        return x * 0.15;
    }
    else if (x > 200) {
        return x * 0.1
    }
}
const bills = [140, 45, 270];
const finals = [tipCalc(bills[0]) + bills[0],tipCalc(bills[1]) + bills[1],tipCalc(bills[2]) + bills[2]];
const tips = [tipCalc(bills[0]),tipCalc(bills[1]),tipCalc(bills[2])];

function bigPriceCheck(x) {
    return x > 100;
}

const copy = finals.filter(bigPriceCheck);
console.log(copy);
console.log(tips);
console.log(finals);
