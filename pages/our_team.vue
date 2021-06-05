<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div>
            <div v-for="(area,i) in areas" :key="i" class="content">
                <short-page :ar="area" member needarea/>   
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import ShortPage from '../components/ShortPage.vue'
    import AreaDataService from '../services/AreaDataService'

    export default {
        components: { ShortPage },
        data () {
            return {
                areas : [],
                members : [],
                mem: []
            }
        },

        methods: {
            retrieveAreas() {
                AreaDataService.getAll().then(response => {
                    this.areas = response.data;
                })
                .catch(e => {
                    (e);
                })

            }
        },
        mounted() {
            this.retrieveAreas();
        }
    }
</script>