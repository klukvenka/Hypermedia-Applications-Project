<template>
    <div class="text-center">
      <mdb-navbar position="top" dark color="black" scrolling>
        <mdb-navbar-brand><a href="/">Hypercompany</a></mdb-navbar-brand>
        <mdb-navbar-toggler class="text-center">
          <mdb-navbar-nav center class="text-center">
            <mdb-nav-item class="text-center" v-for="(menu,i) in menus" :key="i" :href="'/'+menu.replace(' ','_')">{{menu}}</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </div>

</template>

<script>
  import { 
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand
  } from 'mdbvue';

  export default {
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbInput,
      mdbNavbarBrand
    },
    data () {
      return {
        menus: ['Areas', 'Products','Our Team','The Company','Contact Us']
      }
    }
  }
</script>

<style>

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>