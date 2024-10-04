import state from './state.js';
import * as sounds from './sounds.js';

export function florest() {
  
  state.isMute = document.documentElement.classList.toggle('play');

  const audio = sounds.florest;
  audio.loop = true;

  if(state.isMute) 
    audio.play();
  else
    audio.pause();

  console.log(state, audio);
}
export function rain() {
  
  state.isMute = document.documentElement.classList.toggle('play');

  const audio = sounds.rain;
  audio.loop = true;
  
  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

  console.log(state, audio);
}
export function cafeteria() {
  
  state.isMute = document.documentElement.classList.toggle('play');
  
  const audio = sounds.cafeteria;
  audio.loop = true;
  
  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

  console.log(state, audio);
}
export function fireplace() {
  
  state.isMute = document.documentElement.classList.toggle('play');
  
  const audio = sounds.fireplace;
  audio.loop = true;
  
  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

  console.log(state, audio);
}