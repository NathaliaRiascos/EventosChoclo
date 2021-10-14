import Api from '../boot/axios'

export default {
  store (params) {
    return Api().post('event', params, { headers: { Authorization: params.token } })
  },
  getEvents (params) {
    return Api().get('getEvents', { headers: { Authorization: params.token } })
  },
  getEventsByDate (params) {
    return Api().get('getEvents-date/' + params.event_date, params, { headers: { Authorization: params.token } })
  },
  update (params) {
    return Api().post('updateEvent/' + params.event.event_id, params, { headers: { Authorization: params.token } })
  },
  delete (params) {
    return Api().post('deleteEvent/' + params.event_id, params, { headers: { Authorization: params.token } })
  }
}
