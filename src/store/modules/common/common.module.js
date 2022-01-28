import state from "./common.state"
import actions from "./common.actions"
import getters from "./common.getters"
import mutations from "./common.mutations"

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}