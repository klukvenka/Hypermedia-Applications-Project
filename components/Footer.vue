<template>
    <div class="footer">
        <div class="elements">
        <ul>
            <li class="list-unstyled"><a href="/Areas">All Areas</a></li>
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
  font-size: 13px;
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