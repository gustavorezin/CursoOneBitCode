class User {
  constructor(fullname, email, password) {
    (this.fullname = fullname),
      (this.email = email),
      (this.password = password);
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Logou");
    } else {
      console.log("Acesso negado");
    }
  }
}

const user = new User("Gustavo", "gustavo.rezin@gmail.com", "123");
user.login("gustavo.rezin@gmail.com", "1234");
