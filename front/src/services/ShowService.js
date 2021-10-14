import Api from '../boot/axios'

export default {
  store (params) {
    return Api().post('show', params, { headers: { Authorization: params.token } })
  },
  getShows (params) {
    return Api().get('getShows/' + params.event_id, params, { headers: { Authorization: params.token } })
  },
  update (params) {
    return Api().post('updateShow/' + params.show.show_id, params, { headers: { Authorization: params.token } })
  },
  delete (params) {
    return Api().post('deleteShow/' + params.show_id, params, { headers: { Authorization: params.token } })
  }
}
