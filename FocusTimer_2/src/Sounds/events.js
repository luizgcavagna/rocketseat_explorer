import state from './state.js'
import { soundsControls as controls } from './elements.js';
import * as actions from './actions.js';
import * as el from './elements.js';

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    const id = event.target.dataset.id;
    
    if(state.id == '')
      state.id = id

    //console.log(id);
    if(state.id != id) {
      document.getElementById(state.id).classList.remove('active');
      state.id = id;
    }
    
    //event.target.classList.toggle('active');

    if(typeof actions[action] != 'function')
      return;
    
    actions[action]();
  });
}