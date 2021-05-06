// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
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
    activityList:['../../assets/temp/yhq-1.png'],
    navList:[
      {
        icon:'../../assets/temp/xsms.png',
        text:'限时秒杀'
      },
      {
        icon:'../../assets/temp/sjqc.png',
        text:'商家清仓'
      },
      {
        icon:'../../assets/temp/yhq.png',
        text:'优惠券'
      },
      {
        icon:'../../assets/temp/spfl.png',
        text:'商品分类'
      },
    ],
    hotList:[
      '../../assets/temp/index-banner.png',
      '../../assets/temp/index-banner.png',
    ]
  },
  // 初始化
  initData(){

  },
  // 清空
  handlerClear(ev){
    this.setData({
      "queryParams.courseName": ""
    })
  },
  // input
  handlerInput(ev){
    this.setData({
      "queryParams.courseName": ev.detail.value
    })
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