<template>
    <nav class="navbar">
      <div class="logo">
        <a href="/"><Logo /></a>
      </div>
      <div class="menubar" v-for="menu in menus" :key="menu">
        <a :href="'/'+menu.replace(' ','_')"><button class="menu-item">{{ menu }}</button></a>
      </div>
    </nav>

</template>

<script>

  export default {
    components: {
    },
    data () {
      return {
        menus: ['Areas', 'Products','Our Team','The Company','Contact Us']
      }
    }
  }
</script>

<style>
.navbar {
  position: fixed;
  top:0vh;
  width: 100vw;
  display: flex;
  background-color: black;
  padding: 0px 16px;
}
.navbar a {
  color: white;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  font-weight: bolder;
}
.menubar {
  font-family: inherit;
  text-align: center;
  padding: 10px 16px;
}

.menu-item {
  padding: 1vh 2vw;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .navbar {
    display: block;
    position: relative;
  }
}
</style>