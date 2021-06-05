<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <div class="content display-details">
            <img :src="member.image" :alt="member.name" :title="member.name" />
            <Heading :heading="member.name" :subheading="member.designation" :description="member.description" />
        </div>
        <div class="content">
            <h2>Related Area</h2>
            <div class="card" v-for="(area,i) in areas" :key="i">
                <short-page :ar="area" getArea/>
            </div>
        </div>
        <div class="content display-details">
            <div>
                <h2>Manager for</h2>
                <short-page :item="managers" getProduct />
            </div>
            
            <div>
                <h2>Reference for</h2>
                <short-page :item="references" getProduct />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import MemberDataService from '../../services/MemberDataService'
    import AreaDataService from '../../services/AreaDataService'
    import ProductDataService from '../../services/ProductDataService'

    export default {
        components: {  },
        data () {
            return {
                mem: this.$route.query.name.replace('_',' '),
                member: {},
                area: [],
                areas: [],
                managers: [],
                references: []
            }
        },
        methods: {
            async retrieveAllDetails() {
                this.member = await (await MemberDataService.getByName(this.mem)).data[0];
                this.area = await this.member.area.split(', ');
                for (var i=0;i<this.area.length;i++) {
                    this.areas.push(await (await AreaDataService.getByName(this.area[i])).data[0]);
                }
                this.managers = await (await ProductDataService.getByManager(this.mem)).data;
                this.references = await (await ProductDataService.getByReference(this.mem)).data;
            }
        },
        computed: {
        },
        created() {
            this.retrieveAllDetails();
        }
    }
</script>


<style scoped>
</style>
