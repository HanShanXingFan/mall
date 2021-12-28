<template>
  <div>
      <order-header></order-header>
      <router-view></router-view>
      <order-footer></order-footer>
  </div>
</template>

<script>
import OrderFooter from '../components/OrderFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
export default {
    name: 'Order',
  components: { OrderHeader, OrderFooter },

}
</script>

<style>

</style>