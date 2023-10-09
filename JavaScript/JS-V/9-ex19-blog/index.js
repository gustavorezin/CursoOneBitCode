const Author = require("./Author");

const autor = new Author("Gustavo");

const post = autor.createPost("Titulo do post", "Conteudo do post...");

post.addComment("Bruno", "Muito massa!");
post.addComment("Daniel", "Fera chef!");

console.log(autor);
console.log(post);
