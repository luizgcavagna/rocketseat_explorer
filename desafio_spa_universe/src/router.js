export class Router {
  
  routes = {}
  
  add(routeName, page, img) {
    this.routes[routeName] = [ page, img ];
  }

  route(event) {
    
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, '', event.target.href)
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname][0] || this.routes[404];
  
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    });

    document.querySelector('body').style.backgroundImage = `url(assets/img/mountains-universe-${this.routes[pathname][1]}.png)`;

    let body = document.querySelector('body');
    console.log(body, this.routes[pathname][1]);
  }
}