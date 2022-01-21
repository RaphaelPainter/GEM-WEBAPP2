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
           apiHealth: {{ apiHealth }}
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import Tab from './components/Tab'
  import Tabs from './components/Tabs'

import {mapState } from "vuex"

  export default {
    components: {
      Tab,
      Tabs
    },
    
    data () {
      return {
        mode: 'dark'
      }
    },
   
    computed: {
    apiHealth () {
	    return this.$store.state.commonStore.apiHealth
    }
  },
  }
</script>

<style lang="css">
  * {
    margin: 0;
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
</style>
