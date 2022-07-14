'use strict';

let numberOfCorrectAnswers = 0;
let siteVisitorName = prompt('What is your name?');

alert(`Welcome, and thanks for visiting ${siteVisitorName}! Please guess these facts about me.`);

let questionOne = prompt('Yes or No... Am I from Washington State?').toLowerCase();

if(questionOne === 'y' || questionOne === 'yes'){
  alert('I wish I was!');
  numberOfCorrectAnswers++;
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('I am one of those former Californians who traded palm trees for pine trees.');
} else{
  alert('Answer yes or no');
}

let questionTwo = prompt('Yes or No... Do I use an umbrella?').toLowerCase();

if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('I am embarassed to admit it... but sometimes I do. I know that makes me a bad Washingtonian.');
  numberOfCorrectAnswers++;
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('I know this makes me a bad Washingtonian... but sometimes I do.');
} else{
  alert('Answer yes or no');
}

let questionThree = prompt('Yes or No... Do I believe in bigfoot?').toLowerCase();

if(questionThree === 'y' || questionThree === 'yes'){
  alert('I believe in a lot of things, but I am not team bigfoot yet.');
  numberOfCorrectAnswers++;
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('Maybe one day... I can imagine sparkly vampires and moody werewolves roaming the forest, but bigfoot feels like a stretch.');
} else{
  alert('Answer yes or no');
}

let questionFour = prompt('Yes or No... Do I drink coffee?').toLowerCase();

if(questionFour === 'y' || questionFour === 'yes'){
  alert('You will always see me at the start of class with a oversized mug full of coffee.');
  numberOfCorrectAnswers++;
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('I quit coffee for a while and turned to herbal tea but have since reunited with my true love.');
} else{
  alert('Answer yes or no');
}

let questionFive = prompt('Yes or No... Do I like to camp?').toLowerCase();

if(questionFive === 'y' || questionFive === 'yes'){
  alert(`Thanks for viewing me as that type of person ${siteVisitorName}... but I like indoor plumbing too much.`);
  numberOfCorrectAnswers++;
} else if(questionFive === 'n' || questionFive === 'no'){
  alert(`It sounds nice in theory ${siteVisitorName}... but I like my hobbit hole too much to leave the Shire.`);
} else{
  alert('Answer yes or no');
}

let guessCount = 4;
let luckyNumber = 8;
let correctGuess = false;
let questionSix;

while (guessCount && !correctGuess){
  questionSix = prompt('What is my lucky number?');
  if (questionSix < luckyNumber) {
    alert('That is too low');
    guessCount--;
  } else if (questionSix > luckyNumber) {
    alert('That is too high');
    guessCount--;
  } else {
    alert('That is correct!');
    numberOfCorrectAnswers++;
    correctGuess = true;
  }
}
if (!correctGuess){
  alert(`My lucky number is ${luckyNumber}`);
}

guessCount = 6;
let favoriteCharacterNames = ['R2D2', 'GROGU', 'YODA', 'BABY YODA'];
correctGuess = false;
let questionSeven;

while (guessCount && !correctGuess){
  questionSeven = prompt('What is the name of a Star Wars character I like?').toUpperCase();
  if (favoriteCharacterNames.indexOf(questionSeven) === -1) {
    alert('No, not that one...');
    guessCount--;
  } else {
    alert('That is correct!');
    numberOfCorrectAnswers++;
    correctGuess = true;
  }
}
if (!correctGuess){
  alert(`These names would have worked... ${favoriteCharacterNames}`);
}

alert(`Your total number of correct answers is ${numberOfCorrectAnswers}`);
