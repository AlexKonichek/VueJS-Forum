<template>
  <div class="col-full">
    <h1>Not Found</h1>
    <p>
      Ooops, we couldn't find what you are looking for... Why don't you go to
      <router-link :to="{ name: 'Home' }">
        homepage
      </router-link>
      instead?
    </p>
  </div>
</template>
<script>
export default {
  created() {
    this.$emit("readyData");
  }
};
</script>
<style scoped>
h1 {
  font-size: 70px;
}
p {
  font-size: 30px;
  font-weight: 100;
}
div {
  text-align: center;
}
</style>
