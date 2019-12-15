'use strict'

const cart = {
	container: document.querySelector('.cart'),
	goods: [],
	renderCart() {
		if (this.goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin', `<p>Корзина пуста</p>
			<button class="button">Очистить корзину</button>`)
		} else {
			this.container.insertAdjacentHTML('afterbegin', this.cartPriceSum());
			this.container.querySelector("button").addEventListener('click', () => this.clear());
		}
	},
	cartPriceSum() {
		let sum = 0;
		for (let i = 0; i < this.goods.length; i++) {
			sum += this.goods[i].price;
		}
		return `<p>В корзине: ${this.goods.length} товаров на сумму ${sum} рублей.</p>
		<button class="button">Очистить корзину</button>`;
	},
	refresh() {
		this.container.querySelector('p').remove();
		this.container.querySelector('button').remove();
		this.renderCart();
	},
	clear() {
		this.goods = [];
		this.refresh();
	}
}
const catalog = {
	cart,
	container: document.querySelector('.catalog'),
	goods: [{
			name: 'Шкаф',
			price: 10000,
			count: 1,
		},
		{
			name: 'Стул',
			price: 1500,
			count: 10,
		},
		{
			name: 'Диван',
			price: 5000,
			count: 2,
		},
	],
	init() {
		if (this.goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin', `<p>Каталог пуст.</p>`);
		} else {
			for (let i = 0; i < this.goods.length; i++) {
				this.container.insertAdjacentHTML('beforeend', `<h3>${this.goods[i].name}</h3>
				<p>Цена: ${this.goods[i].price}</p>
				<p>В наличии: ${this.goods[i].count}</p>
				<button class="button" id="catalog_button_${i}" data-goodId="${i}">Купить</button><hr>`);
				this.container.querySelector(`#catalog_button_${i}`).addEventListener('click', event => {
					this.buyItem(event)
				});
			}
		}
	},
	buyItem(event) {
		this.cart.goods.push(this.goods[event.target.dataset.goodid]);
		this.cart.refresh();
	}

}
cart.renderCart();
catalog.init();