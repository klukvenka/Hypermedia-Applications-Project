<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <mdb-container>
            <mdb-card reverse class="my-5">
                <Description :member="mem" mem />
            </mdb-card>
        </mdb-container>
        <Footer />
    </div>
</template>

<script>
    import { mdbContainer, mdbCard } from 'mdbvue';

    export default {
        components: {
            mdbContainer,
            mdbCard
        },
        data () {
            return {
                mem: this.$route.query.name.replace('_',' '),
            }
        }
    }
</script>


<style scoped>

</style>