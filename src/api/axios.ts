import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';
import { IResData } from '@/modules';
import { useUserStore } from '@/store/system/user';
import { logout } from '@/api/system/login';
import { slAwait } from '@/utils/util';
const { VITE_BASE_URL, VITE_TENANT_CODE } = import.meta.env;

// axios基础配置
const service = axios.create({
  timeout: 30 * 1000,
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 请求发送 拦截处理
const requestCallBack = (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    'Access-Token': localStorage.getItem('accessToken'),
    'Refresh-Token': localStorage.getItem('refreshToken')
  };
  return config;
};

// 请求返回 拦截处理
const responseCallBack = (response: AxiosResponse) => {
  const { data = {}, config = { params: {}, method: '' }, headers } = response;
  if (data.code === 200) {
    if (headers['access-token']) {
      useUserStore().accessToken = headers['access-token'] || '';
      localStorage.setItem('accessToken', headers['access-token'] || '');
    }
    if (headers['refresh-token']) {
      useUserStore().refreshToken = headers['access-token'] || '';
      localStorage.setItem('refreshToken', headers['refresh-token'] || '');
    }
    return data;
  } else {
    return Promise.reject(data);
  }
};

// 发送请求
service.interceptors.request.use(requestCallBack as any, (error: any) => {
  Promise.reject(error);
});

// 返回结果
service.interceptors.response.use(responseCallBack, async (error: any) => {
  const { status, responseText } = error.request;
  const _responseText = JSON.parse(responseText);
  console.log('error.request', _responseText);
  if (status === 401 || status === 411) {
    const useStore = useUserStore();
    message.error('登录失效, 请重新登录！');
    useStore.handleLogout();
    return;
  } else if (status === 500) {
    message.error('系统异常！');
    return;
  }
  return Promise.reject(error);
});
const get = (url: string, params?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      params,
      method: 'get'
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const post = (url: string, data?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      data,
      method: 'post'
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const put = (url: string, data?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      data,
      method: 'put'
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const del = (url: string, data?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      data,
      method: 'delete'
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postFormData = (url: string, data?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      data,
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const putFormData = (url: string, data?: any): Promise<IResData> => {
  return new Promise((resolve, reject) => {
    service({
      url,
      data,
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export { service, get, post, put, del, postFormData, putFormData };
