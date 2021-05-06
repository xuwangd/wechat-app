import Router from './router'
import { getUserInfoKey } from '../utils/storage'
import { queryStringify } from '../utils/util'
import { setTokenKey } from '../utils/storage'
import { userAuth, getToken, getUserInfo } from '../api/login'
import { wxLogin, wxGetUserInfo } from '../api/wx-api'

const router = new Router([
  {
    "path": "/pages/index/index",
    "meta": {
    }
  },
  {
    "path": "/pages/open-AD/open-AD",
    "meta": {
    }
  }
])

router.beforeEach((to, from, next) => {
  const { meta } = to
  // 该页面是否需要授权登录
  if (meta && meta.auth) {
    const token = getTokenKey()
    // 用户已经授权
    if (token) {
      next()
    } else {
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
          // 
          next()
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
  } else {
    next()
  }
})


export default router