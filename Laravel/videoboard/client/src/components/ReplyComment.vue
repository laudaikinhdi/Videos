<template>
  <div class="columns">
    <div class="column is-12-mobile is-6-tablet is-4-desktop ">
      <form @submit.prevent="submitReply">
        <div class="field">
          <label class="label"></label>
          <div class="control">
            <textarea v-model="form.data.body" :class="{'is-danger': form.errors.body}" class="textarea" placeholder="Your reply" cols="30" rows="3"></textarea>
            <p v-if="form.errors.body" class="help is-danger">{{form.errors.body[0]}}</p>
            <div class="bottom-bar">
              <span>{{form.data.body ? form.data.body.length : 0}} / 1000</span>
              <button type="submit" :class="{ 'is-loading': form.loading}" class="button is-primary">Post Reply</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReplyComment",
  props: ["parent", "post"],
  data() {
    return {
      form: {
        loading: false,
        errors: {},
        data: {
          post_id: this.post,
          parent_comment_id: this.parent,
          body: "",
        }
      }
    }
  },
  methods: {
    submitReply() {
      this.form.loading = true;
      axios.post('/comments/create', this.form.data)
      .then(res => {
        this.form.loading = false;
        this.form.errors = {};
        this.form.data.body = "";

        this.getPost();

        this.$emit('commentPosted');
      })
      .catch(err => {
        console.error(err);
        this.form.loading = false;
        this.form.errors = err.response.data.errors;
      });
    },
    getPost() {
      axios.get(`/comments/${this.$route.params.id}`)
      .then(res => {
        this.$store.dispatch('setPost', res.data.post);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }
}
</script>

<style>
button {
  margin-left: auto;
  margin-right: 0;
  margin-top: 5px;
}
.bottom-bar {
  display: flex;
}
</style>
