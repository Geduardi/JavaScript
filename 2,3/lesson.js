'use strict'

const cart = {
	container: document.querySelector('.cart'),
	goods: [
		{
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
	renderCart(){
		if (this.goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin','<p>Корзина пуста</p>')
		} else this.container.insertAdjacentHTML('afterbegin',this.cartPriceSum());
	},
	cartPriceSum(){
		let sum = 0;
		for (let i = 0; i < this.goods.length; i++){
			sum += this.goods[i].price;
		}
		return `<p>В корзине: ${this.goods.length} товаров на сумму ${sum} рублей.</p>`;
	}

}
const catalog = {
	container: document.querySelector('.catalog'),
	displayGoods(goods) {
		if (goods.length === 0) {
			this.container.insertAdjacentHTML('afterbegin',`<p>Каталог пуст.</p>`);
		} else{
			for (let i = 0; i < goods.length; i++){
				this.container.insertAdjacentHTML('beforeend', `<h3>${goods[i].name}</h3>
				<p>Цена: ${goods[i].price}</p>
				<p>В наличии: ${goods[i].count}</p><hr>`);
		}}
	}
}
cart.renderCart();
catalog.displayGoods(cart.goods);