<template>
  <mdb-footer color="black" class="footer font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="3">
          <h5 class="title">Areas</h5>
          <ul>
            <li class="list-unstyled"><a href="/Areas">All Areas</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Products</h5>
          <ul>
            <li class="list-unstyled"><a href="/Products">All Products</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Who We Are</h5>
          <ul>
            <li class="list-unstyled"><a href="/The_Company">About Us</a></li>
            <li class="list-unstyled"><a href="/Our_Team">Our Team</a></li>
          </ul>
        </mdb-col>
        <mdb-col sm="3">
          <h5 class="title">Support</h5>
          <ul>
            <li class="list-unstyled"><a href="/Contact_Us">Contact Us</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://hypercompany.herokuapp.com"> Hypercompany </a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
    import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

    export default {
      components: {
        mdbFooter,
        mdbContainer,
        mdbRow,
        mdbCol
      }
    }
</script>

<style>
body {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>