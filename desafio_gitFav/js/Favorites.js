import { GithubUser } from "./GithubUser.js";

export class Favorites{
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@gitFav')) || [];
  }

  save() {
    localStorage.setItem('@gitFav', JSON.stringify(this.entries));
  }

  async add(username) {
    try {

      const userExists = this.entries.find(entry => entry.login === username);

      if(userExists) {
        throw new Error('Usuário já cadastrado!');
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) 
        throw new Error('Usuário não encontrado!');

      this.entries = [user, ...this.entries];
      this.update();  
      this.save();

    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter( entry => user.login != entry.login);

    this.entries = filteredEntries;
    this.update();
    this.save();
  }

}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector('table tbody');

    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector('.search button');

    addButton.onclick = () => {
      const { value } = this.root.querySelector('#input-search');
      
      this.add(value);
    }
  }

  update() {
    this.removeAllTr();

    if(this.entries.length == 0){
      console.log(this.entries.length == 0);
      const row = this.createEmptyRow();
      this.tbody.append(row);
    }
    else {
      this.entries.forEach( user => {
      
        const row = this.createRow();
  
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt = `Imagem de ${user.name}`;
        row.querySelector('.user a').href = `https://github.com/${user.login}`;
        row.querySelector('.user p').textContent = user.name;
        row.querySelector('.user span').textContent = `/${user.login}`;
        row.querySelector('.repositories').textContent = user.public_repos;
        row.querySelector('.followers').textContent = user.followers;
  
        row.querySelector('.remove').onclick = () => {
          const isOk = confirm('tem certeza que deseja deletar essa linha?');
  
          if(isOk) 
            this.delete(user);
        }
  
        this.tbody.append(row);
      });
    }
    

    
  }

  createRow() {

    const tr = document.createElement('tr')

    tr.innerHTML = `  
      <td class="user">
        <div>
          <img src="" alt="Imagem de diego3g">
          <a href="" target="_blank">
            <p></p>
            <span></span>
          </a>
        </div>
      </td>
      <td class="repositories"></td>
      <td class="followers"></td>
      <td>
        <button class="remove">Remover</button>
      </td>
    `;

    return tr;
  }

  createEmptyRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `  
      <td class="empty">
        <img src="./assets/Estrela.png" alt="Imagem de diego3g">
        <span>
          Nenhum favorito ainda
        </span>
      </td>
    `;

    return tr;
  }

  removeAllTr() {
    
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove();
      });
  }
}