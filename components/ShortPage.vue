<!--
Author: Sairaghav Venkataraman
Description:
This is the component which is re-used the most in the website.

This component displays the areas, members and products based on the props passed to this component.

The props that can be passed to this component are:

1. needHeading: If this is true, the component displays the heading specifying the area name as a link. 
                This is used in all intro pages for areas, our_team and products page

2. getArea: If this is true, the component will display details of the area value passed in 'forArea' prop.
            getArea ALWAYS requires 'forArea' prop (Object type) to be passed.

3. getMember: If this is true, the component will display details of all members of the specific area passed in 'forArea' prop.
                getMember ALWAYS requires 'forArea' prop (Object type) to be passed. 
                If 'mem' prop (String type) is also passed as an optional parameter, the component will display only that particular member details.

4. getProduct: If this is true, the component will display details of all products of the specific area passed in 'forArea' prop.
                getProduct ALWAYS requires 'forArea' prop (Object type) to be passed. 
                It also accepts optional parameters 'item' which is an array and will have value of list of members. Used in 'MemberInfo.vue'
-->
<template>
    <div>
        <!--Display area heading if requested-->
        <div v-if="needHeading">
            <a class="red-text" :href="'/Areas/AreaInfo?name='+forArea.name">
                <h5>{{forArea.name}}</h5>
            </a>
        </div>

        <div v-if="needToggleInfo">
            <p>(Click on image to toggle short description)</p>
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
                <!--Configure toggle onclick-->
                <div class="card" v-on:click="isShow(item.name)">
                    <img :src="item.image" :alt="item.name" :title="item.name">
                    <h5 class="red-text">{{item.name}}</h5>
                    <!--Display designation only for members-->
                    <h5 v-if="isMemberReady">{{item.designation}}</h5>
                    <!--Toggle short description-->
                    <div v-if="renderItem.includes(item.name)"><p>{{item.short_description}}</p></div>
                </div>
                <!--Display different links depending on Member or Product-->
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
        needToggleInfo: {
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
        /*These methods use the Data services defined in 'services/' folder to access the DB using API (with Axios defined in http-common.js)
        For products and members, the value is stored in 'this.items' variable.
        */
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
        /*Toggle which card should display the short description. 
        'renderItem' array will maintain the list of all the products/members clicked.
        If 'renderItem' is already true, it removes that particular clicked item out of the list and
        if 'renderItem' is already false, it adds the clicked item to array  */
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
        /*IsMemberReady will check if 'getMember' prop is passed. It will execute only if this is true.
        It will check 'forProduct' is true. If true, it will check 'mem' is passed. If 'mem' is passed, it will return details of member in 'mem' prop.
        If 'mem' is not passed, it will return all member details in a particular area specified in prop 'forArea' 
        */
        isMemberReady: function () {
            if (this.getMember) {
                if (this.members.length > 0) {
                    return this.items;
                }
                else if (this.mem.length > 0) {
                    this.retrieveMembersByName()
                }
                else {
                    this.retrieveMembersByArea()
                }
            }
        },
        /*IsProductReady will check if 'getProduct' prop is passed. It will only execute if it is true. 
        It will return all products of particular area passed in prop 'forArea' */
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

/*The image for area will be adjusted depending on screen size. */

@media only screen and (max-width: 900px) {
    .area-content img {
        width: 70vw;
        height: 40vh;
    }
}
</style>

