<template>
  <b-modal @shown="resetDescriptionWindow()" ref="modal" id="create-event-modal" size="xl" centered hide-footer>
    <template v-slot:modal-title>Create a new Event</template>
    <form ref="form" @submit.stop.prevent="createEvent()">
      <b-carousel ref="createEventCarousel" :interval=0>
        <b-carousel-slide class="carousel-height">
          <template slot="img" class="h-100 text-center">
            <div class="row h-50">

              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color  selection-phase-div" v-on:click="selectedVPNOption(0)">
                  <h3 class="font-weight-bold">NO VPN</h3>
                  <p>Allows the user to connect Kali Linux machine on the browser.</p>
                </div>
              </div>

<!--              <div class="col-4 carousel-height d-table">-->
<!--                <div class="card card-body d-table-cell align-middle text-center border-aau-color selection-phase-div" v-on:click="selectedVPNOption(2)">-->
<!--                  <h3 class="font-weight-bold">VPN + BROWSER</h3>-->
<!--                  <p>Allows the user to connect Kali Linux machine on the browser and provide VPN connection.</p>-->
<!--                </div>-->
<!--              </div>-->

              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color selection-phase-div" v-on:click="selectedVPNOption(1)">
                  <h3 class="font-weight-bold">VPN ONLY</h3>
                  <p>Allows the users to connect the Lab using the VPN. Kali Linux machine on the browser will be not available.</p>
                </div>
              </div>

            </div>
          </template>
        </b-carousel-slide>
        <b-carousel-slide class="carousel-height">
          <template slot="img" class="h-100">
            <b-row>
              <b-col md="7">
                <b-row>
                  <b-col lg="7">
                    <b-row>
                      <b-col md="6">
                        <b-form-group
                            id="fieldset-eventName"
                            label="Event Name (Max: 20)"
                            label-for="eventName"
                        >
                          <b-form-input
                              id="eventName"
                              v-model="eventName"
                              :state="nameState"
                              type="text"
                              min="2"
                              max="20"
                              required
                          ></b-form-input>
                        </b-form-group>
                        <b-tooltip target="fieldset-eventName" triggers="hover">
                          The event Name showed in the Home page
                        </b-tooltip>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            id="fieldset-eventTag"
                            label="Event Tag"
                            label-for="eventTag"
                        >
                          <b-form-input
                              id="eventTag"
                              v-model="eventTag"
                              :state="tagState"
                              type="text"
                              required
                          ></b-form-input>
                        </b-form-group>
                        <b-tooltip target="fieldset-eventTag" triggers="hover">
                          Sub domain in which the event will be available
                        </b-tooltip>
                      </b-col>
                      <b-col md="6">
                        <div class="form-group">
                          <label for="eventStartTime">Expected Start Date</label>
                          <datepicker v-model="eventStartTime" placeholder="Select Start Date" id="eventStartTime" :disabledDates="disabledDates"></datepicker>
                          <b-tooltip target="eventStartTime" triggers="hover">
                            Date in which the Event should be available online
                          </b-tooltip>
                        </div>
                      </b-col>
                      <b-col md="6">
                        <div class="form-group">
                          <label for="eventFinishTime">Expected Finish Date</label>
                          <datepicker v-model="eventFinishTime" placeholder="Select Finish Date" id="eventFinishTime" :disabledDates="disabledDatesFinishTime()" :class="{ 'my-is-invalid': submitted && this.eventFinishTime == '' }"></datepicker>
                          <b-tooltip target="eventFinishTime" triggers="hover">
                            Date in which the Event is supposed to finish
                          </b-tooltip>
                        </div>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            id="fieldset-eventAvailability"
                            label="Event Availability"
                            label-for="eventAvailability"
                        >
                          <b-form-input
                              id="eventAvailability"
                              v-model="eventAvailability"
                              :state="availabilityState"
                              type="number"
                              min="1"
                              step="1"
                              required
                          ></b-form-input>
                        </b-form-group>
                        <b-tooltip target="fieldset-eventAvailability" triggers="hover">
                          Amount of labs to make available initially for the event
                        </b-tooltip>
                      </b-col>
                      <b-col md="6">
                        <b-form-group
                            id="fieldset-eventCapacity"
                            label="Event Capacity"
                            label-for="eventCapacity"
                        >
                          <b-form-input
                              id="eventCapacity"
                              v-model="eventCapacity"
                              type="number"
                              :state="capacityState"
                              min="2"
                              step="1"
                              required
                          ></b-form-input>
                        </b-form-group>
                        <b-tooltip target="fieldset-eventCapacity" triggers="hover">
                          Maximum amount of labs/teams
                        </b-tooltip>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col v-if="frontends" lg="5" class="myfrontends-field">
                    <span>Frontends</span>
                    <div class="frontends-field-modal p-2 mt-2 vertical-center" :class="{ 'my-is-invalid': submitted && this.selectedFrontends == null }">
                      <b-form-group>
                        <b-form-radio-group
                            id="frontends"
                            v-model="selectedFrontends"
                            :options="frontends"
                            :state="frontendState"
                            name="frontends"
                            class="ml-4"
                            aria-label="Individual flavours"
                            stacked
                        ></b-form-radio-group>
                      </b-form-group>
                      <b-tooltip target="frontends" triggers="hover">
                        List of available Frontends
                      </b-tooltip>
                    </div>
                    <b-row>
                      <b-col md="9">
                        <b-form-group
                            id="fieldset-secretKey"
                            label="Secret Key (Optional)"
                            label-for="secretKey"
                        >
                          <b-form-input
                              id="secretKey"
                              v-model="secretKey"
                              type="text"
                          ></b-form-input>
                        </b-form-group>
                        <b-tooltip target="fieldset-secretKey" triggers="hover">
                          OPTIONAL: Users will need this key to signup to the event.
                        </b-tooltip>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
                <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
                  <b-form-group>
                    <div class="challenges-field-modal frontends-field-modal p-3 mt-0" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
                      <div class="row">
                        <div class="col-4 customscroll" style="height: 240px; overflow-y: auto;">
                          <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist" aria-orientation="vertical">
                            <template v-for="(category, index) in categories">
                              <template v-if="index === 0">
                                <a :key="category"
                                   v-on:click="showCatDescription(category.tag)"
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
                                   v-on:click="showCatDescription(category.tag)"
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
                        <div class="col-8 customscroll" style="height: 240px; overflow-y: auto;">
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
                                  <b-form-checkbox-group
                                      :id="category.tag"
                                      v-model="selectedChallenges"
                                      :name="category.tag"
                                      class="ml-4"
                                      style="margin-left: 0px!important"
                                      stacked
                                  >
                                    <!-- {{ selectedChallenges }} Debugging -->
                                    <div
                                        v-for="(text, index) in category.challenges"
                                        :key="text"
                                        class="challenge-container"
                                    >
                                      <div class="checkbox-container">
                                        <template v-if="secretChallenges.size">
                                          <template v-if="text.secret">
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
                                          <div v-on:click="showOrgDescription(text)">
                                            <b-icon class="info-icon" icon="info-circle"></b-icon>
                                          </div>
                                        </b-col>
                                        <b-form-checkbox
                                            :value="text.value"
                                        >
                                          <span class="dot" :class="text.difficultytag"></span>
                                          {{ text.text }}
                                        </b-form-checkbox>
                                      </div>
                                    </div>
                                  </b-form-checkbox-group>
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
                                  <b-form-checkbox-group
                                    :id="category.tag"
                                    v-model="selectedChallenges"
                                    :name="category.tag"
                                    class="ml-4"
                                    style="margin-left: 0px!important"
                                    stacked
                                  >
                                    <!-- {{ selectedChallenges }} Debugging -->
                                    <div
                                        v-for="(text, index) in category.challenges"
                                        :key="text"
                                        class="challenge-container"
                                    >
                                      <div class="checkbox-container">
                                        <template v-if="secretChallenges.size">
                                          <template v-if="text.secret">
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
                                          <div v-on:click="showOrgDescription(text)">
                                            <b-icon class="info-icon" icon="info-circle"></b-icon>
                                          </div>
                                        </b-col>
                                        <b-form-checkbox
                                            :value="text.value"
                                        >
                                          <span class="dot" :class="text.difficultytag"></span>
                                          {{ text.text }}
                                        </b-form-checkbox>
                                      </div>
                                    </div>
                                  </b-form-checkbox-group>
                                </div>
                              </template>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                    <template v-slot:label>
                      <b-row>
                        <b-col>
                          <b>Choose your Challenges:</b>
                          <b-form-checkbox
                              v-model="selectAllChallenges"
                              aria-describedby="challengesTag"
                              aria-controls="challengesTag"
                              @change="toggleAllChallenges"
                          >
                            {{ selectAllChallenges ? 'Un-select All' : 'Select All' }}
                          </b-form-checkbox>
                        </b-col>
                        <b-col>
                          <b-col md="12" style="padding-left: 0;"><b>Choose a profile:</b></b-col>
                          <b-form-select @change="onProfileSelect()" v-model="selectedProfile">
                            <b-form-select-option :value="null">No profile</b-form-select-option>
                            <b-form-select-option
                              v-for="(profile) in profiles"
                              :key="profile"
                              :value="profile"
                            >
                              {{ profile.name }} <template v-if="profile.secret">(Secret)</template>
                            </b-form-select-option>
                          </b-form-select>
                        </b-col>
                      </b-row>
                    </template>
                  </b-form-group>
                </b-col>
              </b-col>
              <b-col md="5">
                <div class="description-container">
                  <div
                      v-for="cat in categories"
                      :key="cat"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: cat.isInfoShown, show: cat.isInfoShown }" v-html="cat.catDesc"></div>
                  </div>
                  <template v-for="category in categories">
                    <div
                        v-for="chal in category.challenges"
                        :key="chal"
                    >
                      <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }" v-html="chal.orgDesc"></div>
                    </div>
                  </template>
                </div>
              </b-col>
            </b-row>
            <b-button variant="secondary" @click="$bvModal.hide('create-event-modal')">Close</b-button>
            <b-button  class="btn-haaukins float-right" :disabled="!isDisabled" @click="getExsByTags(selectedChallenges)">Next</b-button>
          </template>
        </b-carousel-slide>

        <b-carousel-slide class="carousel-height" >
          <template slot="img" class="h-100 text-center ">
            <div class="card" style="margin-bottom: 5px; ">
              <h5 class="btn-warning">OPTIONAL</h5>
              <div class="card-body customscroll" style="max-height: 570px;">
                <h5 class="card-title">Choose challenges to disable at event start</h5>
                <p class="card-text">By default, Haaukins platform will run all challenges choosen in previous step. If you would like to enable manual start for specific challenges select them below. </p>
                <b-input-group :class="'customscroll'" style="max-height: 435px; overflow: auto;">
                  <b-form-checkbox-group
                      id="disableChallenge"
                      v-model="disableChallenges"
                      :options="enableChallenges"
                      name="disableChallenge"
                      style="column-count: 3;"
                      class="ml-4"
                      stacked
                  ></b-form-checkbox-group>
                </b-input-group>
                <br>
              </div>
            </div>
            <b-button variant="secondary" @click="$bvModal.hide('create-event-modal')">Close</b-button>
            <b-button variant="warning ml-2" @click="handlePrev()">Prev</b-button>
            <b-button type="submit" class="btn-haaukins float-right" :disabled="!isDisabled" @click="handleSubmit">Create</b-button>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </form>
  </b-modal>
