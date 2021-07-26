function roller(max) {
    return Math.floor(Math.random()*max + 1);
}
let dOne = roller(20);
        console.log(dOne);
    let dTwo = roller(20);
        console.log(dTwo);
    let dThree = roller(20);
        console.log(dThree);
    let dFour = roller(20);
        console.log(dFour);
    let dFive = roller(20);
        console.log(dFive);
    let dSix = roller(20);
        console.log(dSix);
    let dSeven = roller(20);
        console.log(dSeven);
    let dEight = roller(20);
        console.log(dEight);
    let dNine = roller(20);
        console.log(dNine);
    let dTen = roller(20);
        console.log(dTen);
    let dEleven = roller(20);
        console.log(dEleven);
    let dTwelve = roller(20);
        console.log(dTwelve);

const rollOne = [dOne,dTwo,dThree,dFour,dFive,dSix];
const rollTwo = [dSeven,dEight,dNine,dTen,dEleven,dTwelve];

var sumOne = rollOne.reduce(function(a, b){
        return a + b;
    }, 0);
var sumTwo = rollTwo.reduce(function(a, b){
        return a+b;
}, 0);
console.log(rollOne);
console.log(sumOne);       
console.log(rollTwo);
console.log(sumTwo); 

