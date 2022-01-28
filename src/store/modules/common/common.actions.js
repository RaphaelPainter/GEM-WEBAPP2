const axios = require('axios').default;


export default {
    setApiHealth_action({ commit, dispatch }) {
        axios.post('https://gem44-api.herokuapp.com/adherents')
            .then(function(response) {
                // handle success
                commit("setApiHealth_mutation", "changed")
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .then(function() {
                // always executed
            });
    }
}