<template>
  <small>Written by {{author.firstName}} {{author.lastName}}</small>
</template>
<script>
import {eventBus} from './main'
export default {
  props:{
    author:{
      type: Object,
      required: true
    }
  },
  created() {
    eventBus.$on('articleWasShare',(data)=>{
      console.log(data.media);
    })
  },
  // props:["firstName","lastName"]
}
</script>
