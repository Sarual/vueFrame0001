<template>
  <div>
    <span>123456</span>
    <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    <div class="name">{{token}}</div>
    <mt-range v-model="rangeValue"></mt-range>
    <mt-swipe :auto="0" class="mySwipe">
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/1.png"></img>
      </mt-swipe-item>
    </mt-swipe>
    <mt-button class="login-button" type="primary" @click="login()">登录</mt-button>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Range } from 'mint-ui'
import cookie from '@/util/cookie'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.token
    })
  },
  data() {
    return {
      rangeValue: 100,
      UserInfo: ''
    }
  },
  components: {
    // [Cell.name]: Cell
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Range.name]: Range
  },
  methods: {
    login() {
      this.$store.dispatch('setToken', 'aaa')
      console.log(this.token)
      const paramsObj = { name: '123', age: '456' }
      this.api.floorPage(paramsObj).then((res) => {
        debugger
        if (res.data.code === 200) {
          cookie.set('accessToken', res.data.token, { path: '/' })
          window.localStorage.user = JSON.stringify(paramsObj)
          this.$store.dispatch('setUserInfo', paramsObj)
          // console.log(this.$store)
          // this.$router.push({name: 'Home'})
        }
      })
    }
  }
}
</script>
<style lang="scss">
  /* span {
    font-size: 100px;
  } */
  // .name {
  //   width: 375px;
  //   height: 500px;
  //   background: #ccc;
  // }
  .mySwipe {
    height: 320px;
  }
  img {
    width: 375px;
    height: 400px;
    display: block;
  }
</style>
