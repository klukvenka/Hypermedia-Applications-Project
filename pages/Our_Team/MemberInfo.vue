<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <detailed-page :member="mem" mem />
        </div>
        <Footer />
    </div>
</template>

<script>
    import DetailedPage from '../../components/DetailedPage.vue'

    export default {
        components: { DetailedPage },
        data () {
            return {
                mem: this.$route.query.name.replace('_',' '),
            }
        }
    }
</script>


<style scoped>

</style>
