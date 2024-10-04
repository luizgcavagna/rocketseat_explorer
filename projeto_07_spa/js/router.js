import state from './state.js';

export class Router {
  
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, '', event.target.href)
    this.handle();
  }

  handle() {
    
    let element = document.getElementById(state.activeId);

    if(element)
      document.getElementById(state.activeId).classList.remove('active');
      
    state.activeId = window.location.pathname.replace('/', '') == '' ? 'home' : window.location.pathname.replace('/', '');

    element = document.getElementById(state.activeId);

    if(element)
        document.getElementById(state.activeId).classList.add('active');
   

    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    });
  }
}