<template>
  <div class="postCard">
    <v-card class="card d-flex pa-2 my-5">
      <v-avatar tile size="100">
        <v-img :src="post.thumbnail"></v-img>
      </v-avatar>
      <v-card-text>
        <h6 class="text-h6">{{ post.title }}</h6>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PostCardMini",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>