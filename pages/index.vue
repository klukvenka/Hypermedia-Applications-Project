<template>
    <div class="root">
        <Navbar />
            <div class="">
              <img class="home-image" src="home-carousel-1.jpg"/>
              <div v-for="(item,i) in items" :key="i">
                <div class="display-details content w3-container w3-center w3-animate-left">
                <div class="topic-image">
                  <img :src="item.src" :alt="item.name" :title="item.name" />
                </div>
                <div class="topic-content">
                  <a class="red-text" :href="item.path">
                    <h5>{{item.title}}</h5>
                  </a>
                  <h3>
                    <strong>{{item.heading}}</strong>
                  </h3>
                  <p>{{item.text}}</p>
                  <a :href="item.path"><button>Know More About Our {{item.title}}</button></a>
                </div>
                </div>
              </div>
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
            name: "Areas",
            title: "Areas",
            src: "home-areas.jpg",
            heading: "THREE DIVISIONS, ONE GOAL.",
            text: "We stands beside you in your Digital Evolution with our three divisions, designed to deliver complete, integrated solutions capable of meeting multiple business needs. Welcome to the Hypercompany. Are you ready to begin?",
            path: "/Areas"
          },
          {
            name: "Products",
            title: "Products",
            src: "home-products.jpg",
            heading: "STANDING INNOVATION.",
            text: "Digital technologies can only play an enabling role when combined with targeted know-how for each specific market. This is the only way to manage complexity. With Hypercompany, you can always be sure of a partner that combines extensive expertise with the newest, leading-edge technologies.",
            path: "/Products"
          },
          {
            name: "Our Team",
            title: "Our Team",
            src: "home-team.jpg",
            heading: "WE BELIEVE IN THE MOST ADVANCED TECHNOLOGY. PASSION.",
            text: "A passion for challenges, sense of belonging, ability to listen.\
          This is our nature, which we express every day with commitment and research, with tailor-made solutions and cutting-edge technologies.\
          With the desire to face up the future and continue to grow.",
            path: "/Our_Team"
          },
        ],
      }
    }
  }
</script>



<style scoped>
.topic-content {
  padding: 2%;
}

.home-image {
  margin-top: 2%;
  width: 100vw;
  height: 60vh;
}
</style>
