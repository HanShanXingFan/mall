<template>
  <div>
      <order-header></order-header>
      cart购物车
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'

export default {
  components: { NavFooter, OrderHeader },
    name: 'Cart'
}
</script>

<style>

</style>