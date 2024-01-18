'use strict';

// const bodice = document.querySelector('body');
// const colorArray = ['#cc124b', '#dbaa55', '#ee77aa', '#eeddaa', 'skyblue', '#22aabb', 'purple', '#ad6a17'];

// const colorChanger = () => {
//     bodice.style.background = colorArray[Math.floor(Math.random() * colorArray.length)];
// };

// colorChanger();
// // bodice.addEventListener('click', colorChanger);
// setInterval(colorChanger, 100)

// for loops keeps running while the condition is TRUE

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const kayceeArray = [
//     'Kenneth',
//     'Izuaba',
//     2022 - 2006,
//     'student',
//     ['Micheal', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < kayceeArray.length; i++) {
//     //reading from kayceeArray
//     console.log(kayceeArray[i], typeof kayceeArray[i]);

//     //filling types array
//     // types[i] = typeof kayceeArray[i];
//     types.push(typeof kayceeArray[i])

// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages)

// //Continue and Break Statement

// console.log('---ONLY STRINGS---');
// for (let i = 0; i < kayceeArray.length; i++) {
//     if(typeof kayceeArray[i] !== 'string') continue;

//     console.log(kayceeArray[i], typeof kayceeArray[i]);

// }

// console.log('---BREAK WITH NUMBER---');
// for (let i = 0; i < kayceeArray.length; i++) {
//     if(typeof kayceeArray[i] == 'number') break;

//     console.log(kayceeArray[i], typeof kayceeArray[i]);

// }

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep}`);
//     // rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice != 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc (Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end')
// }

//Coding Challenge

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     // sum += arr[i];
//   }

//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// // const x = 23;
// // console.log();

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const calcTempAmplitudeNew = function (t1, t2) {

//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([9, 3, 5], [7, 8, 10]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degree celsius')),
//     value: 10,
//   };

//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([9, 3, 5], [7, 8, 10]);
// console.log(amplitudeBug);

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}˚C in ${i + 1} days...`;
    }
    console.log('...' + str);
}
 
printForecast(testData2);

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep}`);
//     // rep++;
// }

