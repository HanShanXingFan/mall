<template>
  <div class="header">
    <!-- topbar Start -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>  
          <a href="javascript:;">服务协议</a>  
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>  
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车</a> 
        </div>
      </div>
    </div>
    <!-- topbar End -->

    <!-- header Start -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item) in phoneList" :key="item.id">
                  <a :href="'/#/product/`${item.id}`'" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{filterAccount(item.price)}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in 6" :key="index">
                  <a href="javascript:;" target="_blank">
                    <div class="pro-img">
                      <img :src="televisionArray[index]" alt="">
                    </div>
                    <div class="pro-name">小米电视</div>
                    <div class="pro-price">3699元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- header End -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'NavHeader',
    data () {
      return {
        televisionArray: ['/imgs/nav-img/nav-3-1.jpg', '/imgs/nav-img/nav-3-2.jpg', '/imgs/nav-img/nav-3-3.png', '/imgs/nav-img/nav-3-4.jpg', '/imgs/nav-img/nav-3-5.jpg', '/imgs/nav-img/nav-3-6.png'],
        username: 'jack',
        phoneList:[]
      }
    },
    mounted() {
      this.getProductList();
    },
    methods: {
      ...mapMutations('Product', ['setProductList']),
      getProductList() { // 产品请求数据
        this.axios.get('/products', {
          params: {
            categoryId: '100012'
          }
        }).then(({status, data: { list }}) => {

          
          if (status) {
            this.$message('小主,服务器开小差了呢');
            return;
          }
          this.phoneList = list;
          this.setProductList(list);
        })
      },
      filterAccount(val) { // 过滤金额显示
        if (!val) return '0.00'
        return `$${val.toFixed(2)}元`
      }
    }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container {
        @include flex();
        // min-width: 1226px;
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          .icon-cart {
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    // header
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();
        // logo 部分
        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6600;
          a {
            display: inline-block;
            width: 110px;
            height: 55px;
            &:before {
              content: '';
              @include bgImg(55px,55px, '/imgs/mi-logo.png', 55px);
              transition: all .2s;
            }
            &:after {
              content: '';
              @include bgImg(55px,55px, '/imgs/mi-home.png', 55px);
            }
            &:hover::before {
              margin-left: -55px;
              transition: all .2s;
            }
          }
        }
        // 菜单menu 部分
        .header-menu {
          display: inline-block;
          padding-left: 209px;
          width: 643px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,.11);
              z-index: 1000;
              background: #fff;
              transition: all .2s;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                &:before {
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before {
                  display: none;
                }
                
              }
            }
          }
        }
        // 搜索框部分
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              @include bgImg(18px,18px, '/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }

  }
</style>