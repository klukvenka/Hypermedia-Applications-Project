<template>
    <div class="navbar">
        <a href="/">
        <div class="logo">
            <img src="/logo.png" alt="logo" title="logo"/>
        </div>
        </a>
        <div class="menubar" v-for="menu in menus" :key="menu">
            <button class="menu-item"><a :href="'/'+menu.replace(' ','_')">{{ menu }}</a></button>
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
  text-decoration-line: none;
  font-size: 15px;
}
.logo {
  text-align: center;
  display: block;
  justify-content: center;
  margin-top: .4vh;
}

.logo img {
  height: 7vh;
  width: 8vw;
  
}
.menubar {
  font-family: inherit;
  text-align: center;
  padding: 4px 16px;
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
    height: 6vh;
    width: 100vw;
  
}
}
</style>