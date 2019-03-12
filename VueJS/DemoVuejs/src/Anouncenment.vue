<template>
  <div class="alert alert-info">
      <div v-if="anouncenment">
       <p>{{anouncenment}}</p>
      </div>
      <div v-else>
          <p>No anoucenment yet.</p>
      </div>
  </div>
</template>
<script>
import {eventBus} from './main'
export default {
  data(){
    return {
      anouncenment: null
    }
  },
  created() {
    eventBus.$on('articleWasShared',(data)=>{
      this.anouncenment = data.article.title + 'was shared on ' + data.media + '!';
      console.log(this.anouncenment)
    })
  },
}
</script>

