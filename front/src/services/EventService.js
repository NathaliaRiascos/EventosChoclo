import Api from '../boot/axios'

export default {
  store (params) {
    return Api().post('event', params, { headers: { Authorization: params.token } })
  }
}
