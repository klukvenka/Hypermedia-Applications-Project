<template>
  <div class="footer">
    <div class="elements">
      <ul>
        <li class="list-unstyled"><a href="/Areas">All Areas</a></li>
        <li class="list-unstyled"><a href="/Products">All Products</a></li>
      </ul>
      <ul>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/The_Company">About Us</a></li>
        <li class="list-unstyled"><a href="/Our_Team">Our Team</a></li>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/Contact_Us">Contact Us</a></li>
      </ul>
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

.footer {
  color: white;
  text-decoration: none;
}

.elements {
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
}

.copyright {
  background-color: black;
  width: 100%
}

.copyright a {
  color: white;
}

.list-unstyled {
  list-style-type: none;
}

.list-unstyled a {
  text-decoration-line: none;
  color: white;
}

</style>