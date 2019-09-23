// pages/take_vedio/vedio.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },
  fnTake(){
    let cc=wx.createCameraContext(this);
    cc.takePhoto({
      success(res){
        wx.uploadFile({
          url: 'http://localhost:8080/uploadPic',
          filePath: res.tempImagePath,
          name: 'f1',
          success(){
            console.log("success");
          },
          fail(){
            console.log("fail");
          }
        })
      },
      fail(res){
        console.log(res);
      }
    })
  },  /**
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