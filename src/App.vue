<template lang="html">
  <div class="wrapper">
    <!-- <button class="change__style" @click="changeStyle()">Change Style</button> -->
    <tabs :mode="mode">
      <tab title="Accueil">
        <div class="wrapper-inside-tab">
          Bienvenue sur l'application web du GEM 44 !
        </div>
      </tab>
      <tab title="DEBUG">
         <div class="wrapper-inside-tab">
           <!--  apiHealth: {{ apiHealth }} -->
           <users/>
        </div>

      </tab>
    </tabs>
  </div>
</template>

<script>
  import Tab from './components/Tab'
  import Tabs from './components/Tabs'
  import users from './components/users'
  import store from "@/store"
  import { mapGetters, mapActions, mapState,mapMutations } from "vuex"

  export default {
    components: {
      Tab,
      Tabs,
      users
    },

    data () {
      return {
        mode: 'dark',

      }
    },
   computed: {
    ...mapState("commonStore", [
      "apiHealth"
    ])},
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
</script>

<style lang="css">


  * {
    padding: 0;
    font-family: 'Karla', sans-serif;
  }

 

  .tabs__dark{
    padding:20px;
  }



  .wrapper-inside-tab{
    padding: 20px;
  }

  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    margin: 0;
    padding: 20px;
  }

  .change__style {
    background-color: #eee;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 5px;
  }

  body{
    margin: 0px;
    font-size: 20px;
  }

  input{
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
