function roller(max) {
    return Math.floor(Math.random()*max + 1);
}

const rollOne = () => {
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
    const setOne = [
        dOne,
        dTwo,
        dThree,
        dFour,
        dFive,
        dSix
    ]
    console.log(setOne);
    var sumOne = setOne.reduce(function(a, b){
        return a + b;
    }, 0);
console.log(sumOne);        
    }
function combine(a) {
    use_sumOne(a);
}
rollOne();
combine();
