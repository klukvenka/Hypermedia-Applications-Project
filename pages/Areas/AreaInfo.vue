<template>
    <div class="root">
        <div>
		<Navbar />
		<Breadcrumbs />
		</div>
        <div class="content">
            <Heading :heading="areas.name" :description="areas.description" />
        </div>
        <div class="content">
            <div>
                <h2 class="">Products</h2>
                <short-page :forArea="areas" getProduct />
            </div>
        </div>
        <div class="content">
            <div>
                <h2 class="">Team Members</h2>
                <short-page :forArea="areas" getMember />
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
