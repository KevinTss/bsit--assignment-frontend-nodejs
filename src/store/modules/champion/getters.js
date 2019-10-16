import { GET_CHAMPIONS } from './constants'

export default {
  /**
   * championsList
   * @return {Array} - List of champions.
   */
  championsList: state => state.list,
  championById(state) {
    return id => state.list.filter(el => el.id === id)[0]
  },

  /**
   * Get loadings
   */
  isChampionsLoading: state => state.actions[GET_CHAMPIONS].loading,

  /**
   * Get errors
   */
  hasChampionsError: state => state.actions[GET_CHAMPIONS].error,

  isMorePage: state => !state.pages.loaded.includes(state.pages.total),
  lastPageLoaded: state => state.pages.loaded[state.pages.loaded.length - 1],
}
