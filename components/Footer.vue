<template>
  <div class="footer">
      <div class="elements">
        <div>
          <h5>Areas</h5>
          <ul>
            <li class="list-unstyled"><a href="/Areas">All Areas</a></li>
          </ul>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li class="list-unstyled"><a href="/Products">All Products</a></li>
          </ul>
        </div>
        <div>
          <h5>Who We Are</h5>
          <ul>
            <li class="list-unstyled"><a href="/The_Company">About Us</a></li>
            <li class="list-unstyled"><a href="/Our_Team">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li class="list-unstyled"><a href="/Contact_Us">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        &copy; 2020 Copyright: <a href="https://hypercompany.herokuapp.com">  Hypercompany </a>
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

.footer{
  background-color: black;
  color: white;
  text-decoration: none;
}

.elements, .copyright {
  display: flex;
  justify-content: center;
}

.footer h5, .copyright, .copyright a {
  color: white;
}

.list-unstyled {
  list-style-type: none;
}

.list-unstyled a {
  color: white;
}

</style>