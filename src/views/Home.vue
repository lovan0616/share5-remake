<template>
  <div class="home">
    <div class="carousel-wrapper">
      <v-carousel
        cycle
        hide-delimiter-background
        :show-arrows="false"
        height="100%"
        class="carousel"
      >
        <v-carousel-item v-for="carousel in carousels" :key="carousel.index" eager>
          <v-img :src="carousel.link" height="100%" eager></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>

    <v-container class="container">
      <v-row align="center">
        <v-col class="d-flex flex-column align-center">
          <p class="text-h6 text-sm-h4 grey--text text--darken-3">嗨！我們是來自政大的Share5</p>
          <p class="grey--text">自發性關懷街友組織，除不定期募資外，將持續推廣各式活動，更深入理解街友文化的輪廓，期許讓更多人能理解、尊重。</p>
        </v-col>
      </v-row>
    </v-container>

    <v-parallax
      height="300"
      src="nccu.jpg"
      class="parallax"
    >
      <!-- <v-row>
        <v-col cols="12" sm="4" class="d-flex justify-center" align-self="center">
          <v-chip class="red darken-2 white--text">
            <v-icon class="white--text">mdi-hand-left</v-icon>政大自發性公益團體
          </v-chip>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center" align-self="center">
          <v-chip class="red darken-2 white--text">
            <v-icon class="white--text">mdi-heart</v-icon>翻轉街友歧視
          </v-chip>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-center" align-self="center">
          <v-chip class="red darken-2 white--text">
            <v-icon class="white--text">mdi-duck</v-icon>用創意帶來改變
          </v-chip>
        </v-col>
      </v-row> -->
    </v-parallax>

    <Email />
  </div>
</template>

<script>
import Email from "../components/Email";
export default {
  name: "Home",
  components: {
    Email
  },
  data() {
    return {
      carousels: [
        { link: "./carousels/night.jpg" },
        { link: "./carousels/street.jpg" },
        { link: "./carousels/tea.jpg" }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  height: 100vh;
}

.carousel {
  top: -56px;
}

.container {
  margin-bottom: 60px;
}

@media (min-width: 600px), print {
  .carousel {
    top: -64px;
  }
}
</style>