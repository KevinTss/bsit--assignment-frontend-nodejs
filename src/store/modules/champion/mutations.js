import { REQUEST, FAILED, SUCCESS } from '../../../utils/globalConstants'
import { GET_CHAMPIONS } from './constants'

export default {
  setChampions(state, data) {
    state.list = [...state.list, ...data]
  },
  setPagesInfo(state, data) {
    state.pages = {
      total: data.totalPage,
      loaded: [...state.pages.loaded, data.page],
    }
  },
  setTotalCount(state, data) {
    state.totalCount = data
  },

  /**
   * Actions mutations
   *
   * They change actions object depend of the current state
   *
   * @param {object} state
   */
  [`${REQUEST}${GET_CHAMPIONS}`](state) {
    state.actions[GET_CHAMPIONS].success = false
    state.actions[GET_CHAMPIONS].loading = true
    state.actions[GET_CHAMPIONS].error = null
  },
  [`${FAILED}${GET_CHAMPIONS}`](state, errorMessage) {
    state.actions[GET_CHAMPIONS].success = false
    state.actions[GET_CHAMPIONS].loading = false
    state.actions[GET_CHAMPIONS].error = errorMessage
  },
  [`${SUCCESS}${GET_CHAMPIONS}`](state) {
    state.actions[GET_CHAMPIONS].success = true
    state.actions[GET_CHAMPIONS].loading = false
    state.actions[GET_CHAMPIONS].error = null
  },
}
