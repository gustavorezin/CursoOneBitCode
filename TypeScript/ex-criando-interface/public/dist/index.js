let users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
    const user = response;
    if (user.message) {
        console.log("Usuário não encontrado");
    }
    else {
        users.push(user);
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
function showAllUsers() {
    let message = "Usuários:\n";
    users.forEach((user) => (message += `- ${user.login}\n`));
    console.log(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((accum, user) => accum + user.public_repos, 0);
    console.log(`Soma total de repositórios: ${reposTotal}`);
}
function showTopFiveUsers() {
    const topFive = users
        .slice()
        .sort((userAtual, userNext) => userNext.public_repos - userAtual.public_repos)
        .slice(0, 5);
    let message = "Top 5 users com mais repos publicos:\n";
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    console.log(message);
}
(async () => {
    const usernames = [
        "gustavorezin",
        "brunogmadeira",
        "danielredivo",
        "liepboeger",
        "welquer",
        "jaisonrs",
        "viniciusbussolo1",
    ];
    const userPromises = usernames.map((username) => fetchUser(username));
    await Promise.all(userPromises);
    /*
    MESMA COISA QUE FAZER ISSO:
    await fetchUser("gustavorezin");
    await fetchUser("brunogmadeira");
    await fetchUser("danielredivo");
    await fetchUser("liepboeger");
    await fetchUser("welquer");
    await fetchUser("jaisonrs");
    await fetchUser("gustavoctt");
    await fetchUser("viniciusbussolo1");
    await fetchUserRepos(usernames[0]);
    */
    await fetchUserRepos(usernames[0]);
    showAllUsers();
    showReposTotal();
    showTopFiveUsers();
})();
