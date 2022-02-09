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
          <input
            v-model="search"
            class="mx-4"
            placeholder="Rechercher par nom"
            autocomplete="off"
          >
        </template>
      </v-data-table>
      </div>
</template>

<script>

  import store from "@/store"
  import { mapActions, mapState,mapMutations } from "vuex"

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


  document.addEventListener("DOMContentLoaded", function(e) {
    var elementList = document.getElementsByClassName("v-icon notranslate mdi mdi-chevron-left theme--light");
    elementList.item(0).innerHTML = "<---";
    elementList = document.getElementsByClassName("v-icon notranslate mdi mdi-chevron-right theme--light");
    elementList.item(0).innerHTML = "--->"


  })

</script>

<style lang="css">
 table:first-child {
    width:100%;
}

#input-13{
  display: none;
}

.v-data-footer__select{
  display: none;
}

.v-data-footer__icons-before{
  display: inline;
}

.v-data-footer__icons-after{
  display: inline;
}

.text-start{
  text-align: left;
}

col{
  width: 300px;
}

</style>
