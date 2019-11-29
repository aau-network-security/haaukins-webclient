<template>
    <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="createEvent" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <form @submit.prevent="createEvent">
                    <div class="modal-header">
                        <h5 class="modal-title" id="createEvent">Create a new Event</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="form-row">
                                <div class="col-lg-7">
                                    <div class="form-group">
                                        <label for="nameEvent">Name</label>
                                        <input type="text" class="form-control" v-model="eventName" name="nameEvent" id="nameEvent" :class="{ 'is-invalid': submitted && !eventName }" placeholder="Event Name">
                                    </div>
                                    <div class="row mt-lg-4">
                                        <div class="form-group col-md-4">
                                            <label for="tagEvent">Tag</label>
                                            <input type="text" class="form-control" v-model="eventTag" name="tagEvent" id="tagEvent" :class="{ 'is-invalid': submitted && !eventTag }" placeholder="Event Tag">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="availableFrontEvent">Availability</label>
                                            <input type="number" min="1" step="1" v-model="eventAvailability" name="availableFrontEvent" class="form-control" :class="{ 'is-invalid': submitted && !eventAvailability }" id="availableFrontEvent">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="capacityEvent">Capacity</label>
                                            <input type="number" min="1" step="1" v-model="eventCapacity" name="capacityEvent" class="form-control" :class="{ 'is-invalid': submitted && !eventCapacity }" id="capacityEvent">
                                        </div>
                                        <div v-if="frontends" class="col-md-12 mt-lg-3">
                                            <span>Frontends</span>
                                            <div class="frontends-field-modal p-2 mt-2" :class="{ 'my-is-invalid': submitted && eventFrontends == '' }">
                                                <div v-for="frontend in frontends.frontendsList" v-bind:key="frontend.image" class="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" class="custom-control-input" :id="frontend.image" :value="frontend.image" name="frontends_list[]">
                                                    <label class="custom-control-label" :for="frontend.image">{{frontend.image}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="challenges" class="col-lg-5 mt-3 mt-lg-0">
                                    <span>Challenges</span>
                                    <div class="challenges-field-modal frontends-field-modal p-3 mt-2" :class="{ 'my-is-invalid': submitted && eventChallenges == '' }">
                                        <div v-for="challenge in challenges.exercisesList" v-bind:key="challenge.tagsList[0]" class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" :id="challenge.tagsList[0]" :value="challenge.tagsList[0]" name="challenges_list[]">
                                            <label class="custom-control-label" :for="challenge.tagsList[0]">{{challenge.name}}</label>
                                        </div>
                                    </div>
                                    <button v-on:click="selectAllCheckBox" type="button" class="badge badge-secondary mr-2">Select All</button>
                                    <button v-on:click="selectNoneCheckBox" type="button" class="badge badge-secondary">Select None</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-haaukins">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { Empty, CreateEventRequest } from "daemon_pb";
    import { daemonclient } from "../App";

    export default {
        name: "ModalEvent",
        data: function () {
            return {
                error: null,
                submitted: false,
                eventName: null,
                eventTag: null,
                eventAvailability: 0,
                eventCapacity: 0,
                eventChallenges: '',
                eventFrontends: '',
                challenges: null,
                frontends: null
            }
        },
        created: function(){
            this.getChallenges();
            this.getFrontends();
        },
        methods: {
            createEvent: function () {
                this.submitted = true;
                this.eventChallenges = this.getCheckedChallenges();
                this.eventFrontends = this.getCheckedFrontends();
                if (!(this.eventName && this.eventTag)){
                    return;
                }else{
                    if (this.eventChallenges == '' || this.eventFrontends == ''){
                        return;
                    }else{
                        let getRequest = new CreateEventRequest();
                        getRequest.setName(this.eventName);
                        getRequest.setTag(this.eventTag);
                        getRequest.setAvailable(this.eventAvailability);
                        getRequest.setCapacity(this.eventCapacity)

                        this.eventChallenges.split(',').forEach(function(challenge) {
                            getRequest.addExercises(challenge)
                        });
                        this.eventFrontends.split(',').forEach(function(frontend) {
                            getRequest.addFrontends(frontend)
                        });
                        this.$emit('createEvent', getRequest)
                    }
                }
            },
            getChallenges: function () {
                let getRequest = new Empty();
                daemonclient.listExercises(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    this.challenges = response.toObject()
                });
            },
            getFrontends: function () {
                let getRequest = new Empty();
                daemonclient.listFrontends(getRequest, {Token: localStorage.getItem("user")}, (err, response) => {
                    this.error = err;
                    this.frontends = response.toObject()
                });
            },
            getCheckedFrontends: function () {
                let categoryCheck = document.querySelectorAll('input[name="frontends_list[]"]:checked'), values = [];
                Array.prototype.forEach.call(categoryCheck, function(el) {
                    values.push(el.value);
                });
                return values.join(',');
            },
            getCheckedChallenges: function () {
                let categoryCheck = document.querySelectorAll('input[name="challenges_list[]"]:checked'), values = [];
                Array.prototype.forEach.call(categoryCheck, function(el) {
                    values.push(el.value);
                });
                return values.join(',');
            },
            selectAllCheckBox: function (e) {
                e.preventDefault();
                let allInputs = document.querySelectorAll('input[name="challenges_list[]"]');
                for (let i = 0, max = allInputs.length; i < max; i++){
                    if (allInputs[i].type === 'checkbox')
                        allInputs[i].checked = true;
                }
            },
            selectNoneCheckBox: function (e) {
                e.preventDefault();
                let allInputs = document.querySelectorAll('input[name="challenges_list[]"]');
                for (let i = 0, max = allInputs.length; i < max; i++){
                    if (allInputs[i].type === 'checkbox')
                        allInputs[i].checked = false;
                }
            }
        }

    }

</script>

<style scoped>
    .challenges-field-modal {
        height: 250px;
        overflow-y: auto;
    }
    .frontends-field-modal{
        border: 1px solid #ced4da;
        border-radius: .35rem;
    }
    .my-is-invalid{
        border: 1px solid #000000;
    }
</style>