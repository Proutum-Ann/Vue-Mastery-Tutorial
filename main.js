const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            image: 'assets/images/socks_green.jpg',
            description: 'Warm, soft socks for you and your feet.',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            sale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']
        }
    }
})