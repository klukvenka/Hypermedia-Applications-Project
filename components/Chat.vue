<!--
Author: Sairaghav Venkataraman
Description:
Not much has been changed from https://gitlab.com/hypermedia2020-21/hands-on-3/-/blob/master/components/Chat.vue

The only changes were in CSS to adjust height, width of .chat-container and .button.

Also, img src was changed from URL to local file in /static folder
-->
<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <input
        v-model="messageToSend"
        type="text"
        @keypress.enter="sendMessage"
      />
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img src="/chat.png" alt="Chat" title="Chat" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
  },
}
</script>

<style scoped>
.button {
  height: 60px;
  width: 60px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 10px;
  float: right;
  position: fixed;
  bottom: 6vh;
  right: 1vw;
}
.button img {
  width: 100%;
  height: 100%
  
}
.chat-container {
  border: 1px solid black;
  border-radius: 4px;
  height: 350px;
  width: 275px;
  position: fixed;
  bottom: 18vh;
  right: 10px;
  background-color: white;
}
.chat-window {
  height: calc(100% - 34px);
  color: red;
  overflow-y:auto;
}
.message {
  width: calc(100% - 8px);
  display: flex;
  justify-content: flex-end;
  color: green;
}
.message.sender {
  justify-content: flex-start;
  color: blue;
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: #f3f3f3;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
}
.message-content.sender {
  background: black;
  color: white;
  border: 1px solid black;
}
.chat input {
  width: 100%;
  position: absolute;
}
/*Adjusted position of chat button when screen width is less than 800px*/

@media only screen and (max-width: 800px) {
  .button {
    bottom: 6vh;
    right: 2vw;
  }
}
</style>
