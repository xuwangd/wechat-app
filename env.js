/**
 * api url
 * base url
 */
const ENV = 'production'
const ENV_API_URL = {
  development: 'http://192.168.8.246:7083/wechat-api',
  production: 'http://192.168.8.246:7083/wechat-api'
}
const ENV_BASE_URL = {
  development: 'http://192.168.8.246:7083',
  production: 'http://192.168.8.246:7083'
}
export const API_URL = ENV_API_URL[ENV]
export const BASE_URL = ENV_BASE_URL[ENV]
/**
 * storage key
 * 本地存储数据名称
 */
 export const USER_INFO_KEY = "JIA_YOU_ZHAN_USER_INFO"
 export const TOKEN = "JIA_YOU_ZHAN_TOKEN"