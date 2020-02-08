Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    currentIndexNav:0,
    swiperList:[],
    videosList:[]
    
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  getSwiperList(){
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success:function(res){
        if(res.data.code===0){
          that.setData({
            swiperList: res.data.data.swiperList
          })
          console.log(that.data.swiperList)
        }
      }
    })

  },
  getVideoList(){
    var that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/VideosList',
      success:function(res){
        if(res.data.code===0){
          that.setData({
            videosList: res.data.data.videosList
          })
         console.log(that.data.videosList)
        }
      }
    })
  },
  getNavlist(){
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
    success:function(res){
      if(res.data.code===0){
        that.setData({
          navList: res.data.data.navList
        }
        )
      }
    }
    }
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavlist();
    this.getSwiperList();
    this.getVideoList();
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