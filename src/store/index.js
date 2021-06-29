import Vue from "vue";
import Vuex from "vuex";

// Load Vuex
Vue.use(Vuex);



export default new Vuex.Store({
    state: {
        currentUser: null
    },
    mutations: {
        setCurrentUser(state, payload) {
            state.currentUser = payload
        }
    },
    actions: {

    }
});
