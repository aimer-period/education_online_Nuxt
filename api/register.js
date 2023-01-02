import request from '@/utils/request'

const API_Center = "/educenter/ucenter"
const API_SMS = "/edusms/sms"
export default {
  //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: API_SMS+`/send/${phone}`,
      method: 'get'
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: API_Center+`/register`,
      method: 'post',
      data: formItem
    })
  }

}
