<template>
  <div class="navbar">
    <a href="/">
    <div class="logo">
        <img src="/logo.png" alt="logo" title="logo"/>
    </div>
    </a>
    <div class="menubar" v-for="menu in menus" :key="menu">
        <a :href="'/'+menu.replace(' ','_')"><button class="menu-item">{{ menu }}</button></a>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                menus: ['Areas', 'Products','Our Team','The Company','Contact Us']
            }
        }
    }
</script>

<style>
.navbar {
  position: fixed; /*To fix the location of navbar on top always*/
  top:0vh;
  width: 100vw;
  display: flex;
  background-color: black;
}

.navbar a {
  color: white;
  text-decoration: none;
}
.logo {
  text-align: center;
  display: block;
}

.logo img {
  height: 7vh;
  width: 10vw;
  
}
.menubar {
  font-family: inherit;
  text-align: center;
  padding: 10px 16px;
  margin: auto;
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
  .logo img {
    height: 10vh;
    width: 100vw;
  
}
}
</style>