const CONFIG = require('../../config.js')
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
    let version = ''
    await wx.getStorage({
      key: 'app_show_pic_version',
    }).then(res => {
      console.log(res.dta)
      version = res.data
    })
    // console.log(version)
    if (version == CONFIG.version) {
      wx.switchTab({
        url: '../index/index',
      })
    }
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
    // console.log(e.detail.current)
    this.setData({
      currentSwiper: e.detail.current
    })
  }
})