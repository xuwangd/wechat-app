// pages/experience-course/experience-course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        label: '语文课A'
      },
      {
        id: 2,
        label: '数学课B'
      },
      {
        id: 3,
        label: '数学课C'
      },
      {
        id: 4,
        label: '数学课D'
      },
      {
        id: 5,
        label: '数学课E'
      },
      {
        id: 6,
        label: '数学课F'
      },
      {
        id: 7,
        label: '数学课G'
      },
      {
        id: 8,
        label: '数学课H'
      }

    ],
    tabIndex: 0,
    hotList:[
      '../../assets/temp/index-banner.png',
      '../../assets/temp/index-banner.png',
    ]
  },
   // tab
   handlerTabChange (ev) {
    const index = ev.currentTarget.dataset.index
    this.setData({
      tabIndex: index
    })
  },
  // swiper
  handlerSwiperChange (ev) {
    const current = ev.detail.current
    this.setData({
      tabIndex: current
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