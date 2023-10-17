let users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
    const user = response;
    if (user.message) {
        console.log("Usuário não encontrado");
    }
    else {
        users.push(user);
        console.log(user);
    }
}
//fetchUser("gustavorezin");
async function fetchUserRepos(username) {
    const user = users.find((user) => user.login === username);
    if (typeof user === "undefined") {
        console.log("Usuário não encontrado");
    }
    else {
        const response = await fetch(user.repos_url).then((res) => res.json());
        const repos = response;
        let message = `id: ${user.id}` +
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
