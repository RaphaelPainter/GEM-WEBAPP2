<template>
  <div>
  <v-data-table
        :headers="headers"
        :items="users"
        item-key="name"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
      </div>
</template>

<script>


import axios from 'axios';

  import store from "@/store"
  import { mapGetters, mapActions, mapState,mapMutations } from "vuex"

export default {

  mounted(){
  },
  data: function() {
        return {
            search: '',
            users: require('./../test/users.test'),
        }
    },
    computed: {
    ...mapState("commonStore", [
      "apiHealth"
    ]),
    headers () {
      return [
        {
          text: 'Nom-Prénom',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
        },
        {
          text: 'date de création',
          align: 'start',
          sortable: false,
          value: 'created',
        }]
    },
  },
   methods: {
    ...mapActions("commonStore", [
      "setApiHealth_action"
    ],
    ...mapMutations([
      'setApiHealth_mutation'
    ])),
   }
  }
  store.dispatch("commonStore/setApiHealth_action")
  this.users = store.state.commonStore.apiHealth;
  console.log(this.users)
</script>

<style lang="css">
 table:first-child {
    width:100%;
}
</style>