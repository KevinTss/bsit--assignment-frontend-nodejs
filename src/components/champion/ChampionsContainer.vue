<template>
  <div class="champions-container">
    <div class="list">
      <champion-card
        v-for="champ in champions"
        :key="champ.id"
        :id="champ.id"
        :image="champ.icon"
        @click="goToChampionPage"
      />
    </div>
    <div v-if="isMore" class="actions">
      <main-button label="Load more" @click="emitEvent" />
    </div>
  </div>
</template>

<script>
import ChampionCard from './ChampionCard'
import MainButton from '../ui/MainButton'

export default {
  name: 'champions-container',
  components: { ChampionCard, MainButton },
  props: {
    champions: { type: Array, default: () => [] },
    isLoadMoreLoading: { type: Boolean, default: false },
    isMore: { type: Boolean, default: true },
  },
  methods: {
    goToChampionPage(id) {
      this.$router.push({ name: 'champion-page', params: { id } })
    },
    emitEvent() {
      this.$emit('loadMore')
    },
  },
}
</script>

<style lang="scss" scoped>
.champions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .list {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    margin: -5px;

    .champion-card {
      margin: 5px;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
}
</style>
