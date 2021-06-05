<template>
    <div>
        <!--Display list of areas-->
        <div v-if="area" class="area-content display-details">
            <div class="area-image">
            <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                <img :src="ar.image" :alt="ar.name" :title="ar.name" />
            </a>
            </div>
            <div class="area-data">
                <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                    <h4>{{ar.name}}</h4>
                </a>
                <p>{{ar.short_description}}</p>
                <a :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')"><button>View Products and Team</button></a>
            </div>
        </div>
        <!--Display area heading-->
        <div v-if="needarea">
            <a class="red-text" :href="'/Areas/AreaInfo?name='+ar.name.replace(' ','_')">
                <h4>{{ar.name}}</h4>
            </a>
        </div>

        <!--Display list of members and products-->
        <div v-if="isMemberReady || isProductReady" class="flex-list">
            <div v-for="(item,j) in items" :key="j">
                <div class="card">
                    <img v-on:click="isShow(item)" :src="item.image" :alt="item.name" :title="item.name">
                    <h5 class="red-text">{{item.name}}</h5>
                    <div v-if="render && item.name == renderItem.name">{{renderItem.short_description}}</div>
                </div>
                <a v-if="item.area.includes(ar.name) && isMemberReady" :href="'/Our_Team/MemberInfo?name='+item.name.replace(' ','_')">
                    <button>View Detailed Member Info</button>
                </a>
                <a v-else-if="item.area == ar.name && isProductReady" :href="'/Products/ProductInfo?name='+item.name.replace(' ','_')">
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
        needarea: {
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
        async retrieveProductsByArea() {
            if (this.product) {
                this.products = await (await ProductDataService.getByArea(this.ar.name)).data;
                this.items = this.products;
            }
        },
        async retrieveMembersByArea() {
            if (this.member) {
                this.members = await (await MemberDataService.getByArea(this.ar.name)).data;
                this.items = this.members;
            }
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
            if (this.members.length > 0) {
                return this.items;
            }
            else {
                this.retrieveMembersByArea()
            }
        },
        isProductReady: function () {
            if (this.products.length > 0) {
                return this.items;
            }
            else {
                this.retrieveProductsByArea()
            }
        }
    }
}
</script>

<style scoped>
.flex-list img {
    height: 200px;
    width: 200px;
}

.area-data {
    padding: 2%;
}

button:hover {
    background-color: red;
}
</style>

