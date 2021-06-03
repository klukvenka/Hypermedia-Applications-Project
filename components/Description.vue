<template>
    <mdb-card-body>
        <!--Display description of areas-->
        <mdb-row v-if="isAreaReady && ar">
            <mdb-col md="12">
                <mdb-card-body class="text-center cascade">
                    <h2 class="font-weight-bold">
                    {{areas.name}}
                    </h2>
                    <p>{{areas.description}}</p>
                </mdb-card-body>
            </mdb-col>
        </mdb-row>
        <!--Display description of products-->
        <section  v-if="isProductReady &&  prod" class="text-center">
            <h2 class="h1-responsive font-weight-bold my-3">{{products.name}}</h2>
            <a class="red-text" :href="'/areas/AreaInfo?name='+products.area">
                <h6 class="font-weight-bold mb-3">
                    <mdb-icon icon="book-open" class="pr-2" />{{products.area}}
                </h6>
            </a>
            <mdb-row>
                <mdb-col md="5" class="mb-md-0 mb-5">
                    <img :src="products.image" class="rounded z-depth-1-half img-fluid" :alt="products.name" :title="products.name"/>
                </mdb-col>
                <mdb-col>
                    <p class="grey-text w-responsive mb-5 mx-auto">{{products.description}}</p>
                    <mdb-row>
                        <mdb-col>
                            <h5>Manager:</h5>
                            <a class="red-text" :href="'/our_team/MemberInfo?name='+products.manager">
                                <h6 class="font-weight-bold mb-3">
                                    <mdb-icon icon="users" class="pr-2" />{{products.manager}}
                                </h6>
                            </a>
                        </mdb-col>
                        <mdb-col class="text-center">
                            <h5>Reference:</h5>
                            <a class="red-text" :href="'/our_team/MemberInfo?name='+products.reference">
                                <h6 class="font-weight-bold mb-3">
                                    <mdb-icon icon="users" class="pr-2" />{{products.reference}}
                                </h6>
                            </a>
                        </mdb-col>
                    </mdb-row>
                </mdb-col>
            </mdb-row>
        </section>
        <!--Display description of members-->
        <section v-if="isMemberReady && mem" class="text-center member">
            <h2 class="h1-responsive font-weight-bold my-3">{{members.name}}</h2>
            <h5 class="h5-responsive font-weight-bold my-3">{{members.designation}}</h5>
            <mdb-row>
                <mdb-col >
                    <img :src="members.image" class="rounded-circle z-depth-1-half img-fluid" :alt="members.name" :title="members.name"/>
                </mdb-col>
                <mdb-col>
                    <p class="grey-text w-responsive">{{members.description}}</p>
                    <mdb-row class="my-5">
                        <h6>Related Areas: </h6>
                        <mdb-col v-for="(area,j) in memberarea" :key="j" class="text-left">
                            <a class="red-text" :href="'/areas/AreaInfo?name='+area.replace(' ','_')">
                                <h6 class="font-weight-bold mb-3">
                                    <mdb-icon icon="book-open" class="pr-2" />{{area}}
                                </h6>
                            </a>
                        </mdb-col>
                    </mdb-row>
                    <mdb-row class="my-5">
                        <h6>Manager for:</h6>
                        <mdb-col class="text-left" v-for="(manager,j) in isManagerReady" :key="j" >
                            <a class="red-text" :href="'/Products/ProductInfo?name='+manager.name.replace(' ','_')">
                                <h6 class="font-weight-bold mb-3">
                                    <mdb-icon icon="lightbulb" class="pr-2" />{{manager.name}}
                                </h6>
                            </a>
                        </mdb-col>
                    </mdb-row>
                    <mdb-row class="my-5">
                        <h6>Reference for:</h6>
                        <mdb-col class="text-left" v-for="(reference,j) in isReferenceReady" :key="j">
                            <a class="red-text" :href="'/Products/ProductInfo?name='+reference.name.replace(' ','_')">
                                <h6 class="font-weight-bold mb-3">
                                    <mdb-icon icon="lightbulb" class="pr-2" />{{reference.name}}
                                </h6>
                            </a>
                        </mdb-col>
                    </mdb-row>
                </mdb-col>
            </mdb-row>
        </section>
    </mdb-card-body>
</template>

<script>

import { mdbRow, mdbCol, mdbIcon, mdbBtn, mdbCardBody} from 'mdbvue';
import AreaDataService from '../services/AreaDataService'
import MemberDataService from '../services/MemberDataService'
import ProductDataService from '../services/ProductDataService'

export default {
    components: {
        mdbRow, mdbCol, mdbIcon, mdbBtn, mdbCardBody
    },
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
