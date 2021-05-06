import dov from './dov.min'
import {
  API_URL
} from '../env'
import { getTokenKey,setTokenKey } from '../utils/storage'
import { logout, userAuth, getToken, getUserInfo } from '../api/login'
import { wxLogin, wxGetUserInfo } from '../api/wx-api'

const server = dov.create({
  baseURL: API_URL,
  timeout: 60000,
  header: {
    'Content-Type': "application/x-www-form-urlencoded",
  },
})

/**
 * 请求拦截
 */
server.interceptors.request.use(function (config) {
  const token = getTokenKey()
  if (token) {
    config.header['token'] = token
  }
  console.log('请求拦截器=>成功回调')
  return config
},function(error){
  console.log('请求拦截器=>失败回调', error)
  return Promise.reject(error)
})
/**
 * 响应拦截
 */
server.interceptors.response.use(function (response) {
  console.log('响应拦截器=>成功回调')
  /**
   * SUCCESS(10000, "成功"),
   * HTTP_CODE_401(401, "认证失败"),
   * HTTP_CODE_404(404, "接口地址不存在"),
   * PARAMETER_ERROR(1001, "参数验证错误"),
   * PARAM_NULL(1002, "参数为空"),
   * SYSTEM_ERROR(1003, "系统异常"),
   * TOKEN_ERROR(1004, "token验证失败"),
   * ACCOUNT_ABNORMALITY(1005, "账户已锁定，请找管理员或技术支持解锁"),
   * DATA_CHECK_ERROR(1007, "业务数据验证不通过"),
   * USER_NOT_EXISTS_ERROR(1006, "账号不存在"),
   * CALL_INTERFACE_ERROR(1008, "第三方接口调用异常"),
   * DELETE_ERROR(1009, "删除失败"),
   * UPDATE_ERROR(1010, "修改失败"),
   * INSERT_ERROR(1011, "添加失败"),
   * SQL_ERROR(1012, "SQL执行异常"),
   * DATA_REPETITION(1013, "数据重复"),
   * PERMISSION_ERROR(1014, "没有权限"),
   * NOT_LOGIN_ERROR(1015, "用户未登录，请先登录"),
   * LOGIN_ERROR(1016, "账户或者密码错误"),
   * BUSINESS_PROCESSING_FAILURE(1017, "业务处理失败"),
   * LOGIN_PASSWORD_ERROR(1018, "登录密码错误"),
   * NO_ROLE(1019, "用户未分配任何角色"),
   * REPEAT_LOGIN(1020, "您的账号在另一台设备上登录，如非本人操作，请立即修改密码"),
   * TOKEN_INVALIDATION(1021, "token失效");
   */
  const res = response.data || {}
  if (res.code !== 10000) {
    wx.showToast({
      title: res.msg || 'Error',
      icon: 'none',
      duration: 1500
    })
    if(true || res.code === 1015 || res.code === 1004 || res.code === 1021){
        async function login(){
          try{
            wx.showLoading({
              mask:true,
              title: '加载中',
            })
            // 退出登录
            await logout()
            // wx.login获取code
            const res1 = await wxLogin()
            const { code = '' } = res1 || {}
            // 用户授权后获取sessionKey、openid、unionid
            const res2 = await userAuth({ code })
            const { sessionKey = '', openid = '', unionid = '' } = res2.info || {}
            // wx.getUserInfo获取加密信息signature、rawData、encryptedData、iv
            const res3 = await wxGetUserInfo()
            const { signature = '', rawData = '', encryptedData = '', iv = '' } = res3 || {}
            // 获取用户token并存到本地
            const res4 = await getToken({
              sessionKey,//	true	string	No comments found.
              openid,//	true	string	微信openid
              unionid,//	true	string	微信unionid
              signature,//	true	string	数据签名
              rawData,//	true	string	微信用户基本信息
              encryptedData,//	true	string	消息密文
              iv,//	true	string	加密算法的初始向量
            })
            const token = res4.info || ''
            setTokenKey(token)
            // 获取用户信息存到全局
            const res5 = await getUserInfo()
            getApp().globalData.userInfo = res5.info || {}
          }catch(err){
            wx.showModal({
              content: '网络出错',
              success (res) {
                if (res.confirm) {
                  // 用户点击确定
                  login()
                } else if (res.cancel) {
                  // 用户点击取消
                }
              }
            })
          }
          wx.hideLoading()
        }
        login()
    }
    return Promise.reject(new Error(res.msg || 'Error'))
  } else {
    return res
  }
}, (error) => {
  wx.showToast({
    title: `网络出错，请稍后再试`,
    icon: 'none',
    duration: 1500
  })
  console.log('响应拦截器=>失败回调')
  return Promise.reject(error)
})

export default server