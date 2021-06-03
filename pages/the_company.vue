<template>
    <div class="root">
        <Navbar />
        <Breadcrumbs />
        
    <mdb-container class="text-center">
    <mdb-row class="mt-5">
      <mdb-col md="12">
        <mdb-card reverse>
          <mdb-view hover cascade>
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" waves/>
          </mdb-view>
          <mdb-card-body class="text-center cascade">
            <h2 class="font-weight-bold">
              <a>HYPERCOMPANY</a>
            </h2>
            <h5>End-to-end solutions for Digital Evolution</h5>
            <mdb-btn class="btn-fb waves-light">
              <mdb-icon fab icon="facebook" class="pr-2"/>
              Facebook
            </mdb-btn>
            <mdb-btn class="btn-tw waves-light">
              <mdb-icon fab icon="twitter" class="pr-2"/>
              Twitter
            </mdb-btn>
            <mdb-btn class="btn-gplus waves-light">
              <mdb-icon fab icon="google-plus" class="pr-2"/>
              Google
            </mdb-btn>
            <h6 class="my-5">Digital Evolution involves everything: this is why it requires relentless innovation, skills and ideas.
          </h6>
          <p>At Hypergroup, we design and create a virtuous and proactive digital ecosystem, with the goal of continuous improvement of people and resources, technology and knowledge.
Interpreting a constantly evolving world requires understanding, foreseeing and always being ready for change.
          </p>
          </mdb-card-body>
        </mdb-card>
          
      </mdb-col>
    </mdb-row>
    </mdb-container>
   <!-- Material form subscription -->
   <mdb-container class = "my-5">
  <form class="needs-validation" @submit.prevent="submitForm">
    <p class="h5 text-center mb-4">Subscribe to our newsletter</p>
    <mdb-row>
      <mdb-col>
        <mdb-input label="Your name" icon="user" type="textarea"/>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col>
        <mdb-input label="Your email" icon="envelope" type="email"/>
      </mdb-col>
    </mdb-row>
    <br><br><br>
    <mdb-row>
      <mdb-col>
        <mdb-btn type="submit" color="black" >Subscribe</mdb-btn>
      </mdb-col>
    </mdb-row>
  </form>
  </mdb-container>
  <Footer />
    </div>
</template>

<script>
  import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbTabs, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTextarea, mdbInput } from 'mdbvue';
   import { mdbCard, mdbCardBody } from 'mdbvue';
  
  export default {
    components: {
      mdbTabs,
      mdbTextarea,
      mdbJumbotron,
      mdbInput,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbMask,
      mdbIcon,
      mdbView,
      mdbBtn
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