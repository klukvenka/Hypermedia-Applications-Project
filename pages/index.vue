<template>
    <div class="root">
        <Navbar />
        <mdb-carousel :interval="5000" :items="items" controlls indicators></mdb-carousel>
            <mdb-container>
              <mdb-row class="mt-5" v-mdb-animate-on-scroll="'fadeInLeft'">
                <mdb-col lg="5">
                  <img class="img-fluid" src="home-areas.jpg" alt="Areas" title="Areas" />
                </mdb-col>
                <mdb-col lg="7">
                  <a class="indigo-text" href="/Areas">
                    <h6 class="font-weight-bold mb-3">
                      <mdb-icon icon="book-open" class="pr-2" />Areas</h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>THREE DIVISIONS, ONE GOAL.</strong>
                  </h3>
                  <p>We stands beside you in your Digital Evolution with our three divisions, designed to deliver complete, integrated solutions capable of meeting multiple business needs. Welcome to the Hypercompany. Are you ready to begin?</p>
                  <a href="/Areas"><mdb-btn color="black" size="md" class="waves-light ">Know More About Our Areas</mdb-btn></a>
                </mdb-col>
              </mdb-row>
              <hr class="my-5" />
              <mdb-row class="mt-5" v-mdb-animate-on-scroll="'fadeInRight'">
                <mdb-col lg="7">
                    <a class="pink-text" href="/Products">
                    <h6 class="font-weight-bold mb-3">
                      <mdb-icon icon="lightbulb" class="pr-2" />Products
                    </h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>STANDING INNOVATION.</strong>
                  </h3>
                  <p>Digital technologies can only play an enabling role when combined with targeted know-how for each specific market. This is the only way to manage complexity. With Hypercompany, you can always be sure of a partner that combines extensive expertise with the newest, leading-edge technologies.</p>
                  <a href="/Products"><mdb-btn color="black" size="md" class="mb-lg-0 mb-4 waves-light">Know More About Our Products</mdb-btn></a>
                </mdb-col>
                <mdb-col lg="5">
                  <img class="img-fluid" src="home-products.jpg" alt="Products" title="Products" />
                </mdb-col>
              </mdb-row>
              <hr class="my-5" />
              <mdb-row class="mt-5" v-mdb-animate-on-scroll="'fadeInLeft'">
                <mdb-col lg="5">
                  <img class="img-fluid" src="home-team.jpg" alt="Team" title="Team" />
                </mdb-col>
                <mdb-col lg="7">
                    <a class="green-text" href="/Our_Team">
                    <h6 class="font-weight-bold mb-3">
                      <mdb-icon icon="users" class="pr-2" />Team</h6>
                  </a>
                  <h3 class="font-weight-bold mb-5 p-0">
                    <strong>WE BELIEVE IN THE MOST ADVANCED TECHNOLOGY. PASSION.</strong>
                  </h3>
                  <p>A passion for challenges, sense of belonging, ability to listen.
          This is our nature, which we express every day with commitment and research, with tailor-made solutions and cutting-edge technologies.
          With the desire to face up the future and continue to grow.

                  </p>
                  <p>
                    Alongside you.</p>
                  <a href="/Our_Team"><mdb-btn color="black" size="md" class="waves-light ">Know More About Our Teams</mdb-btn></a>

                </mdb-col>
              </mdb-row>
              <hr class="my-5" />
            </mdb-container>
  <Footer />
  </div>
  </template>

<script>
  import { mdbAnimateOnScroll } from "mdbvue";
  import { mdbInput } from 'mdbvue';
  import { mdbCarousel } from "mdbvue";
  import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';


  export default {
    components: {
      mdbCarousel,
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

    directives: {
      mdbAnimateOnScroll
    },

    render: {
      static: {
        maxAge: 60 * 60 * 24,
      },
    },

    data() {
      return {
        items: [
          {
            img: true,
            height: "100%",
            width: "100%",
            alt: "home-carousel-1",
            title: "home-carousel-1",
            src:
              "home-carousel-1.jpg",
            caption: {
              title: "Do you want to shape the future?"
            }
             
          },
          {
            img: true,
            height: "100%",
            width: "100%",
            alt: "home-carousel-2",
            title: "home-carousel-2",
            src:
              "home-carousel-2.jpg",
            caption: {
              title: "Do you want to boost your business?", 
            }
          },
          {
            img: true,
            height: "100%",
            width: "100%",
            alt: "home-carousel-3",
            title: "home-carousel-3",
            src:
              "home-carousel-3.jpg",
            caption: {
                title: "Does Technology come first?", 
            }
          }
        ],
      }
    }
  }
</script>



<style scoped>

</style>
