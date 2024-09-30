const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide'))
    handleResetClick();  
});

function handleTryClick(event) {
  event.preventDefault();
  
  const inputNumber = document.querySelector('input[type=number]')

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();
    
    document
      .querySelector('h2')
      .innerText = `Acertou em ${xAttempts} vezes`;
  }
  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();

  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
