import * as axiosInstance from 'axios';
import { Notify, Dialog } from 'vant';
import settings from '@/settings.js';

const { VUE_APP_BASE_URL } = settings;

const request = axiosInstance.create({
  baseURL: VUE_APP_BASE_URL,
  // 统一设置超时时间
  timeout: 20000,
  // 返回数据类型
  responseType: 'json',
});

/**
 * 接口异常的统一处理 判断响应体中的code进行不同的异常提示：
 * 200为正常情况
 * 401为未登录
 * 1100~1199以Message方式提示
 * 1200~1299以Dialog方式提示
 */
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      // 正确时的处理
      return res;
    }
    if (/^(401)$/.test(res.code)) {
      // 未登录的处理
    } else if (/^(11[0-9]{2})$/.test(res.code)) {
      // Message方式的提示
      Notify({ type: 'danger', message: res.message });
    } else if (/^(12[0-9]{2})$/.test(res.code)) {
      // Dialog方式的提示
      Dialog.alert({ title: '提示', message: res.message });
    }
    return Promise.reject(new Error(res.message || 'Error'));
  },
  (error) => {
    // 请求异常时的处理
    if (error.message) {
      Notify({ type: 'danger', message: error.message });
    }
    return Promise.reject(error);
  }
);
export default request;
