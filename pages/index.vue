<template>
    <div class="root">
        <Navbar />
            <div class="container">
              <div class="content" v-mdb-animate-on-scroll="'fadeInLeft'">
                <div lg="5">
                  <img class="img-fluid" src="home-areas.jpg" alt="Areas" title="Areas" />
                </div>
                <div lg="7">
                  <a class="indigo-text" href="/Areas">
                    <h6 class="font-weight-bold mb-3">
                      <img icon="book-open" class="pr-2" />Areas</h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>THREE DIVISIONS, ONE GOAL.</strong>
                  </h3>
                  <p>We stands beside you in your Digital Evolution with our three divisions, designed to deliver complete, integrated solutions capable of meeting multiple business needs. Welcome to the Hypercompany. Are you ready to begin?</p>
                  <a href="/Areas"><button color="black" size="md" class="waves-light ">Know More About Our Areas</button></a>
                </div>
              </div>
              <hr class="my-5" />
              <div class="mt-5" v-mdb-animate-on-scroll="'fadeInRight'">
                <div lg="7">
                    <a class="pink-text" href="/Products">
                    <h6 class="font-weight-bold mb-3">
                      <img icon="lightbulb" class="pr-2" />Products
                    </h6>
                  </a>
                  <h3 class="font-weight-bold mb-3 p-0">
                    <strong>STANDING INNOVATION.</strong>
                  </h3>
                  <p>Digital technologies can only play an enabling role when combined with targeted know-how for each specific market. This is the only way to manage complexity. With Hypercompany, you can always be sure of a partner that combines extensive expertise with the newest, leading-edge technologies.</p>
                  <a href="/Products"><button color="black" size="md" class="mb-lg-0 mb-4 waves-light">Know More About Our Products</button></a>
                </div>
                <div lg="5">
                  <img class="img-fluid" src="home-products.jpg" alt="Products" title="Products" />
                </div>
              </div>
              <hr class="my-5" />
              <div class="mt-5" v-mdb-animate-on-scroll="'fadeInLeft'">
                <div lg="5">
                  <img class="img-fluid" src="home-team.jpg" alt="Team" title="Team" />
                </div>
                <div lg="7">
                    <a class="green-text" href="/Our_Team">
                    <h6 class="font-weight-bold mb-3">
                      <img icon="users" class="pr-2" />Team</h6>
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
                  <a href="/Our_Team"><button color="black" size="md" class="waves-light ">Know More About Our Teams</button></a>
                </div>
              </div>
              <hr class="my-5" />
            </div>
  <Footer />
  </div>
  </template>

<script>
  export default {
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