</template>

<script>
import { REST_API_ENDPOINT, REST_API_PORT  } from "../App";
import Datepicker from "vuejs-datepicker"

export default {
  name: "EventModal",
  components: { Datepicker},
  props: {
    memoryProp: String
  },
  computed:{
    nameState() {
      return this.eventName.length > 20 || this.eventName.length < 2 ? false : true
    },
    availabilityState() {
      return this.eventAvailability <= this.eventCapacity && this.eventCapacity >= 2 && this.eventAvailability <= 253 ? true : false
    },
    frontendState (){
      return this.selectedFrontends <= 0  ? false : true
    },
    tagState (){
      return this.eventTag == '' || this.eventTag.match(/^[a-zA-Z][A-Za-z0-9-]*[^-]$/g) == null || this.eventTag.length > 20 ? false : true
    },
    capacityState () {
      return this.eventCapacity < this.eventAvailability || this.eventCapacity < 2  || this.eventCapacity > 253 || this.eventCapacity.toString().match(/^(?:(?:[1-9][0-9]*)|0)$/) == null ? false : true
    }
  },
  data: function () {
    return {
      error: null,
      submitted: false,
      eventName: '',
      eventTag: '',
      eventAvailability: 0,
      eventCapacity: 0,
      eventFinishTime: '', eventStartTime: Date.now(),
      selectedChallenges: [],
      enableChallenges: [],
      disableChallenges: [],
      selectAllChallenges: false,
      frontends: [],
      secretKey: '',
      selectedFrontends: null,
      categories: [],
      profiles: [],
      selectedProfile: null,
      cat: '', childrenChallenges: '', isDisabled: false,
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      isVPNON: 4,
      secretChallenges: null,
    }
  },
  mounted: function(){
    this.getFrontends();
    this.getCategories();
    this.handleButtons();
    this.getProfiles();
  },
  watch: {
    eventCapacity: function () {
      this.eventAvailability = Math.ceil(this.eventCapacity / 7)
      if (this.eventCapacity < 0) {
        this.eventCapacity = 2
      }
    },
  },
  methods: {
    onProfileSelect: function() {
      this.selectedChallenges = []
      const that = this
      if (this.selectedProfile != null) {
        this.selectedProfile.challenges.forEach(function(challenge){
          that.selectedChallenges.push(challenge.tag)
        })
      }
      //window.console.log("Profile selected is", this.selectedProfile)
    },
    getProfiles: function() {
      const that = this
  
      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        }
      }
      fetch(REST_API_ENDPOINT + ":" + REST_API_PORT +"/admin/profiles/list", opts)
        .then(response => response.json())
        .then(response => {
          that.profiles = response['profiles'] 
        })
        .catch(error => {
          window.console.log("/admin/profiles/list error:", error)
          that.error = error
        })
      
    },
    resetDescriptionWindow: function() {
      // window.console.log("Resetting description window")  // Debugging
      // Emptying/resetting the description field
      this.showOrgDescription(null)
      this.categories.forEach(function(category){
        category.isInfoShown = false
      })

      // Enable the corrosponding category description
      this.categories[0].isInfoShown = true
    },
    showCatDescription: function(cat) {
      // Emptying/resetting the description field
      this.showOrgDescription(null)
      this.categories.forEach(function(category){
        category.isInfoShown = false
      })

      // Enable the corrosponding category description
      this.categories.forEach(function(category){
        if (category.tag == cat) {
          category.isInfoShown = true
        }
      })
    },
    showOrgDescription: function(challenge) {
      // Emptying/resetting the description field
      this.categories.forEach(function(category){
        category.isInfoShown = false
        category.challenges.forEach(function(chal){
          chal.isInfoShown = false
        })
      })
      // Showing the corrosponding organizer description or
      // hiding all of them if called from showCatDescription
      if (challenge == null) {
        // Keep the organizer descriptions hidden to display cat description
      } else {
        challenge.isInfoShown = true
      }
    },
    disabledDatesFinishTime: function() {
      return {
        to: new Date(this.eventStartTime - 8640000)
      }
    },
    handleButtons: function(){
      if (this.memoryProp < 85) {
        this.isDisabled = true
      }
    },
    toggleAllChallenges: function(checked) {
      if (checked) {
        this.selectedChallenges = []
        let allChallenges = []
        this.categories.forEach(function(category){
          allChallenges = allChallenges.concat(category.taglist)
        })
        this.selectedChallenges = allChallenges
      } else {
        this.selectedChallenges = []
      }
    },
    encodeHTML: function(s) {
      return s.replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
    },
    get_date: function (string_date){
      const date = new Date(string_date);
      let month = date.getMonth() + 1
      if (month < 10) {
        month = "0" + month
      }
      const day = date.getDate().toString().length == 1 ? "0" + date.getDate() : date.getDate();
      return date.getFullYear() + "-" + month + "-" + day + " 00:00:00"
    },
    handleSubmit() {
      this.submitted = true;
      if (!(this.eventName && this.eventTag)){
        return true;
      }else if (this.selectedFrontends == null || this.selectedChallenges.length == 0) {
        return true;
      }else if (this.eventCapacity == 0 || this.eventAvailability == 0 || this.eventFinishTime == ''){
        return true;
      }else{
        this.eventName = this.encodeHTML(this.eventName);
        this.secretKey = this.encodeHTML(this.secretKey);
        this.eventTag = this.encodeHTML(this.eventTag.toLowerCase());
        this.eventFinishTime = this.get_date(this.eventFinishTime);
        this.eventStartTime = this.get_date(this.eventStartTime);
        return false
      }
    },
    createEvent: function () {

       const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
        body: JSON.stringify({
          'name': this.eventName,
          'tag': this.eventTag,
          'available': this.eventAvailability,
          'capacity': this.eventCapacity,
          'startTime': this.eventStartTime.toString(),
          'finishTime': this.eventFinishTime,
          'onlyVPN': this.isVPNON,
          'secretEvent': this.secretKey,
          'disableExercises': this.disableChallenges,
          'exercises' : this.selectedChallenges,
          'frontends': this.frontends,
        })
      }
      this.$emit('createEvent', opts)

    },
    getCategories: function(){
      // Getting categories first.
      const that = this

      const opts = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' , 'token': localStorage.getItem('user')},
      }

     fetch(REST_API_ENDPOINT + ":" + REST_API_PORT  +'/admin/categories/list', opts)
      .then(response => response.json())
      .then(response => {
        response['categories'].forEach(function(c){
          let tag = c['tag']
          let name = c['name']
          let description = c['catDescription']
          let category = {tag: tag, name: name, catDesc: description, isInfoShown: false, challenges: [], taglist: []}
          that.categories.push(category)
        })
        if (that.categories[0].tag != "ST"){
          // Rearranging so if starters cat is present and not index 0 it gets moved to index 0
           that.categories.forEach(function(category, index){
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
        that.categories[0].isInfoShown = true
        //Inserting exercises into categories list
        that.getExercises()
      })
      .catch(error => {
        window.console.log('Error: ' + error)
        this.error = error
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

      fetch(REST_API_ENDPOINT + ":" + REST_API_PORT   + "/admin/exercise/list", opts)
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
            });
      })
      .catch(err => {
       this.error = err
      }
      )
    },
    handlePrev : function () {
      this.enableChallenges = []
      this.disableChallenges = []
      this.$refs.createEventCarousel.prev()
    },
    getExsByTags : function (tags) {
      const that = this
     
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        },
        body: JSON.stringify({
          "tags": tags
        })
      }

      fetch(REST_API_ENDPOINT + ":" + REST_API_PORT   + '/admin/event/get/exercises', opts)
      .then(response => response.json())
      .then(response =>  {
        response['exercises'].forEach(function (element){
          let challengeInfo = {text: element['name'], value: element['tag']}
          that.enableChallenges.push(challengeInfo)
        })

      }).catch(err => {
        this.error = err
        } 
      )

      if (this.eventName == '' || this.eventTag == '') {
        this.enableChallenges = []
        this.disableChallenges = []
        return
      }else if (this.selectedChallenges.length == 0) {
        this.enableChallenges = []
        this.disableChallenges = []
        return
      }else if (this.eventAvailability == 0 && ( this.eventCapacity < 2 || this.eventCapacity == 0 || this.eventCapacity < this.eventAvailability)){
        this.enableChallenges = []
        this.disableChallenges = []
        return
      } else {
        this.$refs.createEventCarousel.next()
        return
      }
    },
    getFrontends: function () {
 
      const that = this
      const opts = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        }
      }
      fetch(REST_API_ENDPOINT + ":" + REST_API_PORT  + "/admin/frontends/list", opts)
        .then(res => res.json())
        .then(res => {
          let allFrontendInfo = res['frontends']
          allFrontendInfo.forEach(function (element) {
            if (!element['image'].includes("vulnerability")) {
              that.frontends.push(element['image'])
            }
          })
          
        })
        .catch(error => {
          window.console.log('List Frontend Error: ' + error)
          this.error = error
        })
    },
    selectedVPNOption: function (isVPN) {
      this.isVPNON = isVPN
      this.$refs.createEventCarousel.next()
    }
  }
}
</script>

