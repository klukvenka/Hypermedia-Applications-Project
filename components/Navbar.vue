<template>
    <nav class="navbar">
      <div class="logo">
        <a href="/">Hypercompany</a>
      </div>
      <div class="menubar" v-for="menu in menus" :key="menu">
        <button class="menu-item"><a :href="'/'+menu.replace(' ','_')">{{ menu }}</a></button>
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
  overflow: hidden;
  background-color: black;
  opacity: 100%;
  position: fixed;
  top:0vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.menubar {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 0px 16px;
  font-family: inherit;
  margin: 0;
  justify-content: center;
}

.menubar button {
  padding: 0px;
  margin: 0px;
}
.navbar a:hover {
  background-color: red;
}

@media only screen and (max-width: 600px) {
  .menubar {
    display: flex;
  }
}
</style>