// pages/details/details.js
Page({
  /**
   * Page initial data
   */
  data: {
    videoDetails:null,
    otherList:[],
    commentList:[]
  },
  getVideoComments(videoId){
    var that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      success:function(res){
        if(res.data.code===0){
          that.setData({
            commentList: res.data.data.commentData
          })
          console.log(that.data.commentList);          
        }
      }
    })

  },
  getOthersList(videoId){
    var that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      success:function(res){
        if(res.data.code===0){
          console.log(res.data)
          that.setData({
            otherList:res.data.data.othersList
          })
          console.log(that.data.otherList);
        }
      }
    })
  },
  getVideoDetails(videoId){
  var that=this;
  wx.request({
    url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
    success:function(res){
      if(res.data.code===0){
        that.setData({
          videoDetails: res.data.data.videoInfo
        })
      }
    }
  })
},
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options.id);
    this.getVideoDetails(options.id);
    this.getOthersList(options.id);
    this.getVideoComments(options.id);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})