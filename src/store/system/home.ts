import { defineStore } from 'pinia';
import store from '@/store';
export const useChat = defineStore({
  id: 'chat',
  state: () => ({
    msgVisible: false
  }),
  getters: {
    getMsgVisible(): boolean {
      return this.msgVisible;
    }
  },
  actions: {
    openMsgVisible() {
      this.msgVisible = true;
    },
    closeMsgVisible() {
      this.msgVisible = false;
    }
  }
});
export function useChatStore() {
  return useChat(store);
}
