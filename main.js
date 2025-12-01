const app = Vue.createApp({
    data: function(){
        return {
            cart: 0,
            product: 'Socks',
            image: 'assets/images/socks_green.jpg',
            description: 'Warm, soft socks for you and your feet.',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            sale: true,
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: 'assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg' }
            ],
            sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
        }
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart: function(){
            if(this.cart > 0){
                this.cart -= 1
            }
        }
    }
})