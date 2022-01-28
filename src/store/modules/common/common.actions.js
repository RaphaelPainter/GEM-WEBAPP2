export default {
    setApiHealth_action({ commit, dispatch }) {
        console.log("bla")
        commit("setApiHealth_mutation", "changed")
    }
}