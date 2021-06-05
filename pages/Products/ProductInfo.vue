<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <div class="">
                <detailed-page :product="prod" prod />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import DetailedPage from '../../components/DetailedPage.vue';

    export default {
        components: {
            DetailedPage
        },
        data () {
            return {
                prod: this.$route.query.name,
            }
        }
    }
</script>


<style scoped>
</style>
