'use strict'

import Vuex from 'vuex'

export default new Vuex.Store({
  modules: {
    post: {
      state: {
        post: null
      },
      getters: {
        post (state) {
          return state.post
        }
      },
      mutations: {
        SET_POST (state, post) {
          state.post = post
        },
        RESET_POST (state) {
          state.post = null
        }
      },
      actions: {
        setPost ({ commit }, post) {
          commit('SET_POST', post)
        },
        resetPost ({ commit }) {
          commit('RESET_POST')
        }
      }
    }
  }
})
