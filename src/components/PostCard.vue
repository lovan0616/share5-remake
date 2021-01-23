<template>
  <div class="postCard">
    <v-card class="card d-flex pa-2 my-5">
      <v-avatar tile size="210">
        <v-img :src="post.thumbnail"></v-img>
      </v-avatar>
      <v-card-text>
        <h6 class="text-h6">{{ post.title }}</h6>
        <p class="truncate mt-2">{{ post.content }}</p>
        </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 490px;
}

.truncate {
  --1h: 1.375rem;
  max-height: calc(var(--1h) * 4);
  width: 100%;
  overflow: hidden;
  position: relative;
}

@media (min-width: 960px), print {
  .card {
    width: 650px;
  }
}
</style>