class Product {
  constructor(name, description, price) {
    (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.inStock = 0);
  }

  addToStock(quantity) {
    this.inStock += quantity;
    console.log(this.inStock);
  }

  calculateDiscount(percentualDiscount) {
    const disc = percentualDiscount / 100;
    console.log(this.price * disc);
  }
}

const product = new Product("Caneta", "Cor azul", 10);

product.addToStock(14);

product.calculateDiscount(25);
