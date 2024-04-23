/* vue基础内容 */
import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';

/* css类 */
import 'virtual:windi.css';
import 'ant-design-vue/dist/antd.variable.min.css';
// 引入公共样式
import '@/assets/style/normal.less';

// 引入字体
import '@/assets/fontFamily/font.css';
// 彩色图标使用
import '@/assets/iconfont/iconfont.js';

import Antd from 'ant-design-vue';

/* 全局方法 */
import { slAwait } from '@/utils/util';
import { message } from 'ant-design-vue';

import { themeConfig } from '@/assets/style/theme';

// iconfont
import '@/assets/iconfont/iconfont.ttf';
import '@/assets/iconfont/iconfont.css';

const app = createApp(App);
app.config.globalProperties.slAwait = slAwait;
app.config.globalProperties.message = message;

app.use(store);
app.use(router);
app.use(Antd);
app.use(themeConfig);
app.mount('#app');
