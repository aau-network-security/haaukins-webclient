<template>
    <div class="container">
        <div class="text-center sub-container">
            <div class="form-signin">
                <img src="@/assets/logo.png" alt="Haaukins" width="170" height="170" class="mb-4">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label htmlFor="username" class="sr-only">Username</label>
                        <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password" class="sr-only">Password</label>
                        <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-haaukins" :disabled="loading" style="width: 100%">Login</button>
                    </div>
                    <router-link :to="{name: 'signup'}" class="text-haaukins text-center" >Create an Account</router-link>
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { router } from '../router';
    export default {
        data () {
            return {
                username: '',
                password: '',
                submitted: false,
                loading: false,
                returnUrl: '',
                error: null,
                API_URL: 'http://localhost:8090/admin/login'
            }
        },
        created () {
            // reset login status
            //userService.logout();
            localStorage.removeItem('user');
            localStorage.removeItem('user-email');
            // get return url from route parameters or default to '/'
            this.returnUrl = this.$route.query.returnUrl || '/';
        },
        methods: {
          login() {
            this.submitted = true;
            const opts = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({"username":this.username, "password":this.password}),
            };
            if (!(this.username && this.password)) {
              return;
            }
            fetch(this.API_URL, opts)
                .then(response => response.json())
                .then(response => {
                  window.console.log('Respond is '+ response["token"]);
                  localStorage.setItem('user', response["token"]);
                  localStorage.setItem('user-email', this.username);
                  router.push(this.returnUrl)
                  window.console.log("Login successful from REST...")
                })
                .catch(err =>{
                  window.console.log("Unable to fetch -", err);
                  this.error = err;
                  this.submitted = false;
                  this.loading = false;
                  window.console.log(err)
                  return
                });

          },
        }
    };
</script>

<style>
    .sub-container{
        height: 100vh;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
</style>