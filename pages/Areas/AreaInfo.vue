<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <Heading :heading="areas.name" :description="areas.description" />
        </div>
        <div class="content">
            <div>
                <h3 class="">Products</h3>
                <short-page :ar="areas" getProduct />
            </div>
        </div>
        <div class="content">
            <div>
                <h3 class="">Team Members</h3>
                <short-page :ar="areas" getMember />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Heading from '../../components/Heading.vue';
    import ShortPage from '../../components/ShortPage.vue';

    import AreaDataService from '../../services/AreaDataService'

    export default {
        components: { ShortPage, Heading },
        data () {
            return {
                ar: this.$route.query.name.replace('_',' ').split('#')[0],
                areas: {}
            }
        },
        methods: {
            async retrieveAreaByName() {
                this.areas = await (await AreaDataService.getByName(this.ar)).data[0];
            }
        },
        created() {
            this.retrieveAreaByName();
        }
    }
</script>


<style scoped>
</style>
