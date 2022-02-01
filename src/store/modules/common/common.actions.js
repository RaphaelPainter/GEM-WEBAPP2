const axios = require('axios').default;


export default {
  setApiHealth_action({ commit, dispatch }) {

        axios.post('http://localhost:8082/adherents', {
  "login": "admin",
  "password": "admin"
})
            .then(function(response) {
                // handle success
                commit("setApiHealth_mutation", response.data)
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
