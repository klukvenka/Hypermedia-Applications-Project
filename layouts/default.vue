<template>
  <div>
        <Nuxt />
        <chat :chat-list="list" />
        <Footer />
  </div>
</template>

<script>
import Chat from '~/components/Chat'
import MMCCMixin from '~/mixins/mmcc-mixin'

export default {
  components: {
    Chat
  },
  mixins: [MMCCMixin],
}
</script>


<style>
html {
  font-family:
    Arial;
  font-size: 16px;
  word-spacing: 1.4px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

p {
    text-align: justify;
    font-size: 13px;
}

.topbar {
  position: sticky;
  top:0vh;
  width: 100vw;
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
  cursor: pointer;
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

.breadcrumbs {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10rem;
  padding: 10px;
  text-align: center;
}

.breadcrumb-item {
  display: inline;
  text-transform: uppercase;
  font-weight:bold;
  color: black;
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
    cursor: pointer;
    box-shadow: 2px solid #333;
}

.topic-content {
  padding: 2%;
}

.top-image {
  margin-top: 1%;
  width: 100vw;
  height: 60vh;
}

.light-heading {
    font-weight:normal;
    text-align: justify;
}

@media only screen and (max-width: 800px) {
  .display-details {
    display: block;
  }
  .display-details img {
    width: 100%;
  }
  .topbar {
    display: block;
    position: relative;
    top: 0vh;
  }
}

</style>
