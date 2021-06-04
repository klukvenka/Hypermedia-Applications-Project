<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />

        <div class="card">
            <h2>Contact us</h2>
            <h4>Do you have any questions? Please do not hesitate to contact us directly. Our team will getback to you within a matter of hours to help you.</h4>
                <div class="contact">
                <form class="needs-validation card" @submit.prevent="submitForm">
                  <table class="text-center contacts">
                    <tr>
                      <td>
                        <label for="name">Name: </label>
                      </td>
                      <td>
                        <input type="text" id="name" v-model="fields.name" required />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="email">Email: </label>
                      </td>
                      <td>
                        <input type="email" id="email" v-model="fields.email" required />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="subject">Email: </label>
                      </td>
                      <td>
                        <input type="text" id="subject" v-model="fields.subject" required />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="message">Message: </label>
                      </td>
                      <td>
                        <textarea name="Message:" v-model="fields.message" required></textarea>
                      </td>
                    </tr>
                  </table>

                  <!--<div class="flex-list">
                  <p>Milan, 20133, Italy</p>
                  <p>+ 39 234 567 8910</p>
                  <p>contact@hypercompany.com</p>
                  </div>-->
                <button type="submit" @click="submitForm">Send Message</button>
                </form>
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
.contacts {
    align-content: center;
  }
</style>