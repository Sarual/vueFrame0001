<template>
  <div id="app">
    <!-- {{token}} -->
    <router-view />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.token
    })
  }
}
</script>
<style lang="scss">
@import './assets/stylesheets/reset.css';
body {
  background-color: #f8f8f8;
  overflow: hidden;
}
// .van-cell__title {
//   .van-icon {
//     font-size: 18px;
//     color: red;
//   }
// }
// .name {
//   span:nth-of-type(1) {
//     color: red;
//     font-size: 20px;
//   }
//   span:nth-of-type(2) {
//     color: red;
//     font-size: 12px;
//   }
// }
</style>
