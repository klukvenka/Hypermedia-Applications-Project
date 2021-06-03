<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <mdb-container class="my-5">
            <mdb-card>
                <Description :area="ar" ar />
            </mdb-card>
        </mdb-container>
        <mdb-container class="my-5">
            <mdb-card>
                <h3 class="font-weight-bold mb-3 my-3 text-center">Products</h3>
                <List :ar="areas" product long />
            </mdb-card>
        </mdb-container>
        <mdb-container class="my-5">
            <mdb-card>
                <h3 class="font-weight-bold mb-3 my-3 text-center">Team Members</h3>
                <List :ar="areas" member short />
            </mdb-card>
        </mdb-container>
        <Footer />
    </div>
</template>

<script>

    import { mdbContainer, mdbCard } from 'mdbvue';
    import AreaDataService from '../../services/AreaDataService'

    export default {
        components: {
            mdbCard,
            mdbContainer
        },
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
