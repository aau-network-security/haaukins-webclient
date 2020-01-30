<template>
    <b-modal ref="modal" id="create-event-modal" size="lg" centered hide-footer>
        <template v-slot:modal-title>
            Create a new Event
        </template>
        <form ref="form" @submit.stop.prevent="handleSubmit()">
            <b-row>
                <b-col lg="7">
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
                    <b-row>
                        <b-col md="4">
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
                        </b-col>
                        <b-col md="4">
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
                        </b-col>
                        <b-col md="4">
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
                        </b-col>
                        <b-col v-if="frontends" md="12">
                            <span>Frontends</span>
                            <div class="frontends-field-modal p-2 mt-2" :class="{ 'my-is-invalid': submitted && this.selectedFrontends.length == 0 }">
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
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col v-if="challengesTextValue" lg="5" class="mt-3 mt-lg-0">
                    <b-form-group>
                        <div class="challenges-field-modal frontends-field-modal p-3 mt-2" :class="{ 'my-is-invalid': submitted && this.selectedChallenges.length == 0 }">
                            <b-form-checkbox-group
                                    id="challengesTag"
                                    v-model="selectedChallenges"
                                    :options="challengesTextValue"
                                    name="challengesTag"
                                    class="ml-4"
                                    stacked
                            ></b-form-checkbox-group>
                        </div>

                        <template v-slot:label>
                            <b>Choose your Challenges:</b><br>
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
            <b-button type="submit" class="btn-haaukins float-right">Create</b-button>
        </form>
    </b-modal>
</template>

<script>
    import { Empty, CreateEventRequest } from "daemon_pb";
    import { daemonclient } from "../App";

    export default {
        name: "EventModal",
        data: function () {
            return {
                error: null,
                submitted: false,
                eventName: '',
                eventTag: '',
                eventAvailability: 0,
                eventCapacity: 0,
                challengesTag: [],
                challengesTextValue: [],
                selectedChallenges: [],
                selectAllChallenges: false,
                frontends: [],
                selectedFrontends: []
            }
        },
        created: function(){
            this.getChallenges();
            this.getFrontends();
        },
        methods: {
            toggleAllChallenges: function(checked) {
                this.selectedChallenges = checked ? this.challengesTag.slice() : []
            },
            encodeHTML: function(s) {
                return s.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
            },
            handleSubmit() {
                this.submitted = true;
                if (!(this.eventName && this.eventTag)){
                    return;
                }else{
                    if (this.selectedFrontends.length == 0 || this.selectedChallenges.length == 0){
                        return;
                    }else{
                        this.eventName = this.encodeHTML(this.eventName)
                        this.eventTag = this.encodeHTML(this.eventTag)
                        this.eventAvailability = this.encodeHTML(this.eventAvailability)
                        this.eventCapacity = this.encodeHTML(this.eventCapacity)
                        this.createEvent()
                    }
                }
                // Hide the modal manually
                //this.$nextTick(() => {
                    //this.$refs.modal.hide()
                //})
            },
            createEvent: function () {

                let getRequest = new CreateEventRequest();
                getRequest.setName(this.eventName);
                getRequest.setTag(this.eventTag);
                getRequest.setAvailable(this.eventAvailability);
                getRequest.setCapacity(this.eventCapacity)

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
                    let exercisesListObj = response.getExercisesList()
                    exercisesListObj.forEach(function (element) {
                        let taglist = element.getTagsList()
                        let name = element.getName()
                        let challenge = { text: name, value: taglist[0] }
                        that.challengesTextValue.push(challenge)
                        that.challengesTag.push(taglist[0])
                    })
                });

            },
            getFrontends: function () {
                let getRequest = new Empty();
                daemonclient.listFrontends(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    const that = this
                    let frontendsListObj = response.getFrontendsList()
                    //frontendsListObj.forEach(el => this.frontends.push(el.getImage()))
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
        box-shadow: 1px 1px 2px rgba(220,53,69,0.7);    }
    #__BVID__24{
        margin-bottom: 0px!important;
    }
</style>