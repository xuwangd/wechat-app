// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    queryParams:{
      courseName:""
    },
    bannerList: ['../../assets/temp/index-banner.png'],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    navList:[
      {
        icon:'../../assets/temp/xsms.png',
        text:'活动'
      },
      {
        icon:'../../assets/temp/sjqc.png',
        text:'主办方'
      },
      {
        icon:'../../assets/temp/yhq.png',
        text:'我的课程'
      },
      {
        icon:'../../assets/temp/spfl.png',
        text:'家校互动'
      },
    ],
    hotList:[
      '../../assets/temp/index-banner.png',
      '../../assets/temp/index-banner.png',
    ],
    activityList:['../../assets/temp/yhq-1.png'],
  },
  // 初始化
  initData(){

  },
  // 清空
  handlerClear(ev){
    this.setData({
      "queryParams.courseName": ""
    })
    console.log('handlerClear', ev, '-=-=-=-=-=-')
  },
  // input
  handlerInput(ev){
    this.setData({
      "queryParams.courseName": ev.detail.value
    })
    console.log('handlerInput', ev, '-=-=-=-=-=-')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
