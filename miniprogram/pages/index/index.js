//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tags:[],
    list:[{
      id:1
    },{
      id:2
    },{
      id:3
    },{
      id:4
    },{
      id:5
    }],
    left:0,
    now:0
  },
  onLoad: function(options){
    wx.request({
      url:"http://localhost:8080/tags",
      datatype: 'json',
      success: (res)=>{
        this.setData({
          tags:res.data
        })
      }
    })
  },
  fnClick(ev){
    this.setData(
      {
        left: ev.target.offsetLeft,
        now:ev.target.dataset.index
      }
    )
  },
  takePic(){
    wx.navigateTo({
      url: '/pages/take_vedio/vedio',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})
