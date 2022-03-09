<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 菜单种类 Start -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <router-link to="javascript:;">手机 电话卡</router-link>
              <div class="children">
                <div
                  class="children-wrap"
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <div class="children-item" v-for="(sub, j) in item" :key="j">
                    <router-link :to="`/product/${sub ? sub.id : ''}`">
                      <img
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">笔记本 平板</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">电视 盒子</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">家电 插线板</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">出行 穿戴</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">智能 路由器</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">电源 配件</router-link>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <router-link to="javascript:;">生活 箱包</router-link>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 菜单种类 End -->

        <!-- 轮播 Stat -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in sliderList" :key="item.id">
            <a :href="`/#/product/${item.id}`">
              <img :src="item.img" alt="" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <!-- 轮播 End -->
      </div>
      <!-- 广告位 Start -->
      <div class="ads-box">
        <router-link
          class="ads-container"
          to=""
          v-for="item in adsList"
          :key="item.id"
        >
          <img v-lazy="item.img" alt="" />
        </router-link>
      </div>
      <!-- 广告位 End -->
      <div class="banner">
        <router-link class="banner-container" to="/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </router-link>
      </div>
      <!-- 产品列表 Start -->
      <div class="product-box">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="javascript:;">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span
                  class="new-product"
                  :class="item.status === 1 ? 'new-pro' : 'kill-pro'"
                  >{{ item.status === 1 ? "新品" : "上市" }}</span
                >
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h2>{{ item.name }}</h2>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ filterMoney(item.price) }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品列表 End -->
    </div>
    <!-- 服务组件 -->
    <serivice-bar></serivice-bar>
    <modal
      title="提示"
      sureText="添加商品"
      btnType="1"
      modalType="middle"
      :showModal.sync="showModal"
      @submit="$router.push('/cart');"
      @cancel="showModal = false"
    >
      <template #body>
        <p>商品添加成功!</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { Digit } from "../util";
import { mapState } from "vuex";
import SeriviceBar from "../components/SeriviceBar.vue";
import { swiper, swiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Modal from "../components/modal.vue";
export default {
  components: {
    SeriviceBar,
    swiper,
    swiperSlide,
    Modal,
  },
  name: "Index",
  data() {
    return {
      showModal: false,
      swiperOption: {
        autoplay: true, // 是否自动播放
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },

        observer: true,
        // observeParents: true,
      },
      sliderList: [
        // 轮播数据
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "448",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        // 菜单内容详细
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米C8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 31,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 60,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 61,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
          {
            id: 68,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 69,
            img: "/imgs/item-box-2.png",
            name: "小米C8青春版",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
    };
  },
  computed: {
    ...mapState("Product", {
      productList: (state) => {
        return state.productList;
      },
    }),
  },
  methods: {
    init() {
      // 产品列表
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 8,
          },
        })
        .then(({ status, data: { list } }) => {
          if (status) {
            this.$message("小主,请稍后再试呢");
            return;
          }
          this.phoneList = this.composeFunc(
            this.judgeAryLength,
            this.changeArray
          )(list, 4);
        });
    },
    addCart(productId) {
      this.showModal = true;
      return;
      // 添加购物车
      this.axios
        .post("carts", {
          productId,
          selected: true,
        })
        .then((res) => {})
        .catch((err) => {
          console.log("err: ", err);
          // this.showModal = true;
        });
    },
    changeArray(ary, n) {
      // 一维数组转换为二维数组
      return ary.reduce((prev, next, index) => {
        let aryLength = Math.floor(index / n);
        if (!prev[aryLength]) {
          prev[aryLength] = [];
        }
        prev[aryLength].push(next);
        return prev;
      }, []);
    },
    judgeAryLength(ary) {
      // 判断数组长度
      if (ary.length > 2) {
        ary = ary.slice(0, 2);
      }
      return ary;
    },
    composeFunc(...fns) {
      // 管道函数
      return function (...args) {
        let lastFunc = fns.pop();
        return fns.reduceRight((prev, next) => {
          return next(prev);
        }, lastFunc(...args));
      };
    },
    filterMoney(val) {
      return Digit(val);
    },
    receive() {

    },
    cancel() {

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.productList.length
        ? (this.phoneList = this.composeFunc(
            this.judgeAryLength,
            this.changeArray
          )(this.productList, 4))
        : this.init();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      box-sizing: border-box;
      width: 264px;
      height: 451px;
      padding: 26px 0;
      background-color: rgba(0, 0, 0, 0.21);
      z-index: 9;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &::after {
              content: "";
              position: absolute;
              right: 30px;
              top: 17.5px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            .children-wrap {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 75px;
              z-index: 10;
              .children-item {
                height: 75px;
                line-height: 75px;
                flex: 1;
                img {
                  margin-right: 23px;
                  width: 35px;
                  height: 42px;
                  vertical-align: middle;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                a:after {
                  content: "";
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev,
      .swiper-button-next {
        padding: 20px;
      }
      .swiper-button-prev {
        margin-left: 250px;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    .ads-container {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      margin-bottom: 20px;
      height: 21px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          margin-bottom: 14px;
          text-align: center;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            background-color: $colorG;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 175px;
                width: 66%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &::after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: "";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>