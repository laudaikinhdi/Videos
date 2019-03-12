<template>
  <div>
    <h1>{{title}}</h1>
    <p>published on {{published|moment}}</p>
    <p>Shares: {{shares}}</p>
    <p>content {{content}}</p>
    <app-author :author="author"></app-author>
    <br><br>
    <app-social-sharing :article="$data" @articleWasShare="shared('Hello!', $event)"></app-social-sharing>
  </div>
</template>

<script>
import moment from 'moment';
import Author from './Author.vue';
import Social from './Social.vue';
export default {
  data() {
    return {
      title: '10 Reasons why Vue.js is Awesome',
      published: new Date(),
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      author:{
        firstNameAr: "Bo",
        lastNameAr: "Andersen"
      },
      shares: 0
    };
  },
  methods:{
    shared: function(message, event){
      this.shares++;
      console.log(event);
    }
  },
  filters:{
    moment: function(value){
      return moment(value).format('Y-m-d');
    }
  },
  components: {
    appAuthor: Author,
    appSocialSharing: Social
  }
}
</script>
<style>
  *{
   font-style: italic;
  }
</style>

<style scoped>
  *{
    color: red;
  }
</style>
