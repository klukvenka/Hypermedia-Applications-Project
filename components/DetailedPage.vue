<template>
    <div>
        <!--Display description of areas-->
        <div v-if="isAreaReady && ar">
            <Heading :heading="areas.name" :subheading="areas.description" />
        </div>
        <!--Display description of products-->
        <section  v-if="isProductReady &&  prod" class="text-center">
            <h2>{{products.name}}</h2>
            <a class="red-text" :href="'/areas/AreaInfo?name='+products.area">
                <h5>{{products.area}}</h5>
            </a>
            <div class="display-details">
                <div>
                    <img :src="products.image" :alt="products.name" :title="products.name"/>
                </div>
                <div class="card">
                    <p>{{products.description}}</p>
                    <div>
                        <div class="text-center">
                            <h5>Manager:</h5>
                            <a class="red-text" :href="'/our_team/MemberInfo?name='+products.manager">
                                <h5 class="font-weight-bold mb-3">
                                    {{products.manager}}
                                </h5>
                            </a>
                        </div>
                        <div class="text-center">
                            <h5>Reference:</h5>
                            <a class="red-text" :href="'/our_team/MemberInfo?name='+products.reference">
                                <h5 class="font-weight-bold mb-3">
                                    {{products.reference}}
                                </h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--Display description of members-->
        <section v-if="isMemberReady && mem" class="text-center">
            <h2>{{members.name}}</h2>
            <h5>{{members.designation}}</h5>
            <div class="display-details text-center">
                <div class="card">
                    <img :src="members.image" :alt="members.name" :title="members.name"/>
                </div>
                <div class="text-center">
                    <p>{{members.description}}</p>
                    <div>
                        <h5>Related Areas: </h5>
                        <div v-for="(area,j) in memberarea" :key="j" class="text-left">
                            <a class="red-text" :href="'/areas/AreaInfo?name='+area.replace(' ','_')">
                                <h5>{{area}}</h5>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5>Manager for:</h5>
                        <div v-for="(manager,j) in isManagerReady" :key="j" >
                            <a class="red-text" :href="'/Products/ProductInfo?name='+manager.name.replace(' ','_')">
                                <h5>{{manager.name}}</h5>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5>Reference for:</h5>
                        <div v-for="(reference,j) in isReferenceReady" :key="j">
                            <a class="red-text" :href="'/Products/ProductInfo?name='+reference.name.replace(' ','_')">
                                <h5>{{reference.name}}</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AreaDataService from '../services/AreaDataService'
import MemberDataService from '../services/MemberDataService'
import ProductDataService from '../services/ProductDataService'

export default {
    components: {},
    props: {
        prod: {
            type: Boolean,
            default: false
        },
        ar: {
            type: Boolean,
            default: false
        },
        mem: {
            type: Boolean,
            default: false
        },
        area: String,
        member: String,
        product: String
    },
    data () {
        return {
            products: {},
            members: {},
            areas: {},
            memberarea: [],
            managers: [],
            references: []
        }
    },
    methods: {
        async retrieveAreaByName() {
            if (this.ar) {
                this.areas = await (await AreaDataService.getByName(this.area)).data[0];
            }
        },
        async retrieveProductsByName() {
            this.products = await (await ProductDataService.getByName(this.product)).data[0];
        },
        async retrieveMembersByName() {
            this.members = await (await MemberDataService.getByName(this.member)).data[0];
            this.memberarea = this.members.area.split(', ')
            this.managers = await (await ProductDataService.getByManager(this.members.name)).data;
            this.references = await (await ProductDataService.getByReference(this.members.name)).data;
        },
        async retrieveProductsByManager() {
            console.log(this.managers);
        },
        async retrieveProductsByReference() {
        }
    },
    computed: {
        isAreaReady: function () {
            return this.retrieveAreaByName()
        },
        isMemberReady: function () {
            if (this.mem) {
                return this.retrieveMembersByName()
            }
        },
        isProductReady: function () {
            if (this.prod) {
                return this.retrieveProductsByName();
            }
        },
        isManagerReady: function() {
            return this.managers;
        },
        isReferenceReady: function() {
            return this.references;
        }
    }
}
</script>
