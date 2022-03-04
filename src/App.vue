<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
  // import  { utilStorage } from './util'
  export default {
    name: 'app',
    components: {

    },
    data() {
      return {
        res: {}
      }
    },
    mounted() {
      // utilStorage.setItem('a', 1);
      // utilStorage.setItem('a', {b: 'b'});
      // utilStorage.setItem('a', {b: 'b'}, 'user');
      // utilStorage.setItem('c', {cname: 'testC'});
      // utilStorage.clear('a');
      // 本地加载请求静态json文件形式,修改的地方有两处,一处是baseURL,一处是请求的的url
      // this.axios.get('/mock/user/login.json').then((res) => { // public是根目录,不要带public,直接'/'就可以了
      //   this.res = res;
      // })
      // 通过easy-mock平台实现数据mock,修改的地方只有一处,就是baseURL,请求的url正常写就好
      // this.axios.get('/user/login').then((res) => { // public是根目录,不要带public,直接'/'就可以了
      //   this.res = res;
      // })
      //  本地集成mock.js -没有发送真正的请求,在代码层面就拦截了
      // this.axios.get('/user/login').then((res) => { // public是根目录,不要带public,直接'/'就可以了
      //   this.res = res;
      // })
    }
  }
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
