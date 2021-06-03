<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <mdb-container>
            <mdb-card reverse class="my-5">
                <Description :product="prod" prod />
            </mdb-card>
        </mdb-container>
        <Footer />
    </div>
</template>

<script>

    import { mdbContainer, mdbCard } from 'mdbvue';
    import Description from '../../components/Description.vue';

    export default {
        components: {
            mdbContainer,
            mdbCard,
            Description
        },
        data () {
            return {
                prod: this.$route.query.name,
            }
        }
    }
</script>


<style scoped>
</style>
