<template>
    <b-modal ref="modal" id="create-event-modal" size="lg" centered hide-footer>
        <template v-slot:modal-title>
            Create a new Event
        </template>
        <form ref="form" @submit.stop.prevent="createEvent()">
            <b-row>
                <b-col lg="7">
                    <b-row>
                        <b-col md="6">
                            <b-form-group
                                    id="fieldset-eventName"
                                    label="Event Name"
                                    label-for="eventName"
                            >
                                <b-form-input
                                        id="eventName"
                                        v-model="eventName"
                                        type="text"
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
                                        type="text"
                                        required
                                ></b-form-input>
                            </b-form-group>
                            <b-tooltip target="fieldset-eventTag" triggers="hover">
                                Sub domain in which the event will be available
                            </b-tooltip>
                        </b-col>
                        <b-col md="6">
<!--                            <b-form-group id="fieldset-eventFinishTime" label="Expected Finish Date" label-for="eventFinishTime">-->
<!--                                <b-form-input :id="eventFinishTime" v-model="eventFinishTime" type="date"></b-form-input>-->
<!--                            </b-form-group>-->
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
                    <div class="frontends-field-modal p-2 mt-2 vertical-center" :class="{ 'my-is-invalid': submitted && this.selectedFrontends.length == 0 }">
                        <b-form-group>
                            <b-form-checkbox-group
                                    id="frontends"
                                    v-model="selectedFrontends"
                                    :options="frontends"
                                    name="frontends"
                                    class="ml-4"
                                    aria-label="Individual flavours"
                                    stacked
                            ></b-form-checkbox-group>
                        </b-form-group>
                        <b-tooltip target="frontends" triggers="hover">
                            List of available Frontends
                        </b-tooltip>
                    </div>
                </b-col>
                <b-col md="12" class="mt-3 mt-lg-0" style="z-index: 2">
                    <b-form-group>
                        <div class="challenges-field-modal frontends-field-modal p-3 mt-2" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
                            <div class="row">
                                <div class="col-3">
                                    <div class="nav flex-column nav-pills sticky-top" id="challengesCategory" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link active show" id="web-exploit-tab" data-toggle="pill" href="#web-exploit" role="tab" aria-controls="web-exploit" aria-selected="true">Web_Exploit.</a>
                                        <a class="nav-link" id="forensics-tab" data-toggle="pill" href="#forensics" role="tab" aria-controls="forensics" aria-selected="false">Forensics</a>
                                        <a class="nav-link" id="binary-tab" data-toggle="pill" href="#binary" role="tab" aria-controls="binary" aria-selected="false">Binary</a>
                                        <a class="nav-link" id="reverse-eng-tab" data-toggle="pill" href="#reverse-eng" role="tab" aria-controls="reverse-eng" aria-selected="false">Reverse_Eng.</a>
                                        <a class="nav-link" id="cryptography-tab" data-toggle="pill" href="#cryptography" role="tab" aria-controls="cryptography" aria-selected="false">Cryptography</a>
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade active show" id="web-exploit" role="tabpanel" aria-labelledby="web-exploit-tab">
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
                                                    name="challengesB"
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
            </b-row>
            <b-button variant="secondary" @click="$bvModal.hide('create-event-modal')">Close</b-button>
            <b-button type="submit" class="btn-haaukins float-right" :disabled="!isDisabled">Create</b-button>
            <b-button type="button" variant="warning" class="float-right mr-2" :disabled="!isDisabled" @click="sendSlackNotification(true, 'haaukins-event-request')">Make Request</b-button>
        </form>
    </b-modal>
</template>

<script>
    import { Empty, CreateEventRequest } from "daemon_pb";
    import { daemonclient } from "../App";
    import Datepicker from "vuejs-datepicker"

    export default {
        name: "EventModal",
        components: { Datepicker},
        props: {
            memoryProp: String
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
                selectAllChallenges: false,
                frontends: [],
                selectedFrontends: [],
                challengesWE: [], challengesTextWE: [],
                challengesB: [], challengesTextB: [],
                challengesF: [], challengesTextF: [],
                challengesRE: [], challengesTextRE: [],
                challengesC: [], challengesTextC: [],
                cat: '', childrenChallenges: '', isDisabled: false,
                disabledDates: {
                    to: new Date(Date.now() - 8640000)
                }
            }
        },
        mounted: function(){
            this.getChallenges();
            this.getFrontends();
            this.handleButtons();
        },
        methods: {
            sendSlackNotification: function(isBooked, channel) {

                if (this.handleSubmit()){
                    return;
                }

                const Slack = require('slack')
                const bot = new Slack();

                const message = isBooked ? "*"+this.eventName + "* has been BOOKED" : "*"+this.eventName + "*has been CREATED";
                const text = message + "\n" +
                        "User: *" + localStorage.getItem("user-email") + "*\n" +
                        "Event Tag: *" + this.eventTag + "*\n" +
                        "Start Time: *" + this.get_date(this.eventStartTime) + "*\n" +
                        "Finish Time: *" + this.get_date(this.eventFinishTime) + "*\n" +
                        "Availability: *" + this.eventAvailability + "*\n" +
                        "Capacity: *" + this.eventCapacity + "*\n" +
                        "Frontend: *" + this.selectedFrontends + "*\n" +
                        "Challenges: *" + this.selectedChallenges + "*";

                window.console.log(process.env.SLACK_API_KEY);
                (async () => {
                    const res = await bot.chat.postMessage({ token: process.env.SLACK_API_KEY , text: text, channel: channel });
                    this.$bvModal.hide('create-event-modal')
                    if (isBooked){
                        this.$emit('modalToHome', {ok: res.ok, event: this.eventTag});
                    }
                })();
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
                const month = date.getMonth().toString().length == 1 ? "0" + (date.getMonth() + 1) : date.getMonth();
                const day = date.getDate().toString().length == 1 ? "0" + date.getDate() : date.getDate();
                return date.getFullYear() + "-" + month + "-" + day
            },
            handleSubmit() {
                this.submitted = true;
                if (!(this.eventName && this.eventTag)){
                    return true;
                }else if (this.selectedFrontends.length == 0 || this.selectedChallenges.length == 0) {
                    return true;
                }else if (this.eventCapacity == 0 || this.eventAvailability == 0 || this.eventFinishTime == ''){
                    return true;
                }else{
                    this.eventName = this.encodeHTML(this.eventName);
                    this.eventTag = this.encodeHTML(this.eventTag);
                    this.eventAvailability = this.encodeHTML(this.eventAvailability);
                    this.eventCapacity = this.encodeHTML(this.eventCapacity);
                    this.eventFinishTime = this.get_date(this.eventFinishTime);
                    this.eventStartTime = this.get_date(this.eventStartTime);
                    return false
                }
            },
            createEvent: function () {

                if(this.handleSubmit()){
                    return
                }

                let getRequest = new CreateEventRequest();
                getRequest.setName(this.eventName);
                getRequest.setTag(this.eventTag);
                getRequest.setAvailable(this.eventAvailability);
                getRequest.setCapacity(this.eventCapacity);
                getRequest.setStarttime(this.eventStartTime);
                getRequest.setFinishtime(this.eventFinishTime);

                this.selectedChallenges.forEach(function(challenge) {
                    getRequest.addExercises(challenge)
                });

                this.selectedFrontends.forEach(function(frontend) {
                    getRequest.addFrontends(frontend)
                });

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
                        }

                    })
                });

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
            }
        }
    }
</script>

<style scoped>
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