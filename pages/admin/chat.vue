<template>
    <div>
        <button @click="getMessageAlt">Click</button>
    </div>
</template>
<script>
export default {
    mounted() {
        let self = this;
        this.socket = this.$nuxtSocket({
            name: 'home', // Use socket "home"
            channel: '/chat?name=jhon', // connect to '/index'
            // socket.io-client opts:
            reconnection: false

        })


        
    },
    data() {
        return {
            socket: '',
            messages: [

            ],
        }
    },
    methods: {
        getMessageAlt() {
            this.socket.emit('getMessage', { id: 'hello world', params : { name : "jhon"} }, (resp) => {
                console.log(resp);
            })
        },
    }
}
</script>