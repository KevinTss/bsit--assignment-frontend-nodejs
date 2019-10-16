<template>
  <button class="main-button" :disabled="isDisabled" @click.prevent="onClick">
    <span class="label txt-3">
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    label: { type: String },
    isDisabled: { type: Boolean, default: false },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
// @import "../../assets/style/main";

.main-button {
  padding: 10px 20px;
  // border: 1px solid map-get($colors, "background-dark");
  border-radius: 4px;
  // background-color: map-get($colors, "background-dark");
  cursor: pointer;

  .label {
    // color: map-get($colors, "primary");
  }

  &:disabled {
    cursor: not-allowed;

    .label {
      // color: map-get($colors, "text");
    }
  }
}
</style>
