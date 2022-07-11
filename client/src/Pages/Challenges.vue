<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <b-row style="margin-bottom: 20px">
        <h3 class="float-left font-weight-bold text-gray-800 mb-1">Available Challenges</h3>
      </b-row>
      <b-row>
        <div class="col-2 customscroll">
          <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist"
               aria-orientation="vertical">
            <template v-for="(category, index) in categories">
              <template v-if="index === 0">
                <a :key="category"
                   v-on:click="showOrgDescription(null)"
                   class="nav-link active show"
                   :id="category.tag+'-tab'"
                   data-toggle="pill"
                   :href="'#'+category.tag"
                   :aria-controls="category.tag"
                   aria-selected="true"
                >
                  {{ category.name }}
                </a>
              </template>
              <template v-else>
                <a :key="category"
                   v-on:click="showOrgDescription(null)"
                   class="nav-link"
                   :id="category.tag+'-tab'"
                   data-toggle="pill"
                   :href="'#'+category.tag"
                   :aria-controls="category.tag"
                   aria-selected="false"
                >
                  {{ category.name }}
                </a>
              </template>
            </template>
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="v-pills-tabContent">
            <template v-for="(category, index) in categories">
              <template v-if="index === 0">
                <div
                    v-bind:key="category"
                    class="tab-pane fade active show"
                    :id="category.tag"
                    role="tabpanel"
                    :aria-labelledby="category.tag+'-tab'"
                >
                  <b-container :key="category" class="category-container">
                    <b-row>
                      <b-col class="text-center" md="12" v-html="category.catDesc"></b-col>
                    </b-row>
                    <b-row class="text-center difficulties">
                      <b-col class="difficulty noselect" v-bind:class="{ active: difficulty.enabled }"
                             v-on:click="filterItems(category, difficulty)" v-for="difficulty in category.difficulties"
                             :key="difficulty">
                        <p>
                          <span class="dot" :class="difficulty.tag"></span>
                          {{ difficulty.name }}
                        </p>
                      </b-col>
                    </b-row>
                    <template v-if="profile.selectedChallenges.length > 0">
                      <b-row>
                        <b-col md="4" style="margin-top: 15px">
                          Save selected challenges as a profile? (Max: 20 chars in name)
                        </b-col>
                        <b-col md="1" style="margin-top: 15px; padding-left: 0px; left: -15px">
                          <div class="danger-icon">
                            <b-icon :id="category.tag+'profileinfo'" icon="info-circle"></b-icon>
                          </div>
                          <b-tooltip :target="category.tag+'profileinfo'" triggers="hover">You can select saved profiles
                            when creating a new event
                          </b-tooltip>
                        </b-col>
                        <template v-if="profile.secret">
                          <b-col md="1" style="margin-top: 15px; padding-left: 0px; left: -70px">
                            <b-icon :id="category.tag+'profsecret'+'-'+index" icon="exclamation-triangle-fill"
                                    variant="danger"></b-icon>
                            <b-tooltip :target="category.tag+'profsecret'+'-'+index" triggers="hover">Profile will be
                              saved as secret
                            </b-tooltip>
                          </b-col>
                        </template>
                      </b-row>
                      <b-row>
                        <b-col md="4">
                          <b-input v-model="profile.name"
                                   :state="!(profile.name.length == 0 || profile.name.length > 20)"
                                   placeholder="Name of profile"></b-input>
                        </b-col>
                        <b-col md="2" style="padding: 0; max-width: 130px;">
                          <b-button class="btn-haaukins"
                                    :disabled="(profile.name.length == 0 || profile.name.length > 20)"
                                    @click="saveProfile">Save Profile
                          </b-button>
                        </b-col>
                        <b-col style="padding: 0;">
                          <b-button class="btn-haaukins" @click="profile.selectedChallenges = []">Deselect All
                          </b-button>
                        </b-col>
                      </b-row>
                      <b-row>
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
                    </template>
                    <b-row class="info-container">
                      <b-col md="5" class="challenges customscroll">
                        <template v-if="!category.filterOn">
                          <b-form-checkbox-group
                              :id="category.tag"
                              v-model="profile.selectedChallenges"
                              :name="category.tag"
                              class="ml-4"
                              style="margin-left: 10px!important"
                              stacked
                          >
                            <div
                                v-for="(challenge, index) in category.challenges"
                                :key="challenge"
                                class="challenge"
                            >
                              <b-row>
                                <template v-if="secretChallenges.size">
                                  <template v-if="challenge.secret">
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                      <div class="danger-icon">
                                        <b-icon :id="category.tag+'-'+index" icon="exclamation-triangle-fill"
                                                variant="danger"></b-icon>
                                      </div>
                                      <b-tooltip :target="category.tag+'-'+index" triggers="hover">Challenge is secret
                                      </b-tooltip>
                                    </b-col>
                                  </template>
                                  <template v-else>
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                    </b-col>
                                  </template>
                                </template>
                                <b-col md="1" style="padding: 0; max-width: 25px;">
                                  <div v-on:click="showOrgDescription(challenge)">
                                    <b-icon class="info-icon" icon="info-circle"></b-icon>
                                  </div>
                                </b-col>
                                <b-col md="9" style="padding: 0;">
                                  <b-form-checkbox @change="updateSecret"
                                                   :value="{tag: challenge.value, name: challenge.name, secret: challenge.secret}">
                                    <span class="dot" :class="challenge.difficultytag"></span>
                                    {{ challenge.text }}
                                  </b-form-checkbox>
                                </b-col>
                              </b-row>
                            </div>
                          </b-form-checkbox-group>
                        </template>
                        <template v-else>
                          <b-form-checkbox-group
                              :id="category.tag"
                              v-model="profile.selectedChallenges"
                              :name="category.tag"
                              class="ml-4"
                              style="margin-left: 10px!important"
                              stacked
                          >
                            <div
                                v-for="(challenge, index) in category.filteredItems"
                                :key="challenge"
                                class="challenge"
                            >
                              <b-row>
                                <template v-if="secretChallenges.size">
                                  <template v-if="challenge.secret">
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                      <div class="danger-icon">
                                        <b-icon :id="category.tag+'-'+index" icon="exclamation-triangle-fill"
                                                variant="danger"></b-icon>
                                      </div>
                                      <b-tooltip :target="category.tag+'-'+index" triggers="hover">Challenge is secret
                                      </b-tooltip>
                                    </b-col>
                                  </template>
                                  <template v-else>
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                    </b-col>
                                  </template>
                                </template>
                                <b-col md="1" style="padding: 0; max-width: 25px;">
                                  <div v-on:click="showOrgDescription(challenge)">
                                    <b-icon class="info-icon" icon="info-circle"></b-icon>
                                  </div>
                                </b-col>
                                <b-col md="9" style="padding: 0;">
                                  <b-form-checkbox @change="updateSecret"
                                                   :value="{tag: challenge.value, name: challenge.name, secret: challenge.secret}">
                                    <span class="dot" :class="challenge.difficultytag"></span>
                                    {{ challenge.text }}
                                  </b-form-checkbox>
                                </b-col>
                              </b-row>
                            </div>
                          </b-form-checkbox-group>
                        </template>
                      </b-col>
                      <b-col md="7" class="chaldescs">
                        <template v-if="!showSelected || profile.selectedChallenges.length == 0">
                          <template v-for="category in categories">
                            <div
                                v-for="chal in category.challenges"
                                :key="chal"
                            >
                              <div class="chalInfo customscroll fade"
                                   v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }"
                                   v-html="chal.orgDesc"></div>
                            </div>
                          </template>
                        </template>
                        <tempalte v-else>
                          <b-row>
                            <b-col md="12" class="text-center">
                              <h3>Selected challenges</h3>
                            </b-col>
                          </b-row>
                          <b-row class="customscroll text-center" style="max-height: 372px; overflow-y: auto;">
                            <b-col v-on:click="removeFromProfile(challenge)" class="profile-chal" md="10"
                                   v-for="(challenge, index) in profile.selectedChallenges" :key="challenge">
                              <template v-if="challenge.secret">
                                <b-icon :id="category.tag+'chalsecret'+'-'+index" icon="exclamation-triangle-fill"
                                        variant="danger"></b-icon>
                                <b-tooltip :target="category.tag+'chalsecret'+'-'+index" triggers="hover">
                                  Challenge is secret
                                </b-tooltip>
                              </template>
                              {{ challenge.name }}
                            </b-col>
                          </b-row>
                        </tempalte>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>
              </template>
              <template v-else>
                <div
                    v-bind:key="category"
                    class="tab-pane fade"
                    :id="category.tag"
                    role="tabpanel"
                    :aria-labelledby="category.tag+'-tab'"
                >
                  <b-container :key="category" class="category-container">
                    <b-row>
                      <b-col class="text-center" md="12" v-html="category.catDesc"></b-col>
                    </b-row>
                    <b-row class="text-center difficulties">
                      <b-col class="difficulty noselect" v-bind:class="{ active: difficulty.enabled }"
                             v-on:click="filterItems(category, difficulty)" v-for="difficulty in category.difficulties"
                             :key="difficulty">
                        <p>
                          <span class="dot" :class="difficulty.tag"></span>
                          {{ difficulty.name }}
                        </p>
                      </b-col>
                    </b-row>
                    <template v-if="profile.selectedChallenges.length > 0">
                      <b-row>
                        <b-col md="4" style="margin-top: 15px">
                          Save selected challenges as a profile? (Max: 20 chars in name)
                        </b-col>
                        <b-col md="1" style="margin-top: 15px; padding-left: 0px; left: -15px">
                          <div class="danger-icon">
                            <b-icon :id="category.tag+'profileinfo'" icon="info-circle"></b-icon>
                          </div>
                          <b-tooltip :target="category.tag+'profileinfo'" triggers="hover">You can select saved profiles
                            when creating a new event
                          </b-tooltip>
                        </b-col>
                        <template v-if="profile.secret">
                          <b-col md="1" style="margin-top: 15px; padding-left: 0px; left: -70px">
                            <b-icon :id="category.tag+'profsecret'+'-'+index" icon="exclamation-triangle-fill"
                                    variant="danger"></b-icon>
                            <b-tooltip :target="category.tag+'profsecret'+'-'+index" triggers="hover">Profile will be
                              saved as secret
                            </b-tooltip>
                          </b-col>
                        </template>
                      </b-row>
                      <b-row>
                        <b-col md="4">
                          <b-input v-model="profile.name"
                                   :state="!(profile.name.length == 0 || profile.name.length > 20)"
                                   placeholder="Name of profile"></b-input>
                        </b-col>
                        <b-col md="2" style="padding: 0; max-width: 130px;">
                          <b-button class="btn-haaukins"
                                    :disabled="(profile.name.length == 0 || profile.name.length > 20)"
                                    @click="saveProfile">Save Profile
                          </b-button>
                        </b-col>
                        <b-col style="padding: 0;">
                          <b-button class="btn-haaukins" @click="profile.selectedChallenges = []">Deselect All
                          </b-button>
                        </b-col>
                      </b-row>
                      <b-row>
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
                    </template>
                    <b-row class="info-container">
                      <b-col md="5" class="challenges customscroll">
                        <template v-if="!category.filterOn">
                          <b-form-checkbox-group
                              :id="category.tag"
                              v-model="profile.selectedChallenges"
                              :name="category.tag"
                              class="ml-4"
                              style="margin-left: 10px!important"
                              stacked
                          >
                            <div
                                v-for="(challenge, index) in category.challenges"
                                :key="challenge"
                                class="challenge"
                            >
                              <b-row>
                                <template v-if="secretChallenges.size">
                                  <template v-if="challenge.secret">
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                      <div class="danger-icon">
                                        <b-icon :id="category.tag+'-'+index" icon="exclamation-triangle-fill"
                                                variant="danger"></b-icon>
                                      </div>
                                      <b-tooltip :target="category.tag+'-'+index" triggers="hover">Challenge is secret
                                      </b-tooltip>
                                    </b-col>
                                  </template>
                                  <template v-else>
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                    </b-col>
                                  </template>
                                </template>
                                <b-col md="1" style="padding: 0; max-width: 25px;">
                                  <div v-on:click="showOrgDescription(challenge)">
                                    <b-icon class="info-icon" icon="info-circle"></b-icon>
                                  </div>
                                </b-col>
                                <b-col md="9" style="padding: 0;">
                                  <b-form-checkbox @change="updateSecret"
                                                   :value="{tag: challenge.value, name: challenge.name, secret: challenge.secret}">
                                    <span class="dot" :class="challenge.difficultytag"></span>
                                    {{ challenge.text }}
                                  </b-form-checkbox>
                                </b-col>
                              </b-row>
                            </div>
                          </b-form-checkbox-group>
                        </template>
                        <template v-else>
                          <b-form-checkbox-group
                              :id="category.tag"
                              v-model="profile.selectedChallenges"
                              :name="category.tag"
                              class="ml-4"
                              style="margin-left: 10px!important"
                              stacked
                          >
                            <div
                                v-for="(challenge, index) in category.filteredItems"
                                :key="challenge"
                                class="challenge"
                            >
                              <b-row>
                                <template v-if="secretChallenges.size">
                                  <template v-if="challenge.secret">
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                      <div class="danger-icon">
                                        <b-icon :id="category.tag+'-'+index" icon="exclamation-triangle-fill"
                                                variant="danger"></b-icon>
                                      </div>
                                      <b-tooltip :target="category.tag+'-'+index" triggers="hover">Challenge is secret
                                      </b-tooltip>
                                    </b-col>
                                  </template>
                                  <template v-else>
                                    <b-col md="1" style="padding: 0; max-width: 25px;">
                                    </b-col>
                                  </template>
                                </template>
                                <b-col md="1" style="padding: 0; max-width: 25px;">
                                  <div v-on:click="showOrgDescription(challenge)">
                                    <b-icon class="info-icon" icon="info-circle"></b-icon>
                                  </div>
                                </b-col>
                                <b-col md="9" style="padding: 0;">
                                  <b-form-checkbox @change="updateSecret"
                                                   :value="{tag: challenge.value, name: challenge.name, secret: challenge.secret}">
                                    <span class="dot" :class="challenge.difficultytag"></span>
                                    {{ challenge.text }}
                                  </b-form-checkbox>
                                </b-col>
                              </b-row>
                            </div>
                          </b-form-checkbox-group>
                        </template>
                      </b-col>
                      <b-col md="7" class="chaldescs">
                        <template v-if="!showSelected || profile.selectedChallenges.length == 0">
                          <template v-for="category in categories">
                            <div
                                v-for="chal in category.challenges"
                                :key="chal"
                            >
                              <div class="chalInfo customscroll fade"
                                   v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }"
                                   v-html="chal.orgDesc"></div>
                            </div>
                          </template>
                        </template>
                        <template v-else>
                          <b-row>
                            <b-col md="12" class="text-center">
                              <h3>Selected challenges</h3>
                            </b-col>
                          </b-row>
                          <b-row class="customscroll text-center" style="max-height: 372px; overflow-y: auto;">
                            <b-col v-on:click="removeFromProfile(challenge)" class="profile-chal" md="10"
                                   v-for="(challenge, index) in profile.selectedChallenges" :key="challenge">
                              <template v-if="challenge.secret">
                                <b-icon :id="category.tag+'chalsecret'+'-'+index" icon="exclamation-triangle-fill"
                                        variant="danger"></b-icon>
                                <b-tooltip :target="category.tag+'chalsecret'+'-'+index" triggers="hover">
                                  Challenge is secret
                                </b-tooltip>
                              </template>
                              {{ challenge.name }}
                            </b-col>
                          </b-row>
                        </template>
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
import {Empty, SaveProfileRequest} from "daemon_pb";
import {daemonclient} from "../App";
import { API_ENDPOINT } from "../App.vue";

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
      childrenChallenges: '',
      profile: {name: "", secret: false, selectedChallenges: []},
      profiles: [],
      showSelected: true,
      secretChallenges: null,
      saveAble: false,
    }
  },
  created: function () {
    this.getCategories();
  },
  methods: {
    updateSecret: function () {
      this.profile.secret = false
      const that = this
      this.profile.selectedChallenges.forEach(function (challenge) {
        //window.console.log("Checking if", challenge.tag, "is in secretchallenges")
        let secret = that.secretChallenges.get(challenge.tag)
        if (secret) {
          that.profile.secret = true
        }
      })
      //window.console.log("profile secret is now", this.profile.secret)
    },
    countDownChanged: function (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert: function (variant) {
      this.variant = variant
      this.dismissCountDown = this.dismissSecs
    },
    removeFromProfile: function (challenge) {
      this.profile.selectedChallenges = this.removeItem(this.profile.selectedChallenges, "tag", challenge.tag)
      this.updateSecret()
    },
    getProfiles: function () {
      const that = this
      let getRequest = new Empty
      daemonclient.listProfiles(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        window.console.log(err)
        let profileListObj = response.getProfilesList();
        profileListObj.forEach(function (element) {
          let name = element.getName()
          let secret = element.getSecret()
          let challengesListObj = element.getChallengesList()
          let challenges = []
          challengesListObj.forEach(function (element) {
            let tag = element.getTag()
            let name = element.getName()
            let challenge = {tag: tag, name: name}
            challenges.push(challenge)
          })
          let profile = {name: name, secret: secret, challenges: challenges}
          //window.console.log("Got profile", profile)
          that.profiles.push(profile)
        })
      })
    },
    saveProfile: function () {
      //window.console.log("Saving profile")
      const that = this
      let index = this.profiles.findIndex(obj => obj['name'] === this.profile.name.trim())
      //window.console.log("Seing it profile exists:", index)
      if (index < 0) {
        let getRequest = new SaveProfileRequest();
        getRequest.setName(this.profile.name.trim())
        getRequest.setSecret(this.profile.secret)
        this.profile.selectedChallenges.forEach(function (chal) {
          let challenge = new SaveProfileRequest.Challenge()
          challenge.setTag(chal.tag)
          challenge.setName(chal.name)
          getRequest.addChallenges(challenge)
        })
        const call = daemonclient.saveProfile(getRequest, {Token: localStorage.getItem("user")});

        call.on('data', function (response) {
          window.console.log("Data response: ", response)
        });
        call.on('error', function (response) {
          that.alert = response.message
          that.showAlert("danger")
          //window.console.log("Error response: ", response)
        });
        call.on('status', function (response) {
          //window.console.log("Status response: ", response)
          if (response.details == "") {
            that.getProfiles()
            that.alert = "Profile successfully saved"
            that.showAlert("success")
          }
        });
      } else {
        this.alert = "Profile already exists, you can edit existing profiles from the profiles page"
        this.showAlert("danger")
      }
    },
    removeItem: function (array, key, value) {
      const index = array.findIndex(obj => obj[key] === value)
      return index >= 0 ? [
        ...array.slice(0, index),
        ...array.slice(index + 1)
      ] : array;
    },
    filterItems: function (category, difficulty) {
      difficulty.enabled = !difficulty.enabled
      const that = this
      if (difficulty.enabled) {
        category.challenges.forEach(function (challenge) {

          if (challenge.difficulty == difficulty.name) {
            category.filteredItems.push(challenge)
          }
        })
      } else {
        category.filteredItems.forEach(function (challenge) {
          //window.console.log(challenge, index)
          if (challenge.difficulty  == difficulty.name) {
            //window.console.log(challenge.difficulty, " Equals ", difficulty.name)
            //window.console.log("Removing challenge from filter: ", challenge.text)
            category.filteredItems = that.removeItem(category.filteredItems, "difficulty", difficulty.name)
          }
        })
      }
      category.filterOn = false
      category.difficulties.forEach(function (difficulty) {
        if (difficulty.enabled) {
          category.filterOn = true
        }
      })
      //window.console.log(category.filteredItems)
      //window.console.log(category, difficulty)
    },
    showOrgDescription: function (challenge) {
      window.console.log("Showing org description")
      const that = this
      // Emptying/resetting the description field
      if (challenge != null) {
        this.categories.forEach(function (category) {
          category.challenges.forEach(function (chal) {
            if (chal.value == challenge.value) {
              challenge.isInfoShown = !challenge.isInfoShown
            } else {
              chal.isInfoShown = false
            }
          })
        })
        if (challenge.isInfoShown) {
          this.showSelected = false
        } else {
          this.showSelected = true
        }
      } else {
        this.categories.forEach(function (category) {
          category.challenges.forEach(function (chal) {
            chal.isInfoShown = false
            that.showSelected = true
          })
        })
      }
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
              {name: "Very Easy", tag: "veryeasy", enabled: false},
              {name: "Easy", tag: "easy", enabled: false},
              {name: "Medium", tag: "medium", enabled: false},
              {name: "Hard", tag: "hard", enabled: false},
              {name: "Very Hard", tag: "veryhard", enabled: false}
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
              // window.console.log("Exercise: "+JSON.stringify(element['exerciseInfo']) )
              // window.console.log("Exercise: "+JSON.stringify(childrenChallengesObj) )
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

              that.getProfiles();
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

.difficulty {
  color: #211a52 !important;
  white-space: nowrap;
  width: 165px;
  border-radius: .25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #211a52 !important;
  margin: 0 20px 0 20px;
  cursor: pointer;
}

@media only screen and (max-width: 1200px) {
  .difficulty {
    margin: 0 10px 0 10px;
  }
}

.difficulty.active {
  color: #fff !important;
  background-color: #211a52 !important;
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
  margin-top: 20px;
  overflow-y: auto;
  max-height: 410px;
}

.challenge {
  margin: 5px;
}

.chaldescs {
  margin-top: 20px;
  max-height: 410px;
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

.chalInfo {
  overflow: hidden;
  max-height: 0;
  padding-right: 5px;
  visibility: hidden;
}

.chalInfo.visible {
  overflow-y: auto;
  visibility: visible;
  max-height: 410px;
}

.profile-chal {
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

h3 {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}

.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.veryeasy{
  background-color: #42bf18;
}

.dot.easy{
  background-color: #97c019;
}

.dot.medium{
  background-color: #d0c219;
}

.dot.hard{
  background-color: #d27d19;
}

.dot.veryhard{
  background-color: #d35819;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.info-icon{
  cursor: pointer;
}
</style>