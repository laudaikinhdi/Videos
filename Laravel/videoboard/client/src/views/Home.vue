<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12-mobile is-8-table is-6-desktop is-offset-2-tablet is-offset-3-desktop">
        <new-post @getPosts="getPosts()"/>
        <template v-for="(post, index) in posts" >
          <h3 :key="'recent' + index" class="recent-post-title">Recent posts</h3>
          <post-card :key="index" :post="post"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NewPost from '@/components/NewPost';
import PostCard from '@/components/PostCard';

export default {
  name: 'home',
  components: {
    NewPost,
    PostCard
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log(1);
      axios.get('posts')
      .then(res => {
        console.log(res);
        this.posts = res.data.posts;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recent-post-title {
  margin-top: 10px;
  margin-bottom: -5px;
}
</style>
