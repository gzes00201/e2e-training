<template lang="pug">
main.main
  side-bar
  .content
    .tabs(:class="{ 'has-less': items.length <= 8, 'has-more': items.length >= 14}")
      .btn-tab(
        v-for="(type, index) in items"
        :class="{ 'is-active': isActive(type), 'is-counting': game.isCounting(type), 'is-closed': game.isClose(type) }"
        @click="handleTabChange(type)")
        span.btn-tabBox
          span.txtEllipsis.hint--bottom(:aria-label="getName(type)") {{getName(type)}}
          button.btn-tabClose(@click.stop="handleTabClose(type, index)")
    GameStatus(
      :game="getGameInfo()"
      :game_type="currentView"
      :key="currentView")
      component(
        :is="currentView"
        :gameType="currentView"
        :game="getGameInfo()")
</template>

<script>
import { union, first, difference, intersection } from 'lodash'
import { scrollToTop } from 'utils/scrollBar'
import AlertBox from 'views/packages/alert-box'
import SideBar from 'views/components/game/SideBar'
import Game from 'business/game'
import { countdown } from 'utils/helper'
import { get } from 'lodash'

import GameStatus from './GameStatus'

// import GameStatus from 'views/components/common/HOC/GameStatus.js'

const AHQ3 = () => import('views/components/game/AHQ3/App')
const BB3D = () => import('views/components/game/BB3D/App')
const BBKN = () => import('views/components/game/BBKN/App')
const BBPK = () => import('views/components/game/BBPK/App')
const BBQK = () => import('views/components/game/BBQK/App')
const BJ3D = () => import('views/components/game/BJ3D/App')
const BJKN = () => import('views/components/game/BJKN/App')
const BJPK = () => import('views/components/game/BJPK/App')
const BBDP = () => import('views/components/game/BBDP/App')
const CQWC = () => import('views/components/game/CQWC/App')
const CAKN = () => import('views/components/game/CAKN/App')
const CQSC = () => import('views/components/game/CQSC/App')
const GDE5 = () => import('views/components/game/GDE5/App')
const JSQ3 = () => import('views/components/game/JSQ3/App')
const JXE5 = () => import('views/components/game/JXE5/App')
const LNE5 = () => import('views/components/game/LNE5/App')
const PL3D = () => import('views/components/game/PL3D/App')
const RDPK = () => import('views/components/game/RDPK/App')
const SDE5 = () => import('views/components/game/SDE5/App')
const SH3D = () => import('views/components/game/SH3D/App')
const TJSC = () => import('views/components/game/TJSC/App')
const XJSC = () => import('views/components/game/XJSC/App')
const LDDR = () => import('views/components/game/LDDR/App')
const LDRS = () => import('views/components/game/LDRS/App')
const BBGE = () => import('views/components/game/BBGE/App')
const LKPA = () => import('views/components/game/LKPA/App')
const BBAD = () => import('views/components/game/BBAD/App')
const BBLM = () => import('views/components/game/BBLM/App')
const BBHL = () => import('views/components/game/BBHL/App')
const TJSF = () => import('views/components/game/TJSF/App')
const GXSF = () => import('views/components/game/GXSF/App')
const CQSF = () => import('views/components/game/CQSF/App')

const BBPT = () => import('views/components/game/BBPT/App')
const LK28 = () => import('views/components/game/LK28/App')

const BBQL = () => import('views/components/game/BBQL/App')
const BBLT = () => import('views/components/game/BBLT/App')
const BQ3D = () => import('views/components/game/BQ3D/App')

