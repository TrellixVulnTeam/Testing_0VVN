// pages/yemian1/yemian1.js
wx.navigateToMiniProgram({
  appId: 'wx7643d5f831302ab0',  //appid
  path: 'http://map.qq.com/',//path
  extraData: {  //参数
    foo: 'bar'
  },
  envVersion: 'develop', //开发版develop 开发版 trial   体验版 release 正式版 
  success(res) {
    console.log('成功')
    // 打开成功
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})