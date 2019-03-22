<template lang="pug">
div
  slot
</template>

<script>
import { mapGetters } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  props: ['game', 'game_type'],
  data() {
    return {
      isWsConnected: null,
      num: null,
      isClose: null
    }
  },

  created() {
    console.log('created')
    this.$store.dispatch('init_game', { game_type: this.game_type })
  },

  mounted() {
    this.num = this.game.num
    this.isClose = this.game.isClose
    this.isWsConnected = this.isConnected

    this.$store.dispatch('setOrder', { game_num: this.game.num })
  },

  beforeDestroy() {
    console.log('beforeDestroy')
    // NOTE: 離開遊戲時會清空盤面已選取號碼
    this.$store.dispatch('clearChoosePreOrder')
    this.$store.dispatch('clearPreOrder')
    this.$store.dispatch('clearOrderList')
  },

  computed: {
    ...mapGetters(['isConnected'])
  },

  watch: {
    game() {
      // NOTE: 關盤時清盤清車清賠率邏輯。
      if (this.game.isClose && this.isClose !== this.game.isClose) {
        this.isClose = this.game.isClose

        this.$store.dispatch('cleanAll', { game_type: this.game_type, game_num: this.num })
      }

      // NOTE: 新期數時更新賠率，設定下注期數。
      if (!this.game.isClose && this.isClose !== this.game.isClose && !isEmpty(this.game.num)) {
        this.num = this.game.num

        this.isClose = false

        this.$store.dispatch('cleanAll', { game_num: this.game.num })

        this.$store.dispatch('fetchOdds', { game_type: this.game_type })
      }
    },

    isConnected(state) {
      // NOTE: gusher 斷線時，清空狀態
      if (!state && state !== this.isWsConnected) {
        this.isWsConnected = state

        return
      }

      // NOTE: gusher 連上線時，設定狀態
      if (state && state !== this.isWsConnected) {
        this.isWsConnected = state
        this.$store.dispatch('init_game', { game_type })
      }
    }
  }
}
</script>
