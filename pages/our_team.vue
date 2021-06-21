<template>
    <div class="root">
        <div>
		<Navbar />
		<Breadcrumbs />
		</div>
        <div v-for="(area,i) in areas" :key="i" class="content">
            <short-page :forArea="area" getMember needHeading/>   
        </div>
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