let CONFIG = getApp().globalData.CONFIG
Page({
  data: {
    user: false,
  },
  onLoad() {
    wx.login({
      success: (res1) => { // 获取code
        wx.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=${CONFIG.appid}&secret=${CONFIG.secret}&js_code=${res1.code}&grant_type=authorization_code`,
          success: (res) => { // 获取openid
            console.log('用户私人信息:', res)
          }
        })
      }
    })
    this.setData({
      user: wx.getStorageSync('user') || false
    })
  },
  async isLoginBefore() {
    let _this = this
    wx.getStorage({
      key: 'user',
      success(res) {
        _this.setData({
          user: res.data
        })
      }
    })
  },
  /**
   * 获取用户权限，内容包括头像和名字
   */
  // usingInfo
  onUserInfo(e) {
    console.log('监听获取用户基本信息：', e)
    // console.log(e.detail.userInfo)
    this.setData({
      user: e.detail.userInfo
    })
    wx.setStorage({
      data: e.detail.userInfo,
      key: 'user',
    })
  },
})