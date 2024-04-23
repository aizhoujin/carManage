import { get, post, put, del, postFormData } from '@/api/axios';

/**
 * 注册验证手机号是否存在
 */
export const checkUser = (params: any) => {
  return get('/authority/api/user/verifyUser', params);
};
/**
 * 确认登陆
 */
export const getSecondLogin = (params: any) => {
  return post('/authority/api/auth/reconfirm', params);
};

/**
 * 登陆
 */
export const login = (params: any) => {
  return post('/authority/api/auth/login', params);
};

/**
 * 退出登陆
 */
export const logout = (params: any) => {
  return get('/authority/api/auth/logout', params);
};

// 获取当前登录用户的信息
export const getAuthorityInfo = () => {
  return get('/authority/api/auth/user');
};

// 获取当前项目的信息
export const getProjectList = () => {
  return get('/authority/api/workspace/menu');
};

export const getUserInfo = () => {
  return get('/getUserInfo');
};

// 获取当前用户的个人信息
export const getUserInfoDetail = () => {
  return get('/authority/api/user/info');
};
// 注册
export const submitRegisterForm = (params: any) => {
  return post('/authority/api/user/submit', params);
};
