<template>
  <div class="footer">
    <div class="elements">
      <ul>
        <a href="/Areas"><li class="list-unstyled">All Areas</li></a>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/Products">All Products</a></li>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/The_Company">About Us</a></li>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/Our_Team">Our Team</a></li>
      </ul>
      <ul>
        <li class="list-unstyled"><a href="/Contact_Us">Contact Us</a></li>
      </ul>

      <div class="copyright">
        &copy; 2020 Copyright: <a href="/">  Hypercompany </a>
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
  overflow-x: hidden;
}

.footer {
  color: white;
  text-decoration: none;
}

.elements {
  display: flex;
  background-color: black;
  width: 100%;
  padding: 10px;
}

.elements button {
  width: 100%;
}
.copyright {
  margin-left: 10vw;
}

.copyright a {
  color: white;
  text-decoration-line: none;
}

.list-unstyled {
  list-style-type: none;
  margin-left: 105px;
}

.elements a {
  color: white;
}
.list-unstyled a {
  text-decoration-line: none;
  color: white;
}

@media only screen and (max-width: 800px) {
  .copyright, .elements {
    display: block;
    text-align: center;
  }
  .copyright {
    margin-left: 0vw;
  }
  
}
</style>