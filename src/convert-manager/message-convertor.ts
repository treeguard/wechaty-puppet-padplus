import { PadplusMessagePayload, GrpcResponseMessageData, MiniProgramParamsPayload } from '../schemas/model-message'

import {
  PadplusMessageType,
  GrpcMessagePayload,
} from '../schemas'
import { MiniProgramPayload } from 'wechaty-puppet'

export async function convertMessageFromGrpcToPadplus (rawMessage: GrpcMessagePayload): Promise<PadplusMessagePayload> {
  const messagePayload: PadplusMessagePayload = {
    appMsgType: rawMessage.AppMsgType,
    content: rawMessage.Content,
    createTime: rawMessage.CreateTime,
    fileName: rawMessage.FileName || rawMessage.fileName,
    fromMemberNickName: rawMessage.FromMemberNickName,
    fromMemberUserName: rawMessage.FromMemberUserName,
    fromUserName: rawMessage.FromUserName,
    imgBuf: rawMessage.ImgBuf,
    imgStatus: rawMessage.ImgStatus,
    l1MsgType: rawMessage.L1MsgType,
    msgId: rawMessage.MsgId,
    msgSource: rawMessage.MsgSource,
    msgSourceCd: rawMessage.msgSourceCd,
    msgType: rawMessage.MsgType as PadplusMessageType,
    newMsgId: rawMessage.NewMsgId,
    pushContent: rawMessage.PushContent,
    status: rawMessage.Status,
    toUserName: rawMessage.ToUserName,
    uin: rawMessage.Uin,
    url: rawMessage.Url,
    wechatUserName: rawMessage.wechatUserName,
  }
  return messagePayload
}

export function convertMiniProgramPayloadToParams (miniProgramPayload: MiniProgramPayload): MiniProgramParamsPayload {
  const content: MiniProgramParamsPayload = {
    aeskey: miniProgramPayload.thumbKey || '',
    appid: miniProgramPayload.appid || '',
    cdnthumbaeskey: miniProgramPayload.thumbKey || '',
    cdnthumbheight: 0,
    cdnthumblength: 0,
    cdnthumburl: miniProgramPayload.thumbUrl || '',
    cdnthumbwidth: 0,
    description: miniProgramPayload.description || '',
    pagepath: miniProgramPayload.pagePath || '',
    sourcedisplayname: miniProgramPayload.title || '',
    sourceusername: miniProgramPayload.username || '',
    title: miniProgramPayload.title || '',
    type: 33,
    url: `https://mp.weixin.qq.com/mp/waerrpage?appid=${miniProgramPayload.appid}&type=upgrade&upgradetype=3#wechat_redirect`,
    username: miniProgramPayload.username || '',
    version: '1',
    weappiconurl: '',
  }
  return content
}

