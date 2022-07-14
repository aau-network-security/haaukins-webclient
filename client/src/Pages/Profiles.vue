<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <b-row style="margin-bottom: 20px">
        <h3 class="float-left font-weight-bold text-gray-800 mb-1">
          Available Challenge Profiles
          <b-icon id="create-chal-info" class="info-icon" icon="info-circle"></b-icon>
          <b-tooltip target="create-chal-info">You can create challenge profiles from the <i>Challenges</i> page. Select your desired challenges, choose a profile name and hit "Save Profile". Your new profile will displayed on this page.</b-tooltip>
        </h3>
      </b-row>
      <template v-if="!noProfiles && !loaderIsActive">
        <b-row>
        <div class="col-2 customscroll">
          <div class="nav flex-column nav-pills sticky-top" id="profiles" role="tablist"
               aria-orientation="vertical">
            <template v-for="(profile, index) in profiles">
              <template v-if="index === 0">
                <a :key="profile"
                   class="nav-link active show"
                   :id="'tab-'+index"
                   data-toggle="pill"
                   :href="'#'+'tab'+index"
                   :aria-controls="'tab'+index"
                   aria-selected="true"
                   v-on:click="setProfileForUpdate(profile)"
                >
                  <template v-if="profile.secret">
                    <b-icon :id="'profile'+index" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                    <b-tooltip :target="'profile'+index" triggers="hover">Profile is secret</b-tooltip>
                  </template>
                  {{ profile.name }}
                </a>
              </template>
              <template v-else>
                <a :key="profile"
                   class="nav-link"
                   :id="'tab-'+index"
                   data-toggle="pill"
                   :href="'#'+'tab'+index"
                   :aria-controls="'tab'+index"
                   aria-selected="false"
                   v-on:click="setProfileForUpdate(profile)"
                >
                  <template v-if="profile.secret">
                    <b-icon :id="'profile'+index" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                    <b-tooltip :target="'profile'+index" triggers="hover">Profile is secret</b-tooltip>
                  </template>
                  {{ profile.name }}
                </a>
              </template>
            </template>
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="v-pills-tabContent">
            <b-col md="12" class="text-center" style="margin-top: 15px">
              <b-alert
                  :show="dismissCountDown"
                  dismissible
                  :variant="variant"
                  fade
                  @dismissed="dismissCountDown=0"
                  @dismiss-count-down="countDownChanged"
              >
                {{ alert }}
              </b-alert>
            </b-col>
            <template v-for="(profile, profileIndex) in profiles">
              <template v-if="profileIndex === 0">
                <div
                    v-bind:key="profile"
                    class="tab-pane fade active show"
                    :id="'tab'+profileIndex"
                    role="tabpanel"
                    :aria-labelledby="'tab-'+profileIndex"
                >
                  <b-container :key="profile" class="category-container">
                    <b-row>
                      <h3 style="margin: auto;">Selected profile: {{ profile.name }}</h3>
                      <b-col md="12" class="text-center">
                        You can add or remove challenges from a profile by simply clicking on the challenges you wish to add/remove.
                      </b-col>
                      <b-col md="2" style="padding: 0; max-width: 130px; margin: auto;">
                        <b-button class="btn-haaukins" :disabled="!updateAvailable" @click="updateProfile">Update Profile</b-button>
                      </b-col>
                      <b-col md="2" style="padding: 0; max-width: 130px; margin: auto;">
                        <b-button class="btn-haaukins" @click="areYouSure = true">Delete Profile</b-button>
                        <b-col md="12" v-if="areYouSure">
                          <b-row style="width: 185px; position: relative; left: -55px; margin-top: 5px">
                            <b-col md="2" style="padding: 0; width: 85px; margin: auto;">
                              <b-button style="background-color: green!important; border-style: none;" class="btn-haaukins"  @click="deleteProfile">Confirm</b-button>
                            </b-col>
                            <b-col md="2" style="padding: 0; width: 85px; margin: auto;">
                              <b-button style="background-color: #df3131!important; border-style: none;" class="btn-haaukins" @click="areYouSure = false">Cancel</b-button>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-col>
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="4">
                        <div class="text-center" style="margin-top: 10px">
                          <h4>Currently in profile</h4>
                        </div>
                        <div class="challenges customscroll">
                          <b-col
                              md="10"
                              v-for="(challenge, index) in profileForUpdate.challenges"
                              :key="challenge"
                              class="profile-chal text-center"
                              v-on:click="removeFromProfile(challenge)"
                          >
                            <template v-if="challenge.secret">
                              <b-icon :id="challenge.tag+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                              <b-tooltip :target="challenge.tag+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                            </template>
                            {{ challenge.name }}
                          </b-col>
                        </div>
                      </b-col>
                      <b-col md="8" class="customscroll" style="margin-top: 10px">
                        <b-row>
                          <b-col md="10" class="text-center" style="margin: auto">
                            <h4>Challenges not in profile</h4>
                          </b-col>
                        </b-row>
                        <b-row style="overflow-x: auto; margin-right: 5px; margin-left: 5px" class="customscroll">
                          <div class="nav flex-nowrap nav-pills sticky-top" id="challengesCategory2" role="tablist"
                               style="padding-bottom: 5px">
                            <template v-for="(category, index) in profileForUpdate.categories">
                              <template v-if="index === 0">
                                <a :key="category"
                                   class="nav-link active show"
                                   :id="category.tag+profileIndex+'-tab'"
                                   data-toggle="pill"
                                   :href="'#'+category.tag+profileIndex"
                                   :aria-controls="category.tag+profileIndex"
                                   aria-selected="true"
                                >
                                  {{ category.name }}
                                </a>
                              </template>
                              <template v-else>
                                <a :key="category"
                                   class="nav-link"
                                   :id="category.tag+profileIndex+'-tab'"
                                   data-toggle="pill"
                                   :href="'#'+category.tag+profileIndex"
                                   :aria-controls="category.tag+profileIndex"
                                   aria-selected="false"
                                >
                                  {{ category.name }}
                                </a>
                              </template>
                            </template>
                          </div>
                        </b-row>
                        <b-row>
                          <div class="tab-content" id="v-pills-tabContent2">
                            <template v-for="(category, index) in profileForUpdate.categories">
                              <template v-if="index === 0">
                                <div
                                    v-bind:key="category"
                                    class="customscroll challenges-container tab-pane fade active show"
                                    :id="category.tag+profileIndex"
                                    role="tabpanel"
                                    :aria-labelledby="category.tag+profileIndex+'-tab'"
                                >
                                  <b-container :key="category" class="category-container text-center">
                                    <b-col md="10" class="profile-chal" v-for="(challenge, index) in category.challenges" :key="challenge" v-on:click="addToProfile(challenge)">
                                      <template v-if="challenge.secret">
                                        <b-icon :id="category.tag+'-'+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                                        <b-tooltip :target="category.tag+'-'+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                                      </template>
                                      {{ challenge.text }}
                                    </b-col>
                                  </b-container>
                                </div>
                              </template>
                              <template v-else>
                                <div
                                    v-bind:key="category"
                                    class="tab-pane fade customscroll challenges-container"
                                    :id="category.tag+profileIndex"
                                    role="tabpanel"
                                    :aria-labelledby="category.tag+profileIndex+'-tab'"
                                >
                                  <b-container :key="category" class="category-container text-center">
                                    <b-col md="10" class="profile-chal" v-for="(challenge, index) in category.challenges" :key="challenge" v-on:click="addToProfile(challenge)">
                                      <template v-if="challenge.secret">
                                        <b-icon :id="category.tag+'-'+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                                        <b-tooltip :target="category.tag+'-'+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                                      </template>
                                      {{ challenge.text }}
                                    </b-col>
                                  </b-container>
                                </div>
                              </template>
                            </template>
                          </div>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>
              </template>
              <template v-else>
                <div
                    v-bind:key="profile"
                    class="tab-pane fade"
                    :id="'tab'+profileIndex"
                    role="tabpanel"
                    :aria-labelledby="'tab-'+profileIndex"
                >
                  <b-container :key="profile" class="category-container">
                    <b-row>
                      <h3 style="margin: auto;">Selected profile: {{ profile.name }}</h3>
                      <b-col md="12" class="text-center">
                        You can add or remove challenges from a profile by simply clicking on the challenges you wish to add/remove.
                      </b-col>
                      <b-col md="2" style="padding: 0; max-width: 130px; margin: auto;">
                        <b-button class="btn-haaukins" :disabled="!updateAvailable" @click="updateProfile">Update Profile</b-button>
                      </b-col>
                      <b-col md="2" style="padding: 0; max-width: 130px; margin: auto;">
                        <b-button class="btn-haaukins" @click="areYouSure = true">Delete Profile</b-button>
                        <b-col md="12" v-if="areYouSure">
                          <b-row style="width: 185px; position: relative; left: -55px; margin-top: 5px">
                            <b-col md="2" style="padding: 0; width: 85px; margin: auto;">
                              <b-button style="background-color: green!important; border-style: none;" class="btn-haaukins"  @click="deleteProfile">Confirm</b-button>
                            </b-col>
                            <b-col md="2" style="padding: 0; width: 85px; margin: auto;">
                              <b-button style="background-color: #df3131!important; border-style: none;" class="btn-haaukins" @click="areYouSure = false">Cancel</b-button>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-col>
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="4">
                        <div class="text-center" style="margin-top: 10px">
                          <h4>Currently in profile</h4>
                        </div>
                        <div class="challenges customscroll">
                          <b-col
                              md="10"
                              v-for="(challenge, index) in profileForUpdate.challenges"
                              :key="challenge"
                              class="profile-chal text-center"
                              v-on:click="removeFromProfile(challenge)"
                          >
                            <template v-if="challenge.secret">
                              <b-icon :id="challenge.tag+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                              <b-tooltip :target="challenge.tag+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                            </template>
                            {{ challenge.name }}
                          </b-col>
                        </div>
                      </b-col>
                      <b-col md="8" class="customscroll" style="margin-top: 10px">
                        <b-row>
                          <b-col md="10" class="text-center" style="margin: auto">
                            <h4>Challenges not in profile</h4>
                          </b-col>
                        </b-row>
                        <b-row style="overflow-x: auto; margin-right: 5px; margin-left: 5px" class="customscroll">
                          <div class="nav flex-nowrap nav-pills sticky-top" id="challengesCategory" role="tablist"
                               style="padding-bottom: 5px">
                            <template v-for="(category, index) in profileForUpdate.categories">
                              <template v-if="index === 0">
                                <a :key="category"
                                   class="nav-link active show"
                                   :id="category.tag+profileIndex+'-tab'"
                                   data-toggle="pill"
                                   :href="'#'+category.tag+profileIndex"
                                   :aria-controls="category.tag+profileIndex"
                                   aria-selected="true"
                                >
                                  {{ category.name }}
                                </a>
                              </template>
                              <template v-else>
                                <a :key="category"
                                   class="nav-link"
                                   :id="category.tag+profileIndex+'-tab'"
                                   data-toggle="pill"
                                   :href="'#'+category.tag+profileIndex"
                                   :aria-controls="category.tag+profileIndex"
                                   aria-selected="false"
                                >
                                  {{ category.name }}
                                </a>
                              </template>
                            </template>
                          </div>
                        </b-row>
                        <b-row>
                          <div class="tab-content" id="v-pills-tabContent3">
                            <template v-for="(category, index) in profileForUpdate.categories">
                              <template v-if="index === 0">
                                <div
                                    v-bind:key="category"
                                    class="customscroll challenges-container tab-pane fade active show"
                                    :id="category.tag+profileIndex"
                                    role="tabpanel"
                                    :aria-labelledby="category.tag+profileIndex+'-tab'"
                                >
                                  <b-container :key="category" class="category-container text-center">
                                    <b-col md="10" class="profile-chal" v-for="(challenge, index) in category.challenges" :key="challenge" v-on:click="addToProfile(challenge)">
                                      <template v-if="challenge.secret">
                                        <b-icon :id="category.tag+'-'+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                                        <b-tooltip :target="category.tag+'-'+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                                      </template>
                                      {{ challenge.text }}
                                    </b-col>
                                  </b-container>
                                </div>
                              </template>
                              <template v-else>
                                <div
                                    v-bind:key="category"
                                    class="tab-pane fade customscroll challenges-container"
                                    :id="category.tag+profileIndex"
                                    role="tabpanel"
                                    :aria-labelledby="category.tag+profileIndex+'-tab'"
                                >
                                  <b-container :key="category" class="category-container text-center">
                                    <b-col md="10" class="profile-chal" v-for="(challenge, index) in category.challenges" :key="challenge" v-on:click="addToProfile(challenge)">
                                      <template v-if="challenge.secret">
                                        <b-icon :id="category.tag+'-'+index+profileIndex" icon="exclamation-triangle-fill" variant="danger"></b-icon>
                                        <b-tooltip :target="category.tag+'-'+index+profileIndex" triggers="hover">Challenge is secret</b-tooltip>
                                      </template>
                                      {{ challenge.text }}
                                    </b-col>
                                  </b-container>
                                </div>
                              </template>
                            </template>
                          </div>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>
              </template>
            </template>
          </div>
        </div>
      </b-row>
      </template>
      <template v-else-if="loaderIsActive">
        <div v-if="true" class="alert myalert-loading alert-dismissible">
          <div class="d-inline mr-2">
            <img class="loading-logo" src="../assets/bluelogo.png" width="50" height="50">
          </div>
          <div class="d-inline mr-2">Loading profiles</div>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="top: 13px;">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </template>
      <template v-else-if="noProfiles">
        <b-row class="text-center">
          <b-col md="12">
            <b-alert variant="danger" show>
              No profiles are currently available. To add a challenge profile, please visit the challenges page. You can select the challenges you like for your profile and afterwards save it.
            </b-alert>
          </b-col>
        </b-row>
      </template>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {SaveProfileRequest, DeleteProfileRequest} from "daemon_pb";
