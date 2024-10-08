import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { notNumber, calculateIMC } from './ultils.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if(weightOrHeightIsNotANumber)
    return AlertError.open();

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
}

let displayResultMessage = result => {
  const message = `Seu IMC e de ${result}`;
  
  Modal.message.innerText = message;

  Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();