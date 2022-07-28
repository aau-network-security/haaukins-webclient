<template>
  <b-modal ref="modal" id="add-announcement-modal" size="lg" centered hide-footer>
    <template v-slot:modal-title>Announcement banner</template>
    <form ref="form" @submit.stop.prevent="addAnnouncement()">
      <b-row class="row h-50">
        <b-col md="12">
          <b-row>
            <b-col md="12">
              <p> The announcement banner can be used to communicate upgrades, downtime, and other important information. It appears at the top of the page and can't be dismissed by users.</p>
              <b-form-group
                id="fieldset-status"
                label="Enable/Disable the announcement banner"
                label-for="status"
              >
                <b-form-radio-group
                    id="status"
                    v-model="status"
                    :options="statusOptions"
                    name="status"
                    class="ml-4"
                    aria-label="Enable/Disable Banner"
                    stacked
                ></b-form-radio-group>
              </b-form-group>
              <b-tooltip target="status" triggers="hover">
                Enable/Disable the announcement banner
              </b-tooltip>

              <b-form-group
                  id="fieldset-announcement"
                  label="Announcement (Max: 140 Characters)"
                  label-for="announcement"
              >
                <b-form-input
                    id="announcement"
                    v-model="announcement"
                    :state="announcementState"
                    type="text"
                    min=0
                    max=140
                    :disabled="controlInput"
                ></b-form-input>
              </b-form-group>

              <b-tooltip target="fieldset-announcement" triggers="hover">
                Will add a notification bar to all events if only logged users NOT selected
              </b-tooltip>
              <b-form-group
                  id="fieldset-onlyLoggedInUsers"
                  label="Make the announcement for all users or only logged in users."
                  label-for="onlyLoggedInUsers"

              >
                <b-form-radio-group
                    id="onlyLoggedInUsers"
                    v-model="onlyLoggedInUsers"
                    :options="userOptions"
                    name="onlyLoggedInUsers"
                    class="ml-4"
                    :disabled="controlInput"
                    stacked
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="secondary" @click="$bvModal.hide('add-announcement-modal')">Close</b-button>
          <b-button type="submit" class="btn-haaukins float-right" @click="addAnnouncement" :disabled="controlAnnounceButton">Announce</b-button>
        </b-col>
      </b-row>
    </form>
  </b-modal>
</template>

<script>

export default {
  name: "AnnounceModal",
  data : function () {
   return {
     announcement: '',
     submitted: false,
     status: true,
     onlyLoggedInUsers: false,
     userOptions: [
       {text: 'All Users', value: false},
       {text: 'Logged-In Users only', value: true}
     ],
     statusOptions: [
       {text: 'Enable', value: true},
       {text: 'Disable', value: false}
     ]
   }
  },
  computed: {
    announcementState: function () {
      return this.announcement.length <= 140
    },
    controlAnnounceButton: function () {
      if (!this.status) {
        return false
      } else if (this.status && this.announcement.length <=140){
        return false
      }
      return true
      },
    controlInput : function (){
        return !this.status
    }
  },
  methods:  {

    addAnnouncement: function () {
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("user")
        },
        body: JSON.stringify({
          message: this.announcement,
          loggedUsers: this.onlyLoggedInUsers
        })
      }

      this.$emit('addAnnouncement', opts)
    },
    handleSubmit: function (){
      this.submitted = true
    }
  }
}
</script>

<style scoped>

</style>