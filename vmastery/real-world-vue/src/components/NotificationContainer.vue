<template>
  <div class="notification-container">
    <NotificationBar v-for="notif in notifications" :key="notif.id" :notification="notif" />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar
  },
  computed: mapState("notification", ["notifications"])
};
</script>

<style>
.notification-container {
  position: fixed;
  bottom: 0;
}
</style>