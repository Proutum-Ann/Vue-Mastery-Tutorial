const app = Vue.createApp({
    data: function(){
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            description: 'Warm, soft socks for you and your feet.',
            url: 'https://www.vuemastery.com/',
            sale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: 'assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity: 0 }
            ],
            sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
        }
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        removeFromCart: function(){
            if(this.cart > 0){
                this.cart -= 1
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.brand + ' ' + this.product + ' is on sale'
        }
    }
})