function roller(max) {
    return Math.floor(Math.random()*max + 1);
}
let dOne = roller(20);
    let dTwo = roller(20);
    let dThree = roller(20);
    let dFour = roller(20);
    let dFive = roller(20);
    let dSix = roller(20);
    let dSeven = roller(20);
    let dEight = roller(20);
    let dNine = roller(20);
    let dTen = roller(20);
    let dEleven = roller(20);
    let dTwelve = roller(20);
    let dThirteen = roller(20);
    let dFourteen = roller(20);
    let dFifteen = roller(20);
    let dSixteen = roller(20);
    let dSeventeen = roller(20);
    let dEighteen = roller(20);

const setOne = [dOne,dTwo,dThree,dFour,dFive,dSix];
const setTwo = [dSeven,dEight,dNine,dTen,dEleven,dTwelve];
const setThree = [dThirteen, dFourteen, dFifteen, dSixteen, dSeventeen,dEighteen];

var sumOne = setOne.reduce(function(a, b){
        return a + b;
    }, 0);
var sumTwo = setTwo.reduce(function(a, b){
        return a+b;
}, 0);
var sumThree = setThree.reduce(function(a, b){
        return a+b;
}, 0);
console.log(setOne);
console.log(sumOne);       
console.log(setTwo);
console.log(sumTwo); 
console.log(setThree);
console.log(sumThree);
const rollOne = `Number set: ` + setOne + `.    Total: ` + sumOne;
const rollTwo = `Number set: ` + setTwo + `.    Total: ` + sumTwo;
const rollThree = `Number set: ` + setThree + `.    Total: ` + sumThree;

if(sumOne >= sumTwo) {
    if(sumOne >= sumThree) {
        console.log(rollOne)
    }console.log(rollThree)
} else if(sumTwo >= sumThree) {
    console.log(rollTwo)} else {
        console.log(rollThree)
    }

