<template>
  <div class="footer">
    <v-footer padless class="d-flex flex-column">
      <v-card flat tile class="card text-center transparent">
        <v-card-text class="pb-0">追蹤Share5社群，掌握最新活動消息</v-card-text>
        <v-card-text class="pt-2">
          <v-btn v-for="icon in icons" :key="icon.name" :href="icon.link" plain target="_blank">
            <v-icon large="">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
    
      
      <v-divider></v-divider>


        <v-card-text class="font-weight-bold">&#169; {{ new Date().getFullYear() }} Copyright

        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          name: "facebook",
          icon: "mdi-facebook",
          link: "http://www.facebook.com"
        },
        {
          name: "instagram",
          icon: "mdi-instagram",
          link: "http://www.instagram.com"
        },
        {
          name: "twitter",
          icon: "mdi-twitter",
          link: "http://www.twitter.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  width: 95vw;
}
</style>