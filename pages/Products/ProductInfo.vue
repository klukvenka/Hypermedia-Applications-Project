<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content">
            <Heading :heading="product.name" :subheading="product.description" />
        </div>
        <div class="content">
            <short-page :ar="product.area" getArea />
        </div>
        <div class="content display-details">
            <short-page :prod="prod" :mem="manager" getMember/>
            <short-page :prod="prod" :mem="reference" getMember/>
        </div>
        <Footer />
    </div>
</template>

<script>
    import DetailedPage from '../../components/DetailedPage.vue';
    import ShortPage from '../../components/ShortPage.vue';

    import ProductDataService from '../../services/ProductDataService';

    export default {
        components: {
            DetailedPage,
            ShortPage
        },
        data () {
            return {
                prod: this.$route.query.name,
                product: [],
                manager: '',
                reference: ''
            }
        },
        methods: {
            async retrieveMembersByName() {
                this.product = await (await ProductDataService.getByName(this.prod)).data[0]
                this.manager = this.product.manager;
                this.reference = this.product.reference;
            }
        },
        created() {
            this.retrieveMembersByName();
        }
    }
</script>


<style scoped>
</style>
