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
                      <b-col class="difficulty"><p>Very Easy</p></b-col>
                      <b-col class="difficulty"><p>Easy</p></b-col>
                      <b-col class="difficulty"><p>Medium</p></b-col>
                      <b-col class="difficulty"><p>Hard</p></b-col>
                      <b-col class="difficulty"><p>Very Hard</p></b-col>
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="5" class="challenges customscroll">
                        <div
                            v-for="challenge in category.challenges"
                            :key="challenge"
                            class="challenge"
                        >
                          <b-row>
                            <b-col md="1">
                              <div class="info-icon" v-on:click="showOrgDescription(challenge)"><b-icon icon="info-circle"></b-icon></div>
                            </b-col>
                            <template v-if="challenge.secret">
                              <b-col md="1">
                                <div class="danger-icon"><b-icon icon="exclamation-triangle-fill" variant="danger"></b-icon></div>
                              </b-col>
                            </template>
                            <b-col md="9">
                              {{ challenge.text }}
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                      <b-col md="7" class="chaldescs">
                        <template v-for="category in categories">
                          <div
                              v-for="chal in category.challenges"
                              :key="chal"
                          >
                            <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }" v-html="chal.orgDesc"></div>
                          </div>
                        </template>
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
                      <b-col class="difficulty"><p>Very Easy</p></b-col>
                      <b-col class="difficulty"><p>Easy</p></b-col>
                      <b-col class="difficulty"><p>Medium</p></b-col>
                      <b-col class="difficulty"><p>Hard</p></b-col>
                      <b-col class="difficulty"><p>Very Hard</p></b-col>
                    </b-row>
                    <b-row class="info-container">
                      <b-col md="5" class="challenges customscroll">
                        <div
                            v-for="challenge in category.challenges"
                            :key="challenge"
                            class="challenge"
                        >
                          <b-row>
                            <b-col md="1">
                              <div class="info-icon" v-on:click="showOrgDescription(challenge)"><b-icon icon="info-circle"></b-icon></div>
                            </b-col>
                            <template v-if="challenge.secret">
                              <b-col md="1">
                                <div class="danger-icon"><b-icon icon="exclamation-triangle-fill" variant="danger"></b-icon></div>
                              </b-col>
                            </template>
                            <b-col md="10">
                              {{ challenge.text }}
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                      <b-col md="7" class="chaldescs">
                        <template v-for="category in categories">
                          <div
                              v-for="chal in category.challenges"
                              :key="chal"
                          >
                            <div class="chalInfo customscroll fade" v-bind:class="{ visible: chal.isInfoShown, show: chal.isInfoShown }" v-html="chal.orgDesc"></div>
                          </div>
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
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Empty} from "daemon_pb";
import {daemonclient} from "../App";

export default {
  name: "Challenges",
  components: {Footer, Navbar},
  data: function () {
    return {
      error: null,
      categories: [],
      cat: '',
      childrenChallenges: '',
    }
  },
  created: function () {
    this.getCategories();
  },
  methods: {
    showOrgDescription: function(challenge) {
      window.console.log("Showing org description")
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
          let category = {tag: tag, name: name, catDesc: description, isInfoShown: false, challenges: [], taglist: []}
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
        that.categories[0].isInfoShown = true
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

          for (let i = 0; i < childrenChallengesObj.length; i++) {
            that.cat = childrenChallengesObj[i].getCategory();
            that.childrenChallenges += childrenChallengesObj[i].getName() + ", "
          }
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
            orgDesc: orgDesc,
            isInfoShown: false,
            secret: secret
          };
          that.categories.forEach(function (category) {
            if (that.cat == category.name) {
              category.challenges.push(parentChallenge)
              category.taglist.push(taglist[0])
            }
          })
        })
        window.console.log(that.categories)
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

.difficulty {
  color: #211a52 !important;
  white-space: nowrap;
  width: 165px;
  border-radius: .25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #211a52 !important;
  margin: 0 40px 0 40px;
  cursor: pointer;
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
  display:none;
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

h3 {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
</style>