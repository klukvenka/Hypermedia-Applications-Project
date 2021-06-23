<!--
Author: Veronica Lucchetti
Description:
The page displays the "single product" page of the website.

The page contains
a navigation bar on the top,
a description of the product,
the related area to which the product belongs with a image and a description,
the people whom are manager and reference for the product with their picture.

It contains transition links to the related area and people,
moreover it allows the user to read small descriptions of the people clicking on their pictures.
-->

<template>
    <div class="root">
        <Topbar />
        <!--Start main content--> 
        <div class="content">
            <!--Title on top of page and description of the product below-->
            <Heading :heading="product.name" :description="product.description" />
        </div>
        <div class="content">
            <!--Display the area it belongs to in a section titled "related area" and its description-->
            <h2>Related Area</h2>
            <short-page :forArea="isAreaReady" getArea/>
        </div>
        <div class="content display-details">
            <div>
                <!--Display the manager for the product in a section titled "manager" with their picture-->
                <h2>Manager</h2>
                <short-page :mem="manager" getMember needToggleInfo />
            </div>
            <div>
                <!--Display the reference for the product in a section titled "reference" with their picture-->
                <h2>Reference</h2>
                <short-page :mem="reference" getMember needToggleInfo />
            </div>
        </div>
    </div>
</template>

<script>
    import ShortPage from '../../components/ShortPage.vue';

    import ProductDataService from '../../services/ProductDataService';
    import AreaDataService from '../../services/AreaDataService';

    export default {
        components: {
            ShortPage
        },
        data () {
            return {
                prod: this.$route.query.name,
                product: [],
                area: {},
                manager: '',
                reference: ''
            }
        },
        methods: {
            async retrieveAllDetails() {
                this.product = await (await ProductDataService.getByName(this.prod)).data[0]
                this.manager = await this.product.manager;
                this.reference = await this.product.reference;
                this.area = await (await AreaDataService.getByName(this.product.area)).data[0]
            }
        },
        computed: {
            isAreaReady: function () {
                return this.area
            }
        },
        created() {
            this.retrieveAllDetails();
        }
    }
</script>


<style scoped>

</style>
