<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="container">
            <div class="content">
                <Description :area="ar" ar />
            </div>
        </div>
        <div class="content">
            <div>
                <h3 class="">Products</h3>
                <List :ar="areas" product long />
            </div>
        </div>
        <div class="content">
            <div>
                <h3 class="">Team Members</h3>
                <List :ar="areas" member short />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

    import AreaDataService from '../../services/AreaDataService'

    export default {
        data () {
            return {
                ar: this.$route.query.name.replace('_',' ').split('#')[0],
                areas: {}
            }
        },
        methods: {
            async retrieveAreaByName() {
                this.areas = await (await AreaDataService.getByName(this.ar)).data[0];
                console.log(this.areas);
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
