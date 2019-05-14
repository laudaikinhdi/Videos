<template>
  <div class="">
    <div class="col-md-6 offset-md-3 mr-4">
      <div class="alert alert-danger mb-2" role="alert" v-if="error">
        Your token appeared to be invalid, please try again.
      </div>
      <social-login/>
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Register</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label>Name</label>
              <input type="text" v-model="form.name"  class="form-control" :class="{'is-invalid': errors.name}" placeholder="Name">
              <div class="invalid-feedback" v-if="errors.name">
                {{errors.name[0]}}
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" class="form-control" :class="{'is-invalid': errors.email}" placeholder="Email">
              <div class="invalid-feedback" v-if="errors.email">
                {{errors.email[0]}}
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="form.password" class="form-control" :class="{'is-invalid': errors.password}" placeholder="Password">
              <div class="invalid-feedback" v-if="errors.password">
                {{errors.password[0]}}
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Register" class="btn btn-info w-100">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin';
export default {
  middleware: 'guest',
  components: {
    SocialLogin
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: this.$route.query.error
    }
  },
  methods: {
    async register(){
      try{
        await this.$axios.post('/auth/register', this.form);
      }catch(e){
        return;
      }

      this.$auth.login({data: this.form});

      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style>

</style>
