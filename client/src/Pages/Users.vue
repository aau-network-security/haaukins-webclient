<template>
    <div>
        <Navbar/>
        <div class="container" style="margin-top: 40px">
            <h3 class="float-left font-weight-bold text-gray-800 mb-1">Users List</h3>
            <div class="clearfix"></div>
            <hr>
            <div v-if="error" class="alert alert-danger alert-dismissible">{{error}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="success" class="alert alert-success alert-dismissible">{{success}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="table-responsive mt-1">
                <table class="table table-hover table-striped">
                    <thead>
                        <th>Username</th><th>Name</th><th>Last_Name</th><th>Email</th><th>Created_At</th><th>Priviledge</th><th>Update</th><th>Delete</th>
                    </thead>
                    <tbody v-if="this.users!=null">
                        <tr v-for="user in users" v-bind:key="user['username']">
                            <td class="text-haaukins"><strong>{{user['username']}}</strong></td>
                            <td>{{user['name']}}</td>
                            <td>{{user['surname']}}</td>
                            <td>{{user['email']}}</td>
                            <td>{{beaut_date(user['createdAt'])}}</td>
                            <td v-bind:class="{ 'text-success': user['isSuperUser'] }">{{userType(user['isSuperUser'] , user['isNPUser'])}}</td>
                            <td><button class="btn btn-secondary btn-sm" v-on:click="openModal(user['username'])">Update</button></td>
                            <td><button class="btn btn-danger btn-sm" v-on:click="deleteUser(user['username'])">Delete</button></td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                    <tr>
                        <td colspan="8" class="text-center">No Users founds...</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        <b-modal ref="modal" id="update-user-modal" centered hide-footer>
            <template v-slot:modal-title>
                update {{userUpdate}} password
            </template>
            <b-form ref="form" @submit.stop.prevent="updateUser()">
                <b-form-group
                        id="fieldset-updatePass"
                        label="New Password"
                        label-for="updatePass"
                >
                    <b-form-input
                            id="updatePass"
                            v-model="password"
                            type="password"
                            required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                        id="fieldset-updateRepeatPass"
                        label="Repeat Password"
                        label-for="updateRepeatPass"
                >
                    <b-form-input
                            id="updateRepeatPass"
                            v-model="repeatPassword"
                            type="password"
                            required
                    ></b-form-input>
                </b-form-group>
                <b-button variant="secondary" @click="$bvModal.hide('update-user-modal')">Close</b-button>
                <b-button type="submit" class="btn-haaukins float-right">Update</b-button>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import Navbar from "../components/Navbar";
    import {  API_ENDPOINT } from "../App";

    export default {
        name: "Users",
        components: {Navbar, Footer},
        data: function () {
            return {
                users: null, userUpdate: "",
                success:null, error: null,
                password: "", repeatPassword: "",
            }
        },
        created: function() {
            this.listUsers();
        },
        methods: {
            listUsers: function () {

                const opts = {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')}
                }
                fetch(API_ENDPOINT+'/admin/user/list', opts)
                    .then(response => response.json())
                    .then(response => {
                      if (response['error'] !==""){
                        this.error = response['error']
                      }
                      if (response['message'] === 'token contains an invalid number of segments'){
                        this.$router.push({path: 'login'})
                        window.localStorage.clear()
                      }
                      this.users = response['users']
                    });
            },
            openModal: function (username) {
                this.userUpdate = username
                this.$bvModal.show('update-user-modal')
            },
            updateUser: function () {
                if (this.password != this.repeatPassword){
                    this.$bvModal.hide('update-user-modal')
                    this.password = ""
                    this.repeatPassword = ""
                    this.error = "Passwords don't match each other!"
                    return
                }

                const opst = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                  body: JSON.stringify({
                        'username': this.userUpdate,
                        'password': this.password
                      }
                  )
                }

                fetch(API_ENDPOINT+'/admin/user/update', opst)
                    .then(response => response.json())
                    .then(response => {
                      if (response['error'] !== ""){
                        this.error = response['error']
                      }
                      if (response['message'] === 'User not found') {
                        this.error = response['message']
                      }
                      this.success = response['message']
                    })
                this.password = ""
                this.repeatPassword = ""
                this.$bvModal.hide('update-user-modal')
            },
            deleteUser: function (username) {

                const opst = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
                  body: JSON.stringify({'username': username})
                }
                fetch(API_ENDPOINT+'/admin/user/delete', opst)
                    .then(response => response.json())
                    .then(response => {
                      if (response['error'] !== ""){
                        this.error = response['error']
                      }
                      this.success = response['message']
                      this.listUsers()
                    });
            },
            beaut_date: function (string_date){
                let date = new Date(string_date.replace(/\s/, 'T'));
                return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
            },
            userType: function (isSuperUser, isNPUser) {
                if (isSuperUser){
                    return "SUPER_USER"
                }
                if (isNPUser){
                    return "NP_USER"
                }
                return "USER"
            }
        }
    }
</script>

<style scoped>

</style>