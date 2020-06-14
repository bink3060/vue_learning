<template>
  <div @dragover.prevent @dragenter.prevent @drop.stop="onDrop">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(e) {
      const transferData = JSON.parse(e.dataTransfer.getData("payload"));

      this.$emit("drop", transferData);
    }
  }
};
</script>

<style lang="css" scoped>
</style>