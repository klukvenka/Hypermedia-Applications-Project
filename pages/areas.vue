<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <mdb-container v-for="(area,i) in areas" :key="i" class="my-5" >
            <mdb-card reverse>
                <List :ar="area" area short/>
            </mdb-card>
        </mdb-container>

        <Footer />
    </div>
</template>

<script>
    import { mdbContainer, mdbCard } from 'mdbvue';
    import AreaDataService from '../services/AreaDataService'

    export default {
        components: { 
            mdbCard,
            mdbContainer,
         },
         data() {
             return  {
                areas: []
             }
         },
         methods: {
            retrieveAreas() {
                AreaDataService.getAll().then(response => {
                    this.areas = response.data;
                })
                .catch(e => {
                    product(e);
                })

            },
         },
        mounted() {
            this.retrieveAreas();
        }
    }
</script>


<style scoped>
.area-header {
    padding-top: 10px;
    padding-left: 20px;
}

.vueperslides {
    padding-top: 20px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 20px;
    justify-content: right;
}

a {
    text-decoration: none;
    color: inherit;
}

.area-header a:hover {
    color: white;
    background-color: red;
}
</style>