export function convertMiniProgramPayloadToMessage (selfId: string, conversationId: string, source: string, content: MiniProgramParamsPayload, miniProgramData: GrpcResponseMessageData): PadplusMessagePayload {
  // const xml = `<?xml version="1.0"?>\n<msg>\n\t<appmsg appid="" sdkver="0">\n\t\t<title>${content.title}</title>\n\t\t<des>${content.description}</des>\n\t\t<action>view</action>\n\t\t<type>${content.type}</type>\n\t\t<showtype>0</showtype>\n\t\t<soundtype>0</soundtype>\n\t\t<mediatagname />\n\t\t<messageext />\n\t\t<messageaction />\n\t\t<content />\n\t\t<contentattr>0</contentattr>\n\t\t<url>https://mp.weixin.qq.com/mp/waerrpage?appid=${content.appid}&amp;type=upgrade&amp;upgradetype=3#wechat_redirect</url>\n\t\t<lowurl />\n\t\t<dataurl />\n\t\t<lowdataurl />\n\t\t<songalbumurl />\n\t\t<songlyric />\n\t\t<appattach>\n\t\t\t<totallen>0</totallen>\n\t\t\t<attachid />\n\t\t\t<emoticonmd5></emoticonmd5>\n\t\t\t<fileext />\n\t\t\t<cdnthumburl>${content.cdnthumburl}</cdnthumburl>\n\t\t\t<cdnthumbmd5></cdnthumbmd5>\n\t\t\t<cdnthumblength>${content.cdnthumblength}</cdnthumblength>\n\t\t\t<cdnthumbwidth>${content.cdnthumbwidth}</cdnthumbwidth>\n\t\t\t<cdnthumbheight>${content.cdnthumbwidth}</cdnthumbheight>\n\t\t\t<cdnthumbaeskey>${content.cdnthumbaeskey}</cdnthumbaeskey>\n\t\t\t<aeskey>${content.aeskey}</aeskey>\n\t\t\t<encryver>0</encryver>\n\t\t\t<filekey>wxid_orp7dihe2pm112199_1587623589</filekey>\n\t\t</appattach>\n\t\t<extinfo />\n\t\t<sourceusername>${content.username}</sourceusername>\n\t\t<sourcedisplayname>${content.title}</sourcedisplayname>\n\t\t<thumburl />\n\t\t<md5 />\n\t\t<statextstr />\n\t\t<directshare>0</directshare>\n\t\t<weappinfo>\n\t\t\t<username><![CDATA[${content.username}]]></username>\n\t\t\t<appid><![CDATA[${content.appid}]]></appid>\n\t\t\t<type>0</type>\n\t\t\t<version>${content.version}</version>\n\t\t\t<weappiconurl><![CDATA[]]></weappiconurl>\n\t\t\t<pagepath><![CDATA[${content.pagepath}]]></pagepath>\n\t\t\t<appservicetype>0</appservicetype>\n\t\t\t<tradingguaranteeflag>0</tradingguaranteeflag>\n\t\t</weappinfo>\n\t</appmsg>\n\t<fromusername>${selfId}</fromusername>\n\t<scene>0</scene>\n\t<appinfo>\n\t\t<version>1</version>\n\t\t<appname />\n\t</appinfo>\n\t<commenturl />\n</msg>\n`

  const xml = `<?xml version=\"1.0\"?>\n<msg>\n\t<appmsg appid=\"\" sdkver=\"0\">\n\t\t<title>便捷的智能租房平台</title>\n\t\t<des>北美找房</des>\n\t\t<action />\n\t\t<type>33</type>\n\t\t<showtype>0</showtype>\n\t\t<soundtype>0</soundtype>\n\t\t<mediatagname />\n\t\t<messageext />\n\t\t<messageaction />\n\t\t<content />\n\t\t<contentattr>0</contentattr>\n\t\t<url>https://mp.weixin.qq.com/mp/waerrpage?appid=wxd50d30590ca571ec&amp;type=upgrade&amp;upgradetype=3#wechat_redirect</url>\n\t\t<lowurl />\n\t\t<dataurl />\n\t\t<lowdataurl />\n\t\t<songalbumurl />\n\t\t<songlyric />\n\t\t<appattach>\n\t\t\t<totallen>0</totallen>\n\t\t\t<attachid />\n\t\t\t<emoticonmd5></emoticonmd5>\n\t\t\t<fileext />\n\t\t\t<cdnthumburl>30570201000450304e02010002048dccba1802030f5e94020455e0333102045ec852530429777875706c6f61645f777869645f75646a727232393666636d76313238315f313539303138363537390204010c00030201000400</cdnthumburl>\n\t\t\t<cdnthumbmd5>1c0b0fa8e628b7d9bf9d6d93a378881c</cdnthumbmd5>\n\t\t\t<cdnthumblength>86460</cdnthumblength>\n\t\t\t<cdnthumbwidth>720</cdnthumbwidth>\n\t\t\t<cdnthumbheight>576</cdnthumbheight>\n\t\t\t<cdnthumbaeskey>5ce9e374de1a84d5ee7f192acafccb12</cdnthumbaeskey>\n\t\t\t<aeskey>5ce9e374de1a84d5ee7f192acafccb12</aeskey>\n\t\t\t<encryver>0</encryver>\n\t\t\t<filekey>wxid_udjrr296fcmv1226_1590210674</filekey>\n\t\t</appattach>\n\t\t<extinfo />\n\t\t<sourceusername>gh_928ff9a77d7b@app</sourceusername>\n\t\t<sourcedisplayname>北美找房</sourcedisplayname>\n\t\t<thumburl />\n\t\t<md5 />\n\t\t<statextstr />\n\t\t<directshare>0</directshare>\n\t\t<weappinfo>\n\t\t\t<username><![CDATA[gh_928ff9a77d7b@app]]></username>\n\t\t\t<appid><![CDATA[wxd50d30590ca571ec]]></appid>\n\t\t\t<type>2</type>\n\t\t\t<version>18</version>\n\t\t\t<weappiconurl><![CDATA[http://mmbiz.qpic.cn/mmbiz_png/4cbFekJqly532MUIg9Zicfj18qJAP7wtfAZ2UeGgRnRZPsdSwia3X92GqOcMzuVZKVsWJopa9AfichrhtZ3jW07iag/640?wx_fmt=png&wxfrom=200]]></weappiconurl>\n\t\t\t<pagepath><![CDATA[pages/index/index.html?showList=true]]></pagepath>\n\t\t\t<shareId><![CDATA[0_wxd50d30590ca571ec_9c894250ebcc5c34e2db6cc1bcf696b3_1589828304_0]]></shareId>\n\t\t\t<appservicetype>0</appservicetype>\n\t\t\t<tradingguaranteeflag>0</tradingguaranteeflag>\n\t\t</weappinfo>\n\t</appmsg>\n\t<fromusername>sam715768</fromusername>\n\t<scene>0</scene>\n\t<appinfo>\n\t\t<version>1</version>\n\t\t<appname />\n\t</appinfo>\n\t<commenturl />\n</msg>\n`

  const msgPayload: PadplusMessagePayload = {
    content: xml,
    createTime: miniProgramData.timestamp,
    fromUserName: selfId,
    imgStatus: 0,
    l1MsgType: 0,
    msgId: miniProgramData.msgId,
    msgSource: source,
    msgSourceCd: 0,
    msgType: PadplusMessageType.App,
    newMsgId: Number(miniProgramData.msgId),
    pushContent: JSON.stringify(content),
    status: 1,
    toUserName: conversationId,
    uin: '',
    wechatUserName: '',
  }
  return msgPayload
}
