<!--
Author: Lorenzo Grossi
Description:
The page displays the introductory page with the list of all the products sorted by area.

After landmarks, a section with the name of a single area is showed with the list of products with name, picture and 
a short description accessible clicking the product image.
-->
<template>
    <div class="root">
        <Topbar />
        <!-- Displaying a section for each area with relative products-->
        <div v-for="(area,i) in areas" :key="i" class="content">
            <short-page :forArea="area" getProduct needHeading needToggleInfo/>
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