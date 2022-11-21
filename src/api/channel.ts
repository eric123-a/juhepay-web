import request from '@/utils/request'
import { UserModule } from '@/store/modules/user'

//商户配置实际支付参数
export const setParams = (data: any) =>
  request({
    url: `/merchant/my/pay-channel-params?tenantId=${UserModule.tenantId}`,
    method: 'post',
    data: {
      appId: data.appId,
      channelName: data.channelName,
      param: "{\"appID\": \"2021000121688254\",\"rsaPrivateKey\": \"MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC92Xt3AmB7KQFb+jI5Tc8WlUU9E7sl4OJBLLqpFbafdWWFIp7nhDw5PqCJOdQsW/CYDq4TyAziRZKpHXstxZIZMnIpHi4y6jo5cLCV4r6b0mYrvtI4sbYsux8yvna7Qcp8/VBr5Lh10i2pJpAKHZif7ezT1jkvF0AHweOhx0KvlNL84JVIC+P0gUZ62pRYsaL1QubDX3VjRKmxPpnFF2LcD+CO/cxWTHw7mj/rNdIIYM+O2cnF7/K5t0jINtFL3U0D7Q9P40hLxhpGWbcOwuuowkCOX5jE26ByHmnIR141r/MZKq4XdzYP3Bscm0RsgLtVdKamgXyDCtwCkCFYvdkVAgMBAAECggEBAKEpiCfk+qZSjvbXk98VcGEJYneQ0mQ7XZZaNDLpXdhLvlygoSiEFuO5iGo1jyoA+mL6w0fDoTxMN04c2r5mY7nEGylQl4NdVwP/58e1bn20xEsKeEbshWu/haJ8ESqxlQU5vRV6WiSawWxAcjJEIZZSUaMazfxtzktHiseA8dk+EQygoyBdWaX2+6/GCUuTcOQb4bB9uQ4dbp5MTd/sEggYf0PiYOV/uTRb9TVaDLCIp6JS/xhnG28hHrfpG8ok3faQnHNbgiy3be98JmQ1nc/yfoyXUQ09s1kgSK02E2wFfkvvmebuFQZJYLTMyShsU64pKSQtcg8zvQsKwV1kUhkCgYEA/sq3hDzqSt28GD1LRY0I0J9Aq6XsaK6ANQJKSFU5btqV3w9t6qRiCLHf9uuTgXIz64pvr5IMTu54NwhsaeKearsJ5mJaVO+vWxioYB3dI+8e3GCG1Cudxxeq9MlwlaXSxAKwqxbzH2Zwo5eeskgXMkmJTaWHB2RmBDo/kbwiaH8CgYEAvr/vJNy1huzkxrGoMBPj9T67Ev9XApoao3kFQDeU6Ls36a3dLur/zI7sCeDaeKm8GQ8RknYMdxD04nWbI4FtmQ8btSnVT2OEev09D2nhWB9Px5zRNGmc0kNheanpAv3MhA11SDl96dwgYloMN1b+jMfeUcX3SmMdfkCGeGat1GsCgYBcuxLHghQTY1gNymEW0xmeNBepYR4Fi10F7etzH/FjMxLQuCDdAS7c00Ab8ekhd5sF4sB7OcBZCdmezeYHM39MgP49ZxZRS1qa4QKG2NefOGwW8NqhZa5qw2Zo6Nec31kyFXiPDC84AmSEZa5QXIR0vObH57KZMiUe7MQuGja7qQKBgQCgqEulQndp4tB1QWCkzbvr7R/nSkRgnqbdFKsFgUrcEgNvv85RHADCq4XGdCnOAze362cjcmXhStjWe7Nk3jgO+BigJ1HQAcOtSulIuCbh781kFIJnoKRCvBm3PRJSQK0mc6daY4HXnF1yOOGdIppWvGhVe2Vis8Q9d99KPUEfbQKBgQDiSKSIqvRgQ2bwwmWeFfNn916srBBu1XnpCU/tJiZPlxqAJtkL5nONMAd8N5A4sLBuWpg+xMG+NGq2Vge7Jvh2X1A5FsDxGUAnygUoj3+RUyyvRcyLfYg58Ygcggywa/vvNipRf9Fi2EUvTip/q556PaJpweFp6GWeGDYJgdXd7Q==\",\"alipayPublicKey\":\"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvdl7dwJgeykBW/oyOU3PFpVFPRO7JeDiQSy6qRW2n3VlhSKe54Q8OT6giTnULFvwmA6uE8gM4kWSqR17LcWSGTJyKR4uMuo6OXCwleK+m9JmK77SOLG2LLsfMr52u0HKfP1Qa+S4ddItqSaQCh2Yn+3s09Y5LxdAB8HjocdCr5TS/OCVSAvj9IFGetqUWLGi9ULmw191Y0SpsT6ZxRdi3A/gjv3MVkx8O5o/6zXSCGDPjtnJxe/yubdIyDbRS91NA+0PT+NIS8YaRlm3DsLrqMJAjl+YxNugch5pyEdeNa/zGSquF3c2D9wbHJtEbIC7VXSmpoF8gwrcApAhWL3ZFQIDAQAB\",\"url\": \"https://openapi.alipaydev.com/gateway.do\",\"format\": \"json\",\"signtype\": \"RSA2\",\"returnUrl\": \"a\",\"notifyUrl\": \"a\"}",
      payChannel: 'alipay_wap',
      platformChannelCode: 'alipay_wap'
    }
  })

//获取所有平台支付渠道
export const getAllPayChannel = () =>
  request({
    url: `/merchant/my/platform-channels?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })

//修改商户配置实际支付参数
export const updateRealPayParam = (data: any) =>
  request({
    url: `/merchant/my/pay-channel-params?tenantId=${UserModule.tenantId}`,
    method: 'put',
    data
  })

//获取某应用下平台支付渠道所包含的原始支付参数列表
export const getPayChannelIncludePayParams = (appId: any, platformChannel: any) =>
  request({
    url: `/merchant/my/pay-channel-params/apps/${appId}/platform-channels/${platformChannel}?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })


//获取某应用下平台支付渠道所包含的某个原始支付参数
export const getPayChannelIncludeOnlyPayParams = (appId: any, platformChannel: any, payChannel: any) =>
  request({
    url: `/merchant/my/pay-channel-params/apps/${appId}/platform-channels/${platformChannel}/pay-channels/${payChannel}?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })

//获取商户配置实际支付参数,用于快捷复制填写参数
export const getRealPayParamsUseCopy = (merchantId: any, payChannel: any) =>
  request({
    url: `/merchant/my/pay-channel-params/merchants/${merchantId}/pay-channels/${payChannel}?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })

//获取商户配置实际支付参数
export const getRealPayParams = (id: any) =>
  request({
    url: `/merchant/my/pay-channel-params/${id}?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })

//根据平台支付渠道(编码)获取原始支付渠道
export const getPayChannelFromPayCode = (platformChannelCode: any) =>
  request({
    url: `/merchant/my/pay-channels/platform-channel/${platformChannelCode}?tenantId=${UserModule.tenantId}`,
    method: 'get'
  })