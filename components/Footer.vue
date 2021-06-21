<template>
    <div class="footer">
        <div class="elements">
        <ul>
            <a href="/Areas"><li class="list-unstyled">All Areas</li></a>
        </ul>
        <ul>
            <a href="/Products"><li class="list-unstyled">All Products</li></a>
        </ul>
        <ul>
            <a href="/The_Company"><li class="list-unstyled">About Us</li></a>
        </ul>
        <ul>
            <a href="/Our_Team"><li class="list-unstyled">Our Team</li></a>
        </ul>
        <ul>
            <a href="/Contact_Us"><li class="list-unstyled">Contact Us</li></a>
        </ul>
        </div>
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
}

.elements, .copyright {
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  padding: 10px 0px;
}

.list-unstyled {
  list-style-type: none;
}

.elements a, .copyright a {
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