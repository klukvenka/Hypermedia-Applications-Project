<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="" >
            <div v-for="(area,i) in areas" :key="i" class="content">
                <List :ar="area" area short/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import AreaDataService from '../services/AreaDataService'

    export default {
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