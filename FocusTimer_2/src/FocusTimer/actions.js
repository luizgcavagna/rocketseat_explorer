import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';

export function play() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');  
  
  timer.updateDisplay();
}

export function plus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds += 30;

  if(seconds >= 60) {
    minutes++
    seconds = seconds % 60;
  }

  timer.updateDisplay(minutes, seconds);
}

export function less() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds -= 30;
  
  if(seconds < 0) {
    minutes--
    seconds = -(seconds % 60);
  }

  if(minutes < 0)
    return

  timer.updateDisplay(minutes, seconds);
}