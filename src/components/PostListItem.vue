<template>
  <div v-if="post && user" class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>
      <p class="desktop-only text-small">{{ userThreadsCount }} threads</p>
      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
    </div>
    <div class="post-content">
      <div>
        {{ post.text }}
      </div>
    </div>

    <div class="post-date text-faded">
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user() {
      return this.$store.state.users[this.post.userId];
    },
    userPostsCount() {
      return this.$store.getters.userPostsCount(this.post.userId);
    },
    userThreadsCount() {
      return this.$store.getters.userThreadsCount(this.post.userId);
    }
  }
};
</script>
