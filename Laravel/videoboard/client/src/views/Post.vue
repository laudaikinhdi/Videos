<template>
  <div class="container">
    <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="true"></b-loading>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="/">Home</a></li>
        <li class="is-active"><a href="#" aria-current="page">{{ !post || loading ? 'Not found' : post.title }}</a></li>
      </ul>
    </nav>
    <div class="cloumn is-8-desktop">
      <iframe width="100%=" height="350" :src="`https://youtube.com/embed/${post.youtube_id}?rel=0`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <template v-if="post && !loading">
      <reply-comment :post="post.id" />
      <comments :comments="post.comments" offset="0"/>
    </template>
  </div>
</template>

<script>
import Comments from '@/components/Comments';
import ReplyComment from '@/components/ReplyComment';

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      axios.get(`/comments/${this.$route.params.id}`)
      .then(res => {
        this.loading = false;
        // this.post = res.data.post;
        this.$store.dispatch('setPost', res.data.post);
        document.title = this.post ? this.post.title: 'not found';
      })
      .catch(err => {
        this.loading = false;
        console.error(err);
      });
    }
  },
  computed: {
    post() {
      return this.$store.state.post.post;
    }
  },
  components: {
    Comments,
    ReplyComment
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin-top: 10px;
}
</style>

