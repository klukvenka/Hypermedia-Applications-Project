<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <Description :member="mem" mem />
        </div>
        <Footer />
    </div>
</template>

<script>

    export default {
        data () {
            return {
                mem: this.$route.query.name.replace('_',' '),
            }
        }
    }
</script>


<style scoped>

</style>
