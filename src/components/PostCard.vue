<template>
  <div class="postCard">
    <v-card class="card d-flex pa-2 mt-5">
      <v-avatar tile size="210">
        <v-img :src="post.thumbnail"></v-img>
      </v-avatar>
      <v-card-text>
        <h6 class="text-h6">{{ post.title }}</h6>
        <p class="truncate mt-2 content">{{ post.content }}</p>
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
.postCard {
  width: 100%;
}
.card {
  /* width: 490px; */
  width: 100%;
}

.truncate {
  --1h: 1.375rem;
  max-height: calc(var(--1h) * 4);
  width: 100%;
  overflow: hidden;
  position: relative;
}

.content {
  display: none;
}

@media (min-width: 430px), print {
  .content {
    display: block;
  }
}
</style>