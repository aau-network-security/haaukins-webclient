<template>
  <div>
    <Navbar/>
    <div class="container" style="margin-top: 40px">
      <h3 class="float-left font-weight-bold text-gray-800 mb-1">Challenges List</h3>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <b-table
          v-if="challenges"
          striped
          :items="challenges.exercisesList"
          :fields="challengesFields"
      >
        <template v-slot:cell(tagsList)="row">
          {{ row.item.tagsList[0] }} {{ row.item.tagsList[1] }}
        </template>

        <template v-slot:cell(secret)="row">
          {{ row.item.secret }}
        </template>

        <template v-slot:cell(exerciseinfoList)="row">
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-table
                class="text-center"
                head-variant="dark"
                small
                :items="row.item.exerciseinfoList"
            >

            </b-table>
          </b-card>
        </template>
      </b-table>
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
      categories: [],
      challenges: null,
      error: null,
      challengesFields: [
        {key: "tagsList", label: "Tags List"},
        {key: "name", label: "Name"},
        {key: "secret", label: "Secret"},
        {key: "dockerimagecount", label: "#_Docker"},
        {key: "vboximagecount", label: "#_VBox"},
        {key: "exerciseinfoList", label: "Challenges"}
      ],
    }
  },
  created: function () {
    this.listChallenges();
    this.getAll();
  },
  methods: {
    getAll: function () {
      let getRequest = new Empty();
      const that = this
      daemonclient.listCategories(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        let categoryListObj = response.getCategoriesList();
        categoryListObj.forEach(function (element) {
          let tag = element.getTag()
          let name = element.getName()
          let description = element.getCatdescription()
          let category = {tag: tag, name: name, catDesc: description, isInfoShown: false}
          if (tag == "ST") {
            category.isInfoShown = true
            that.categories.push(category)
          } else {
            that.categories.push(category)
          }

        })
      })
      daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        let exercisesListObj = response.getExercisesList();
        window.console.log(exercisesListObj)
      })

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
    listChallenges: function () {
      let getRequest = new Empty();
      daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
        this.error = err;
        this.challenges = response.toObject()
      });

    }
  }
}
</script>

<style scoped>
h3 {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}
</style>