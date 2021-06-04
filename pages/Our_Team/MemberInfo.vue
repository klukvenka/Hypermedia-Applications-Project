<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div>
            <div reverse class="my-5">
                <Description :member="mem" mem />
            </div>
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
