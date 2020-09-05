Page({
  // try {
  //   wx.setStorageSync('key', 'value')
  // } catch (e) { }

  onLoad() {},
  data: {
    orderArray: [{
        userName: 'boom',
        good: '笔记本电脑'
      },
      {
        userName: 'ck',
        good: '护手霜'
      },
      {
        userName: '客户N',
        good: '技嘉 B365 小雕主板'
      }
    ]
  },
  navToSortPage(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    wx.setStorageSync('sortIndex', index)
    wx.switchTab({
      url: '../category/category',
    })
  }
})