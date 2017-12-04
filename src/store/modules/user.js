const state = {
  user: {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    username: ''
  }
}

const getters = {
  fullName: state => {
    let endearment = state.user.gender === 'M' ? 'Mr.' : 'Ms.'
    return endearment + ' ' + state.user.firstName + ' ' + state.user.lastName
  },
  user: state => {
    return state.user
  }
}

const mutations = {
  updateUser: (state, payload) => {
    state.user.firstName = payload.firstName
    state.user.lastName = payload.lastName
    state.user.gender = payload.gender
    state.user.email = payload.email
    state.user.username = payload.username
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
