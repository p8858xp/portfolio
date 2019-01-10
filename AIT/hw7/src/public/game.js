function callback(){
  // bunch of variables needed
  let formInput;
  let inputArr;
  const finalCompArr = [];
  const compArrFive = [];
  const compArrFour = [];
  const compArrThree = [];
  const compArrTwo = [];
  const dieArr = [];
  let compScore = 0;
  let userScore = 0;
  // don't display the game div
  const game = document.getElementById('game');
  game.style.display = "none";
  // don't display the overlay div
  const overlay = document.getElementById('error-message');
  overlay.style.display = "none";
  // add an event listener for the "go" button
  const goButton = document.querySelectorAll('button')[0];
  goButton.addEventListener('click', go);
// get the form
  const form = document.querySelector('input');
  // get the intro div
  const intro = document.getElementById('intro');

  // GO FUNCTION WHEN "GO" BUTTON CLICKED ON
  function go(){
    formInput = form.value;
    inputArr = formInput.split(',');
    intro.style.display = "none";
    const score = document.createElement('h4');
    score.classList.add('user');
    score.textContent = "Your Score: " + userScore;
    score.style.color = "green";
    game.appendChild(score);
    game.style.display = "block";
    // create 5 div blocks to represent where the values of the 5 dice will go
    const containerDie = document.createElement('div');
    containerDie.style.marginLeft = '620px';
    // give containerDie a class
    containerDie.classList.add('containerDie');
    const dieone = document.createElement('button');
    dieone.classList.add('dieone');
    const dietwo = document.createElement('button');
    dietwo.classList.add('dietwo');
    const diethree = document.createElement('button');
    diethree.classList.add('diethree');
    const diefour = document.createElement('button');
    diefour.classList.add('diefour');
    const diefive = document.createElement('button');
    diefive.classList.add('diefive');
    dieArr.push(dieone);
    dieArr.push(dietwo);
    dieArr.push(diethree);
    dieArr.push(diefour);
    dieArr.push(diefive);
    game.appendChild(containerDie);
    containerDie.appendChild(dieone);
    containerDie.appendChild(dietwo);
    containerDie.appendChild(diethree);
    containerDie.appendChild(diefour);
    containerDie.appendChild(diefive);
    // now add the 3 buttons - start, roll, pin
    // create container for these buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    game.appendChild(buttonContainer);
    // LISTEN FOR DICE CLICKED
    dieone.addEventListener('click', dieClicked, false);
    dietwo.addEventListener('click', dieClicked, false);
    diethree.addEventListener('click', dieClicked, false);
    diefour.addEventListener('click', dieClicked, false);
    diefive.addEventListener('click', dieClicked, false);
    // START
    const startButton = document.createElement('button');
    startButton.classList.add('start');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', start);
    // ROLL
    const rollButton = document.createElement('button');
    rollButton.classList.add('roll');
    rollButton.textContent = 'Roll';
    rollButton.style.marginLeft = '10px';
    rollButton.disabled = true;
    // PIN
    const pinButton = document.createElement('button');
    pinButton.classList.add('pin');
    pinButton.textContent = 'Pin';
    pinButton.style.marginLeft = '10px';
    pinButton.disabled = true;
    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(rollButton);
    buttonContainer.appendChild(pinButton);
  }
  // END OF GO FUNCTION

  // FUNCTION USED TO GENERATE A ROLL
  function genRoll(){
    if (inputArr.length===1 && inputArr[0] === ''){
      // generate a random num die
      return Math.floor(1 + Math.random() * 6);
    }
    else {
      // pick from the form input and remove the first element from the array
      const roll = inputArr[0];
      inputArr.shift();
      return roll;
    }
  }
  // START FUNCTION CALLED WHEN "START" BUTTON IS CLICKED
  function start(){
    // generate the 5 rolls first for the computer
    const comphtml = document.createElement('h4');
    comphtml.classList.add('comp');
    game.insertBefore(comphtml, document.querySelector('h4'));
    // comp rolling 5 dice
    for (let i = 0; i < 5; i++){
      let rolled = genRoll();
      if (rolled == 3){
        rolled = 0;
      }
      compArrFive.push(rolled);
    }
    let minFive = compArrFive[0];
    for (let i = 1; i < compArrFive.length; i++){
      if (minFive > compArrFive[i]){
        minFive = compArrFive[i];
      }
    }
    finalCompArr.push(minFive);
    compScore += parseInt(minFive);
    // comp rolling 4 dice
    for (let i = 0; i < 4; i++){
      let rolled = genRoll();
      if (rolled == 3){
        rolled = 0;
      }
      compArrFour.push(rolled);
    }
    let minFour = compArrFour[0];
    for (let i = 1; i < compArrFour.length; i++){
      if (minFour > compArrFour[i]){
        minFour = compArrFour[i];
      }
    }
    finalCompArr.push(minFour);
    compScore += parseInt(minFour);
    // comp rolling 3 dice
    for (let i = 0; i < 3; i++){
      let rolled = genRoll();
      if (rolled == 3){
        rolled = 0;
      }
      compArrThree.push(rolled);
    }
    let minThree = compArrThree[0];
    for (let i = 1; i < compArrThree.length; i++){
      if (minThree > compArrThree[i]){
        minThree = compArrThree[i];
      }
    }
    finalCompArr.push(minThree);
    compScore += parseInt(minThree);
    // comp rolling 2 dice
    for (let i = 0; i < 2; i++){
      let rolled = genRoll();
      if (rolled == 3){
        rolled = 0;
      }
      compArrTwo.push(rolled);
    }
    let minTwo = Math.min(compArrTwo[0], compArrTwo[1]);
    finalCompArr.push(minTwo);
    compScore += parseInt(minTwo);
    // comp rolling 1 die
    const lastRoll = genRoll();
    finalCompArr.push(lastRoll);
    if (lastRoll == 3){
      compScore += 0;
    }
    else {
      compScore += parseInt(lastRoll);
    }
    // present the computer score
    comphtml.textContent = "Computer Score: " + finalCompArr[0] + ' + ' + finalCompArr[1] + ' + ' + finalCompArr[2] + ' + ' + finalCompArr[3] + ' + ' + finalCompArr[4] + ' = ' + compScore;
    // remove the start button and only show the roll and pin buttons
    const startButton = document.getElementsByClassName('start')[0];
    startButton.remove();
    const buttonContainer = document.getElementsByClassName('buttonContainer')[0];
    const rollButton = document.getElementsByClassName('roll')[0];
    rollButton.style.marginLeft = '-10px';
    //enable the roll button
    rollButton.disabled = false;
    rollButton.addEventListener('click', roll);
  }

  // ROLL FUNCTION CALLED FOR WHEN "ROLL" BUTTON IS CLICKED ON
  function roll(){
    // check if any of the dies are pinned b/c you only want to roll for the ones that are "blank"
    // now it is the user's turn to roll
    for (let i = 0; i < dieArr.length; i++){
      if (!dieArr[i].classList.contains('pinned')){
        const rolled = genRoll();
        dieArr[i].textContent = rolled;
        dieArr[i].addEventListener('click', dieClicked, false);
      }
    }
    // after roll is clicked on disable it and only have pin be enabled
    const rollButton = document.getElementsByClassName('roll')[0];
    rollButton.disabled = true;
    const pinButton = document.getElementsByClassName('pin')[0];
    pinButton.disabled = false;
    pinButton.addEventListener('click', pin);
  }
  function dieClicked(e){
    // check if there is a number inside the box or not
    const clickedDie = e.target;
    if (clickedDie.textContent){
      // check if been clicked already or not
      if (clickedDie.classList.contains('pinned')){
        clickedDie.classList.toggle('pinned');
        clickedDie.style.backgroundColor = 'white';
      }
      else {
        clickedDie.classList.add('pinned');
        // light gray
        clickedDie.style.backgroundColor = '#D3D3D3';
      }
    }
    else {
      const error = document.getElementById('error-message');
      const modal = document.getElementsByClassName('modal')[0];
      error.style.display = 'block';
      modal.style.display = 'block';
      const p = document.querySelector('p');
      p.textContent = 'Cannot click on a blank die';
      const closeButton = document.getElementsByClassName('closeButton')[0];
      closeButton.addEventListener('click', gotit);
    }
  }
  function gotit(){
    const error = document.getElementById('error-message');
    error.style.display = 'none';
  }
  function pin(){
    if (document.getElementsByClassName('pinned').length >= 1){
      const rollButton = document.getElementsByClassName('roll')[0];
      const pinButton = document.getElementsByClassName('pin')[0];
      const pinnedDices = document.getElementsByClassName('pinned');
      for (let i = 0; i < pinnedDices.length; i++){
        if (pinnedDices[i].getAttribute('count') == null){
          pinnedDices[i].setAttribute('count', '1');
        }
        else {
          pinnedDices[i].setAttribute('count', parseInt(pinnedDices[i].getAttribute('count'))+1);
        }
        pinnedDices[i].disabled = true;
        pinnedDices[i].style.backgroundColor = '#A9A9A9';
        if (pinnedDices[i].getAttribute('count') == 1){
          if (pinnedDices[i].textContent == 3){
            userScore += 0;
          }
          else{
            userScore += parseInt(pinnedDices[i].textContent);
          }
        }
      }
      // if all dices have been pinned end the game, disable both the pin and roll buttons
      if (document.getElementsByClassName('pinned').length == 5){
        rollButton.disabled = true;
        pinButton.disabled = true;
        // and compare the user's score with the computer's
        const resulthtml = document.createElement('h4');
        if (userScore < compScore){
          resulthtml.textContent = 'You Win!';
          resulthtml.style.color = 'green';
        }
        else if (userScore > compScore){
          resulthtml.textContent = 'You Lose!';
          resulthtml.style.color = 'red';
        }
        else {
          resulthtml.textContent = 'Tie!';
          resulthtml.style.color = 'blue';
        }
        // update the user's score with the dices that have been pinned
        const score = document.getElementsByClassName('user')[0];
        score.textContent = "Your Score: " + userScore;
        // gotta make the dices that don't have a class of pinned blank!!
        for (let i = 0; i < dieArr.length; i++){
          if (!dieArr[i].classList.contains('pinned')){
            dieArr[i].textContent = '';
          }
        }
        game.insertBefore(resulthtml, document.getElementsByClassName('containerDie')[0]);
      }
      else {
        rollButton.disabled = false;
        pinButton.disabled = true;
      }
      // update the user's score with the dices that have been pinned
      const score = document.getElementsByClassName('user')[0];
      score.textContent = "Your Score: " + userScore;
      // gotta make the dices that don't have a class of pinned blank!!
      for (let i = 0; i < dieArr.length; i++){
        if (!dieArr[i].classList.contains('pinned')){
          dieArr[i].textContent = '';
        }
      }
    }
    else if (document.getElementsByClassName('pinned').length == 0){
      const error = document.getElementById('error-message');
      const modal = document.getElementsByClassName('modal')[0];
      error.style.display = 'block';
      modal.style.display = 'block';
      const p = document.querySelector('p');
      p.textContent = 'Choose at least 1 die to pin.';
      const closeButton = document.getElementsByClassName('closeButton')[0];
      closeButton.addEventListener('click', gotit);
    }
  }
}
document.addEventListener('DOMContentLoaded', callback);
