import { USER_INFO_KEY, TOKEN } from '../env'
// 用户信息
export function getUserInfoKey () {
  return wx.getStorageSync(USER_INFO_KEY)
}
export function setUserInfoKey (value) {
  return wx.setStorageSync(USER_INFO_KEY, value)
}
export function removeUserInfoKey () {
  return wx.removeStorageSync(USER_INFO_KEY)
}
// 用户token
export function getTokenKey () {
  return wx.getStorageSync(TOKEN)
}
export function setTokenKey (value) {
  return wx.setStorageSync(TOKEN, value)
}
export function removeTokenKey () {
  return wx.removeStorageSync(TOKEN)
}