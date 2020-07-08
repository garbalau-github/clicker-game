// DOM
const score = document.querySelector('#score');
const clickBtn = document.querySelector('#click-general');
const clickFabric = document.querySelector('#click-fabric');
const clickConstruction = document.querySelector('#click-construction');
const fabricOutput = document.querySelector('#fab-val');
const constructionOutput = document.querySelector('#con-val');

// Current values
var num = 0;
var amountOfFabric = 0;
var amountOfConstruction = 0;

// Event listeners
clickBtn.addEventListener('click', addToScore);
clickFabric.addEventListener('click', useFabric);
clickConstruction.addEventListener('click', useConstruction);

// Add 1
function addToScore() {
    num += 1;
    console.log(num);
    score.innerHTML = num;
}

// Use fabric to get +1/sec
function useFabric() {
    var fabricPrice = 10;
    if (num > fabricPrice) {

        console.log(`You can buy fabric, you have ${fabricPrice}$`)
        num -= fabricPrice;
        amountOfFabric += 1;
        fabricOutput.innerHTML = amountOfFabric;

        setInterval(function() {
            num += 1;
            score.innerHTML = num;
        }, 1000);

    } else {
        console.log(`You cant buy fabric, you need ${fabricPrice - num}$`)
    }
}

// Use construction to get +4/sec
function useConstruction() {
    var constructionPrice = 100;
    if (num > constructionPrice) {

        console.log(`You can buy construction, you have ${constructionPrice}$`)
        num -= constructionPrice;
        amountOfConstruction += 1;
        constructionOutput.innerHTML = amountOfConstruction;

        setInterval(function() {
            num += 2;
            score.innerHTML = num;
        }, 500);

    } else {
        console.log(`You cant buy construction, you need ${constructionPrice - num}$`)
    }
}