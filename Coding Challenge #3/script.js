'use strict'

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function (){
        const prop = this.mass / this.height ** 2;
        return prop;
    }
}
// console.log(johnSmith.calcBMI());
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function (){
        const prop = this.mass / this.height ** 2;
        return prop;
    }
}

function checkHigherBMI() {
    if (johnSmith.calcBMI() > markMiller.calcBMI()) {
        return `${johnSmith.fullName}'s BMI (${johnSmith.calcBMI()}) is higher than ${markMiller.fullName}'s BMI (${markMiller.calcBMI()})`
    } else {
        return `${markMiller.fullName}'s BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.fullName}'s BMI (${johnSmith.calcBMI()})`        
    }
}

console.log(checkHigherBMI());