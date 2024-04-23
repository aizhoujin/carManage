export interface IResData {
  code: number;
  message: string;
  result: any;
  success: boolean;
  timestamp: string;
}

export enum statusTypeEnum {
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  primary = 'primary'
}
export interface IMetaInfo {
  icon: string;
  title: string;
  resourceCode: string;
  isHiden?: boolean;
}
export interface IMenuInfo {
  path: string;
  meta: IMetaInfo;
  children?: IMenuInfo[];
}
