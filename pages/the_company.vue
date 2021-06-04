<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        
    <div class="text-center">
    <div class="mt-5">
      <div md="12">
        <div reverse>
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" class="img-fluid" />
          <div class="text-center cascade">
            <h2 class="font-weight-bold">
              <a>HYPERCOMPANY</a>
            </h2>
            <h5>End-to-end solutions for Digital Evolution</h5>
            <button class="btn-fb waves-light">
              <img fab icon="facebook" class="pr-2"/>
              Facebook
            </button>
            <button class="btn-tw waves-light">
              <img fab icon="twitter" class="pr-2"/>
              Twitter
            </button>
            <button class="btn-gplus waves-light">
              <img fab icon="google-plus" class="pr-2"/>
              Google
            </button>
            <h6 class="my-5">Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas.
          </h6>
          <p>At Hypergroup, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.
          </p>
          </div>
        </div>
          
      </div>
    </div>
    </div>
   <!-- Material form subscription -->
   <div class = "my-5">
  <form class="needs-validation" @submit.prevent="submitForm">
    <p class="h5 text-center mb-4">Subscribe to our newsletter</p>
    <div>
      <div>
        <input label="Your name" icon="user" type="textarea"/>
      </div>
    </div>
    <div>
      <div>
        <input label="Your email" icon="envelope" type="email"/>
      </div>
    </div>
    <br><br><br>
    <div>
      <div>
        <button type="submit" color="black" >Subscribe</button>
      </div>
    </div>
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