<template>
  <div id="breadcrumb">
    <nav class="breadcrumbs">
      <div v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item">
          <a v-if="crumb.toLowerCase().indexOf('info') > 0" :href="crumb+'?name='+getParam(crumb)"> {{ getParam(crumb).replace('_',' ') }} </a>
          <a v-else-if="ci === getLength(crumb) && crumb.indexOf('Info') < 0" :href="crumb"> {{ crumb.replace('_',' ') }}</a>
          <a v-else-if="crumb.toLowerCase().indexOf('info') < 0" :href="'../'.repeat(getIndex(crumb))+crumb"> {{ crumb.replace('_',' ') }} / </a>
      </div>
    </nav>
  </div>
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
.breadcrumbs {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10rem;
  padding: 20px;
  margin-top: 10px;
}

.breadcrumb-item {
  display: inline;
  text-transform: uppercase;
  font-weight:bold;
  color: black;
}

a {
  color: black;
  text-decoration: none;
}
</style>