/**
 * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识
 *（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登* 录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 小程
 * 序登录。
 * 
 * 在小程序插件中使用时，需要在用户信息功能页中获得用户授权之后调用。否则将返回 fail。详见 用户信息
 * 功能页
 * @returns 
 */
 export function wxLogin () {
  return new Promise((resolve, reject) => {
    wx.login({
      success (res) {
        if (res.code) {
          resolve(res)
        } else {
          // 登录失败！
          reject(res.errMsg)
        }
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
/**
 * 检查登录态是否过期。 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，
 * 用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微
 * 信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。
 * 
 * 登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。调用成功说明当前 session_key 未过期，* 调用失败说明 session_key 已过期。更多使用方法详见 小程序登录。
 * @returns 
 */
export function wxCheckSession () {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success () {
        // session_key 未过期，并且在本生命周期一直有效
        resolve()
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        reject()
      }
    })
  })
}
/**
 * 获取用户信息
 * 是否带上登录态信息。
 * 当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时 
 * 返回的数据会包含 encryptedData, iv 等敏感信息；
 * 当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含encryptedData, 
 * iv 等敏感信息。
 */
export function wxGetUserInfo ({ withCredentials = true } = {}) {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      withCredentials,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}