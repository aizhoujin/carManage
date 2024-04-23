import { message } from 'ant-design-vue';

export const requestHeaderRule = (record: any, value: any, key: any) => {
  let title;
  if (key === '1') {
    title = 'header';
  } else {
    title = 'body';
  }
  const reg = /^[0-9A-Za-z-_]{1,}$/;
  if (!value && record.value) {
    message.error(`${title}的名称不能为空`);
    // val.length = 0;
    record.inputFlag = true;
    return false;
  } else if (value?.length > 150) {
    message.error(`${title}的名称不能超过150字符`);
    record.inputFlag = true;
    return false;
  } else if (value && !reg.test(value)) {
    message.error(`${title}的名称只能包含“-”、“_”、字母和数字`);
    record.inputFlag = true;
    return false;
  } else {
    //ok
    record.inputFlag = false;
    return true;
  }
};
