import request from '../utils/request'

// 接口定义示例
export function demo (data) {
  return request.post('/demo', data)
}
