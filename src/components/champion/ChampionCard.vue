<template>
  <div class="champion-card" @click="onChampionClicked">
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: 'champion-card',
  props: {
    id: { type: String, required: true },
    image: { type: String, required: true },
  },
  methods: {
    onChampionClicked() {
      this.$emit('click', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.champion-card {
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
