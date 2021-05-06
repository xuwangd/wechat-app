import server from '../utils/http'
import { removeTokenKey } from '../utils/storage'
// 登录授权
export function userAuth(data = {}) {
  return server({
    url: '/wechat_user/authorization',
    method: 'post',
    data
  })
}
// 获取Token令牌
export function getToken(data = {}) {
  return server({
    url: '/wechat_user/getToken',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getUserInfo() {
  return server({
    url: '/wechat_user/getUserInfo',
    method: 'post'
  })
}
// 登出
export async function logout () {
  return new Promise((resolve,reject)=>{
    removeTokenKey()
    resolve()
  })
}