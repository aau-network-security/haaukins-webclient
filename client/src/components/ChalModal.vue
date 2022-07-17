<template>
  <b-modal ref="modal" @shown="resetDescriptionWindow()" id="add-challenge-modal" size="xl" centered hide-footer>
    <template v-slot:modal-title>Choose challenges to add...</template>
    <form ref="form" @submit.stop.prevent="addChallenge()">
      <b-row>
        <b-col md="7">
          <div v-if="events!=null" class="col-lg-7 mb-4" >
            <b>Select Event</b>
            <select class="form-control" id="exampleFormControlSelect1" v-model="selectedEvent">
              <option disabled value="">Please select an event...</option>
              <option v-for="event in events" v-bind:key="event.tag" >{{ event.tag }}</option>
            </select>
          </div>
          <b-form-group>
            <div class="challenges-field-modal frontends-field-modal p-3 mt-0" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
              <div class="row">
                <div class="col-4 customscroll" style="height: 235px; overflow-y: auto;">
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
                <div class="col-8 customscroll" style="height: 235px; overflow-y: auto;">
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
      <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
        <b-button variant="secondary" @click="$bvModal.hide('add-challenge-modal')">Close</b-button>
        <b-button type="submit" class="btn-haaukins float-right" @click="handleSubmit">Add</b-button>
      </b-col>
    </form>
  </b-modal>
</template>

<script>
import {  API_ENDPOINT } from "../App";


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
      cat: '', childrenChallenges: '', isDisabled: false,
      secretChallenges: null,
    }
  },
  mounted: function(){
    this.getCategories();
  },
  methods: {
    getCategories: function(){
      // Getting categories first.
      // let getRequest = new Empty();
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
        window.console.log('ChalModal getCategories Error: ' + error)
        this.error = error
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
                  category.taglist.push(tag)
                }
              })

            });
      })
      .catch(err => {
       this.error = err
      }
      )},

    resetDescriptionWindow: function() {
      // window.console.log("Resetting description window") // Debugging
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
    handleSubmit() {
      this.submitted = true;
    },
    addChallenge: function () {
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        },
        body: JSON.stringify({
          "challengeTag": this.selectedChallenges,
          "eventTag": this.selectedEvent
        })
        }
      this.$emit('addChallenge', opts)
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

          fetch(API_ENDPOINT + '/admin/event/get/exercises', opts)
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