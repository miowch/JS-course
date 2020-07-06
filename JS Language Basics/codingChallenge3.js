var bills = [124, 48, 268], tips = [], paidAmounts = [];

function calculateTip(bill) {
    var percentage;

    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }

    return bill * percentage;
}

tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2])
]

paidAmounts = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips);
console.log(paidAmounts);