<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div>
            <div reverse class="my-5">
                <Description :product="prod" prod />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Description from '../../components/Description.vue';

    export default {
        components: {
            Description
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
