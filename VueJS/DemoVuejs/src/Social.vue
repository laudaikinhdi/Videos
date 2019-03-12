<template>
    <div>
      <h3>Share {{ article.title }} with your friend</h3>
      <button class="btn btn-primary" @click="share('Facebook')">Share on Facebook</button>
      <button class="btn btn-primary" @click="share('Twitter')">Share on Twitter</button>
    </div>
</template>
<script>
    import {eventBus} from './main'
    export default{
        props:{
          article:{
            type: Object,
            required: true
          }
        },
        methods:{
            share: function(media){
                eventBus.$emit('articleWasShared',{
                    article: this.article,
                    media: media
                });
                this.$emit('articleWasShare',{
                    media: media
                });
            }
        }
    }

</script>
