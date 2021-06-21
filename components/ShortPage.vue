<template>
    <div>
        <!--Display area heading if requested-->
        <div v-if="needHeading">
            <a class="red-text" :href="'/Areas/AreaInfo?name='+forArea.name">
                <h5>{{forArea.name}}</h5>
            </a>
            <h5>(Click on each image to toggle short description)</h5>
        </div>

        <!--Display list of areas-->
        <div v-if="getArea" class="area-content display-details">
            <img :src="forArea.image" :alt="forArea.name" :title="forArea.name" />
            <div class="area-data">
                <a class="red-text" :href="'/Areas/AreaInfo?name='+forArea.name">
                    <h5>{{forArea.name}}</h5>
                </a>
                <p>{{forArea.short_description}}</p>
                <a :href="'/Areas/AreaInfo?name='+forArea.name"><button>View Detailed Area Info</button></a>
            </div>
        </div>

        <!--Display list of members and products-->
        <div v-if="(isMemberReady || isProductReady)" class="flex-list item-list">
            <div v-for="(item,j) in items" :key="j">
                <div class="card" v-on:click="isShow(item.name)">
                    <img :src="item.image" :alt="item.name" :title="item.name">
                    <h5 class="red-text">{{item.name}}</h5>
                    <h5 v-if="isMemberReady">{{item.designation}}</h5>
                    <div v-if="renderItem.includes(item.name)"><p>{{item.short_description}}</p></div>
                    <div v-else-if="isExpand"><p class="light-heading">{{item.short_description}}</p></div>
                </div>
                <a v-if="isMemberReady" :href="'/Our_Team/MemberInfo?name='+item.name">
                    <button>View Detailed Member Info</button>
                </a>
                <a v-else-if="isProductReady" :href="'/Products/ProductInfo?name='+item.name">
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
        forArea: {
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
        forProduct: {
            type: String,
            default: ''
        },
        needHeading: {
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
            renderItem: []
        }
    },
    methods: {
        async retrieveAreaByName() {
            this.area = await (await AreaDataService.getByName(this.product.area)).data;
        },
        async retrieveProductsByArea() {
            this.products = await (await ProductDataService.getByArea(this.forArea.name)).data;
            this.items = this.products;
        },
        async retrieveMembersByArea() {
            this.members = await (await MemberDataService.getByArea(this.forArea.name)).data;
            this.items = this.members;
        },
        async retrieveMembersByName() {
            this.members = await (await MemberDataService.getByName(this.mem)).data;
            this.items = this.members;
        },
        async isShow(item) {
            if (this.renderItem.includes(item)) {
                this.renderItem.splice(this.renderItem.indexOf(item),1);
            }
            else {
                this.renderItem.push(item);
            }
            await this.renderItem;
        }
    },
    computed: {
        isMemberReady: function () {
            if (this.getMember) {
                if (this.members.length > 0) {
                    return this.items;
                }
                else if (this.forProduct.length > 0 && this.mem.length > 0) {
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

