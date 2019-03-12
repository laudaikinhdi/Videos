export default{
    namespaced: true,
    state:{
        isLoggedIn: false
    },
    getters: {
        isLoggedIn(state, getters, rootState, rootGetters) {
            return state.isLoggedIn;
        }
    },
    actions:{
        login({state, commit, rootState, rootGetters}){
            if(!rootGetters.isBanned){
                // commit('login', null, {root: true});
                commit('login');
            }else{
                alert("Get outta here!");
            }
        },
        logout({state, commit, rootState}){
            commit('logout');
        }
    },
    mutations:{
        login(state){
            console.log("login (user)");
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
}