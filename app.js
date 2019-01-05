const qwerty = document.getElementById("qwerty");
const button = document.querySelectorAll('.keyrow button');
const phrase = document.getElementById("phrase");
let missed = 0;
const mainButton = document.querySelector('.btn__reset');
const display = document.querySelector('.start');
const heart = document.querySelectorAll('img');
const wrongLetter = document.querySelector('button');

let letterFound = "";

//Start

mainButton.addEventListener('click', function start() {
    document.getElementById('overlay').style.display = 'none';
});

//Phrases 
const phrases = [
    'best times',
    'beauty sleep',
    'simplicity itself',
    'amazing start',
    'to be or not to be'
];

// Get random phrase as array
function getRandomPhraseAsArray(arr) {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const letter = randomPhrase.split("");
    return letter;
}

//Add phrase to display



const phraseArray = getRandomPhraseAsArray(phrases);



function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
    for(i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
    if(li.textContent === ' ') {
        li.className = 'space';
    } else {
        li.className = 'letter';
    }
    ul.append(li);
}

}

addPhraseToDisplay(phraseArray);


//check letter

function checkLetter(button) {
let letterFound = button;
const letters = document.querySelectorAll('.letter');
let letter = null;
 for(var i=0; i < letters.length; i++) {
     if(letters[i].textContent === letterFound) {
         letters[i].className = 'show';
         letters[i].classList.add('letter');
         letters[i].disabled = true;
         letter = letters[i].textContent;
        } else if (i === letters.length - 1){
            break;
        }

    }

    return letter;
 
}



//Button event listener

const li = document.querySelectorAll('ul li');
qwerty.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON'){
        const letterFound = event.target.innerHTML;
        const correct = checkLetter(letterFound);
        if (correct) {
           event.target.classList.add('chosen');
        } else {
            event.target.disabled = true;
            heart[missed].src = "images/lostHeart.png";
            missed++;
            event.target.classList.add('lose');
        }
      
   

checkWin();
      }
   } 
);


//checkWin function
function checkWin () {
    const lettersShow = document.querySelectorAll('.show ');
    const letters = document.querySelectorAll('.letter');
    const screen = document.getElementById('overlay');
if (missed >= 5) {
    screen.style.display = '';
    screen.classList.add('lose');
    mainButton.textContent = 'You lose';

} else if (lettersShow.length === letters.length){
    screen.style.display = '';
    screen.classList.add('win');
    mainButton.textContent = 'Play again';
  }
}

    
    
