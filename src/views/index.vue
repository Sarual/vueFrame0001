<template>
  <div class="gameTopUp">
    <TitleBar></TitleBar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TitleBar from '../components/TitleBar'
export default {
  components: {
    TitleBar
  },
  computed: {
    ...mapState({
      gameList: state => state.gameList
    })
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  .gameTopUp {
    overflow: hidden;
    width: 375px;
    height: 210px;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #ccc;
  }
</style>
