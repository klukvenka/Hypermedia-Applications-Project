<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        
        <div class="content">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" />
          <div>
            <h2>HYPERCOMPANY</h2>
            <h5>End-to-end solutions for Digital Evolution</h5>
            <h5>Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas.</h5>
          <p>At Hypergroup, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.
          </p>
        </div>
    </div>
   
   <div class="content">
  <form class="needs-validation" @submit.prevent="submitForm">
    <h4 class="text-center">Subscribe to our newsletter</h4>
    <br>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name">
    </div>
    <br>
    <div>
      <label for="email">Email: </label>
      <input type="email" id="email">
    </div>
    <button type="submit">Subscribe</button>
  </form>
  </div>
  <Footer />
    </div>
</template>

<script>
  export default {
    components: {
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
.container {
    text-align: center;
  }

</style>