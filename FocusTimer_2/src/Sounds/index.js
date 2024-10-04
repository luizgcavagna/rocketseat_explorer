import state from './state.js'; 
import * as events from './events.js'; 

export function start() {
  events.registerControls();
}