<template>
    <div>
        <!--Display area heading if requested-->
        <div v-if="needarea">
            <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name">
                <h4>{{ar.name}}</h4>
            </a>
            <h5>(Click on each image to toggle short description)</h5>
        </div>

        <!--Display list of areas-->
        <div v-if="getArea" class="area-content display-details">
            <img :src="ar.image" :alt="ar.name" :title="ar.name" />
            <div class="area-data">
                <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name">
                    <h4>{{ar.name}}</h4>
                </a>
                <h5 class="light-heading">{{ar.short_description}}</h5>
                <a :href="'/Areas/AreaInfo?name='+ar.name"><button>View Detailed Area Info</button></a>
            </div>
        </div>

        <!--Display list of members and products-->
        <div v-if="(isMemberReady || isProductReady)" class="flex-list item-list">
            <div v-for="(item,j) in items" :key="j">
                <div class="card">
                    <img v-on:click="isShow(item)" :src="item.image" :alt="item.name" :title="item.name">
                    <h5 class="red-text">{{item.name}}</h5>
                    <div v-if="render && item.name == renderItem.name"><h5 class="light-heading">{{renderItem.short_description}}</h5></div>
                    <div v-else-if="isExpand"><h5 class="light-heading">{{item.short_description}}</h5></div>
                </div>
                <a v-if="isMemberReady" :href="'/Our_Team/MemberInfo?name='+item.name.replace(' ','_')">
                    <button>View Detailed Member Info</button>
                </a>
                <a v-else-if="isProductReady" :href="'/Products/ProductInfo?name='+item.name.replace(' ','_')">
                    <button>View Detailed Product Info</button>
                </a>
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
        getProduct: {
            type: Boolean,
            default: false
        },
        getArea: {
            type: Boolean,
            default: false
        },
        getMember: {
            type: Boolean,
            default: false
        },
        item: {
            type: Array,
            default() {
                return []
            }
        },
        ar: {
            type: Object,
            default() {
                return {}
            }
        },
        area: {
            type: String,
            default: ''
        },
        mem: {
            type: String,
            default: ''
        },
        prod: {
            type: String,
            default: ''
        },
        needarea: {
            type: Boolean,
            default: false
        },
        isExpand: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            products: [],
            members: [],
            items: [],
            render: false,
            renderItem: {}
        }
    },
    methods: {
        async retrieveAreaByName() {
            this.area = await (await AreaDataService.getByName(this.product.area)).data;
        },
        async retrieveProductsByArea() {
            this.products = await (await ProductDataService.getByArea(this.ar.name)).data;
            this.items = this.products;
        },
        async retrieveMembersByArea() {
            this.members = await (await MemberDataService.getByArea(this.ar.name)).data;
            this.items = this.members;
        },
        async retrieveMembersByName() {
            this.members = await (await MemberDataService.getByName(this.mem)).data;
            this.items = this.members;
        },
        async isShow(value) {
            if (this.render) {
                this.render =  false;
                this.renderItem = {};
            }
            else {
                this.render =  true;
                this.renderItem = value;
            }
            await this.render;
        }
    },
    computed: {
        isMemberReady: function () {
            if (this.getMember) {
                if (this.members.length > 0) {
                    return this.items;
                }
                else if (this.prod.length > 0 && this.mem.length > 0) {
                    this.retrieveMembersByName()
                }
                else {
                    this.retrieveMembersByArea()
                }
            }
        },
        isProductReady: function () {
            if (this.getProduct) {
                if (this.products.length > 0) {
                    return this.items;
                }
                else {
                    if (this.item.length > 0) {
                        this.items = this.item;
                        return this.items;
                    }
                    else {                    
                        this.retrieveProductsByArea()
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
.item-list img {
    height: 200px;
    width: 200px;
}

.area-content img {
    width: 25vw;
    height: 35vh;
}

.area-data {
    padding: 2%;
}

@media only screen and (max-width: 900px) {
    .area-content img {
        width: 70vw;
        height: 40vh;
    }
}
</style>

