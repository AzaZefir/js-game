let $headerTimer = document.querySelector('#header-timer');
let $headerResult = document.querySelector('#header-result');
let $time = document.querySelector('#time');
let $result = document.querySelector('#result');
let $start = document.querySelector('#start'); //!! <button class="btn" id="start">start</button>
let $gameField = document.querySelector('#game-field');
let $gameTime = document.querySelector('#game-time');

let result = 0

$start.addEventListener('click', startGame)

function startGame(){
  $gameTime.setAttribute('disabled',true)
  $start.classList.add('hide')
  $gameField.style.backgroundColor = 'yellow'
  $time.textContent = $gameTime.value
  timer()
  // $headerTimer.classList.add('hide')
  // $headerResult.classList.remove('hide')
}

function timer(){
  console.log('start');
  let interval = setInterval(function(){
    $time.textContent = (Number($time.textContent) - 0.1).toFixed(2)
    if($time.textContent <= 0 ){
      clearInterval(interval)
    }
  },100)
}