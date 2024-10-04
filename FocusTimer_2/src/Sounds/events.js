import state from './state.js'
import { soundsControls as controls } from './elements.js';
import * as actions from './actions.js';
import * as el from './elements.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    console.log(event.srcElement == 'button');
    event.target.classList.toggle('active');

    if(typeof actions[action] != 'function')
      return;
    
    actions[action]();
  });
}