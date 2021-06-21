<!--
Author: Sairaghav Venkataraman
Description: 

This is the component that displays the breadcrumbs on top of the page.
The current path of the page is obtained from this.$route.path parameter split using '/' character.

We then loop over the crumbs parameter for each split of '/' and the link is generated based on the index of the crumb.

For instance, for page Products/ProductInfo?name=Product1, the crumbs will be 'Products' and 'ProductInfo'. 
The breadcrumbs however will display 'Products /' only. 
This is because, 'ProductInfo' is not an actual page and the only page required to traverse is 'Products'.

We are avoiding displaying the exact product name in breadcrumb to avoid repetition since name of product will be already displayed on current page and user need not thave to traverse back.

-->
<template>
    <div class="breadcrumbs">
        <div v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
            <a v-if="crumb.toLowerCase().indexOf('info') < 0 && crumb.length > 0" :href="'../'.repeat(getIndex(crumb))+crumb"> {{ crumb.replace('_',' ') }} </a>
            <a v-else-if="crumb.toLowerCase().indexOf('info') > 0" href="#"> / </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                crumbs: this.$route.path.split("/").splice(1), //Get the route of the page and remove the last value
            };
        },
        methods: {
            //Returns the number of times '../' needs to be repeated. We are already reducing index of crumbs by 1 by splice (afte last value is removed.)
            //For example, for Products/ProductInfo?name=Product1, href of <a> should be ../Products for first child, ProductInfo for last child (which is removed).
            //The crumbs array will be ['Products','ProductInfo']. So for length - indexOf('Products') will be 1-0 = 1. 
            //'../' will be repeated once thereby providing href = '../Products'
            getIndex(crumb) {
                return this.crumbs.length - this.crumbs.indexOf(crumb);
            }
        }
    };
</script>
 
<style>
a {
  color: red;
  text-decoration: none;
}

</style>