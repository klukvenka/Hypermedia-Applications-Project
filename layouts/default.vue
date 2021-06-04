<template>
  <div>
    <Nuxt />
    <chat :chat-list="list" />
  </div>
</template>

<script>
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'
export default {
  components: {
    Chat,
  },
  mixins: [MMCCMixin],
}
</script>


<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


p {
    text-align: justify;
}

img {
  width: 300px;
  height: 300px;
}

.content {
  margin: 2vh 10vw;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
}

.card {
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
  margin: 2vh 2vw;
}

.card img {
  padding: 1%;
}

button:hover {
  background-color: red;
}

.text-center {
  text-align: center;
}

.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.display-details {
  display: flex;
}

.red-text {
  color: red;
  text-decoration-line: none;
  
}

button {
    border: none;
    background-color: black;
    color: white;
    outline: none;
    padding: 2%;
    margin: 2%;
    box-shadow: 2px solid #333;
}


@media only screen and (max-width: 600px) {
  .display-details {
    display: block;
  }
  .display-details img {
    width: 100%;
  }
}

</style>
