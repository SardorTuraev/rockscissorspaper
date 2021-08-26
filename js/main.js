//Rock paper scissors

var elPaper = document.querySelector('.js-paper');
var elScissors = document.querySelector('.js-scissors');
var elRock = document.querySelector('.js-rock');

var elanswerValue = document.querySelector('.js-answer');
var elanswerValuetext = document.querySelector('.js-answer-text');

elPaper.addEventListener('click' , function (){
  random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (random === 1){
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('paper-img');
    elanswerValuetext.textContent = 'Durrang'; 
    
  } else if (random === 2) {
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.add('rock-img');
    elanswerValuetext.textContent = 'Yutdingiz';
  } else if (random === 3) {
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('scissors-img');
    elanswerValuetext.textContent = 'Yutqizdingiz';
  }
})


elRock.addEventListener('click' , function (){
  random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (random === 1){
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('paper-img');
    elanswerValuetext.textContent = 'Yutqizdingiz'; 
    
  } else if (random === 2) {
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.add('rock-img');
    elanswerValuetext.textContent = 'Durrang';
  } else if (random === 3) {
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('scissors-img');
    elanswerValuetext.textContent = 'Yutdingiz';
  }
})




elScissors.addEventListener('click' , function (){
  random = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (random === 1){
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('paper-img');
    elanswerValuetext.textContent = 'Yutdingiz'; 
    
  } else if (random === 2) {
    elanswerValue.classList.remove('scissors-img');
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.add('rock-img');
    elanswerValuetext.textContent = 'Yutqazingiz';
  } else if (random === 3) {
    elanswerValue.classList.remove('paper-img');
    elanswerValue.classList.remove('rock-img');
    elanswerValue.classList.add('scissors-img');
    elanswerValuetext.textContent = 'Durrang';
  }
})


