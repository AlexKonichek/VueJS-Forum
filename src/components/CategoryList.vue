<template>
  <div>
    <CategoryListItem
      v-for="(category, index) in categories"
      :category="category"
      :key="index"
    />
  </div>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem";
export default {
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped></style>
