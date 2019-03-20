<template>
  <div class="card post">
    <template v-if="showingVideo">
      <div class="cloumns">
        <div class="column is-12">
          <div class="iframe">
            <iframe width="100%=" height="350" :src="`https://youtube.com/embed/${post.youtube_id}?autoplay=1`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </template>
    <div class="columns">
      <div v-if="!showingVideo" class="column is-narrow">
        <div @click="showingVideo = true" class="video">
          <img :src="`https://img.youtube.com/vi/${post.youtube_id}/2.jpg`" :alt="post.youtube_id"/>
          <img class="youtube_icon" src="youtube.svg" alt="Youtube icon"/>
        </div>
      </div>
      <div class="column">
        <h3>{{post.title}} <span class="timestamp">{{timestamp}}</span></h3>
        <p v-if="post.body">{{postBody}}</p>
        <router-link :to="`/post/${this.post.id}`">{{post.comments_count}} {{post.comments_count <= 1 ? 'reply' : 'replies'}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  data() {
    return {
      showingVideo: false
    }
  },
  computed: {
    postBody() {
      if(this.post.body.length < 150) {
        return this.post.body;
      }

      return this.post.body.substr(0, 150) + '...';
    },

    timestamp() {
      return moment(this.post.created_at).fromNow();
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 10px 10px 0 10px;
  margin-top: 10px;
  word-wrap: break-word;

  h3 {
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    .timestamp {
      font-size: 12px;
    }
  }

  p {
    white-space: pre-wrap;
  }

  iframe {
    height: 350px;
    width: 100%;
  }

  .video {
    position: relative;
    height: 120px;
    width: 90px;
    img {
      border-radius: 5px;
      cursor: pointer;
    }
    .youtube_icon {
      position: absolute;
      height: 30px;
      top: 20px;
      left: 30px;
    }
  }

  .columns {
    margin-bottom: 0;
  }
}
</style>
