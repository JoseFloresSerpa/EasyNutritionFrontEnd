<template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit Sessiondetail</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.id" label="Session Id"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.state" label="State"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.session" label="SessionId"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.user" label="UserId"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SessiondetailsService from "@/services/sessiondetails-service";

export default {
  name: "edit-Service",
  data() {
    return {
      item: {
        id: 0,
        session: '',
        user: ''
      }
    }
  },
  methods: {
    retrieveSessiondetails(id) {
      SessiondetailsService.get(id)
          .then((response) => {
            this.item = response.data;
          })
          .catch(e => {
            console.log((e));
          })
    },

    save() {
      SessiondetailsService.update(this.item.id, this.item)
          .then(() => {
            this.navigateToSessiondetails();
          })
          .catch(e => {
            console.log(e);
          })
    },
    close() {
      this.navigateToSessiondetails();
    },
    navigateToSessiondetails() {
      this.$router.push({name: 'services'});
    }
  },
  created() {
    this.retrieveSessiondetails(this.$route.params.id);
  },
}

</script>

<style scoped>

</style>


