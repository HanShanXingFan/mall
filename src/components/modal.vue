<template>
<transition name="slide">
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {    
  name: "modal",
  data() {
      return {
          show: true
      }
  },
  props: {
    //  弹框类型: 小small 中middle 大large 表单form
    modalType: {
      type: String,
      default: "form",
    },
    // 弹框标题
    title: String,
    // 按钮类型
    btnType: String,
    sureText: {
      type: String,
      default: "确定",
    },
    showModal:Boolean
  },
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/modal.scss";
</style>