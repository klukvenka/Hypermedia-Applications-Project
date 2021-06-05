<template>
    <nav class="breadcrumbs">
      <div v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
          <a v-if="crumb.toLowerCase().indexOf('info') < 0" :href="'../'.repeat(getIndex(crumb))+crumb"> {{ crumb.replace('_',' ') }} </a>
          <!--<a v-else-if="ci === getLength(crumb) && crumb.indexOf('Info') < 0" :href="crumb"> {{ crumb.replace('_',' ') }}</a>-->
          <a v-else-if="crumb.toLowerCase().indexOf('info') > 0" href="#"> / </a>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return {
        crumbs: this.$route.path.split("/").splice(1),
      };
    },
    methods: {
      isLast(index) {
        return index === this.crumbs.length - 1;
      },
      selected(crumb) {
        this.$emit('selected', crumb);
      },
      getIndex(crumb) {
        return this.crumbs.length - this.crumbs.indexOf(crumb);
      },
      getLength(crumb) {
        return this.crumbs.length - 1;
      },
      getParam(crumb) {
        return this.$route.query.name
      }
    },
  };
</script>
 
<style>
a {
  color: red;
  text-decoration: none;
}
</style>