import state from './state.js';
import * as sounds from './sounds.js';

export function florest() {
  
  state.isMute = document.documentElement.classList.toggle('play');

  const audio = sounds.florest;
  audio.loop = true;

  if(audio != state.audio && state.audio != '')
    state.audio.pause();

  state.audio = sounds.florest;

  if(state.isMute) 
    audio.play();
  else
    audio.pause();

}

export function rain() {
  
  state.isMute = document.documentElement.classList.toggle('play');

  const audio = sounds.rain;
  audio.loop = true;
  
  if(audio != state.audio && state.audio != '')
    state.audio.pause();

  state.audio = sounds.rain;

  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

}

export function cafeteria() {
  
  state.isMute = document.documentElement.classList.toggle('play');

  const audio = sounds.cafeteria;
  audio.loop = true;

  if(audio != state.audio && state.audio != '')
    state.audio.pause();

  state.audio = sounds.cafeteria;

  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

}

export function fireplace() {
  
  state.isMute = document.documentElement.classList.toggle('play');
  
  const audio = sounds.fireplace;
  audio.loop = true;
  
  if(audio != state.audio && state.audio != '')
    state.audio.pause();
  
  state.audio = sounds.fireplace;

  if(!state.isMute) 
    audio.play();
  else
    audio.pause();

}