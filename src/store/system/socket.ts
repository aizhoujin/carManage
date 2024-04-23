import { defineStore } from 'pinia';
import store from '@/store';
import io from 'socket.io-client';
import { useUserStore } from './user';
// 第一个参数是应用程序中 store 的唯一 id
export const useSocket = defineStore('socket', {
  state: () => ({
    // 连接状态
    isConnected: false,

    // socket 实例
    socket: null as any,

    // 掉线通知弹窗
    LoginElsewhere: false
  }),
  actions: {
    doConnect() {
      this.isConnected = true;
    },
    // 发送消息
    sendMessage(msgEvent: string, msgContent: string) {
      this.socket.emit(msgEvent, msgContent);
    },
    // 关闭socket
    disConnect() {
      this.isConnected = false;
      this.socket && this.socket.close();
      this.socket = null;
    },

    // 打开socket
    openSocket(way = 'full_debug') {
      const query = {
        userId: localStorage.getItem('userId'),
        'Access-Token': localStorage.getItem('accessToken'),
        'Refresh-Token': localStorage.getItem('refreshToken'),
        way
      };
      this.socket = io('/', {
        query,
        transports: ['websocket']
      });
      this.handlePushMsg();
    },
    handlePushMsg() {
      if (!this.socket) return;
      this.socket.on('connect', (data: any) => {
        if (data === 'Connection succeeded') {
          console.log('socket连接成功! ');
          this.doConnect();
        }
        if (data === 'authentication failed') {
          console.log('登录超时,请重新登录! ');
          useUserStore().handleLogout();
          this.disConnect();
        } else if (data === 'connection failed') {
          console.log('socket连接失败');
          this.isConnected = false;
        }
      });
      this.socket.on('abnormal_login', (msg: any) => {
        if (msg === 'Abnormal_Login') {
          this.LoginElsewhere = true;
          useUserStore().handleLogout();
          this.disConnect();
        }
      });
      this.socket.on('logout', () => {
        useUserStore().handleLogout();
        this.disConnect();
      });
    }
  }
});
export function useChatStore() {
  return useSocket(store);
}
