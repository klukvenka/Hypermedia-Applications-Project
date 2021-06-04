<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />

        <div class="container">
            <div>
            <div-title class="mt-4 h2">Contact us</div-title>
            <div>
                <div-text
                class="pr-5 pl-5"
                mr-4
                ml-4
                >Do you have any questions? Please do not hesitate to contact us directly. Our team will getback to you within a matter of hours to help you.</div-text>
                <form class="needs-validation" @submit.prevent="submitForm">
                <div>
                    <div md="8">
                    <div>
                        <div>
                        <input type="textarea" label="Your name" v-model="fields.name" required />
                        </div>
                        <div>
                        <input type="email" label="Your email" v-model="fields.email" required />
                        </div>
                    </div>
                    <div>
                        <div>
                        <input type="textarea" label="Subject" v-model="fields.subject" required />
                        </div>
                    </div>
                    <div>
                        <div>
                        <input
                            type="textarea"
                            label="Your message"
                            v-model="fields.message"
                            required
                        />
                        </div>
                    </div>
                    </div>
                    <div md="4">
                    <div>
                        <div class="mt-4">
                        <p>Milan, 20133, Italy</p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-4">
                        <p>+ 39 234 567 8910</p>
                        </div>
                    </div>
                    <div>
                        <div class="mt-4">
                        <p>contact@hypercompany.com</p>
                        </div>
                    </div>
                    </div>
                </div>
                <button color="black" type="submit" class="float-center" @click="submitForm">Send</button>
                </form>
            </div>
            </div>
        </div>



        <Footer />
    </div>
</template>



<script>
  export default {
    components: {},
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