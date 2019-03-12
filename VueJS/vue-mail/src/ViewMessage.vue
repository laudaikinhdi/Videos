<template>
	<div class="inbox-body">
    <div class="mail-option">
      <button class="btn btn-primary" @click.prevent="navigateBack()">
        <i class="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; Back
      </button>
      <button class="btn btn-danger" @click="data.message.isDeleted = true" :disabled="data.message.isDeleted">
        <i class="fa fa-trash"></i>&nbsp; {{data.message.isDelete ? 'Deleted' : 'Delete'}}
      </button>
      <template v-if="typeof data.message.isRead !== 'undefined'">
        <button class="btn btn-primary" @click="data.message.isRead = false" :disabled="!data.message.isRead">
          <i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp; Mark as unread
        </button>
        <button class="btn btn-primary" @click="data.message.isRead = true" :disabled="data.message.isRead">
          <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; Mark as read
        </button>
      </template>

    </div>
    <p><strong>Date: {{data.message.date.fromNow()}}</strong></p>
    <p><strong>From: {{data.message.from.name}} <{{ data.message.from.email }}></strong></p>
    <hr>
    <div v-html="data.message.content" class="message">

    </div>

    <div v-if="data.message.attachments.length > 0" class="attachments">
      <h4>Attachments</h4>
      <ul>
        <li v-for="(attachment, index) in data.message.attachments" :key="'attachment' + index">
          <i class="fa fa-paperclip">{{attachment.fileNmae}} ({{ attachment.size | formatBytes}})</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {eventBus} from './main.js';
export default {
  props:{
    data:{
      type: Object,
      required: true
    }
  },
  activated() {
    if(typeof this.data.message.isRead !== 'undefined'){
        this.data.message.isRead = true;
    }
  },
  filters:{
    formatBytes(bytes){
      if(bytes == 0){
        return '0 bytes';
      }
      let decimals = 2;
      let k = 1000;
      let dm = decimals + 1 || 3;
      let sizes = ['Bytes', 'KB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      let i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k,i)).toFixed(dm)) + ' ' + sizes[i];
    }
  },
  methods:{
    navigateBack(){
      let previousBack = this.$parent.previousView;
      eventBus.$emit('changeView',{
        tag: previousBack.tag,
        title: previousBack.title,
        data:{
          message: previousBack.data
        }
      });
    }
  }
}
</script>
