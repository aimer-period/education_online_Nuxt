import request from '@/utils/request'


export default {
  //用户登录
  submitLoginUser(userInfo) {
    return request({
      url: `/educenter/ucenter/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/educenter/ucenter/getMemberInfo`,
      method: 'get'
    })
  }

}
