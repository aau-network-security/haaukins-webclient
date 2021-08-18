<template>
  <b-modal ref="modal" id="add-challenge-modal" size="xl" centered hide-footer>
    <template v-slot:modal-title>Choose challenges to add...</template>
    <form ref="form" @submit.stop.prevent="addChallenge()">
      <b-row>
        <b-col md="7">
          <div v-if="events!=null" class="col-lg-7 mb-4" >
            <b>Select Event</b>
            <select class="form-control" id="exampleFormControlSelect1" v-model="selectedEvent">
              <option disabled value="">Please select an event...</option>
              <option v-for="event in events.eventsList" v-bind:key="event.tag" >{{ event.tag }}</option>
            </select>
          </div>
          <b-form-group>
            <div class="challenges-field-modal frontends-field-modal p-3 mt-0" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
              <div class="row">
                <div class="col-4 customscroll" style="height: 235px; overflow-y: auto;">
                  <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist" aria-orientation="vertical">
                    <a v-on:click="showCatDescription('ST')" class="nav-link active show" id="starters-tab" data-toggle="pill" href="#starters" role="tab" aria-controls="starters" aria-selected="true">Starters</a>
                    <a v-on:click="showCatDescription('CY')" class="nav-link" id="cyber-championships-tab" data-toggle="pill" href="#cyber-championship" role="tab" aria-controls="cyber-championship" aria-selected="false">Cyber Champ.</a>
                    <a v-on:click="showCatDescription('WE')" class="nav-link" id="web-exploit-tab" data-toggle="pill" href="#web-exploit" role="tab" aria-controls="web-exploit" aria-selected="false">Web Exploit.</a>
                    <a v-on:click="showCatDescription('FR')" class="nav-link" id="forensics-tab" data-toggle="pill" href="#forensics" role="tab" aria-controls="forensics" aria-selected="false">Forensics</a>
                    <a v-on:click="showCatDescription('BN')" class="nav-link" id="binary-tab" data-toggle="pill" href="#binary" role="tab" aria-controls="binary" aria-selected="false">Binary</a>
                    <a v-on:click="showCatDescription('RE')" class="nav-link" id="reverse-eng-tab" data-toggle="pill" href="#reverse-eng" role="tab" aria-controls="reverse-eng" aria-selected="false">Reverse Eng.</a>
                    <a v-on:click="showCatDescription('CRY')" class="nav-link" id="cryptography-tab" data-toggle="pill" href="#cryptography" role="tab" aria-controls="cryptography" aria-selected="false">Cryptography</a>
                  </div>
                </div>
                <div class="col-8 customscroll" style="height: 235px; overflow-y: auto;">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade active show" id="starters" role="tabpanel" aria-labelledby="starters-tab">
                      <b-form-checkbox-group
                          id="challengesS"
                          v-model="selectedChallenges"
                          name="challengesS"
                          class="ml-4"
                          stacked
                      >
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
              <b>Choose challenges to add to event: </b>
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
        <b-col md="5">
          <div class="description-container">
            <div
                v-for="cat in categories"
                :key="cat"
            >
              <div class="chalInfo customscroll fade" v-bind:class="{ visible: cat.isInfoShown, show: cat.isInfoShown }" v-html="cat.catDesc"></div>
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
      <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
        <b-button variant="secondary" @click="$bvModal.hide('add-challenge-modal')">Close</b-button>
        <b-button type="submit" class="btn-haaukins float-right" @click="handleSubmit">Add</b-button>
      </b-col>
    </form>
  </b-modal>
</template>

<script>
import {AddChallengeRequest, Empty, GetExsByTagsReq} from "daemon_pb";
import { daemonclient } from "../App";


export default {
  name: "ChalModal",
  props: {
    events: []
  },
  data: function () {
    return {
      error: null,
      submitted: false,
      selectedEvent: '',
      selectedChallenges: [],
      selectAllChallenges: false,
      categories: [],
      challengesWE: [], challengesTextWE: [],
      challengesB: [], challengesTextB: [],
      challengesF: [], challengesTextF: [],
      challengesRE: [], challengesTextRE: [],
      challengesC: [], challengesTextC: [],
      challengesS: [], challengesTextS: [],
      challengesCS: [], challengesTextCS:[],
      cat: '', childrenChallenges: '', isDisabled: false,
    }
  },
  mounted: function(){
    this.getCategories();
    this.getChallenges();
  },
  methods: {
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
      this.categories.forEach(function (category){
        category.isInfoShown = false
      })
      // Showing the corrosponding organizer description or
      // hiding all of them if called from showCatDescription
      if (challenge == null) {
        // Keep the organizer descriptions hidden to display cat description
      } else {
        challenge.isInfoShown = true
      }
    },
    getCategories: function(){
      let getRequest = new Empty();
      const that = this
      daemonclient.listCategories(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        let categoryListObj = response.getCategoriesList();
        categoryListObj.forEach(function (element){
          let tag = element.getTag()
          let name = element.getName()
          let description = element.getCatdescription()
          let category = {tag: tag, name: name, catDesc: description, isInfoShown: false}
          if (tag == "ST") {
            category.isInfoShown = true
            that.categories.push(category)
          } else
          {
            that.categories.push(category)
          }

        })
      })
    },
    toggleAllChallenges: function(checked) {
      this.selectedChallenges = checked ? this.challengesWE
          .concat(this.challengesB)
          .concat(this.challengesF)
          .concat(this.challengesRE)
          .concat(this.challengesS)
          .concat(this.challengeCS)
          .concat(this.challengesC): []
    },
    encodeHTML: function(s) {
      return s.replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
    },
    handleSubmit() {
      this.submitted = true;
    },
    addChallenge: function () {
      let getRequest = new AddChallengeRequest();
      getRequest.setChallengetagList(this.selectedChallenges)
      getRequest.setEventtag(this.selectedEvent)
      this.$emit('addChallenge', getRequest)
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
          let parentChallenge = { text: name + that.childrenChallenges, value: taglist[0], orgDesc: orgDesc, isInfoShown: false  };
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
              that.challengesS.push(taglist[0])
              break;
            case "Cybermesterskaberne":
              that.challengesTextCS.push(parentChallenge);
              that.challengesCS.push(taglist[0]);
              break;
          }
        })
      });
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
      
    },
    
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
.challenges-field-modal {
  height: 270px;
  overflow-y: auto;
}
.frontends-field-modal{
  border: 1px solid #ced4da;
  border-radius: .35rem;
}


.info-icon {
  position: relative;
  top: 0px;
  left: -370px;
  width: 16px;
  padding: 0px;
  margin: 0px;
  z-index: 99999;
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
  max-height: 410px;
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

.checkbox-container {
  display: flex;
}

.custom-control{
  width: 100%;
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
</style>