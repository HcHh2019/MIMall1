/**
 * storage封装
 * vue/types/umd.d.ts
 */
const STORAGE_KEY = 'mall';

export default {
  // 存储值
  setItem(key,value,module_name) {
    if(module_name) {
      let val = this.getStorage(module_name);
      val[key] = value;
      this.setItem(module_name,val);
    }else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
  },
  // 获取某一个模块下面属性user下面的userName
  getItem(key,module_name) {
    if (module_name) {
      let val = this.getStorage(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取整个数据值
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  // 清除值
  clear(key,module_name) {
    let val = this.getStorage();
    if (module_name){
      if (!val[module_name]) return;
      delete val[module_name][key];
    } else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
  }
}