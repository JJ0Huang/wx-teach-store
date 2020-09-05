Page({
  data: {
    activeKey: 0,
  },
  onShow() {
    let index = wx.getStorageSync('sortIndex')
    this.setData({
      activeKey: index
    })
  },
  onHide() {
    wx.removeStorageSync('sortIndex')
  },
  /**
   * onBarChange
   * 监听导航栏的变化
   */
  onBarChange(e) {
    console.log(e.detail)
    this.setData({
      activeKey: e.detail
    })
  }
})