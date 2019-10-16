import { GET_CHAMPIONS } from './constants'

export default {
  list: [],
  totalCount: null,
  pages: {
    total: null,
    loaded: [],
  },
  actions: {
    [GET_CHAMPIONS]: {
      success: false,
      loading: false,
      error: null,
    },
  },
}
