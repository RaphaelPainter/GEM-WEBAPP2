<template lang="html">
  <div class="wrapper">
    <!-- <button class="change__style" @click="changeStyle()">Change Style</button> -->
    <tabs :mode="mode">
      <tab title="Accueil">
        <div class="wrapper-inside-tab">
          {{ count }}
          Bienvenue sur l'application web du GEM 44 !
        </div>
      </tab>
      <tab title="Tab 2">Hello From Tab 2</tab>
    </tabs>
  </div>
</template>

<script>
  import Tab from './components/Tab'
  import Tabs from './components/Tabs'

import {store} from './store/index';
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
    methods: {
      changeStyle () {
        if (this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      }
    },
      computed: {
    ...mapState("commonStore", ["count"])
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
