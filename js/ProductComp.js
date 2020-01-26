Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div>
                <search ref="search"></search>
                <div class="products">
                    <div class = "products-flex container">
                        <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
                    </div>
                </div>
            </div>`
});

Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },

    template: `
    <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}₽</p>
                    <button class="btn buy-btn" @click="cartAPI.addProduct(product)">Купить</button>
                </div>
            </div>
    `
});