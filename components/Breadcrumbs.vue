<!--
Author: Sairaghav Venkataraman
Description:

This is the component that displays the breadcrumbs on top of the page.
The current path of the page is obtained from this.$route.path parameter split using '/' character.

We then loop over the crumbs parameter for each split of '/' and the link is generated based on the index of the crumb.

For instance, for page Products/ProductInfo?name=Product1, the crumbs will be 'Products' and 'ProductInfo'. 
The breadcrumbs however will display 'Products / Product1' only. This is because, 'ProductInfo' is not an actual page.
The value 'Product1' is obtained using getParam method which returns this.$route.query.name
-->
<template>
  <div id="breadcrumb">
    <nav class="breadcrumbs">
      <div v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
          <!--Display the name of the product/area/member from GET parameter - getParam(crumb) - in the breadcrumb-->
          <a v-if="crumb.toLowerCase().indexOf('info') > 0" :href="crumb+'?name='+getParam(crumb)"> / {{ getParam(crumb).replace('_',' ') }}</a>
          <!--Display the name of the page e.g. Area, Product, Our Team , The Company, Contact Us etc. in the breadcrumb
          The href parameter repeat '../' depending on the number of levels that it needs to be traversed back
          -->
          <a v-else-if="crumb.toLowerCase().indexOf('info') < 0" :href="'../'.repeat(getIndex(crumb))+crumb"> {{ crumb.replace('_',' ') }}</a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return {
        /*Returns the path split by '/' and removes the value at index(1), which is ProductInfo/AreaInfo/MemberInfo */
        crumbs: this.$route.path.split("/").splice(1),
      };
    },
    methods: {
      /*Returns the index of the value of the breadcrumb*/
      getIndex(crumb) {
        return this.crumbs.length - this.crumbs.indexOf(crumb);
      },
      /*Returns the 'name' parameter passed in the GET request*/
      getParam(crumb) {
        return this.$route.query.name
      }
    },
  };
</script>
 
<style>
/*Blue color and no line for <a> elements in breadcrumb*/
a {
  color: steelblue;
  text-decoration-line: none;
}
</style>