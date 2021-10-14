import Api from '../boot/axios'

export default {
  store (params) {
    return Api().post('sell', params, { headers: { Authorization: params.token } })
  },
  getValues (params) {
    return Api().get('getValues', { headers: { Authorization: params.token } })
  }

}
