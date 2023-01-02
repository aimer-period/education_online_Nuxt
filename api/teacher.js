import request from '@/utils/request'

export default {
  //查询讲师信息方法
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //根据讲师id查询详情
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacherFront/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }
}
