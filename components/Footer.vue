<!--
Author: Sairaghav Venkataraman
Description:
This component for Footer displays all the landmark links as an unstyled list.

'list-unstyled' CSS is defined to not display bullet points.
-->
<template>
    <div class="footer">
        <div class="copyright">
            &copy; 2020 Copyright: <a href="/">  Hypercompany </a>
        </div>
    </div>
</template>

<script>

    export default {
      components: {
      }
    }
</script>

<style>
/*Define font size and color with center align */
.footer, .footer a {
  color: white;
  font-size: 13px;
  background-color: black;
  text-align: center
}
</style>