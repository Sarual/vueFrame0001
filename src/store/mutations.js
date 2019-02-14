import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN](state, user) {
    state.token = user.token
  },
  [types.SET_GAME_LIST](state, user) {
    state.gameList = user.gameList
  }
}

export default mutations
