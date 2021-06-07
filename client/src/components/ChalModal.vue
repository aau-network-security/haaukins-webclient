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
                        :options="challengesTextS"
                        name="challengesS"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
                  </div>

                  <div class="tab-pane fade" id="web-exploit" role="tabpanel" aria-labelledby="web-exploit-tab">
                    <b-form-checkbox-group
                        id="challengesWE"
                        v-model="selectedChallenges"
                        :options="challengesTextWE"
                        name="challengesWE"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
                  </div>

                  <div class="tab-pane fade" id="forensics" role="tabpanel" aria-labelledby="forensics-tab">
                    <b-form-checkbox-group
                        id="challengesF"
                        v-model="selectedChallenges"
                        :options="challengesTextF"
                        name="challengesF"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
                  </div>

                  <div class="tab-pane fade" id="binary" role="tabpanel" aria-labelledby="binary-tab">
                    <b-form-checkbox-group
                        id="challengesB"
                        v-model="selectedChallenges"
                        :options="challengesTextB"
                        name="challengesWE"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
                  </div>
                  <div class="tab-pane fade" id="reverse-eng" role="tabpanel" aria-labelledby="reverse-eng-tab">
                    <b-form-checkbox-group
                        id="challengesRE"
                        v-model="selectedChallenges"
                        :options="challengesTextRE"
                        name="challengesRE"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
                  </div>
                  <div class="tab-pane fade" id="cryptography" role="tabpanel" aria-labelledby="cryptography-tab">
                    <b-form-checkbox-group
                        id="challengesC"
                        v-model="selectedChallenges"
                        :options="challengesTextC"
                        name="challengesC"
                        class="ml-4"
                        stacked
                    ></b-form-checkbox-group>
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
          let parentChallenge = { text: name + that.childrenChallenges, value: taglist[0] };
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