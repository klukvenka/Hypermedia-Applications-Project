<!--
Author: Veronica Lucchetti
Description:
The page displays the "single area" page of the website.

The page contains
a navigation bar on the top,
a description of the area,
the products contained in the area and their images,
the people who work in the area and their pictures.

It allows the user to scroll through the images of the products and the people,
It contains transiction links to the products and the people,
moreover it allows the user to read small descriptions about products and people clicking on the images.
-->

<template>
    <div class="root">
        <Topbar />
        <div class="content">
        <!--Start main content--> 
        <!--Title on top of page and description of the area below-->
            <Heading :heading="areas.name" :description="areas.description" />
        </div>
        <div class="content">
            <div>
                <!--Display each product related to that area in a section titled "products"-->
                <h2 class="">Products</h2>
                <short-page :forArea="areas" getProduct needToggleInfo />
            </div>
        </div>
        <div class="content">
            <div>
                <!--Display each people related to that area in a section titled "team members"-->
                <h2 class="">Team Members</h2>
                <short-page :forArea="areas" getMember needToggleInfo />
            </div>
        </div>
    </div>
</template>

<script>
    import Heading from '../../components/Heading.vue';
    import ShortPage from '../../components/ShortPage.vue';

    import AreaDataService from '../../services/AreaDataService'

    export default {
        components: { ShortPage, Heading },
        data () {
            return {
                ar: this.$route.query.name.replace('_',' '),
                areas: {}
            }
        },
        methods: {
            async retrieveAreaByName() {
                this.areas = await (await AreaDataService.getByName(this.ar)).data[0];
            }
        },
        created() {
            this.retrieveAreaByName();
        }
    }
</script>


<style scoped>
</style>
