<!--
Author: Aida Gasanova
Description:
The page displays the Contact Us page of the website that allows the user to send a message to our team.

The page contains a navigation bar on the top and a contact form below that allows the user to send a message. 
In order to send a message the user has to input his name, an email, a subject of the message and the message itself.

-->
<template>
    <div class="root">
		<Topbar />
        <!--Image on top of page-->
        <img class="top-image" src="home-carousel-3.jpg" alt="top-image" title="Contact Us" />
        <!--Contact Form-->
        <div class="content">
            <h2>Contact Form</h2>
            <h5 class="light-heading">Do you have any questions? Please do not hesitate to contact us directly. Our team will get back to you within a matter of hours to help you.</h5>
                <div class="content">
                	<form class="needs-validation" @submit.prevent="submitForm">
            <!--Input Name-->
						<label for="name"><h5 class="light-heading">Name: </h5></label>
						<input type="text" id="name" v-model="fields.name" required />
            <!--Input Email-->
						<label for="email"><h5 class="light-heading">Email: </h5></label>
						<input type="email" id="email" v-model="fields.email" required />
            <!--Input Subject-->
						<label for="subject"><h5 class="light-heading">Subject: </h5></label>
						<input type="text" id="subject" v-model="fields.subject" required />
            <!--Input Message-->
						<label for="message"><h5 class="light-heading">Message: </h5></label>
						<textarea id="message" v-model="fields.message" required></textarea>
						<div v-if="success"><h5 class="text-center light-heading">The message has been successfully submitted!</h5></div>
						<div v-else><h5 class="text-center light-heading">Please fill all the details</h5></div>
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
        },
		success:false
      }
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
        if (event.target.classList.length == 2) {
          this.success = true;
        }
		else {
			this.success = false;
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