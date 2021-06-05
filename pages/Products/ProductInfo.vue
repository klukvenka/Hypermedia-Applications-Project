<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <Heading :heading="product.name" :description="product.description" />
        </div>
        <div class="content">
            <h2>Related Area</h2>
            <short-page :ar="isAreaReady" getArea/>
        </div>
        <div class="content display-details">
            <div>
                <h2>Manager</h2>
                <short-page :prod="prod" :mem="manager" getMember />
            </div>
            <div>
                <h2>Reference</h2>
                <short-page :prod="prod" :mem="reference" getMember />
            </div>
        </div>
        <Footer />
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
