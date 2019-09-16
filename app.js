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
const finals = [tipCalc(140) + 140,tipCalc(45) + 45,tipCalc(270) + 270];
const tips = [tipCalc(140),tipCalc(45),tipCalc(270)];

function bigPriceCheck(x) {
    return x > 100;
}

const overHundo = finals.filter(bigPriceCheck);
console.log(overHundo);
console.log(tips);
console.log(finals);
