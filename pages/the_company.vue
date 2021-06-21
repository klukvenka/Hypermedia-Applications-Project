<template>
    <div class="root">
       	<!--Start main content--> 
        <div class="content">
			<!--About the company-->
			<h2>About Us</h2>
			<br>
			<p>Hypercompany was founded in the year 2012 by Aida Gasanova, Lorenzo Grossi, Veronica Lucchetti and Sairaghav Venkataraman with the aim of providing much needed end-to-end solutions and services in then-upcoming fields such as Artificial Intelligence, Cloud Computing and Cybersecurity.</p>
			<br>
			<p>Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas. Over the years, the company has acquired tremendous knowledge and experience in these fields to grow into one of the superior technology companies in Italy.</p>
			<br>
			<p>At Hypercompany, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
	Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.</p>
    	</div>
		<!-- Office Location -->
		<div class="content">
			<h2>Our Offices</h2>
			<div v-for="(item,i) in items" :key="i" class="card display-details">
				<div class="topic-image">
					<img :src="item.image" :alt="item.location" :title="item.location" />
				</div>
				<div class="topic-content text-center">
					<h3>{{item.location}}</h3>
					<br>
					<p><strong>Address:</strong> {{item.address}}</p>
					<br>
					<p><strong>Contact Number:</strong> {{item.phone}}</p>
					<br>
					<p><strong>Contact E-mail:</strong> {{item.email}}</p>
				</div>
			</div>
		</div>
		<!--Subscription form-->
		<div class="content">
			<form class="needs-validation" @submit.prevent="submitForm">
				<h2 class="text-center">Newsletter</h2>
				<h5 class="light-heading">Please provide us your details if you wish to subscribe to our newsletter</h5>
				<div class="card">
					<div>
						<label for="name"><h5 class="light-heading">Name: </h5></label>
						<input type="text" id="name" required>
					</div>
					<div>
						<label for="email"><h5 class="light-heading">Email: </h5></label>
						<input type="email" id="email" required>
					</div>
					<div v-if="success"><h5 class="text-center light-heading">You have successfully subscribed to the newsletter!</h5></div>
					<div v-else><h5 class="text-center light-heading">Please fill all the details</h5></div>
					<button type="submit">Subscribe</button>
				</div>
			</form>
  		</div>
	</div>
</template>

<script>
  export default {
    data() {
		return {
			items: [
				{
					location: "Milan",
					address: "Milan, 20133, Italy",
					phone: "+ 39 234 567 8910",
					email: "contact-milan@hypercompany.com",
					image: "/milan.jpg"
				},
				{
					location: "Turin",
					address: "C.so Francia, 112 - 10143 Turin, Italy",
					phone: "+ 39 123 567 8910",
					email: "contact-turin@hypercompany.com",
					image: "/turin.jpg"
				}	
			],
			success: false
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
  }
</script>

<style scoped>
.light-heading {
    text-align: center;
}
</style>