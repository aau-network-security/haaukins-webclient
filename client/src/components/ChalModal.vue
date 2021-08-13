<template>
  <b-modal ref="modal" id="add-challenge-modal" size="lg" centered hide-footer>
    <template v-slot:modal-title>Choose challenges to add...</template>
    <form ref="form" @submit.stop.prevent="addChallenge()">
      <div v-if="events!=null" class="col-lg-7 mb-4" >
          <b>Select Event</b>
          <select class="form-control" id="exampleFormControlSelect1" v-model="selectedEvent">
            <option disabled value="">Please select an event...</option>
            <option v-for="event in events.eventsList" v-bind:key="event.tag" >{{ event.tag }}</option>
          </select>
      </div>
      <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
        <b-form-group>
          <div class="challenges-field-modal frontends-field-modal p-3 mt-0" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
            <div class="row">
              <div class="col-3">
                <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active show" id="starters-tab" data-toggle="pill" href="#starters" role="tab" aria-controls="starters" aria-selected="true">Starters</a>
                  <a class="nav-link" id="cyber-championships-tab" data-toggle="pill" href="#cyber-championship" role="tab" aria-controls="cyber-championship" aria-selected="false">Cyber Champ.</a>
                  <a class="nav-link" id="web-exploit-tab" data-toggle="pill" href="#web-exploit" role="tab" aria-controls="web-exploit" aria-selected="false">Web Exploit.</a>
                  <a class="nav-link" id="forensics-tab" data-toggle="pill" href="#forensics" role="tab" aria-controls="forensics" aria-selected="false">Forensics</a>
                  <a class="nav-link" id="binary-tab" data-toggle="pill" href="#binary" role="tab" aria-controls="binary" aria-selected="false">Binary</a>
                  <a class="nav-link" id="reverse-eng-tab" data-toggle="pill" href="#reverse-eng" role="tab" aria-controls="reverse-eng" aria-selected="false">Reverse Eng.</a>
                  <a class="nav-link" id="cryptography-tab" data-toggle="pill" href="#cryptography" role="tab" aria-controls="cryptography" aria-selected="false">Cryptography</a>
                </div>
              </div>
              <div class="col-9">
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
                          <!--{{ text.orgDesc }}  This is just dummy data for now-->
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
                          <!--{{ text.orgDesc }}  This is just dummy data for now-->
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
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
                          <div class="info-icon" v-on:click="text.isInfoShown = !text.isInfoShown"><b-icon icon="info-circle"></b-icon></div>
                        </div>
                        <div class="chalInfo" v-bind:class="{ visible: text.isInfoShown}" v-html="text.orgDesc">
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
      challengesWE: [], challengesTextWE: [],
      challengesB: [], challengesTextB: [],
      challengesF: [], challengesTextF: [],
      challengesRE: [], challengesTextRE: [],
      challengesC: [], challengesTextC: [],
      challengesS: [], challengesTextS: [],
      challengeCS: [], challengesTextCS:[],
      cat: '', childrenChallenges: '', isDisabled: false,
    }
  },
  mounted: function(){
    this.getChallenges();
  },
  methods: {
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
  top: 1px;
  left: -515px;
  width: 16px;
  padding: 0px;
  margin: 0px;
  z-index: 99999;
}
.chalInfo{
  background-color: #221d52;
  color: #ffffff;
  position: relative;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 500px;
  max-height: 0;
  overflow: hidden;
  transition: all .5s ease-in-out;
  visibility: hidden;
}
.chalInfo.visible {
  max-height: 200px;
  /*transform-origin: top-center;*/
  transition: all .5s ease-in-out;
  padding: 10px;
  overflow-y: auto;
  box-shadow: 5px 5px 5px rgba(73, 80, 87, 0.83);
  visibility: visible;
}

.checkbox-container {
  display: flex;
}

.custom-control{
  width: 100%;
}

.chalInfo::-webkit-scrollbar {
  background-color: #221d52;
  width: 5px;
}

.chalInfo::-webkit-scrollbar-track {
  background-color: #221d52;
}

/* scrollbar itself */
.chalInfo::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
}

/* set button(top and bottom of the scrollbar) */
.chalInfo::-webkit-scrollbar-button {
  display:none;
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