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
.footer {
  color: white;
  text-decoration: none;
  display: flex;
  font-size: 13px;
}
/*Display as flex for side-by-side representation of list elements */
.elements, .copyright {
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  padding: 10px 0px;
}
/*Do not display bullet point */
.list-unstyled {
  list-style-type: none;
}
/*Do not underline links and display in white color */
.elements a, .copyright a {
  text-decoration-line: none;
  color: white;
}
</style>