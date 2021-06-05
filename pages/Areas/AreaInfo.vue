<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="container">
            <div class="content">
                <detailed-page :area="ar" ar />
            </div>
        </div>
        <div class="content">
            <div>
                <h3 class="">Products</h3>
                <short-page :ar="areas" product />
            </div>
        </div>
        <div class="content">
            <div>
                <h3 class="">Team Members</h3>
                <short-page :ar="areas" member />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import DetailedPage from '../../components/DetailedPage.vue';
    import ShortPage from '../../components/ShortPage.vue';

    import AreaDataService from '../../services/AreaDataService'

    export default {
        components: { ShortPage, DetailedPage },
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
.member-photo {
    height: 100px;
    width: 100px;
}

.team p {
    text-align: center;
}
</style>
