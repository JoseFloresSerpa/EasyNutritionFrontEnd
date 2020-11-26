<template>
  <v-card>
    <v-card-title>
      Sessiondetails
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="displaySessiondetails" :items-per-page="5" :search="search"
                    class="elevation-1" ref="sessiondetailsTable">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.state" label="State"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.session.id" label="SessionId"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.user.id" label="User"></v-text-field>
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
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Delete Item</v-card-title>
              <v-card-text>
                <p>Are you sure you want to delete the item <b>{{ editedItem.username }}</b></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>

import SessiondetailService from '../../services/sessiondetails-service';

export default {
  name: "sessiondetails",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'State', value: 'state'},
        {text: 'Session', value: 'session'},
        {text: 'User', value: "user" },
        {text: 'Actions', value: 'actions', sortable: false}
      ],
      sessiondetail: [],
      displaySessiondetails: [],
      editedIndex: -1,

      editedItem: {
        id: 0,
        username: '',
        user: ''
      },
      defaultItem: {
        id: 0,
        username: '',
        user: ''
      },
    }
  },


  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Sessiondetail' : 'Edit Sessiondetail'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    retrieveSessiondetails() {
      SessiondetailService.getAll()
          .then(response => {
            this.sessiondetails = response.data;
            this.displaySessiondetails = response.data.map(this.getDisplaySessiondetail);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplaySessiondetail(sessiondetail) {
      return {
        id: sessiondetail.id,
        state: sessiondetail.state,
        session: sessiondetail.session.id,
        user: sessiondetail.user.name
      };
    },
    refreshList() {
      this.retrieveSessiondetails();
    },

    removeAllSessiondetails() {
      SessiondetailService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            alert("The Backend does not support this operation.");
            console.log(e);
          });
    },

    editItem(item) {
      this.editedIndex = this.displaySessiondetails.indexOf(item);
      console.log(item);
      this.editedItem = this.sessiondetails[this.editedIndex];
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.displaySessiondetails.indexOf(item);
      this.editedItem = Object.assign({}, this.sessiondetails[this.editedIndex]);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteSessiondetail(this.editedItem.id);
      this.sessiondetails.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        this.users[this.editedIndex] = this.editedItem;
        this.displaySessiondetails[this.editedIndex] = this.getDisplaySessiondetail(this.users[this.editedIndex]);
        SessiondetailService.update(this.editedItem.id, this.editedItem)
            .then(() => {
              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });

      } else {
        SessiondetailService.create(this.editedItem)
            .then(response => {
              let item = response.data;
              this.sessiondetails.push(item);
              this.displaySessiondetails.push(this.getDisplaySessiondetail(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.close()
    },

    deleteSessiondetail(id) {
      SessiondetailService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },

    navigateToAddSessiondetail() {
      this.$router.push({name: 'add-Sessiondetail'});
    },
    navigateToEditSessiondetail(id) {
      this.$router.push({name: 'edit-sessiondetail', params: { id: id}});
    }
  },
  mounted() {
    this.retrieveSessiondetails();
  },
}
</script>

<style scoped>

</style>
