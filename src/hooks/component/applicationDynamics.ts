export interface searchvalItem {
  activityName: string | undefined;
  eventName: string | undefined;
  statusValue: number | undefined;
  actCross: boolean;
  eventCross: boolean;
}

export interface modalInfoItem {
  visible: boolean;
  icon: string;
  cancelBtnText: string;
  confirmBtnText: string;
  title: string;
  paragraph: string;
}

// 页数
export interface paginationInfo {
  cardCurrent: number;
  cardTotal: number | undefined;
  listCurrent: number;
  listTotal: number | undefined;
}

// 卡片信息
export interface cardDataItem {
  critical: number;
  delCardFlag: boolean;
  high: number;
  id: number;
  informational: number;
  low: number;
  medium: number;
  name: string;
  recordId: number;
  reportId: number;
  score: number;
  scoreLevel: string;
  startUrl: string;
  submitFlag: boolean;
  agreeFlag: boolean;

  loading?: boolean;
  circleColor?: string;
  bgColor?: string;
}

// 执行记录
export interface dataSourceItem {
  endTime: string;
  executeStatus: number;
  executor: string;
  expendQuota: string;
  name: string;
  recordId: number;
  reportId: number;
  startTime: string;
}
