<!--
Author: Lorenzo Grossi
Description:
The page displays the introductory page with the list of all the team members 
(they can be repeated if from more than one area) sorted by area.

After landmarks, a section with the name of a single area is showed with the list of people with name, role, picture and 
a short description accessible clicking the profile picture.
-->
<template>
    <div class="root">
        <Topbar />
        <!-- Displaying a section for each area with relative people--> 
        <div v-for="(area,i) in areas" :key="i" class="content">
            <short-page :forArea="area" getMember needHeading needToggleInfo/>   
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