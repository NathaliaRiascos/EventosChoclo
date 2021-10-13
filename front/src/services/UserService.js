import Api from '../boot/axios'

export default {
  login (params) {
    return Api().post('login', params)
  },
  recovery (params) {
    return Api().post('recovery', params)
  },
  changePassword (params) {
    return Api().post('changepassword', params)
  },
  register (params) {
    return Api().post('register', params, { headers: { Authorization: params.token } })
  },
  getUser (params) {
    return Api().get('user/' + params.id, { headers: { Authorization: params.token } })
  },
  modifyUser (params) {
    return Api().post('user/' + params.id, params, { headers: { Authorization: params.token } })
  },
  deleteUser (params) {
    return Api().delete('user/' + params.id, { headers: { Authorization: params.token } })
  },
  getUsers (params) {
    return Api().get('getUsers', { headers: { Authorization: params.token } })
  },
  searchUsers (params) {
    return Api().post('searchUsers', params, { headers: { Authorization: params.token } })
  }
}
