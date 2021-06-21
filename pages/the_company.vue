<template>
    <div class="root">
       	<!--Start main content--> 
        <div class="content">
			<!--Image on top of page-->
            
			<!--Text accompanying image-->
			<div>
				<h2>HYPERCOMPANY</h2>
				<h5 class="light-heading">End-to-end solutions for Digital Evolution</h5>
				<h5 class="light-heading">Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas.</h5>
				<h5 class="light-heading">At Hypergroup, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
		Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.
				</h5>
			</div>
    	</div>
		<!-- Office Location -->
		<div class="content">
			<h2>Our Offices</h2>
			<div v-for="(item,i) in items" :key="i" class="content display-details">
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
				<h5 class="light-heading">Please provide us you details if you wish to subscribe to our newsletter</h5>
				<div class="card">
					<div>
						<label for="name"><h5 class="light-heading">Name: </h5></label>
						<input type="text" id="name" required>
					</div>
					<div>
						<label for="email"><h5 class="light-heading">Email: </h5></label>
						<input type="email" id="email" required>
					</div>
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
			]
		}
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
        if (event.target.classList.length == 2) {
          alert('You have subscribed to our newsletter!');
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