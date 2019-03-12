<template>
    <aside class="sm-side">
        <div class="user-head">
            <img src="../src/assets/images/profile.jpg">
            <div class="user-name">
                <h5>Thanh Tan</h5>
                <span class="email-address">thanhtan@thanhtan.com</span>
            </div>
        </div>

        <div class="compose-wrapper">
            <app-compose></app-compose>
        </div>

        <ul class="inbox-nav">
            <li :class="{active: activeView == 'app-inbox'}" @click.prevent="navigate('app-inbox','Inbox')">
                <a href="#">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">{{unreadMessage.length}}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-sent'}">
                <a href="#" @click.prevent="navigate('app-sent','Sent')">
                    <i class="fa fa-envelope"></i>Sent <span class="label label-default pull-right">{{sendMessage.length}}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-important'}">
                <a href="#" @click.prevent="navigate('app-important','Important')">
                    <i class="fa fa-bookmark"></i>Important <span class="label label-warning pull-right">{{importantMessage.length}}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-trash'}">
                <a href="#" @click.prevent="navigate('app-trash','Trash')">
                    <i class="fa fa-trash"></i>Trash <span class="label label-default pull-right">{{trashMessage.length}}</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
import {eventBus} from './main.js';
import Compose from './Compose.vue';
export default {
  props:{
    messages: {
      type: Array,
      required: true
    }
  },
  created(){
    eventBus.$on('changeView',(data)=>{
      this.activeView = data.tag
    });
  },
  data(){
    return{
      activeView: 'app-inbox'
    };
  },
  methods:{
    navigate(newView, title){
      eventBus.$emit('changeView',{
        tag:newView,
        title: title
      });
    }
  },
  computed:{
    unreadMessage(){
      return this.messages.filter(function(message){
        return (message.type == 'incoming' && !message.isRead && !message.isDeleted);
      });
    },
    sendMessage(){
      return this.messages.filter(function(message){
        return (message.type == 'outgoing' && !message.isDeleted);
      });
    },
    importantMessage(){
      return this.messages.filter(function(message){
        return (message.type == 'incoming' && message.isImportant === true && !message.isDeleted);
      });
    },
    trashMessage(){
      return this.messages.filter(function(message){
        return message.isDeleted === true;
      });
    }
  },
  components:{
    appCompose: Compose
  }
}
</script>
