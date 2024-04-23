import { get, post } from '@/api/axios';

/**
 * 产品与服务二级页api接口
 */
export const getSecondary = (keyword: string) => {
  return get('/knowledge/api/document/group', { keyword });
};
export const getRecommand = (id: number) => get('/mission/api/charge/goods/info/' + id);
/**
 * 服务咨询保存接口
 */
export const saveTheJob = (params: any) => {
  return post('/mission/api/counsel', params);
};
// 首页内容
export const getDocument = (keyword: any) => get('/knowledge/api/document', { keyword });
/**
 * 企业看板页面接口
 */
export const administInfo = (params: any) =>
  get('/knowledge/api/portal/' + `${params.category}/${params.code}`);
