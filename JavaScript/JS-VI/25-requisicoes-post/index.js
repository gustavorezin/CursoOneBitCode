function rederArticle(articleData) {
  const article = document.createElement("article");

  article.classList.add("article");
  article.id = `article-${articleData.id}`;

  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleData.title;

  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleData.content;

  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = articleData.author;

  article.append(title, content, author);
  document.querySelector("#articles").append(article);
}

async function fetchArticles() {
  const article = await fetch("http://localhost:3000/articles").then((res) =>
    res.json()
  );
  article.forEach(rederArticle);
}

document.addEventListener("DOMContentLoaded", fetchArticles); // DOMContentLoaded == ao carregar a tela

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };

  const response = await fetch("http://localhost:3000/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  const savedArticle = await response.json();
  form.reset(); // limpar form
  rederArticle(savedArticle);
});
