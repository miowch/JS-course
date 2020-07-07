var mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calculateBmi: function () {
        return this.bmi = this.mass/this.height**2;
    }
};

var john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calculateBmi: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
};

function defineWinner() {
    mark.calculateBmi();
    john.calculateBmi();

    if (mark.bmi > john.bmi) {
        return mark;
    } else if (mark.bmi < john.bmi) {
        return john;
    } else {
        return 'both';
    }
}
winner = defineWinner();

if (winner === 'both') {
    console.log('They both have the same BMI ' + john.bmi);
} else {
    console.log(winner.fullName + ' has the highest BMI ' + winner.bmi);
}
