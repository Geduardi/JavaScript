'use strict'

const cart = {
	container: document.querySelector('.cart'),
	adressContainer: document.querySelector('.adress'),
	commentaryContainer: document.querySelector('.commentary'),
	goods: [],
	render() {
		this.container.innerHTML = '';
		if (this.goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin', `<p>Корзина пуста</p>
			<button class="button">Очистить корзину</button>`)
		} else {
			this.container.insertAdjacentHTML('afterbegin', this.cartPriceSum());
			this.container.querySelector("button").addEventListener('click', () => this.clear());
			for (let i = 0; i < this.goods.length; i++) {
				this.container.insertAdjacentHTML('beforeend', `
			<div class="cart_product">
				<h3> ${ this.goods[i].name }</h3>
				<p>Цена: ${this.goods[i].price}</p>
				<p>В наличии: ${this.goods[i].count}</p>
				<button class="button cartDelete" id="cart_button_${i}" data-goodId="${i}">Удалить из корзины</button>
			</div>
			`)
				this.container.querySelector(`#cart_button_${i}`).addEventListener('click', event => {
					this.delete(event)
				});
			}
			this.addNextButton(this.container);
			this.addNextAdressEvent(this.container.querySelector('.button_next'));
		}
	},
	addNextButton(block) {
		block.insertAdjacentHTML('beforeend', `
		<button class="button button_next">Далее</button>
		`);
	},
	addNextAdressEvent(object) {
		object.addEventListener('click', event => this.nextAdress(event));
	},
	nextAdress(event) {
		this.container.classList.add('hidden');
		this.adressContainer.classList.remove('hidden');
		this.addNextButton(this.adressContainer);
		this.addNextCommentaryEvent(this.adressContainer.querySelector('.button_next'));
	},
	addNextCommentaryEvent(object) {
		object.addEventListener('click', event => this.nextCommentary(event));
	},
	nextCommentary(event) {
		this.adressContainer.classList.add('hidden');
		this.commentaryContainer.classList.remove('hidden');
		this.addBuyButton(this.commentaryContainer);
	},
	addBuyButton(block) {
		block.insertAdjacentHTML('beforeend', `
		<button class="button button_buy">Купить!</button>
		`);
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
		this.container.innerHTML = '';
		this.render();
	},
	clear() {
		this.goods = [];
		this.refresh();
	},
	delete(event) {
		if (!event.target.classList.contains('cartDelete')) return;
		const good_Id = +event.target.dataset.goodId;
		this.goods.splice(good_Id, 1);
		this.render();
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
		this.container.innerHTML = '';
		if (this.goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin', `<p>Каталог пуст.</p>`);
		} else {
			for (let i = 0; i < this.goods.length; i++) {
				this.container.insertAdjacentHTML('beforeend', `<h3>${this.goods[i].name}</h3>
				<p>Цена: ${this.goods[i].price}</p>
				<p>В наличии: ${this.goods[i].count}</p>
				<button class="button" id="catalog_button_${i}" data-goodId="${i}">В корзину</button><hr>`);
				this.container.querySelector(`#catalog_button_${i}`).addEventListener('click', event => {
					this.buyItem(event)
				});
			}
		}
	},
	buyItem(event) {
		this.cart.goods.push(this.goods[event.target.dataset.goodid]);
		this.cart.render();
	}

}

catalog.init();
cart.render();