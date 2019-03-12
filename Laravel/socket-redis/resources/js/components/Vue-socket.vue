<template>
    <div>
        <div class="chat">

            <div class="messages">
                <ul class="list-unstyled">
                    <li v-for="m in $store.state.messages">
                        <div class="name">
                            <strong>{{m.name}} </strong>:
                        <span>{{m.message}}</span>
                            </div>
                    </li>
                </ul>
            </div>


            <div class="input">
                <form @submit.prevent="send($store.state.message, $store.state.name)">
                    <div class="input-group">


                        <input type="text" class="form-control" v-model="$store.state.name" placeholder="Name">
                        <input type="text" class="form-control" v-model="$store.state.message" placeholder="Message"><br>
                          <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">Send</button>
                          </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        sockets: {
            connect: function(){
                this.$store.state.join = true;
                console.log('User connect');
            },
            disconnect: function(){
                this.$store.state.join = false;
                console.log('User disconnect');
            },
            sended: function(data){
                this.$store.state.messages.push({name: data.name, message: data.message});
            }
        },
        mounted(){
            // this.$options.sockets.send = (data) => {
            //     console.log(data);
            // }
        },
        methods: {
            send: function(message,name){
                if(message){
                    this.$socket.emit('send', {
                        message,
                        name
                    });
                    this.$store.state.message = null;
                }
            }
        }

    }
</script>

<style>

</style>
