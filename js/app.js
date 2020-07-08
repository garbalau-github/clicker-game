// Score field
const score = document.querySelector('#score');

// Earn button
const earn = document.querySelector('#earn');

// Footer logger
const logger = document.querySelector('#info');

// Save progress
const save = document.querySelector('#save');

// Level buildings buttons
const clickLevelOne = document.querySelector('#click-level-one');
const clickLevelTwo = document.querySelector('#click-level-two');
const clickLevelThree = document.querySelector('#click-level-three');
const clickLevelFour = document.querySelector('#click-level-four');
const clickLevelFive = document.querySelector('#click-level-five');

// Outputs of levels
const levelOneOutput = document.querySelector('#level-one-output');
const levelTwoOutput = document.querySelector('#level-two-output');
const levelThreeOutput = document.querySelector('#level-three-output');
const levelFourOutput = document.querySelector('#level-four-output');
const levelFiveOutput = document.querySelector('#level-five-output');

// Put value in localstorage
var cash = localStorage.getItem('cash');
cash = (cash != null) ? parseInt(cash) : 0;
score.innerHTML = cash;
save.addEventListener('click', () => {
    localStorage.setItem('cash', cash);
})

// Event listeners
earn.addEventListener('click', addToScore);

// Each building calls a function
clickLevelOne.addEventListener('click', () => {
    getBuilding( 20, levelOneOutput, 1000 );
});

clickLevelTwo.addEventListener('click', () => {
    getBuilding( 250, levelTwoOutput, 500 );
});

clickLevelThree.addEventListener('click', () => {
    getBuilding( 1000, levelThreeOutput, 250 );
});

clickLevelFour.addEventListener('click', () => {
    getBuilding( 5000, levelFourOutput, 100 );
});

clickLevelFive.addEventListener('click', () => {
    getBuilding( 50000, levelFourOutput, 50 );
});

function addToScore () {
    cash += 1;
    score.innerHTML = cash;
}

function getBuilding (price, output, time) {
    if (cash > price) {
        var amount = output.textContent;
        cash -= price;
        amount++;
        output.innerHTML = amount;
        setInterval(() =>{
            cash += 1;
            score.innerHTML = cash;
        }, time);
    } else {
        logger.innerHTML = `You need <span>${price - cash}</span>$ to buy it...`
        setTimeout(() => {
            logger.innerHTML = ' ';
        }, 2000);
    }
}