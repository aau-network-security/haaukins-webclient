<template>
  <b-modal ref="modal" id="create-event-modal" size="xl" centered hide-footer>
    <template v-slot:modal-title>Create a new Event</template>
    <form ref="form" @submit.stop.prevent="createEvent()">
      <b-carousel ref="createEventCarousel" :interval=0>
        <b-carousel-slide class="carousel-height">
          <template slot="img" class="h-100 text-center">
            <div class="row h-50">
              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color selection-phase-div" v-on:click="selectedVPNOption(true)">
                  <h3 class="font-weight-bold">VPN ONLY</h3>
                  <p>Allows the users to connect the Lab using the VPN. Kali Linux machine on the browser will be not available.</p>
                </div>
              </div>
              <div class="col-6 carousel-height d-table">
                <div class="card card-body d-table-cell align-middle text-center border-aau-color bg-light-gray selection-phase-div" v-on:click="selectedVPNOption(false)">
                  <h3 class="font-weight-bold">NO VPN</h3>
                  <p>Allows the user to connect Kali Linux machine on the browser.</p>
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
                    <div class="custom-control custom-switch mt-2 mt-sm-2 mt-md-0">
                      <input type="checkbox" class="custom-control-input" id="isVPNON" v-model="isVPNON" name="isVPNON">
                      <label class="custom-control-label" for="isVPNON">Enable VPN</label>
                    </div>
                  </b-col>
                </b-row>
                <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
                  <b-form-group>
                    <div class="challenges-field-modal frontends-field-modal p-3 mt-0" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
                      <div class="row">
                        <div class="col-4 customscroll" style="height: 240px; overflow-y: auto;">
                          <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist" aria-orientation="vertical">
                            <a v-on:click="showCatDescription(0)" class="nav-link active show" id="starters-tab" data-toggle="pill" href="#starters" role="tab" aria-controls="starters" aria-selected="true">Starters</a>
                            <a v-on:click="showCatDescription(1)" class="nav-link" id="cyber-championships-tab" data-toggle="pill" href="#cyber-championship" role="tab" aria-controls="cyber-championship" aria-selected="false">Cyber Champ.</a>
                            <a v-on:click="showCatDescription(2)" class="nav-link" id="web-exploit-tab" data-toggle="pill" href="#web-exploit" role="tab" aria-controls="web-exploit" aria-selected="false">Web Exploit.</a>
                            <a v-on:click="showCatDescription(3)" class="nav-link" id="forensics-tab" data-toggle="pill" href="#forensics" role="tab" aria-controls="forensics" aria-selected="false">Forensics</a>
                            <a v-on:click="showCatDescription(4)" class="nav-link" id="binary-tab" data-toggle="pill" href="#binary" role="tab" aria-controls="binary" aria-selected="false">Binary</a>
                            <a v-on:click="showCatDescription(5)" class="nav-link" id="reverse-eng-tab" data-toggle="pill" href="#reverse-eng" role="tab" aria-controls="reverse-eng" aria-selected="false">Reverse Eng.</a>
                            <a v-on:click="showCatDescription(6)" class="nav-link" id="cryptography-tab" data-toggle="pill" href="#cryptography" role="tab" aria-controls="cryptography" aria-selected="false">Cryptography</a>
                          </div>
                        </div>
                        <div class="col-8 customscroll" style="height: 240px; overflow-y: auto;">
                          <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade active show" id="starters" role="tabpanel" aria-labelledby="starters-tab">
                              <b-form-checkbox-group
                                  id="challengesS"
                                  v-model="selectedChallenges"
                                  name="challengesS"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextS"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>

                              </b-form-checkbox-group>
                            </div>

                            <div class="tab-pane fade" id="cyber-championship" role="tabpanel" aria-labelledby="cyber-championship">
                              <b-form-checkbox-group
                                  id="challengesCS"
                                  v-model="selectedChallenges"
                                  name="challengesCS"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextCS"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>

                              </b-form-checkbox-group>
                            </div>

                            <div class="tab-pane fade" id="web-exploit" role="tabpanel" aria-labelledby="web-exploit-tab">
                              <b-form-checkbox-group
                                  id="challengesWE"
                                  v-model="selectedChallenges"
                                  name="challengesWE"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextWE"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>
                              </b-form-checkbox-group>
                            </div>

                            <div class="tab-pane fade" id="forensics" role="tabpanel" aria-labelledby="forensics-tab">
                              <b-form-checkbox-group
                                  id="challengesF"
                                  v-model="selectedChallenges"
                                  name="challengesF"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextF"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>
                              </b-form-checkbox-group>
                            </div>

                            <div class="tab-pane fade" id="binary" role="tabpanel" aria-labelledby="binary-tab">
                              <b-form-checkbox-group
                                  id="challengesB"
                                  v-model="selectedChallenges"
                                  name="challengesB"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextB"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>
                              </b-form-checkbox-group>
                            </div>
                            <div class="tab-pane fade" id="reverse-eng" role="tabpanel" aria-labelledby="reverse-eng-tab">
                              <b-form-checkbox-group
                                  id="challengesRE"
                                  v-model="selectedChallenges"
                                  name="challengesRE"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextRE"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>
                              </b-form-checkbox-group>
                            </div>
                            <div class="tab-pane fade" id="cryptography" role="tabpanel" aria-labelledby="cryptography-tab">
                              <b-form-checkbox-group
                                  id="challengesC"
                                  v-model="selectedChallenges"
                                  name="challengesC"
                                  class="ml-4"
                                  stacked
                              >
                                <!--{{ selectedChallenges }}  Used for debugging-->
                                <div
                                    v-for="text in challengesTextC"
                                    :key="text"
                                    class="challenge-container"
                                >
                                  <div class="checkbox-container">
                                    <b-form-checkbox
                                        :value="text.value"
                                    >
                                      {{ text.text }}
                                    </b-form-checkbox>
                                    <div class="info-icon" v-on:click="showOrgDescription(text)"><b-icon icon="info-circle"></b-icon></div>
                                  </div>
                                </div>
                              </b-form-checkbox-group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <template v-slot:label>
                      <b>Choose your Challenges:</b>
                      <b-form-checkbox
                          v-model="selectAllChallenges"
                          aria-describedby="challengesTag"
                          aria-controls="challengesTag"
                          @change="toggleAllChallenges"
                      >
                        {{ selectAllChallenges ? 'Un-select All' : 'Select All' }}
                      </b-form-checkbox>
                    </template>
                  </b-form-group>
                </b-col>
              </b-col>
              <b-col md="5">
                <div class="description-container"><!-- v-html="challengesTextB[0].orgDesc" -->
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: sShow, show: sShow}">
                    <h3>The Starters Category</h3>
                    <p>
                      The Starters category holds all the exercises that are great for beginners to take on.<br>
                      When holding an event for a beginner crowd, it is always a good idea to have at least one of these exercises present in the CTF.
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: csShow, show: csShow}">
                    <h3>The Cyber Championship Category</h3>
                    <p>
                      The Danish Cyber Championships are quite popular. Therefore we have added this category
                      in order for people who might not have made the cut for the
                      Regionals, Nationals and Bootcamp, to try out the challenges anyways.<br>
                      The challenges will be named with their year and championship round respectively
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: weShow, show: weShow }">
                    <h3>The Web Exploitation Category</h3>
                    <p>
                      The Web Exploitation category holds all the exercises where the user
                      has to use well known techniques such as Cross-site scripting, SQL injection, Cross-site request forgery and etc.
                      to compromise the services that are available in these exercises.
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: fShow, show: fShow}">
                    <h3>The Forensics Category</h3>
                    <p>
                      Forensics typically covers a key point within pentesting, namely enumeration.
                      Enumeration is all about finding information which could be useful for you to
                      breach the security of a system. Some key elements are typically network scanning, network sniffing and dirbusting.
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: bShow, show: bShow}">
                    <h3>The Binary Category</h3>
                    <p>
                      Most binary challenges are typically pretty hardcore.
                      An exercise usually consists of some vulnerable binary(Runnable program) which
                      can be exploited in some way to get unauthorized access to a system.
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: reShow, show: reShow}">
                    <h3>The Reverse Engineering Category</h3>
                    <p>
                      Reverse engineering is all about disassembling software, in order to maybe find and exploit vulnerabilities
                      or bypass authentication programs, by making that program think you have entered the correct password.
                      You might also want to reverse a program in order to figure out how for an example some communication protocol works
                      to gather a clear text message from bogus binary data. This category is usually also pretty tough.
                    </p>
                  </div>
                  <div class="chalInfo customscroll fade" v-bind:class="{ visible: cShow, show: cShow}">
                    <h3>The Cryptography Category</h3>
                    <p>
                      The Cryptography category is all the exercises that has to do with some kind of crypto in some form.
                      Ex. cracking hashes, reversing or breaking bad crypto algorithms etc.<br>
                      The difficulty varies quite a lot depending on the exercise.
                    </p>
                  </div>
                  <div
                      v-for="chal in challengesTextS"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextCS"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextWE"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextF"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextB"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextRE"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
                  <div
                      v-for="chal in challengesTextC"
                      :key="chal"
                  >
                    <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown}" v-html="chal.orgDesc"></div>
                  </div>
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
              <div class="card-body">
                <h5 class="card-title">Choose challenges to disable at event start</h5>
                <p class="card-text">By default, Haaukins platform will run all challenges choosen in previous step. If you would like to enable manual start for specific challenges select them below. </p>
                <b-input-group >
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
import { Empty, CreateEventRequest,GetExsByTagsReq } from "daemon_pb";
import { daemonclient } from "../App";
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
      return this.frontends.length <= 0  ? false : true
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
      challengesWE: [], challengesTextWE: [], weShow: false,
      challengesB: [], challengesTextB: [], bShow: false,
      challengesF: [], challengesTextF: [], fShow: false,
      challengesRE: [], challengesTextRE: [], reShow: false,
      challengesC: [], challengesTextC: [], cShow: false,
      challengesS: [], challengesTextS: [], sShow: true,
      challengesCS: [], challengesTextCS:[], csShow: false,
      cat: '', childrenChallenges: '', isDisabled: false,
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      isVPNON: false,
    }
  },
  mounted: function(){
    this.getChallenges();
    this.getFrontends();
    this.handleButtons();
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
    showCatDescription: function(category) {
      // Emptying/resetting the description field
      this.showOrgDescription(null)
      this.sShow = false
      this.csShow = false
      this.weShow = false
      this.fShow = false
      this.bShow = false
      this.reShow = false
      this.cShow = false
      // Enable the corrosponding category description
      switch (category) {
        case 0:
          this.sShow = true
          break;
        case 1:
          this.csShow = true
          break;
        case 2:
          this.weShow = true
          break;
        case 3:
          this.fShow = true
          break;
        case 4:
          this.bShow = true
          break;
        case 5:
          this.reShow = true
          break;
        case 6:
          this.cShow = true
          break;
      }
    },
    showOrgDescription: function(challenge) {
      // Emptying/resetting the description field
      this.challengesTextS.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextCS.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextWE.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextF.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextB.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextRE.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.challengesTextC.forEach(function(chal){
        chal.isInfoShown = false
      })
      this.sShow = false
      this.csShow = false
      this.weShow = false
      this.fShow = false
      this.bShow = false
      this.reShow = false
      this.cShow = false
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
      this.selectedChallenges = checked ? this.challengesWE
          .concat(this.challengesB)
          .concat(this.challengesF)
          .concat(this.challengesRE)
          .concat(this.challengesS)
          .concat(this.challengesCS)
          .concat(this.challengesC): []
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

      let getRequest = new CreateEventRequest();
      getRequest.setName(this.eventName);
      getRequest.setSecretevent(this.secretKey);
      getRequest.setTag(this.eventTag.toLowerCase());
      getRequest.setAvailable(this.eventAvailability);
      getRequest.setCapacity(this.eventCapacity);
      getRequest.setFinishtime(this.eventFinishTime);
      getRequest.setStarttime(this.eventStartTime.toString());
      this.selectedChallenges.forEach(function(challenge) {
        getRequest.addExercises(challenge)
      });
      this.disableChallenges.forEach(function (challenge){
        getRequest.addDisableexercises(challenge)
      })
      getRequest.addFrontends(this.selectedFrontends)
      getRequest.setOnlyvpn(this.isVPNON)

      this.$emit('createEvent', getRequest)

    },
    getChallenges: function () {
      let getRequest = new Empty();
      const that = this
      daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        this.error = err;
        let exercisesListObj = response.getExercisesList();
        exercisesListObj.forEach(function (element) {
          let childrenChallengesObj = element.getExerciseinfoList();
          that.childrenChallenges = "   (";

          for (let i = 0; i < childrenChallengesObj.length; i++){
            that.cat = childrenChallengesObj[i].getCategory();
            that.childrenChallenges+= childrenChallengesObj[i].getName() + ", "
          }
          that.childrenChallenges = that.childrenChallenges.substring(0, that.childrenChallenges.length - 2)
          that.childrenChallenges+= ")";
          if (childrenChallengesObj.length == 1){
            that.childrenChallenges = '';
          }


          let taglist = element.getTagsList();
          let name = element.getName();
          let orgDesc = element.getOrgdescription()
          let parentChallenge = { text: name + that.childrenChallenges, value: taglist[0], orgDesc: orgDesc, isInfoShown: false };
          switch (that.cat) {
            case "Web exploitation":
              that.challengesTextWE.push(parentChallenge);
              that.challengesWE.push(taglist[0]);
              break;
            case "Forensics":
              that.challengesTextF.push(parentChallenge);
              that.challengesF.push(taglist[0]);
              break;
            case "Binary":
              that.challengesTextB.push(parentChallenge);
              that.challengesB.push(taglist[0]);
              break;
            case "Cryptography":
              that.challengesTextC.push(parentChallenge);
              that.challengesC.push(taglist[0]);
              break;
            case "Reverse Engineering":
              that.challengesTextRE.push(parentChallenge);
              that.challengesRE.push(taglist[0]);
              break;
            case "Starters":
              that.challengesTextS.push(parentChallenge);
              that.challengesS.push(taglist[0]);
              break;
            case "Cybermesterskaberne":
              that.challengesTextCS.push(parentChallenge);
              that.challengesCS.push(taglist[0]);
              break;
          }

        })
      });
    },
    handlePrev : function () {
      this.enableChallenges = []
      this.disableChallenges = []
      this.$refs.createEventCarousel.prev()
    },
    getExsByTags : function (tags) {
      let getExsRequest = new GetExsByTagsReq()
      const that = this
      getExsRequest.setTagsList(tags)
      daemonclient.getExercisesByTags(getExsRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        this.error = err
        let exercises  = response.getExercisesList()
        exercises.forEach(function (element){
          let challengeInfo = {text: element.getName(), value: element.getTag()}
          that.enableChallenges.push(challengeInfo)
        })
      });

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
      let getRequest = new Empty();
      daemonclient.listFrontends(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        this.error = err;
        const that = this
        let frontendsListObj = response.getFrontendsList()
        frontendsListObj.forEach(function (element) {
          if (!element.getImage().includes("vulnerability")){
            that.frontends.push(element.getImage())
          }
        })
      });

    },
    selectedVPNOption: function (isVPN) {
      if (isVPN) {
        this.frontends.push("VPN")
      }
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
}
.nav-link.active{
  color: #fff!important;
  background-color: #211a52!important;
  border-color: #211a52!important;
}

.info-icon {
  position: relative;
  top: 1px;
  left: -350px;
  width: 16px;
  padding: 0px;
  margin: 0px;
  z-index: 99999;
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
  max-height: 600px;
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

</style>