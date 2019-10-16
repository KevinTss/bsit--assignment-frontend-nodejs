<template>
  <div class="home-page">
    <div class="wrapper">
      <h1>Choose your champion</h1>

      <champions-container
        :champions="championsList"
        :is-load-more-loading="isChampionsLoading"
        :is-more="isMorePage"
        @loadMore="loadMoreChampions"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ChampionsContainer from '../components/champion/ChampionsContainer'

export default {
  name: 'home-page',
  components: {
    ChampionsContainer,
  },
  data() {
    return {
      error: '',
    }
  },
  computed: {
    ...mapGetters([
      'championsList',
      'isChampionsLoading',
      'hasChampionsError',
      'isMorePage',
      'lastPageLoaded',
    ]),
  },
  methods: {
    ...mapActions(['searchChampions']),
    loadMoreChampions() {
      this.isMorePage && this.searchChampions(this.lastPageLoaded + 1)
    },
  },
  created() {
    !this.championsList.length && this.searchChampions()
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://euw.leagueoflegends.com/profiles/lol2_profile/themes/custom/lolt/img/lol_news_new_bg.jpg');
  background-size: 100% 100%;
  background-position: center;

  .wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
    margin: 200px 0;

    h1 {
      color: white;
      font-size: 34px;
      font-weight: 700;
      margin-bottom: 25px;
    }
  }
}
</style>
