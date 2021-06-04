<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="">
            <div v-for="(area,i) in areas" :key="i" class="content">
                <List :ar="area" member short needarea/>   
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import AreaDataService from '../services/AreaDataService'

    export default {
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