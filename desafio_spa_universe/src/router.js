export class Router {
  
  routes = {}
  
  add(routeName, page, img) {
    this.routes[routeName] = [ page, img ];
  }

  route(event) {
    
    event = event || window.event;
    event.preventDefault();
    
    //troca a url e adiciona ao historico de navegação
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
    
    document.querySelector('nav a.active').classList.remove('active');
    document.querySelector(`nav a:nth-child(${this.routes[pathname][1]})`).classList.add('active');
    document.querySelector('body').style.backgroundImage = `url(assets/img/mountains-universe-${this.routes[pathname][1]}.png)`;
  }
}
