<template>
  <div class="thank d-flex flex-column justify-center align-center">
    <p class="text-h5 text-sm-h4">已經收到您的信件了，謝謝您的聯絡！</p>
    <v-btn class="mt-4 grey lighten-2" plain :to="{ name: 'Home' }">
      <v-icon left>mdi-arrow-left-circle</v-icon>
      <p class="mb-0">返回首頁</p>
    </v-btn>

  </div>
</template>

<style scoped>
.thank {
  width: 100%;
  height: 100%;
  background-image: url("/thank.jpeg");
  background-size: cover;
  background-position: center;
  background-color: rgba(247, 247, 247, .6);
  background-blend-mode:soft-light
}
</style>