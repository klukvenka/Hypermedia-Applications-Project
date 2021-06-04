<template>
    <div>
        <!--Display list of areas-->
        <div v-if="area && short" class="area-content">
            <div class="area-image">
            <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                <img class="img-fluid" :src="ar.image" :alt="ar.name" :title="ar.name" />
            </a>
            </div>
            <div class="area-data">
                <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                    {{ar.name}}
                </a>
                <p>{{ar.short_description}}</p>
                <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')"><button>View Products and Team</button></a>
            </div>
        </div>

        <div v-if="needarea">
            <div>
                <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                    <h4 class="font-weight-bold mb-3 my-3">
                        {{ar.name}}
                    </h4>
                </a>
            </div>
        </div>

        <!--Display list of members-->
        <div v-if="isMemberReady && short" class="flex-list">
            <div v-for="(member,j) in members" :key="j" class="member-list">
                <a class="red-text" v-if="member.area.includes(ar.name)" :href="'/Our_Team/MemberInfo?name='+member.name.replace(' ','_')">
                <img class="rounded z-depth-1-half img-fluid my-2" :src="member.image" :alt="member.name" :title="member.name">
                <h6 class="font-weight-bold mb-3 my-3">
                    {{member.name}}, {{member.designation}}
                </h6>
                <button>View Member Info</button>
                </a>
            </div>
        </div>
        <!--Display list of products-->
        <div v-if="isProductReady && short" class="flex-list">
            <div v-for="(prod,j) in products" :key="j" class="product-list">
                <a class="red-text" v-if="prod.area == (ar.name)" :href="'/Products/ProductInfo?name='+prod.name.replace(' ','_')">
                <img class="rounded z-depth-1-half img-fluid my-2" :src="prod.image" :alt="prod.name" :title="prod.short_description">
                <h6 class="font-weight-bold mb-3 my-3">
                    {{prod.name}}
                </h6>
                <button>View Product Info</button>
                </a>
            </div>
        </div>
        <!--Display list with description of products-->
        <div v-if="isProductReady && long" class="text-center cascade">
            <div v-for="(product,i) in products" :key="i" class="mt-5 text-center">
                <div lg="4">
                    <img class="img-fluid" :src="product.image" :alt="product.name" :title="product.name" />
                </div>
                <div lg="7">
                    <a class="red-text" :href="'/Products/ProductInfo?name='+product.name">
                    <h6 class="font-weight-bold mb-3">
                    {{product.name}}</h6>
                </a>
                <p>{{product.short_description}}</p>
                <a :href="'/Products/ProductInfo?name='+product.name"><button>View More</button></a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import MemberDataService from '../services/MemberDataService'
import ProductDataService from '../services/ProductDataService'

export default {
    components: {
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

.product-list, .member-list {
    padding: 0% 1%;
    justify-items: center;
}

.area-content {
    display: flex;
}

button:hover {
    background-color: red;
}
</style>

