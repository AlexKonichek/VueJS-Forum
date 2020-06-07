<template>
  <span :title="timestamp | friendlyDate">{{ timestamp | difference }}</span>
</template>
<script>
import moment from "moment";
export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    friendlyDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    difference(date) {
      return moment.unix(date).fromNow();
    }
  }
};
</script>
