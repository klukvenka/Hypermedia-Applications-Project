<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />

        <div class="card">
            <h2>Contact us</h2>
            <h4>Do you have any questions? Please do not hesitate to contact us directly. Our team will getback to you within a matter of hours to help you.</h4>
                <form class="needs-validation" @submit.prevent="submitForm">
                  <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" v-model="fields.name" required />
                  </div>
                  <div>
                    <label for="email">Email: </label>
                    <input type="email" id="email" v-model="fields.email" required />
                  </div>
                  <div>
                    <label for="subject">Subject: </label>
                    <input type="textarea" id="subject" v-model="fields.subject" required />
                  </div>
                  <div>
                    <label for="message">Message: </label>
                    <input type="textarea" id="message" v-model="fields.message" required />
                  </div>
                  <!--<div class="flex-list">
                  <p>Milan, 20133, Italy</p>
                  <p>+ 39 234 567 8910</p>
                  <p>contact@hypercompany.com</p>
                  </div>-->
                <button type="submit" @click="submitForm">Send Message</button>
                </form>
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