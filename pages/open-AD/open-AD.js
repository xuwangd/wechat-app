// pages/open-AD/open-AD.js
import router from '../../router/index'
let timmer = null
const countDown = 10
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDown:countDown
  },
  // 跳转
  handlerJump(){
    clearInterval(timmer)
    router.redirectTo({
      path:'/pages/index/index'
    })
  },
  // 广告 倒计时
  // handlerCountDown(){
    
  // },
  // 初始化
  initData(){
    timmer = setInterval(()=>{
      console.log('??')
      this.setData({
        countDown:this.data.countDown - 1
      })
      if(this.data.countDown <= 0){
        this.handlerJump()
      }
    },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})