<!--
Author: Veronica Lucchetti
Description:
The page displays the "single member" page of the website.

The page contains
the name, the picture and a short description of the person,
the related areas they work in with images and descriptions
the products they are manager or reference for with their images.

It contains transition links to the related area and products,
moreover it allows the user to read small descriptions of the products clicking on their images.
-->
<template>
    <div class="root">
        <Topbar />
        <!--Start main content--> 
        <div class="content display-details">
            <!--Dispaly picture of the person-->
            <img :src="member.image" :alt="member.name" :title="member.name" />
            <!--Dispaly name, title and description of the person-->
            <Heading class="member-details" :heading="member.name" :subheading="member.designation" :description="member.description" />
        </div>
        <div class="content">
            <!--Display the areas they work in, in a section titled "related area" and their descriptions-->
            <h2>Related Area</h2>
            <div class="card" v-for="(area,i) in areas" :key="i">
                <short-page :forArea="area" getArea/>
            </div>
        </div>
        <div class="content display-details">
            <!--If it's a manager display the products in a section titled "manager for" and their images-->
            <div v-if="managers.length > 0">
                <h2>Manager for</h2>
                <short-page :item="managers" getProduct needToggleInfo />
            </div>
            
            <div v-if="references.length > 0">
                <!--If it's a referent display the products in a section titled "reference for" and their images-->
                <h2>Reference for</h2>
                <short-page :item="references" getProduct needToggleInfo />
            </div>
        </div>
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
.card {
    cursor:default;
}

.member-details {
    padding-left: 2%;
}
</style>
