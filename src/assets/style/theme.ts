import { ConfigProvider } from 'ant-design-vue';

export const themeConfig: any = () => {
  return ConfigProvider.config({
    theme: {
      primaryColor: '#0B63E1',
      errorColor: '#E13C39',
      warningColor: '#F3921B',
      successColor: '#32B772'
      // infoColor: 'yellow'
    }
  });
};
