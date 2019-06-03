import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historicalScores: [],
    currentTeam1: 0,
    currentTeam2: 0
  },
  mutations: {
    INCREMENT_TEAM_1(state) {
      state.currentTeam1++
    },
    INCREMENT_TEAM_2(state) {
      state.currentTeam2++
    },
    SAVE_SCORES(state) {
      state.historicalScores.push([state.currentTeam1, state.currentTeam2])
    },
    RESET_SCORES(state) {
      state.currentTeam1 = 0
      state.currentTeam2 = 0
    }
  },
  actions: {
    incrementScore(context, payload) {
      if (payload.team === 1) {
        context.commit('INCREMENT_TEAM_1')
      } else {
        context.commit('INCREMENT_TEAM_2')
      }
    },
    saveScores({ commit }) {
      commit('SAVE_SCORES')
      commit('RESET_SCORES')
    }
  },
  getters: {
  }
})
