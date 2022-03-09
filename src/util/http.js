import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import router from '../router'
// import env from '../env'


const mock = true; // mockjs mock的开关,接口联调完成之后就不需要mock了,在开发阶段需要打开这个开关为true
if (mock) {
    require('../mock/api')
}


let request = axios.create({
    // baseURL: process.env.VUE_APP_URL_ENV,
    // baseURL: 'http://mall-pre.springboot.cn',
    baseURL: '/api',
    // baseURL: env.baseURL,
    timeout: 8000
});
// console.log(process.env.NODE_ENV, env.baseURL, process.env.VUE_APP_URL_ENV);
request.interceptors.request.use(config => {
    // if (
    //     config.method === "post" ||
    //     config.method === "put" ||
    //     config.method === "delete"
    //   ) {
    //     // 序列化
    //     config.data = qs.stringify(config.data);
    //   }
      return config;
}, error  => {
    return Promise.reject(error.data.error.message);
})

request.interceptors.response.use(config => {

    let { data: { status, msg, data: realData } } = config;
    if (status == 0) { // 返回值统一处理
        return config.data // config.data 是axios封装的报文数据, 内部的data才是 接口返回的数据没有什么status和code
    } else if (status == 10) { // 未登录状态拦截
        window.location.href = '/#/login'; // 这地方在页面可以用this.router进行跳转,但不是在页面,所以用location 但是也可以把路由进入进来,使用router进行跳转
        // router.push('/login');
    } else { // 报错统一处理
        Message({
            showClose: true,
            message: `${msg}`,
            type: 'error'
        })
        return Promise.reject(config.data)
    }
}, error => {
    return error.response && requestErrorHander(error.response.status);
})
function requestErrorHander(code) {
    let codeMsgObj = {
        400: '请求错误',
        401: '未授权,请重新登录,2秒后跳转至登录页面',
        403: '拒绝访问',
        404: '请求接口地址出错',
        408: '请求超时',
        500: '服务器内部错误',
        501: '服务未实现'
    }
    Message({
        showClose: true,
        message: codeMsgObj[code],
        type: 'error'
    })
    return Promise.reject(`${codeMsgObj[code]}`)
}

export default request;