'use strict'

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log (friends); 

// const years = new Array(2006, 2007, 2008, 2009);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //To get the last index of the array '-1' based on the length of the array
// console.log(friends[friends.length - 1]);

// //To replace a certain content of an Array
// friends[2] = 'Jay'
// console.log(friends);


// let firstName = 'Kenneth';
// const Kaycee = [firstName, 'Izuaba', 2023 - 2006, 'dev', friends];
// console.log(Kaycee)

// //Exercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const year = [1980, 1990, 1985, 1977, 2003];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);


// console.log(age1, age2, age3);


// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
// console.log(ages);


//Method of arrays


// 


 function calcTip(billValue) {
   if (billValue >= 50 && billValue <= 300) {
        const tip1 = (15 * billValue) / 100;
        return tip1;
   } else {
        const tip2 = (20 * billValue) / 100;
        return tip2;
   }
 }

 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[bills.length - 2]), calcTip(bills[bills.length - 1])];
 const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(tips);
console.log(total);


// const calctip = function (bill) {
//     return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.20;
// }
// console.log(calctip(400));

// Objects

// const kayCee = {
//     firstName: 'Kenneth',
//     lastName: 'Izuaba',
//     age: 2022 - 2006,
//     totalFriends: 3,
//     job: 'student',
//     friends: ['Micheal', 'Peter', 'Steven']
// }
// console.log(kayCee);

// // Dot Notation
// console.log(kayCee.lastName);

// //Bracket Notation
// console.log(kayCee['lastName']);

// const nameKey = 'Name';
// console.log(kayCee['first' + nameKey]);
// console.log(kayCee['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about kayCee? Choose between firstName, lastName, age, job and friends');

// if(kayCee[interestedIn]) {
//     console.log(kayCee[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends")
// }

// kayCee.location = 'Nigeria';
// kayCee['twitter'] = '@kaycee_276';
// console.log(kayCee); 


// //Challenge
//  let sentence = `${kayCee.firstName} has ${kayCee.friends.length} friends, and his best friend is called ${kayCee.friends[0]}`
//  console.log(sentence);

//adding functions to object

const kaycee = {
    firstName: 'Kenneth',
    lastName: 'Izuaba',
    birthYear: 2006,
    job: 'Student',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // } 

    calcAge: function() {
        this.age = 2022 - this.birthYear
        return this.age;
    } ,

    checkDriversLicense: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    }
}

// console.log(kaycee.calcAge(kaycee['birthYear']))
// console.log(kaycee.age);
// console.log(kaycee.age);
// console.log(kaycee.calcAge());

// console.log(kaycee.hasDriversLicense);
console.log(kaycee.checkDriversLicense());
