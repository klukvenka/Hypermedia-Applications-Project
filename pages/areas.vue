<!--
Author: Lorenzo Grossi
Description:
The page displays the introductory page to access different areas listed with name and brief descrition.

A the beginning of the page there are landmarks, and then a list presenting every area with its image and description,
and links to see details (with related products and people) about it.
-->
<template>
    <div class="root">
        <Topbar />
        <!-- Display all the different areas in separated containers-->
        <div v-for="(area,i) in areas" :key="i" class="content">
            <short-page :forArea="area" getArea/>
        </div>
    </div>
</template>

<!-- Structure and data needed -->
<script>
    import ShortPage from '../components/ShortPage.vue'
    import AreaDataService from '../services/AreaDataService'

    export default {
        components: { ShortPage },
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