import server from '../utils/http'

export function userAuth(data = {}) {
  return server({
    url: '/wechat_user/authorization',
    data
  })
}