<style scoped>
.carousel-height{
  height: 650px;
  width: 100%;
}
.selection-phase-div:hover{
  background-color: #211a52!important;
  color: #fff;
  cursor: pointer;
}
.border-aau-color{
  border-color: #211a52!important;
}
.bg-light-gray{
  background-color: #ddd;
}

.frontends-field-modal{
  border: 1px solid #ced4da;
  border-radius: .35rem;
}
.my-is-invalid{
  border: 2px solid rgba(220,53,69,0.9);
  box-shadow: 1px 1px 2px rgba(220,53,69,0.7);
}

.myfrontends-field fieldset{
  margin-bottom: 0px!important;
}
.vertical-center {
  min-height: 127px;  /* Fallback for browsers do NOT support vh unit */
  display: flex;
  align-items: center;
}
.nav-link {
  color: #211a52!important;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 165px;
}
.nav-link.active{
  color: #fff!important;
  background-color: #211a52!important;
  border-color: #211a52!important;
}

.checkbox-container {
  display: flex;
}

.custom-control{
  width: 100%;
}

.chalInfo{
  overflow: hidden;
  max-height: 0;
  padding-right: 5px;
  visibility: hidden;
}

.chalInfo.visible{
  overflow-y: auto;
  visibility: visible;
  max-height: 585px;
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
  display:none;
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

.info-icon{
  cursor: pointer;
}
</style>