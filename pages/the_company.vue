<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        
        <div class="content">
            <img src="/the-company.jpg" alt="top-image" title="top-image"/>
          <div>
            <h2>HYPERCOMPANY</h2>
            <h5 class="light-heading">End-to-end solutions for Digital Evolution</h5>
            <h5 class="light-heading">Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas.</h5>
          <h5 class="light-heading">At Hypergroup, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.
          </h5>
        </div>
    </div>
   
   <div class="content">
  <form class="needs-validation" @submit.prevent="submitForm">
    <h4 class="text-center">Subscribe to our newsletter</h4>
    <br>
    <div>
      <label for="name"><h5 class="light-heading">Name: </h5></label>
      <input type="text" id="name" required>
    </div>
    <br>
    <div>
      <label for="email"><h5 class="light-heading">Email: </h5></label>
      <input type="email" id="email" required>
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
.light-heading {
    text-align: center;
  }

</style>