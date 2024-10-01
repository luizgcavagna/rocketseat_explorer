import { Modal } from './modal.js';

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  const message = `Seu IMC e de ${result}`;
  
  Modal.message.innerText = message;

  Modal.open();
}



const IMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(2);