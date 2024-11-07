export class GithubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`
    const data = fetch(endpoint)
      .then( data => data.json() )
      .then( ({ login, name, public_repos, followers }) => ({ 
        login,
        name,
        public_repos,
        followers
      }));

    return data;
  }
}