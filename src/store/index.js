import Vue from "vue"
import Vuex from "vuex"
import commonStore from "./modules/common/common.module"

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV === "development",
    modules: {
        commonStore
    }
})