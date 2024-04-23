import { defineStore } from 'pinia';
import store from '@/store';

export const useCommon = defineStore({
  id: 'common',
  state: () => ({
    loading: false,
    tipsVisible: false
  }),
  getters: {},
  actions: {}
});
export function useChatStore() {
  return useCommon(store);
}
