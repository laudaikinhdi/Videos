<template>
  <div class="card">
    <h1 class="title">Submit a video</h1>
      <form @submit.prevent="submitPost">
        <div class="field">
          <label class="label">Youtube</label>
          <div class="control has-icons-left has-icons-right">
            <input @input="form.creating = true && form.data.youtube_url !== ''" v-model="form.data.youtube_url" :class="{'is-danger': form.errors.youtube_url}" class="input" type="url" placeholder="Youtube URL">
            <span class="icon is-small is-left">
              <i class="fas fa-link"></i>
            </span>
          </div>
          <p v-if="form.errors.youtube_url" class="help is-danger">{{form.errors.youtube_url[0]}}</p>
        </div>
        <transition name="slide">
          <div v-if="form.creating">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input v-model="form.data.title" :class="{'is-danger': form.errors.title}" class="input" type="text" placeholder="Title">
              </div>
              <p v-if="form.errors.title" class="help is-danger">{{form.errors.title[0]}}</p>
            </div>
            <div class="field">
              <label class="label">Post</label>
              <div class="control">
                <textarea v-model="form.data.body" :class="{'is-danger': form.errors.body}" class="textarea" placeholder="Post body" cols="30" rows="3"></textarea>
                <span>{{form.data.body ? form.data.body.length : 0}} / 1000</span>
              </div>
              <p v-if="form.errors.body" class="help is-danger">{{form.errors.body[0]}}</p>
            </div>
            <button type="sumbit" :class="{ 'is-loading': form.loading }" class="button is-primary is-fullwidth">Submit</button>
          </div>
        </transition>
      </form>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
  data() {
    return {
      form: {
        creating: false,
        loading: false,
        data: {},
        errors: {}
      }
    }
  },
  methods: {
    submitPost() {
      this.form.loading = true;
      axios.post('/posts/create', this.form.data)
      .then(res => {
        this.form.errors = '';
        this.form.loading = false;
        this.form.creating = false;
        this.form.data = {};
        this.$toast.open({
            message: 'You post has been submited',
            type: 'is-success'
        });
        this.$emit('getPosts');
      })
      .catch(err => {
        this.form.errors = err.response.data.errors;
        this.form.loading = false;
      });
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  padding: 10px;
  margin-top: 10px;
}
.title {
  margin: 10px 0 10px 0;
}
.slide-leave-active,
.slide-enter-active {
  transition: 200ms
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translate(0, -5%);
}
</style>
