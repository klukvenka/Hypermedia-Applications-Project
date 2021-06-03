<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />

        <mdb-container class="mt-5">
            <mdb-card>
            <mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
            <mdb-card-body>
                <mdb-card-text
                class="pr-5 pl-5"
                mr-4
                ml-4
                >Do you have any questions? Please do not hesitate to contact us directly. Our team will getback to you within a matter of hours to help you.</mdb-card-text>
                <form class="needs-validation" @submit.prevent="submitForm">
                <mdb-row>
                    <mdb-col md="8">
                    <mdb-row>
                        <mdb-col>
                        <mdb-input type="textarea" label="Your name" v-model="fields.name" required />
                        </mdb-col>
                        <mdb-col>
                        <mdb-input type="email" label="Your email" v-model="fields.email" required />
                        </mdb-col>
                    </mdb-row>
                    <mdb-row>
                        <mdb-col>
                        <mdb-input type="textarea" label="Subject" v-model="fields.subject" required />
                        </mdb-col>
                    </mdb-row>
                    <mdb-row>
                        <mdb-col>
                        <mdb-input
                            type="textarea"
                            label="Your message"
                            v-model="fields.message"
                            required
                        />
                        </mdb-col>
                    </mdb-row>
                    </mdb-col>
                    <mdb-col md="4">
                    <mdb-row>
                        <mdb-col class="mt-4">
                        <mdb-icon icon="map-marker-alt" size="2x" />
                        <p>Milan, 20133, Italy</p>
                        </mdb-col>
                    </mdb-row>
                    <mdb-row>
                        <mdb-col class="mt-4">
                        <mdb-icon icon="phone" size="2x" />
                        <p>+ 39 234 567 8910</p>
                        </mdb-col>
                    </mdb-row>
                    <mdb-row>
                        <mdb-col class="mt-4">
                        <mdb-icon icon="envelope" size="2x" />
                        <p>contact@hypercompany.com</p>
                        </mdb-col>
                    </mdb-row>
                    </mdb-col>
                </mdb-row>
                <mdb-btn color="black" type="submit" class="float-center" @click="submitForm">Send</mdb-btn>
                </form>
            </mdb-card-body>
            </mdb-card>
        </mdb-container>



        <Footer />
    </div>
</template>



<script>
import {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from "mdbvue";
    
  export default {
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        fields: {
          name: "",
          email: "",
          subject: "",
          message: "",
          submit: false
        }
      };
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
        if (event.target.classList.length == 2) {
          alert('Message submitted');
        }
      }
    }
  };
</script>



<style scoped>
.container {
    text-align: center;
  }
</style>