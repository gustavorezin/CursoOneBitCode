interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  message?: "Not Found";
}

interface Repos {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

let users: User[] = [];

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`).then(
    (res) => res.json()
  );

  const user: User = response;

  if (user.message) {
    console.log("Usuário não encontrado");
  } else {
    users.push(user);
    console.log(user);
  }
}

//fetchUser("gustavorezin");

async function fetchUserRepos(username: string) {
  const user = users.find((user) => user.login === username);
  if (typeof user === "undefined") {
    console.log("Usuário não encontrado");
  } else {
    const response = await fetch(user.repos_url).then((res) => res.json());
    const repos: Repos[] = response;

    let message =
      `id: ${user.id}` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}\n`;

    repos.forEach((repo) => {
      message +=
        `\nNome: ${repo.name}` +
        `\nDescrição: ${repo.description}` +
        `\nEstrelas: ${repo.stargazers_count}` +
        `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
    });
    console.log(message);
  }
}

(async () => {
  await fetchUser("gustavorezin");
  await fetchUserRepos("gustavorezin");
})();
