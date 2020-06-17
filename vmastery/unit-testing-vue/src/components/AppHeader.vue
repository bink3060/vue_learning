<template>
  <div>
    <button data-testid="btn-logout" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style>
</style>