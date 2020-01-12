'use strict';

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
    this.sum();
  }

  _fetchProducts() {
    this.goods = [{
          id: 1,
          title: 'Notebook',
          price: 20000
        },
        {
          id: 2,
          title: 'Mouse',
          price: 1500
        },
        {
          id: 3,
          title: 'Keyboard',
          price: 5000
        },
        {
          id: 4,
          title: 'Gamepad',
          price: 4500
        },
    ]
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  sum() {
    let sum = 0;
    for (let product of this.goods) {
      sum += product.price;
    };
    console.log(sum);
  }
}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
            <h3>${this.title}</h3>
						<p>${this.price}</p>
						<img src="${this.img}"></img>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
  }
}

const list = new ProductList();

class cart{
  /*
  Можно сделать то же, что и в ProductList, добавить методы удаления из корзины продуката, в каталог метод добавления в корзину. Render выводит элементы корзины списком, если они есть, либо что корзина пуста.
*/
}
class cartItem{
  /*
  То же, что и в ProductItem, только render переделать под корзину.
*/
}
