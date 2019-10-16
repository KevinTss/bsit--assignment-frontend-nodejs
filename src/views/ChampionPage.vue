<template>
  <div class="champion-page">
    <div v-if="currentChampion" class="wrapper">
      <div class="head">
        <img :src="currentChampion.icon" />
        <div>
          <h2>{{ currentChampion.name }}</h2>
          <h3>{{ currentChampion.title }}</h3>
          <p>{{ currentChampion.description }}</p>
        </div>
      </div>

      <div class="stats">
        <div class="stat">
          <p class="title">Health:</p>
          <p>{{ `${stats.hp} ${perLevelText(stats.hpperlevel)}` }}</p>
        </div>
        <div class="stat">
          <p class="title">Health Regen:</p>
          <p>{{ `${stats.hpregen} ${perLevelText(stats.hpregenperlevel)}` }}</p>
        </div>
        <div class="stat">
          <p class="title">Attack Damage:</p>
          <p>
            {{
              `${stats.attackdamage} ${perLevelText(
                stats.attackdamageperlevel,
              )}`
            }}
          </p>
        </div>
        <div class="stat">
          <p class="title">Armor:</p>
          <p>{{ `${stats.armor} ${perLevelText(stats.armorperlevel)}` }}</p>
        </div>
        <div class="stat">
          <p class="title">Attack Speed:</p>
          <p>
            {{
              `${stats.attackspeedoffset} ${perLevelText(
                stats.attackspeedperlevel,
              )}`
            }}
          </p>
        </div>
      </div>

      <base-button label="Back" @click="goToHomePage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseButton from '../components/ui/MainButton'

export default {
  name: 'champion-page',
  components: { BaseButton },
  computed: {
    ...mapGetters(['championById']),
    championId() {
      return this.$route.params.id
    },
    currentChampion() {
      return this.championById(this.championId)
    },
    stats() {
      return this.currentChampion.stats || {}
    },
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: 'home' })
    },
    perLevelText(value) {
      return `(+${value} pr level)`
    },
  },
  created() {
    if (!this.currentChampion) {
      this.$router.push({ name: 'home' })
      return
    }
  },
}
</script>

<style lang="scss" scoped>
.champion-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;

  .wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: white;
    max-width: 500px;
    margin-top: 100px;

    .head {
      display: flex;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      div {
        display: flex;
        flex-direction: column;
        padding-left: 20px;

        h2 {
          font-size: 22px;
        }

        h3 {
          font-size: 18px;
          margin-top: 5px;
        }

        p {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }

    .stats {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 50px;
      padding-top: 50px;
      margin-bottom: 100px;
      border-top: 1px solid white;

      .stat {
        display: flex;
        flex-direction: column;
        width: 50%;

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        .title {
          font-weight: bold;
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