import {daemonclient, API_ENDPOINT} from "../App";

export default {
  name: "Challenges",
  components: {Footer, Navbar},
  data: function () {
    return {
      alert: null,
      variant: null,
      dismissCountDown: 0,
      dismissSecs: 5,
      categories: [],
      cat: '',
      updateAvailable: false,
      childrenChallenges: '',
      profileForUpdate: [],
      profiles: [],
      areYouSure: false,
      showSelected: true,
      secretChallenges: null,
      loaderIsActive: true,
      noProfiles: false,
    }
  },
  created: function () {
    this.getCategories();
  },
  methods: {
    updateSecret: function () {
      this.profileForUpdate.secret = false
      const that = this
      this.profileForUpdate.challenges.forEach(function (challenge) {
        //window.console.log("Checking if", challenge.tag, "is in secretchallenges")
        let secret = that.secretChallenges.get(challenge.tag)
        if (secret) {
          that.profileForUpdate.secret = true
        }
      })
      //window.console.log("profile secret is now", this.profileForUpdate.secret)
    },
    removeItem: function(array, key, value) {
      const index = array.findIndex(obj => obj[key] === value)
      return index >= 0 ? [
        ...array.slice(0, index),
        ...array.slice(index+1)
      ] : array;
    },
    countDownChanged: function (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert: function (variant) {
      this.variant = variant
      this.dismissCountDown = this.dismissSecs
    },
    deleteProfile: function() {
      //window.console.log("Deleting profile", this.profileForUpdate.name)
      const that = this
      let getRequest = new DeleteProfileRequest()
      getRequest.setName(this.profileForUpdate.name)

      const call = daemonclient.deleteProfile(getRequest, {Token: localStorage.getItem("user")});

      call.on('data', function(response){
        window.console.log("Data response: ", response)
      });
      call.on('error', function(response){
        that.alert = response.message
        that.showAlert("danger")
        //window.console.log("Error response: ", response)
      });
      call.on('status', function(response){
        //window.console.log("Status response: ", response)
        if (response.details == "") {
          that.profiles = that.removeItem(that.profiles, 'name', that.profileForUpdate.name)
          that.areYouSure = false
          that.alert = "Profile \"" + that.profileForUpdate.name + "\" successfully deleted"
          that.setProfileForUpdate(that.profiles[0])
          that.showAlert("success")
          setTimeout(function (){
            if(!that.profiles.length){
              that.noProfiles = true
            }
          }.bind(that), 5000)
        }
      });
    },
    updateProfile: function() {
      //window.console.log("Updating profile", this.profileForUpdate.name)
      const that = this
      let getRequest = new SaveProfileRequest()
      getRequest.setName(this.profileForUpdate.name)
      getRequest.setSecret(this.profileForUpdate.secret)
      this.profileForUpdate.challenges.forEach(function(chal){
        let challenge = new SaveProfileRequest.Challenge()
        challenge.setTag(chal.tag)
        challenge.setName(chal.name)
        getRequest.addChallenges(challenge)
      })

      const call = daemonclient.editProfile(getRequest, {Token: localStorage.getItem("user")});

      call.on('data', function(response){
        window.console.log("Data response: ", response)
      });
      call.on('error', function(response){
        that.alert = response.message
        that.showAlert("danger")
        //window.console.log("Error response: ", response)
      });
      call.on('status', function(response){
        //window.console.log("Status response: ", response)
        if (response.details == "") {
          let index = that.profiles.findIndex(obj => obj['name'] === that.profileForUpdate.name)
          that.profiles[index].challenges = that.profileForUpdate.challenges
          that.profiles[index].secret = that.profileForUpdate.secret
          that.setProfileForUpdate(that.profiles[index])
          that.checkIfUpdateAvailable()
          that.alert = "Profile successfully updated"
          that.showAlert("success")
        }
      });
    },
    checkIfUpdateAvailable: function() {
      const that = this
      this.updateAvailable = true
      let identical = true
      let index = this.profiles.findIndex(obj => obj["name"] === that.profileForUpdate.name)
      if (index >= 0) {
        //window.console.log("Found profile at index", index)
        that.profileForUpdate.challenges.forEach(function(challenge){
          let i = that.profiles[index].challenges.findIndex(obj => obj['tag'] === challenge.tag)
          if (i < 0) {
            identical = false
          }
        })
      }
      if (identical && this.profiles[index].challenges.length == this.profileForUpdate.challenges.length) {
        this.updateAvailable = false
      } else if (this.profileForUpdate.challenges.length == 0) {
        this.updateAvailable = false
      }
    },
    addToProfile: function(challenge){
      //window.console.log("Adding challenge", challenge, "to profile", this.profileForUpdate.name)
      const that = this
      let chal = {tag: challenge.value, secret: challenge.secret, name: challenge.name}
      this.profileForUpdate.challenges.push(chal)
      this.profileForUpdate.categories.forEach(function(category){
        category.challenges.forEach(function(chal){
          if (challenge.value === chal.value) {
            category.challenges = that.removeItem(category.challenges, "value", challenge.value)
          }
        })
      })
      this.checkIfUpdateAvailable()
      this.updateSecret()
      //window.console.log("Profile for update is now: ",this.profileForUpdate)
    },
    removeFromProfile: function(challenge) {
      //window.console.log("Remove Challenge", challenge, "from profile", this.profileForUpdate.name)
      const that = this
      this.categories.forEach(function(category, catIndex){
        let index = category.challenges.findIndex(obj => obj['value'] === challenge.tag)
        if (index >= 0){
          let chal = JSON.parse(JSON.stringify(category.challenges[index]))
          that.profileForUpdate.categories[catIndex].challenges.push(chal)
        }
      })
      this.profileForUpdate.challenges = this.removeItem(this.profileForUpdate.challenges, 'tag', challenge.tag)
      this.checkIfUpdateAvailable()
      this.updateSecret()
      //window.console.log("Profile for update is now: ",this.profileForUpdate)
    },
    setProfileForUpdate: function(profile) {
      //window.console.log("Setting profileForUpdate to", profile)
      if(this.profiles.length) {
        this.areYouSure = false
        const that = this
        let categories = JSON.parse(JSON.stringify(that.categories)) // Creates a copy of this.categories
        let challenges = JSON.parse(JSON.stringify(profile.challenges)) // Creates a copy of this.categories
        let name = JSON.parse(JSON.stringify(profile.name))
        let secret = JSON.parse(JSON.stringify(profile.secret))
        this.profileForUpdate = []
        this.profileForUpdate = {name: name, secret: secret, challenges: challenges, categories: categories}
        this.profileForUpdate.challenges.forEach(function (pchallenge) {
          that.profileForUpdate.categories.forEach(function (category) {
            let index = category.challenges.findIndex(obj => obj['name'] === pchallenge.name)
            if (index >= 0) {
              //window.console.log("Found", pchallenge.name, "in category",category,"removing them from Challenges not in profile")
              category.challenges = that.removeItem(category.challenges, 'value', pchallenge.tag)
            }
          })
        })
        this.checkIfUpdateAvailable()
      }
    },
    getProfiles: async function () {
      const that = this
      this.profiles = []
      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        }
      }
      await fetch(API_ENDPOINT+"/admin/profiles/list", opts)
        .then(response => response.json())
        .then(response => {
          that.profiles = response['profiles'] 
          // window.console.log("Profiles: "+JSON.stringify(that.profiles))
          that.profiles.forEach(function(profile){
            profile['challenges'].forEach(function(chl){
              let secret = that.secretChallenges.get(chl.tag)
              if (secret) {
                chl.secret = true
              }
            })
          })
          that.setProfileForUpdate(that.profiles[0])
          if (!that.profiles.length) {
            that.noProfiles = true
          }
          setTimeout(function (){
            that.loaderIsActive = false
          }.bind(that), 5000)
        
        })
        .catch(error => {
          window.console.log("/admin/profiles/list error:", error)
          that.error = error
          that.loaderIsActive = false
        })
    },
   
    getCategories: function () {
      // Getting categories first.
      const that = this

      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        },
      };
       fetch(API_ENDPOINT+'/admin/categories/list', opts)
      .then(response => response.json())
      .then(response => {
        
        response['categories'].forEach(function(element){
            let tag = element['tag']
            let name = element['name']
            let description = element['catDescription']
            let category = {
              tag: tag,
              name: name,
              catDesc: description,
              challenges: [],
              taglist: [],
              filteredItems: [],
              filterOn: false,
              difficulties: [
                {name: "Very Easy", enabled: false},
                {name: "Easy", enabled: false},
                {name: "Medium", enabled: false},
                {name: "Hard", enabled: false},
                {name: "Very Hard", enabled: false}
              ]}
            that.categories.push(category)
          })
          // window.console.log("Categories: "+JSON.stringify(this.categories))
          // Rearranging so if starters cat is present and not index 0 it gets moved to index 0
        if (that.categories[0].tag != "ST") {
          that.categories.forEach(function (category, index) {
            if (category.tag == "ST") {
              let tempCat = that.categories[0]
              //window.console.log("Found Starters category. Rearranging array to display starters first") // Debugging
              //window.console.log("0 index category is: ", that.categories[0].name," and ST category has index: ",index) // Debugging
              that.categories[0] = []
              that.categories[0] = that.categories[index]
              that.categories[index] = []
              that.categories[index] = tempCat
            }
          })
        }
        //First category info always shown when modal is opened
        //Inserting exercises into categories list
        that.getExercises()
      }).catch(error => {
        window.console.log("profiles.vue /admin/categories/list error:", error)
        that.error = error
      })
    },
    getExercises: function(){
      const that = this
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": localStorage.getItem("user")
          } 
        }
      this.secretChallenges = new Map()

      fetch(API_ENDPOINT + "/admin/exercise/list", opts)
        .then(res => res.json())
        .then(res => {
              let exerciseList = res['exercises']
              exerciseList.forEach(function (element) {
              let tag = element['tags'][0]
              let name = element['name']
              let orgDesc = element['orgdescription'] 
              let secret = element['secret']
              let childrenChallengesObj = element['exerciseinfo']

              that.childrenChallenges = "  (";
              let totalPoints = 0; 
              for (let i=0; i<childrenChallengesObj.length; i++){
                that.cat = childrenChallengesObj[i]['category']
                that.childrenChallenges += childrenChallengesObj[i]['name'] + ", ";
                totalPoints += childrenChallengesObj[i]['points'];
              }
              let averagePoints = totalPoints / exerciseList.length;
              let averageDifficulty = ''   
              let difficultytag = '' 
              if (averagePoints < 21){
                averageDifficulty = 'Very Easy'
                difficultytag = 'veryeasy'
              } else if (averagePoints >= 21 && averagePoints < 41){
                averageDifficulty = 'Easy'
                difficultytag = 'easy'
              } else if (averagePoints >= 41 && averagePoints < 61){
                averageDifficulty = 'Medium'
                difficultytag = 'medium'
              } else if (averagePoints >= 61 && averagePoints < 81){
                averageDifficulty = 'Hard'
                difficultytag = 'hard'
              } else if (averagePoints >= 81 && averagePoints <= 100) {
                averageDifficulty = 'Very Hard'
                difficultytag = 'veryhard'
              }

              that.childrenChallenges = that.childrenChallenges.substring(0, that.childrenChallenges.length - 2) + ")";
              if (exerciseList.length == 1){
                that.childrenChallenges='';
              }

              let parentChallenge = {
                text: name+that.childrenChallenges, 
                value: tag, 
                name: name, 
                orgDesc: orgDesc,
                isInfoShown: false,
                secret: secret,
                difficulty: averageDifficulty,
                difficultyTag: difficultytag
              };
              if (secret) {
                that.secretChallenges.set(tag, true)
              }

              that.categories.forEach(function (category) {
                if (that.cat == category.name) {
                  category.challenges.push(parentChallenge)
                  category.taglist.push(parentChallenge.tag)
                }
              })
              that.getProfiles()
            });
      })
      .catch(err => {
       this.error = err
      }
      )
    },
  }
}
</script>

