<template>
    <div class="root">
        <img class="top-image" src="home-carousel-3.jpg" alt="top-image" title="Contact Us" />
        <div class="content">
            <h2>Contact us</h2>
            <h5 class="light-heading">Do you have any questions? Please do not hesitate to contact us directly. Our team will get back to you within a matter of hours to help you.</h5>
                <div class="content">
                	<form class="needs-validation" @submit.prevent="submitForm">
						<label for="name"><h5 class="light-heading">Name: </h5></label>
						<input type="text" id="name" v-model="fields.name" required />
						<label for="email"><h5 class="light-heading">Email: </h5></label>
						<input type="email" id="email" v-model="fields.email" required />
						<label for="subject"><h5 class="light-heading">Subject: </h5></label>
						<input type="text" id="subject" v-model="fields.subject" required />
						<label for="message"><h5 class="light-heading">Message: </h5></label>
						<textarea id="message" v-model="fields.message" required></textarea>
						<div>
							<button type="submit" @click="submitForm">Send Message</button>
						</div>
                	</form>
				</div>
        </div>
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
.form-elements {
    margin-left: auto;
    margin-right: auto;
  }

.light-heading {
  text-align: center;
}


</style>