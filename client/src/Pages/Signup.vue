<template>
    <div class="container">
        <div class="text-center sub-container">
            <div class="form-signin">
                <img src="@/assets/logo.png" alt="Haaukins" width="170" height="170" class="mb-4">
                <form @submit.prevent="signup">
                    <div class="form-group">
                        <label htmlFor="key" class="sr-only">Key</label>
                        <input type="text" v-model="key" name="key" class="form-control" :class="{ 'is-invalid': submitted && !key }" placeholder="Sign Up Key" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="username" class="sr-only">Username</label>
                        <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password" class="sr-only">Password</label>
                        <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="repeatpassword" class="sr-only">Password</label>
                        <input type="password" v-model="repeatpassword" name="repeatpassword" class="form-control" :class="{ 'is-invalid': submitted && !repeatpassword }" placeholder="Repeat Password" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-haaukins" style="width: 100%">Sign Up</button>
                    </div>
                    <router-link :to="{name: 'login'}" class="text-haaukins float-left" >Back...</router-link>
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { daemonclient } from "../App";
    import { SignupUserRequest } from "daemon_pb"
    import {router} from "../router";

    export default {
        data () {
            return {
                username: '',
                password: '',
                repeatpassword: '',
                key: '',
                returnUrl: '',
                submitted: false,
                error: null
            }
        },
        created () {
            // reset login status
            //userService.logout();
            localStorage.removeItem('user');
            // get return url from route parameters or default to '/'
            this.returnUrl = this.$route.query.returnUrl || '/';
        },
        methods: {
            signup () {
                this.submitted = true;
                const { username, password, repeatpassword, key } = this;
                if (!(username && password && repeatpassword && key)) {
                    return;
                }
                if (password != repeatpassword){
                    this.error = "Passwords don't match each other!"
                    return;
                }
                let getRequest = new SignupUserRequest();
                getRequest.setKey(key);
                getRequest.setUsername(username);
                getRequest.setPassword(password);

                daemonclient.signupUser(getRequest, {}, (err, response) => {
                    if (err == null && response.getError() == '') {
                        localStorage.setItem('user', response.getToken());
                        router.push(this.returnUrl)
                    }else{
                        this.error = err || response.getError();
                        this.submitted = false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>