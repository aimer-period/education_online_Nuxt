import request from '@/utils/request'

const API = '/eduservice/CourseFront'
export default {
  // 分页查询课程
  getCourseList(page,limit,obj) {
    return request({
      url: `${API}/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: obj
    })
  },
  // 获得所有课程分类
  getAllSubject() {
    return request({
      url: `/eduservice/subject`,
      method: 'get'
    })
  },
  // 根据id查询信息
  getById(courseId) {
    return request({
      url: `${API}/${courseId}`,
      method: 'get'
    })
  },
  // 根据小节id获取播放链接
  getVideoById(videoId){
    return request({
      url: `/eduservice/video/${videoId}`,
      method: 'get'
    })
  }
}
