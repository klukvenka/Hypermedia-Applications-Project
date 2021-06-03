<template>
    <mdb-card-body class="text-center">
        <!--Display list of areas-->
        <mdb-row v-if="area && short" class="mt-5 text-center">
            <mdb-col lg="5">
            <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                <img class="img-fluid" :src="ar.image" :alt="ar.name" :title="ar.name" />
            </a>
            </mdb-col>
            <mdb-col lg="7">
                <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                    <h6 class="font-weight-bold mb-3">
                    <mdb-icon icon="book-open" class="pr-2" />{{ar.name}}</h6>
                </a>
                <p>{{ar.short_description}}</p>
                <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')"><mdb-btn color="black" size="md" class="waves-light ">View Products and Team</mdb-btn></a>
            </mdb-col>
        </mdb-row>

        <mdb-row v-if="needarea">
            <mdb-col>
                <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                    <h6 class="font-weight-bold mb-3 my-3">
                        <mdb-icon icon="book-open" class="pr-2" />{{ar.name}}
                    </h6>
                </a>
            </mdb-col>
        </mdb-row>

        <!--Display list of members-->
        <mdb-row v-if="isMemberReady && short">
            <mdb-col v-for="(member,j) in members" :key="j" class="member-list">
                <a class="red-text" v-if="member.area.includes(ar.name)" :href="'/Our_Team/MemberInfo?name='+member.name.replace(' ','_')">
                <img class="rounded z-depth-1-half img-fluid my-2" :src="member.image" :alt="member.name" :title="member.name">
                <h6 class="font-weight-bold mb-3 my-3">
                    <mdb-icon icon="users" class="pr-2" />{{member.name}}, {{member.designation}}
                </h6>
                <mdb-btn color="black" size="md" class="waves-light ">View Member Info</mdb-btn>
                </a>
            </mdb-col>
        </mdb-row>
        <!--Display list of products-->
        <mdb-row v-if="isProductReady && short">
            <mdb-col v-for="(prod,j) in products" :key="j" class="product-list">
                <a class="red-text" v-if="prod.area == (ar.name)" :href="'/Products/ProductInfo?name='+prod.name.replace(' ','_')">
                <img class="rounded z-depth-1-half img-fluid my-2" :src="prod.image" :alt="prod.name" :title="prod.short_description">
                <h6 class="font-weight-bold mb-3 my-3">
                    <mdb-icon icon="lightbulb" class="pr-2" />{{prod.name}}
                </h6>
                <mdb-btn color="black" size="md" class="waves-light ">View Product Info</mdb-btn>
                </a>
            </mdb-col>
        </mdb-row>
        <!--Display list with description of products-->
        <mdb-card-body v-if="isProductReady && long" class="text-center cascade">
            <mdb-row v-for="(product,i) in products" :key="i" class="mt-5 text-center">
                <mdb-col lg="4">
                    <img class="img-fluid" :src="product.image" :alt="product.name" :title="product.name" />
                </mdb-col>
                <mdb-col lg="7">
                    <a class="red-text" :href="'/Products/ProductInfo?name='+product.name">
                    <h6 class="font-weight-bold mb-3">
                    <mdb-icon icon="lightbulb" class="pr-2" />{{product.name}}</h6>
                </a>
                <p>{{product.short_description}}</p>
                <a :href="'/Products/ProductInfo?name='+product.name"><mdb-btn color="black" size="md" class="waves-light float-center">View More</mdb-btn></a>
                </mdb-col>
            </mdb-row>
        </mdb-card-body>
        
    </mdb-card-body>
</template>

<script>

import { mdbRow, mdbCol, mdbIcon, mdbBtn, mdbCardBody} from 'mdbvue';
import MemberDataService from '../services/MemberDataService'
import ProductDataService from '../services/ProductDataService'

export default {
    components: {
        mdbRow, mdbCol, mdbIcon, mdbBtn, mdbCardBody
    },
    props: {
        product: {
            type: Boolean,
            default: false
        },
        area: {
            type: Boolean,
            default: false
        },
        member: {
            type: Boolean,
            default: false
        },
        ar: Object,
        short: {
            type: Boolean,
            default: false
        },
        long: {
            type: Boolean,
            default: false
        },
        needarea: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            products: [],
            members: []
        }
    },
    methods: {
        async retrieveProductsByArea() {
            if (this.product) {
                this.products = await (await ProductDataService.getByArea(this.ar.name)).data;
            }
        },
        async retrieveMembersByArea() {
            if (this.member) {
                this.members = await (await MemberDataService.getByArea(this.ar.name)).data;
            }
        }
    },
    computed: {
        isMemberReady: function () {
            if (this.members.length > 0) {
                return this.members;
            }
            else {
                this.retrieveMembersByArea()
            }
        },
        isProductReady: function () {
            if (this.products.length > 0) {
                return this.products;
            }
            else {
                this.retrieveProductsByArea()
            }
        }
    }
}
</script>

<style scoped>
.product-list img, .member-list img {
    height: 200px;
    width: 200px;
}
</style>

