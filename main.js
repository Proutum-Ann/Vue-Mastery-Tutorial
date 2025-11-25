const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            image: 'assets/images/socks_green.jpg',
            description: 'Warm, soft socks for you and your feet.',
            url: 'https://www.vuemastery.com/',
            inventory: 100,
            sale: true
        }
    }
})