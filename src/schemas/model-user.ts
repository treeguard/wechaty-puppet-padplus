import { QrcodeStatus, LoginStatus } from './padplus-enums'

export interface PadplusQrcode {
  qrcodeId: string,
  qrcode: string,
}

export interface PadplusQrcodeStatus {
  headUrl: string,
  userName: string,
  nickName: string,
  status: QrcodeStatus,
}

export interface PadplusQrcodeLogin {
  headImgUrl: string,
  nickName: string,
  status: LoginStatus,
  uin: string,
  userName: string,
  verifyFlag: string,
}

export interface ScanData {
  msg: string,
  loginer: string,
  head_url: string,
  user_name: string,
  nick_name: string,
  event: string,
  qrcodeId: string,
  serverId: string,
  status: number,
}