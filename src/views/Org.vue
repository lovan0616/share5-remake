<template>
  <div class="org">
    <v-container>
      <v-row class="my-5">
        <v-col v-for="org in  organizarions" :key="org" cols="12" sm="6" lg="4">
          <v-hover v-slot="{ hover }">
            <v-card class="orgCard" width="100%" :elevation="hover ? 8 : 2" :href="org.link" target="_blank">
              <v-card-title
                class="headline font-weight-light grey--text text--darken-1"
              >{{ org.name }}</v-card-title>
              <v-divider></v-divider>
              <v-img :src="org.image" min-height="400">
                <v-fade-transition>
                  <div class="hoverBoard" v-if="hover">
                    <v-chip class="linkChip">前往網站</v-chip>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Org",
  data() {
    return {
      organizarions: [
        {
          id: 1,
          name: "芒草心",
          image: "/organizations/pic1.jpg",
          link: "https://www.homelesstaiwan.org/"
        },
        {
          id: 2,
          name: "人生百味",
          image: "/organizations/pic2.jpg",
          link: "https://www.facebook.com/Do.you.a.flavor/"
        },
        {
          id: 3,
          name: "當代漂泊",
          image: "/organizations/pic3.png",
          link:
            "https://www.facebook.com/%E7%95%B6%E4%BB%A3%E6%BC%82%E6%B3%8A-138150989532525/"
        },
        {
          id: 4,
          name: "街遊",
          image: "/organizations/pic4.jpg",
          link: "https://www.facebook.com/HiddenTaipei?fref=ts"
        },
        {
          id: 5,
          name: "大誌雜誌",
          image: "/organizations/pic5.jpg",
          link: "https://www.facebook.com/bigissue.tw?fref=ts"
        },
        {
          id: 6,
          name: "夢想城鄉",
          image: "/organizations/pic6.jpg",
          link: "https://www.facebook.com/dreamcitybuilding/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.orgCard {
  height: 400px;
  overflow: hidden;
  object-fit: cover;
}

.hoverBoard {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: .8;
  position: relative;
}

.linkChip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
}
</style>