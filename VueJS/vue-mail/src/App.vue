<template>
    <div class="container">
      <div class="mail-box">
          <app-side-bar :messages="messages"></app-side-bar>
          <app-content :messages="messages"></app-content>
      </div>
    </div>
</template>

<script>
    import SideBar from './SideBar.vue';
    import Content from './Content.vue';
    import messages from './data/messages.js';
    import messageRandom from './data/random-messages.js';
    import { eventBus } from './main';
import randomMessages from './data/random-messages.js';
    export default{
      data(){
          return {
            messages: messages
          };
      },
      components: {
          appSideBar: SideBar,
          appContent: Content
      },
      created() {
        eventBus.$on('sendMessage',(data)=>{
          let temp = [data.message];
          this.messages = temp.concat(this.messages.splice(0));
        });
        eventBus.$on('refreshMessage', () =>{
          let randomIndex = Math.floor(Math.random() * randomMessages.length);
          let temp = [randomMessages[randomIndex]];
          this.messages = temp.concat(this.messages.splice(0));
        });
      },
    }
</script>


