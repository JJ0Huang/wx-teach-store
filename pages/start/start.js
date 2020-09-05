const CONFIG = require('../../config.js')
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  data: {
    banners: [{
      picUrl: "https://dcdn.it120.cc/2020/01/07/c3183558-55e8-4589-9ea7-81670004941a.jpg"
    }, {
      picUrl: "https://dcdn.it120.cc/2020/01/07/b7471e4f-dc0d-4245-afb7-b64fbd9bb29a.jpg"
    }, {
      picUrl: "https://dcdn.it120.cc/2020/01/07/5425289c-fb82-4ab4-a193-933ddba71496.jpg"
    }],
    currentSwiper: '',
    maxSwiperNum: 3
  },
  // 在页面刚进入的时候执行
  async onLoad() {
    this.openDialog()
    let version = wx.getStorageSync('app_show_pic_version')
    if (version == CONFIG.version) {
      wx.switchTab({
        url: '../index/index',
      })
    }
  },
  openDialog() {
    Dialog.confirm({
        // title: '标题',
        message: '请允许小程序获取您的权限',
      })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
  },
  // 进入页面，进入的时候设置版本号，如果有版本号，执行
  goToIndex() {
    wx.setStorage({
      key: 'app_show_pic_version',
      data: CONFIG.version
    })
    wx.switchTab({
      url: '../index/index',
    })
  },
  swiperchange(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  }
})