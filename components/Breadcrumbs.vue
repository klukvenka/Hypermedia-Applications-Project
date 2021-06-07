<template>
    <nav class="breadcrumbs">
        <div v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
            <a v-if="crumb.toLowerCase().indexOf('info') < 0" :href="'../'.repeat(getIndex(crumb))+crumb"> {{ crumb.replace('_',' ') }} </a>
            <a v-else-if="crumb.toLowerCase().indexOf('info') > 0" href="#"> / </a>
            <!--<a v-else-if="ci === getLength(crumb) && crumb.indexOf('Info') < 0" :href="crumb"> {{ crumb.replace('_',' ') }}</a>-->
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'breadcrumb',
        data() {
            return {
                crumbs: this.$route.path.split("/").splice(1), //Get the route of the page and remove the first empty value after split
            };
        },
        methods: {
            getIndex(crumb) {
                return this.crumbs.length - this.crumbs.indexOf(crumb);
            },
            /*isLast(index) {
                return index === this.crumbs.length - 1;
            }
            getLength(crumb) {
                return this.crumbs.length - 1;
            },
            getParam(crumb) {
                return this.$route.query.name
            }*/
        },
    };
</script>
 
<style>
a {
  color: red;
  text-decoration: none;
}
</style>