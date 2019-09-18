/* function tipCalc(x) {
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
 */

 //////////Next quiz
 
 const rob = {
     mass: 78,
     height: 1.69,
     fullname: 'Rob Grande',
     getBMI: function() {
         return this.mass / (this.height * this.height);
     }
 }
 const dejon = {
    mass: 110,
    height: 1.95,
    fullname: 'Dejon Kurdi',
    getBMI: function() {
        return this.mass / (this.height * this.height);
    }
}
if(rob.getBMI > dejon.getBMI) {
    console.log(`${rob.fullname} has a higher BMI than ${dejon.fullname} with a value of ${rob.getBMI()}`);    
}
else if (dejon.getBMI > rob.getBMI) {
    console.log(`${dejon.fullname} has a higher BMI than ${rob.fullname} with a value of ${dejon.getBMI()}`);
}
else {
    console.log(`${rob.fullname} and ${dejon.fullname} have the same BMI! Both their BMIs are ${rob.getBMI()}`);
}
