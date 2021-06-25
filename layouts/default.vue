<!--
Author: Sairaghav Venkataraman
Description: 
Has all components and CSS to be displayed on all pages
-->
<template>
  <div>
        <Nuxt />
        <!--Include chat in every page-->
        <chat :chat-list="list" />
        <!--Include footer in every page-->
        <Footer />
  </div>
</template>

<script>
/*Inport chat mixin */
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
/*Define common font size and type for all pages */
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

/*Configure common font size and alignment for all <p> elements*/

p {
    text-align: justify;
    font-size: 13px;
}

/*Configure topbar (Navigation bar + Breadcrumbs) to be always visible even if user scrolls down the page*/

.topbar {
  position: sticky;
  top:0vh;
  width: 100vw;
}

/*Define common <img> size if not explicitly provided */
img {
  width: 300px;
  height: 300px;
}

/*Outermost box for displaying content. Difference with .card is the margin parameter*/
.content {
  margin: 2vh 10vw;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
}

/*Card-like box for displaying content. Difference with .content is the margin parameter*/
.card {
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
  margin: 2vh 2vw;
  cursor: pointer;
}

/*Padding for all <img> elements in .card*/
.card img {
  padding: 1%;
}

/*Define common behavior when hovering over <button> elements */
button:hover {
  background-color: steelblue
}

/*Define parameter to align text center*/
.text-center {
  text-align: center;
}

/*Define common properties for breadcrumbs in all pages */
.breadcrumbs {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10rem;
  padding: 10px;
}

.breadcrumb-item {
  display: inline;
  text-transform: uppercase;
  font-weight:bold;
}

/*Display flex box with content wrap */
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/*Display content in flexbox*/
.display-details {
  display: flex;
}

/*Define property 'blue-text' with blue color and no line underneath. Intended to be used for <a> */
.blue-text {
  color: steelblue;
  text-decoration-line: none;
}

/*Define property for button for all pages*/
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

/*Define padding for topic-content element */
.topic-content {
  padding: 2%;
}

/*Define property of top-image element */
.top-image {
  margin-top: 1%;
  width: 100vw;
  height: 60vh;
}

/*Define property for heading with lighter font */
.light-heading {
    font-weight:normal;
    text-align: justify;
}

/*Define properties if screen width < 800 px */
@media only screen and (max-width: 800px) {
  /*Do not use flexbox for display-details */
  .display-details {
    display: block;
  }
  /*Do not use 300x300 image size if device is small*/
  .display-details img {
    width: 100%;
  }
  /*Do not lock topbar position on top if device is small*/
  .topbar {
    display: block;
    position: relative;
    top: 0vh;
  }
}

</style>
