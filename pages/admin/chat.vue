<template>
    <div>
        <div class="grid gap-6 ">
            {{ noti }}
            {{ messages }}
            <div>
                <select v-model="form.to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500">
                    <option :value="user._id" :key="user._id" v-for="user in users">{{ user.name }}</option>
                </select>
            </div>
            <div>

                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" v-model="form.msg">
                <button class="text-white bg-blue-700 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="sendMessage">Send Message</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let self = this;
        let token = this.$store.state.auth.token;
        this.socket = this.$nuxtSocket({
            name: 'home', // Use socket "home"
            channel: '/chat?token='+token, // connect to '/index'
            // socket.io-client opts:
            reconnection: false

        });
        this.socket.on('message', (resp) => {
            this.messages = resp
        })
        this.socket.on('noti', (resp) => {
            this.noti = resp
        })

        this.getUsers();
        
    },
    data() {
        return {
            socket: '',
            users: [],
            messages: [

            ],
            noti: 0,
            form: {
                msg: '',
                to: '',
                from: this.$store.state.auth.user._id,
                type: 'text',
            }
        }
    },
    methods: {
        getUsers(){
            this.$axios.get('users').then((res)=> {
                this.users = res.data.data;
            })
        },
        getMessageAlt() {
            this.socket.emit('getMessage', { id: 'hello world', params : { name : "jhon"} }, (resp) => {
                console.log(resp);
            })
        },
        sendMessage(){
            this.socket.emit('message', this.form, (resp) => {
                console.log(resp);
            })
        }
    }
}
</script>