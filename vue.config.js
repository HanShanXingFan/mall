module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.fastmock.site/mock/04b99ece344cb2126406f4f0e2f25d1c', // 正式环境
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      
      // '/uat':{
      //   target:'http://uat-mall-pre.springboot.cn', // uat环境
      //   changeOrigin:true,
      //   pathRewrite:{
      //     '/uat':''
      //   }
      // },
      // '/test':{
      //   target:'http://test-mall-pre.springboot.cn', // 测试环境
      //   changeOrigin:true,
      //   pathRewrite:{
      //     '/test':''
      //   }
      // }
    }
  },
  productionSourceMap:true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}