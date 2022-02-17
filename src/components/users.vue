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
          text: 'Nom',
          align: 'start',
          sortable: false,
          value: 'Nom',
        },
        {
          text: 'Prénom',
          align: 'start',
          sortable: false,
          value: 'Prénom',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'Email',
        },
        {
          text: 'Date création compte',
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

.v-data-table-header{
  background-color: rgb(10, 30, 48);
}

tr{
  height: 55px;
}

td{
    border-top: 1px solid rgb(77, 88, 112);
}


.v-data-table{
  height: 650px;
}

.tabs__dark{
  height: 800px;
}

.tab{
     height: 800Px;
}


.v-data-table__wrapper{
  height: 100%;
}

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

button{
  padding: 10px;
}

</style>
