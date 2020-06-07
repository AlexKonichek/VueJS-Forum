<template>
  <div class="post-list">
    <PostListItem
      v-for="(post, index) in posts"
      v-bind:post="post"
      :key="index"
    />
  </div>
</template>

<script>
import PostListItem from "@/components/PostListItem";
export default {
  components: { PostListItem },
  props: {
    posts: {
      required: true,
      type: Array
    }
  }
};
</script>
