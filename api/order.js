import request from '@/utils/request'

const API = '/eduorder/order'
export default {
  // 生成订单
  createOrder(courseId) {
    return request({
      url: `${API}/createOrder/${courseId}`,
      method: 'post',
    })
  },
  // 根据id查询订单
  getOrderInfo(id) {
    return request({
      url: `${API}/getOrderInfo/${id}`,
      method: 'get',
    })
  },
  // 生成支付二维码
  createNative(orderNo){
    return request({
      url:`/eduorder/paylog/createNative/${orderNo}`,
      method: 'get',
    })
  },
  // 查询支付状态
  queryPayStatus(orderNo) {
    return request({
      url:`/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'get',
    })
  }

}
