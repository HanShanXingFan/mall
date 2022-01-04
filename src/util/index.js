

// Storage 封装
//  这里的sessionStorage前面加上window是为了明确上下文,以防在编译项目的时候报错,eslint检查报错
//  操作storage的时候其实可以操作一个key ,在一个key内分模块,这是一种操作思路,也可以操作多个,方便读写
const STORAGE_KEY = 'mall';
export let utilStorage = {
  setItem(key, value, moduleName) {
    if (moduleName) { // 判断有没有模块名称
        let val = this.getItem(moduleName);
        val[key] = value;
        this.setItem(moduleName, val);
    } else {
        let val = this.getStorage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY), JSON.stringify(val);
    }
  },
  getItem(key, module_name) { // 获取某一个模块下面的属性 =>比如getItem(userName, user) => user下面的userName   userName相当于形参的key, user相当于形参的module_Name
    if (module_name) {
        let val = this.getItem(module_name); // 返回结果比如: { userName: jack, age: 25 }
        if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  getStorage() { // 获取storage信息如{ user: { userName: jack, age: 25 }},这里操作storage的时候其实可以操作一个key ,在一个key内分模块 整个结构如mall: { user: { userName: jack, age: 25 }}
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear (key, modeleName) {
    let val = this.getStorage();
    if (modeleName) {
        if(!val[modeleName]) return
        delete val[modeleName][key]
    } else {
        delete val(key);
    }
    window.sessionStorage.setItem(STORAGE_KEY), JSON.stringify(val); // 删除后重新存入
  }
}