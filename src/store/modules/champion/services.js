import HttpClient from '../../../utils/HttpClient'

const API = new HttpClient(process.env.VUE_APP_API_BASE_URL)

export default {
  readChampions(query) {
    return API.get(`champions?${query}`)
  },
}
