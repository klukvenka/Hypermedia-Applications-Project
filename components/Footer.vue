<template>
  <div class="footer">
    <div>
      <div class="elements">
        <div sm="3">
          <h5 class="title">Areas</h5>
          <ul>
            <li class="list-unstyled"><a href="/Areas">All Areas</a></li>
          </ul>
        </div>
        <div sm="3">
          <h5 class="title">Products</h5>
          <ul>
            <li class="list-unstyled"><a href="/Products">All Products</a></li>
          </ul>
        </div>
        <div sm="3">
          <h5 class="title">Who We Are</h5>
          <ul>
            <li class="list-unstyled"><a href="/The_Company">About Us</a></li>
            <li class="list-unstyled"><a href="/Our_Team">Our Team</a></li>
          </ul>
        </div>
        <div sm="3">
          <h5 class="title">Support</h5>
          <ul>
            <li class="list-unstyled"><a href="/Contact_Us">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="copyright">
        &copy; 2020 Copyright: <a href="https://hypercompany.herokuapp.com"> Hypercompany </a>
      </div>
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
body {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.footer, .title, .list-unstyled a, .copyright a {
  background-color: black;
  color: white;
  text-decoration: none;
}

.elements {
  display: grid;
  grid-template-columns: repeat(4,400px);
}
</style>