import { defineStore } from 'pinia';
import store from '@/store';
interface ITabs {
  path: string;
  name: string;
  title: string;
  fullPath: string;
  meta?: any;
}
export const useKeepTab = defineStore({
  id: 'keepTab',
  state: () => ({
    activeTabKey: '',
    activeTab: {} as ITabs,
    tabList: [] as ITabs[]
  }),
  getters: {},
  actions: {
    pushTabList(tab: ITabs) {
      this.activeTabKey = tab.fullPath;
      this.activeTab = tab;
      if (this.tabList.findIndex((item) => item.fullPath === tab.fullPath) > -1) return;
      this.tabList.push(tab);
    },
    setTabList(list: ITabs[]) {
      this.tabList = list;
    },
    delTab(tab: ITabs) {
      const index: number = this.tabList.findIndex((item) => item.fullPath === tab.fullPath);
      if (index == -1) return;
      this.tabList.splice(index, 1);
    },
    delOtherTab(tab: string) {
      this.tabList = this.tabList.filter((item) => item.fullPath.includes(tab));
    },
    delCurrentTab() {
      this.delTab(this.activeTab);
    }
  }
});
export function useChatStore() {
  return useKeepTab(store);
}
