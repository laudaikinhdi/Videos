<template>
  <div class="">
    <div class="col-md-6 offset-md-3 mt-4">
      <div class="alert alert-danger mb-2" role="alert" v-if="error">
        Your token appeared to be invalid, please try again.
      </div>
      <social-login/>
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Login</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
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
              <input type="submit" value="Login" class="btn btn-info w-100">
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
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: this.$route.query.error
    }
  },
  methods: {
    async login(){
      try{
        await this.$auth.login({data: this.form});
      } catch(e){
        return;
      }

      this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');
    }
  },
  components: {
    SocialLogin
  }
}
</script>

<style>

</style>
