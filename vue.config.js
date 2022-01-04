module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn', // 正式环境
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