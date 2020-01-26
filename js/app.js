const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data:{
        error:{
            isError:false,
            text:''
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(err => {
                    // console.log(err);
                    this.error.isError = true;
                    this.error.name = err;
                });
        },
    },
    mounted() {
        console.log(this);
    }
});

