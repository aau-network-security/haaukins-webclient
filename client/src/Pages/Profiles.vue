<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <b-row style="margin-bottom: 20px">
        <h3 class="float-left font-weight-bold text-gray-800 mb-1">Available Challenge Profiles</h3>
      </b-row>
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
                  {{ profile.name }}
                </a>
              </template>
            </template>
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="v-pills-tabContent">
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
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="4">
                        <div class="text-center" style="margin-top: 10px">
                          <h4>Currently in profile</h4>
                        </div>
                        <div class="challenges customscroll">
                          <b-col
                              md="10"
                              v-for="challenge in profileForUpdate.challenges"
                              :key="challenge"
                              class="profile-chal text-center"
                              v-on:click="removeFromProfile(challenge)"
                          >
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
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="4">
                        <div class="text-center" style="margin-top: 10px">
                          <h4>Currently in profile</h4>
                        </div>
                        <div class="challenges customscroll">
                          <b-col
                              md="10"
                              v-for="challenge in profileForUpdate.challenges"
                              :key="challenge"
                              class="profile-chal text-center"
                              v-on:click="removeFromProfile(challenge)"
                          >
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
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Empty, SaveProfileRequest, DeleteProfileRequest} from "daemon_pb";
import {daemonclient} from "../App";

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
    }
  },
  created: function () {
    this.getCategories();
  },
  methods: {
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
      window.console.log("Deleting profile", this.profileForUpdate.name)
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
        window.console.log("Error response: ", response)
      });
      call.on('status', function(response){
        window.console.log("Status response: ", response)
        if (response.details == "") {
          that.profiles = that.removeItem(that.profiles, 'name', that.profileForUpdate.name)
          that.areYouSure = false
          that.alert = "Profile \"" + that.profileForUpdate.name + "\" successfully deleted"
          that.setProfileForUpdate(that.profiles[0])
          that.showAlert("success")
        }
      });
    },
    updateProfile: function() {
      window.console.log("Updating profile", this.profileForUpdate.name)
      const that = this
      let getRequest = new SaveProfileRequest()
      getRequest.setName(this.profileForUpdate.name)
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
        window.console.log("Error response: ", response)
      });
      call.on('status', function(response){
        window.console.log("Status response: ", response)
        if (response.details == "") {
          let index = that.profiles.findIndex(obj => obj['name'] === that.profileForUpdate.name)
          that.profiles[index].challenges = that.profileForUpdate.challenges
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
        window.console.log("Found profile at index", index)
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
      window.console.log("Adding challenge", challenge, "to profile", this.profileForUpdate.name)
      const that = this
      let chal = {tag: challenge.value, name: challenge.name}
      this.profileForUpdate.challenges.push(chal)
      this.profileForUpdate.categories.forEach(function(category){
        category.challenges.forEach(function(chal){
          if (challenge.value === chal.value) {
            category.challenges = that.removeItem(category.challenges, "value", challenge.value)
          }
        })
      })
      this.checkIfUpdateAvailable()
      window.console.log("Profile for update is now: ",this.profileForUpdate)
    },
    removeFromProfile: function(challenge) {
      window.console.log("Remove Challenge", challenge, "from profile", this.profileForUpdate.name)
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
      window.console.log("Profile for update is now: ",this.profileForUpdate)
    },
    setProfileForUpdate: function(profile) {
      //window.console.log("Setting profileForUpdate to", profile)
      this.areYouSure = false
      const that = this
      let categories = JSON.parse(JSON.stringify(that.categories)) // Creates a copy of this.categories
      let challenges = JSON.parse(JSON.stringify(profile.challenges)) // Creates a copy of this.categories
      let name = JSON.parse(JSON.stringify(profile.name))
      this.profileForUpdate = []
      this.profileForUpdate = {name: name, challenges: challenges, categories: categories}
      this.profileForUpdate.challenges.forEach(function(pchallenge){
        that.profileForUpdate.categories.forEach(function(category){
          let index = category.challenges.findIndex(obj => obj['name'] === pchallenge.name)
          if (index >= 0) {
            //window.console.log("Found", pchallenge.name, "in category",category,"removing them from Challenges not in profile")
            category.challenges = that.removeItem(category.challenges, 'value', pchallenge.tag)
          }
        })
      })
      this.checkIfUpdateAvailable()
     // window.console.log("ProfileForUpdate is now", this.profileForUpdate)
    },
    getProfiles: function () {
      const that = this
      this.profiles = []
      let getRequest = new Empty
      daemonclient.listProfiles(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        window.console.log(err)
        let profileListObj = response.getProfilesList();
        profileListObj.forEach(function (element) {
          let name = element.getName()
          let challengesListObj = element.getChallengesList()
          let challenges = []
          challengesListObj.forEach(function (element) {
            let tag = element.getTag()
            let name = element.getName()
            let challenge = {tag: tag, name: name}
            challenges.push(challenge)
          })
          let profile = {name: name, challenges: challenges}
          //window.console.log("Got profile", profile)
          that.profiles.push(profile)
        })
        //window.console.log(that.categories)
        that.setProfileForUpdate(that.profiles[0])
      })
    },
    getCategories: function () {
      // Getting categories first.
      let getRequest = new Empty();
      const that = this
      daemonclient.listCategories(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        that.error = err
        let categoryListObj = response.getCategoriesList();
        categoryListObj.forEach(function (element) {
          let tag = element.getTag()
          let name = element.getName()

          let description = element.getCatdescription()
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
            ]
          }
          //window.console.log(category)
          that.categories.push(category)
        })
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
      })
    },
    getExercises: function () {
      let getRequest = new Empty();
      const that = this
      daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        this.error = err;
        let exercisesListObj = response.getExercisesList();
        exercisesListObj.forEach(function (element) {
          let childrenChallengesObj = element.getExerciseinfoList();
          that.childrenChallenges = "   (";
          let totalPoints = 0;
          for (let i = 0; i < childrenChallengesObj.length; i++) {
            that.cat = childrenChallengesObj[i].getCategory();
            that.childrenChallenges += childrenChallengesObj[i].getName() + ", "
            totalPoints += childrenChallengesObj[i].getPoints();
          }
          let averagePoints = totalPoints / childrenChallengesObj.length
          let averageDifficulty = ''
          if (averagePoints < 21) {
            averageDifficulty = "Very Easy"
            //window.console.log("Challenge was very easy")
          } else if (averagePoints >= 21 && averagePoints < 41) {
            averageDifficulty = "Easy"
            //window.console.log("Challenge was easy")
          } else if (averagePoints >= 41 && averagePoints < 61) {
            averageDifficulty = "Medium"
            //window.console.log("Challenge was Medium")
          } else if (averagePoints >= 61 && averagePoints < 81) {
            averageDifficulty = "Hard"
            //window.console.log("Challenge was Hard")
          } else if (averagePoints >= 81 && averagePoints <= 100) {
            averageDifficulty = "Very Hard"
            //window.console.log("Challenge was Very Hard")
          }
          //window.console.log("Average difficulty: ", averageDifficulty, averagePoints)
          that.childrenChallenges = that.childrenChallenges.substring(0, that.childrenChallenges.length - 2)
          that.childrenChallenges += ")";
          if (childrenChallengesObj.length == 1) {
            that.childrenChallenges = '';
          }
          let taglist = element.getTagsList();
          let name = element.getName();
          let orgDesc = element.getOrgdescription()
          let secret = element.getSecret()
          let parentChallenge = {
            text: name + that.childrenChallenges,
            value: taglist[0],
            name: name,
            orgDesc: orgDesc,
            isInfoShown: false,
            secret: secret,
            difficulty: averageDifficulty
          };
          that.categories.forEach(function (category) {
            if (that.cat == category.name) {
              category.challenges.push(parentChallenge)
              category.taglist.push(taglist[0])
            }
          })
        })
        window.console.log(that.categories)
        that.getProfiles()
      });
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