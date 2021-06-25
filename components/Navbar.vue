<!--
Author: Sairaghav Venkataraman
Description:
This Navbar component displays the navigation bar on top with the menu names specified in script data section.

The Navbar will adjust based on device width using @media CSS
-->
<template>
	<div class="navbar">
		<a href="/">
    <!--Logo -->
		<div class="logo">
			<img src="/logo.png" alt="logo" title="logo"/>
		</div>
		</a>
    <!--Menubar items -->
		<div class="menubar-item" v-for="menu in menus" :key="menu">
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
/*Display navbar menu items and logo side-by-side using flex. Position is sticky to ensure it is locked on top */
.navbar {
  display: flex;
  background-color: black;
  top: 0vh;
  position: sticky;
}

.navbar a {
  color: white;
  text-decoration: none;
}
.logo {
  text-align: center;
  display: block;
}
/*Adjust image based on viewport height and viewport width instead of actual pixel value*/
.logo img {
  height: 7vh;
  width: 10vw;
  
}
.menubar-item {
  font-family: inherit;
  text-align: center;
  padding: 10px 16px;
  margin: auto;
}

.menu-item {
  padding: 1vh 2vw;
  width: 100%;
}
/*Adjust navbar as block and not flex when device width is less than 800 px */
@media only screen and (max-width: 800px) {
  /*Do not lock navbar on top when device width is small*/
  .navbar {
    display: block;
    position: relative;
  }
  /*Define size of logo for small device*/
  .logo img {
    height: 10vh;
    width: 100vw;
  }
}
</style>