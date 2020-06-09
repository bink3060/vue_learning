<template>
  <div class="field">
     <label v-if="label">{{ label }}</label>
    <input :id="label" :value="value" @input="updateValue" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String
  },
  methods: {
    updateValue(event) {
      // <-- method triggered by input event
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>
</style>