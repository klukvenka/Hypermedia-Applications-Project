/*Same as https://gitlab.com/hypermedia2020-21/hands-on-3/-/blob/master/store/index.js*/
import Vue from 'vue'

export const state = () => {
  return {
    messages: [],
  }
}

export const mutations = {
  addMessage(state, message) {
    const messages = state.messages
    messages.push(message)
    Vue.set(state, 'messages', messages)
  },
}