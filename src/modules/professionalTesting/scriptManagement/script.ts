import { ref } from 'vue';
const requestHeaderOptions = [
  {
    value: 'Accept',
    label: 'Accept'
  },
  {
    value: 'Accept-Charset',
    label: 'Accept-Charset'
  },
  {
    value: 'Accept-Encoding',
    label: 'Accept-Encoding'
  },
  {
    value: 'Accept-Language',
    label: 'Accept-Language'
  },
  {
    value: 'Accept-Ranges',
    label: 'Accept-Ranges'
  },
  {
    value: 'Authonrization',
    label: 'Authonrization'
  },
  {
    value: 'Cache-Control',
    label: 'Cache-Control'
  },
  {
    value: 'Connection',
    label: 'Connection'
  },
  {
    value: 'Cookie',
    label: 'Cookie'
  },
  {
    value: 'Content-Length',
    label: 'Content-Length'
  },
  {
    value: 'Date',
    label: 'Date'
  },
  {
    value: 'Expect',
    label: 'Expect'
  },
  {
    value: 'From',
    label: 'From'
  },
  {
    value: 'Host',
    label: 'Host'
  },
  {
    value: 'lf-Match',
    label: 'lf-Match'
  },
  {
    value: 'If-Modified-Since',
    label: 'If-Modified-Since'
  },
  {
    value: 'If-None-Mach',
    label: 'If-None-Mach'
  },
  {
    value: 'lf-Range',
    label: 'lf-Range'
  },
  {
    value: 'If-Unmodified-Since',
    label: 'If-Unmodified-Since'
  },
  {
    value: 'Max-Forwards',
    label: 'Max-Forwards'
  },
  {
    value: 'Pragma',
    label: 'Pragma'
  },
  {
    value: 'Proxy-Authorization',
    label: 'Proxy-Authorization'
  },
  {
    value: 'Range',
    label: 'Range'
  },
  {
    value: 'Referer',
    label: 'Referer'
  },
  {
    value: 'TE',
    label: 'TE'
  },
  {
    value: 'Upgrade',
    label: 'Upgrade'
  },
  {
    value: 'User-Agent',
    label: 'User-Agent'
  },
  {
    value: 'Via',
    label: 'Via'
  },
  {
    value: 'Waring',
    label: 'Waring'
  }
];
//请求头table
const requestHeaderKeyColumns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle', customRender: 'name' },
    width: '35%'
  },
  {
    dataIndex: 'value',
    key: 'value',
    slots: { title: 'customValue', customRender: 'value' },
    width: '35%'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    slots: { customRender: 'action' },
    align: 'center'
  }
];
const requestHeaderDataSource = ref([
  {
    name: undefined,
    value: null,
    inputFlag: false
  }
]);
const requestBodyDataSource = ref([
  {
    name: undefined,
    value: null,
    inputFlag: false
  }
]);
const responseTableDataSource = ref([
  // {
  //   name: undefined,
  //   value: null,
  //   inputFlag: false,
  // },
]);
//响应信息table
const responseTableColumns = [
  {
    title: '键名',
    dataIndex: 'name',
    key: 'name',
    width: '30%'
  },
  {
    title: '键值',
    dataIndex: 'value',
    key: 'value',
    width: '70%'
  }
];
const responseHeaderDataSource = ref([]);
const responseBodyDataSource = ref([]);
export {
  requestHeaderOptions,
  requestHeaderKeyColumns,
  responseTableColumns,
  requestHeaderDataSource,
  responseHeaderDataSource,
  responseBodyDataSource,
  requestBodyDataSource,
  responseTableDataSource
};
