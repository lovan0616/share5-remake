<template>
  <div :class="['album-wrapper', 'my-5', event.name ]" :id="event.name">
    <h1 class="font-weight-light">{{ event.name_ch }}</h1>
    <v-chip class="dateChip red white--text">
      <v-icon left class="white--text">mdi-calendar-minus</v-icon>
      {{ event.date }}
    </v-chip>
    <v-carousel :height="{100: windowWidth < 600 }">
      <v-carousel-item v-for="pic in event.album" :key="pic" :src="pic">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  }
}
</script>

<style scoped>
.album-wrapper {
  position: relative;
}

.dateChip {
  position: absolute;
  top: 8px;
  right: 0;
}


</style>