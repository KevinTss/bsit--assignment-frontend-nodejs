import services from './services'
import { GET_CHAMPIONS } from './constants'
import { REQUEST, FAILED, SUCCESS } from '../../../utils/globalConstants'

export default {
  async searchChampions({ commit }, page) {
    commit(`${REQUEST}${GET_CHAMPIONS}`)
    try {
      const query = `page=${page || 1}&limit=10`
      const response = await services.readChampions(query)
      commit('setChampions', response.data)
      commit('setTotalCount', response.total_count)
      const totalPage = response.total_page
      // const page = response.previous ? response.previous + 1 : 1
      commit('setPagesInfo', { totalPage, page: page || 1 })
      commit(`${SUCCESS}${GET_CHAMPIONS}`)
    } catch (error) {
      commit(`${FAILED}${GET_CHAMPIONS}`, error.message)
    }
  },
}