export default {
  name: 'Main',

  components: {
    GameStatus,
    'side-bar': SideBar,
    AHQ3,
    BB3D,
    BBKN,
    BBPK,
    BBQK,
    BJ3D,
    BJKN,
    BJPK,
    CAKN,
    CQSC,
    GDE5,
    JSQ3,
    JXE5,
    LNE5,
    PL3D,
    RDPK,
    SDE5,
    SH3D,
    TJSC,
    XJSC,
    LDDR,
    LDRS,
    BBGE,
    LKPA,
    BBAD,
    BBLM,
    BBHL,
    TJSF,
    GXSF,
    CQSF,
    CQWC,
    BBDP,
    LK28,
    BBPT,
    BBQL,
    BBLT,
    BQ3D
  },

  data() {
    return {
      items: [],
      currentView: '',
      now: this.$clock.unixTS()
    }
  },

  created() {
    this.game = new Game(this.$store, this.$clock)
    this.timer = setInterval(() => {
      this.$forceUpdate()
    }, 1000)
  },

  mounted() {
    const { types } = this.$route.query

    if (!types) {
      const localStorage_Game = JSON.parse(localStorage.getItem('Game') || '{}')
      const localStorage_Game_items = get(localStorage_Game, 'items')
      const localStorage_Game_currentView = get(localStorage_Game, 'currentView')

      if (localStorage_Game && localStorage_Game_items && localStorage_Game_currentView) {
        // NOTE: 從 localStorage Game 取 currentView、items
        this.items = localStorage_Game_items

        this.currentView = localStorage_Game_currentView
      } else {
        // NOTE: 從 support game 取一個
        const [type] = this.$store.getters.getALL

        if (type) {
          this.items = [type]
          this.currentView = type
        }
      }

      return
    }

    const items = types.split(',')
    const support = this.getSupport(items)

    if (support.length === 0) {
      this.$router.replace('/lobby')
      return
    }

    this.items = support
    this.currentView = first(items)
    this.$router.replace('/game/main')

    // NOTE: 設定 localStorage Game 的 currentView、items
    localStorage.setItem('Game', JSON.stringify({ items: this.items, currentView: this.currentView }))
  },

  beforeDestroy() {
    clearInterval(this.timer)
    scrollToTop(0)
  },

  methods: {
    handleTabChange(type) {
      this.currentView = type
    },

    handleTabClose(type, index) {
      const leng = this.items.length

      if (leng < 2) {
        AlertBox.open({ msg: [{ key: 'common.close_error' }] })
        return
      }

      if (this.currentView === type) {
        const next = index === leng - 1 ? leng - 2 : index + 1

        this.currentView = this.items[next]
      }

      this.items = this.items.filter(o => o !== type)

    },

    isActive(type) {
      return this.currentView === type
    },

    getNum(type) {
      if (!this.game.isClose(type)) {
        return this.game.getNum(type, 'current')
      }

      if (this.game.hasNext(type)) {
        return this.game.getNum(type, 'next')
      }

      return ''
    },

    getTime(type) {
      if (!type) {
        return ''
      }

      let seconds = this.game.getCountDown(type)


      if (this.game.isClose(type) && this.game.hasNext(type)) {
        seconds = this.game.getNextCountDown(type)
      }

      const { h, m, s } = countdown(seconds)

      return `${h}:${m}:${s}`
    },

    getSupport(items) {
      const support = this.$store.getters.getALL

      return intersection(support, items)
    },

    getName(type) {
      if (type) {
        return this.$t(`game.name.${type}`)
      }
      return type
    },

    getGameInfo() {
      return {
        name: this.getName(this.currentView),
        num: this.getNum(this.currentView),
        time: this.getTime(this.currentView),
        isCounting: this.game.isCounting(this.currentView),
        isClose: this.game.isClose(this.currentView) || this.game.getCountDown(this.currentView) === 0
      }
    }
  },

  watch: {
    $route() {
      const { types } = this.$route.query

      if (types) {
        const items = types.split(',')
        // const support = this.getSupport(items)
        const support = items

        if (support.length > 0) {
          const diff = difference(this.items, support)

          if (diff.length) {
            this.items = union(this.items, items)
            const nextView = first(items)

            if (this.currentView !== nextView) {
              this.currentView = nextView
            }
          }
        } else {
          this.$router.replace('/lobby')
          return
        }
      }

      this.$router.replace('/game/main')
    },

    currentView(gameType) {
      const oldGameType = this.$store.getters.getPathLocation

      // NOTE: 清除上個遊戲的賠率
      this.$store.dispatch('cleanOdds', oldGameType)

      this.$store.dispatch('setPathLocation', gameType)
      localStorage.setItem('Game', JSON.stringify({ items: this.items, currentView: gameType }))
    },

    items(items) {
      localStorage.setItem('Game', JSON.stringify({ items: items, currentView: this.currentView }))
    }
  }
}
</script>