<style scoped>
.category-container {
  margin: 0 0 0 0;
  padding: 10px;
}

.difficulty p {
  margin: 10px;
}

.info-container {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 212, 218);
  border-image: initial;
  border-radius: 0.35rem;
  margin-top: 20px;
  height: 450px;
}

.challenges {
  margin-top: 10px;
  overflow-y: auto;
  max-height: 380px;
}

.nav-link {
  color: #211a52 !important;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 165px;
}

.nav-link.active {
  color: #fff !important;
  background-color: #211a52 !important;
  border-color: #211a52 !important;
}

.customscroll::-webkit-scrollbar {
  background-color: #d8d8d8;
  width: 5px;
  height: 5px
}

.customscroll::-webkit-scrollbar-track {
  background-color: #d8d8d8;
}

/* scrollbar itself */
.customscroll::-webkit-scrollbar-thumb {
  background-color: #221d52;
  border-radius: 16px;
}

/* set button(top and bottom of the scrollbar) */
.customscroll::-webkit-scrollbar-button {
  display: none;
}

.profile-chal{
  border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 212, 218);
  border-image: initial;
  border-radius: 0.35rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

.profile-chal:hover {
  background-color: #ced4da;
  cursor: pointer;
}

.challenges-container{
  width: 600px;
  overflow-y: auto;
  max-height: 322px;
  margin-top: 10px;
}

h3 {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
</style>