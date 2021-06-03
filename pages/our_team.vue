<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        <mdb-container>
            <mdb-card v-for="(area,i) in areas" :key="i" class="my-5" reverse>
                <List :ar="area" member short needarea/>   
            </mdb-card>
        </mdb-container>
        <Footer />
    </div>
</template>

<script>
    import AreaDataService from '../services/AreaDataService'
    import { mdbContainer, mdbCard} from 'mdbvue';

    export default {
        components: {
            mdbCard,
            mdbContainer
        },
        data () {
            return {
                areas : [],
                members : [],
                mem: []
            }
        },

        methods: {
            retrieveAreas() {
                AreaDataService.getAll().then(response => {
                    this.areas = response.data;
                })
                .catch(e => {
                    (e);
                })

            }
        },
        mounted() {
            this.retrieveAreas();
        }
    }
</script>